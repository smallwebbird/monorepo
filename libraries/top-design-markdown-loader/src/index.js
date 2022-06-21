const marked = require("marked");
const path = require('path');
const fs = require('fs');
const parse = require('./parser/index.js');
const yamlFront = require('yaml-front-matter');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generator = require('@babel/generator').default;
const template = require('@babel/template').default;
const core = require('@babel/core');


module.exports = function (source) {
  const _that = this;
  const placeholder = '%%DEMO%%';
  const options = this.options || {};
  this.cacheable && this.cacheable();
  if(options.noCache) {
    this.cacheable(false);
  }
  const meta = yamlFront.loadFront(source);
  const { title, desc, __content } = meta || {};
  const splitSources = source.split(placeholder);
  const apiSource = splitSources[1];
  const header = `
    <>
      <div className="td-document-header-title">${title['zh-cn']}</div>
      <div className="td-document-header-desc">${desc['zh-cn']}</div>
    </>
  `;
  const parsedMdDir = this.context;
  const demosDir = path.join(parsedMdDir, './demos');
  const demos = fs.readdirSync(demosDir);
  let demoMdContent = [];
  demos.forEach(demo => {
    const demoFullPath = path.join(demosDir, demo);
    const stats = fs.statSync(demoFullPath);
    const extname = path.extname(demoFullPath);
    if (!stats.isDirectory() && extname === '.md') {
      // 不是目录，且是markdown文件才会处理
      const demoSource = fs.readFileSync(demoFullPath, 'utf-8');
      const { order } = yamlFront.loadFront(demoSource) || {};
      _that.addDependency(demoFullPath);
      demoMdContent.push({
        order,
        source: demoSource
      })
    }
  });
  demoMdContent = demoMdContent.sort((item1, item2)=> item1.order - item2.order);
  const codeSources = [];
  demoMdContent.forEach(({ source, order }) => {
    if (source) {
      const demoObj = yamlFront.loadFront(source);
      const { title, desc, __content } = demoObj || {};

      const lexer = new marked.Lexer();
      const tokens = lexer.lex(__content);
      const codeTokens = tokens.filter(item => item.type === 'code' && item.lang === 'js');
      codeTokens.forEach(({ text, lang }) => {
        const codeAst = parse(text);
        const encodeCode = encodeURIComponent(text);
        traverse(codeAst, {
          CallExpression(path) {
            const callee = path.node.callee;
            if (callee.object &&
                callee.object.name === 'ReactDOM' &&
                callee.property.name === 'render') {
                const demoElement = path.node.arguments[0];
                const demoElementWrap = types.jsxElement(types.jsxOpeningElement(types.jsxIdentifier('DemoCodePreview'), [
                  types.jSXAttribute(types.jSXIdentifier('title'), types.stringLiteral(title['zh-cn'])),
                  types.jSXAttribute(types.jSXIdentifier('desc'), types.stringLiteral(desc['zh-cn'])),
                  types.jSXAttribute(types.jSXIdentifier('lang'), types.stringLiteral(lang)),
                  types.jSXAttribute(types.jSXIdentifier('highlightCode'), types.stringLiteral(encodeCode)),
                ]),
                types.jsxClosingElement(types.jSXIdentifier('DemoCodePreview')),
                [ demoElement ]);
                const componentVariable = types.variableDeclaration('const', [types.variableDeclarator(types.identifier('__inner'), demoElementWrap)]);
                path.insertBefore(componentVariable);
                path.remove();
            }
          }
        });
        const buildDemo = template(`
          function NAME () {
            SOURCE
            return __inner;
          }
        `);
        const demoSource = core.transformFromAstSync(codeAst, null, {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }).code;
        const demoAst = buildDemo({
          NAME: `Demo${order}`,
          SOURCE: demoSource
        });
        codeSources.push(generator(demoAst).code);
      });
    }
  });

  const buildComponent = template(`
      CODE
      function Component () {
        return React.createElement('div', { className: 'td-document-demos' },${codeSources.map((_, index) => `React.createElement(Demo${index}, { key: ${index} })`).join(',')} )
      }
    `);


  const componentAst = buildComponent({
    CODE: codeSources.join('\n'),
  });

  const commonImportAst = parse(`
    import React from 'react';
    import { DemoCodePreview  } from '@top-design/components';
  `);
  console.log(444993335552233322);
  const returnSource = `
    export default function () {
      return <div className="td-document">
      1233
        <div className="td-document-header">
          ${header}
        </div>

        <Component />
      </div>
    }
  `;
  const ast = parse(returnSource);
  traverse(ast, {
    enter(path) {
      if (
        path.node.type === "ExportDefaultDeclaration"
      ) {
        path.insertBefore(commonImportAst);
        path.insertBefore(componentAst);
      }
    }
  });
  const code = generator(ast).code;
  return code;
};
