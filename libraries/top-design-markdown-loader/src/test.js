const marked = require("marked");
const path = require('path');
const fs = require('fs');
const yamlFront = require('yaml-front-matter');
// const Prism = require('prismjs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const types = require('@babel/types');
const generator = require('@babel/generator').default;
const template = require('@babel/template').default;
const core = require('@babel/core');

fs.readFile(path.resolve(__dirname, "./demos/basic.md"), "utf8", (err, source) => {
  const codeSources = []
      const demoObj = yamlFront.loadFront(source);
      const { title, desc, __content } = demoObj || {};
      const lexer = new marked.Lexer();
      const tokens = lexer.lex(__content);
      const codeTokens = tokens.filter(item => item.type === 'code' && item.lang === 'js');
      codeTokens.forEach(({ text, lang }, index) => {
        const codeAst = parser.parse(text, {
          sourceType: 'module',
          plugins: [
            'jsx'
          ]
        });
        traverse(codeAst, {
          CallExpression(path) {
            const callee = path.node.callee;
            if (callee.object &&
                callee.object.name === 'ReactDOM' &&
                callee.property.name === 'render') {
                let demoElement = path.node.arguments[0];
                demoElement = types.variableDeclaration('const', [types.variableDeclarator(types.identifier('__inner'), demoElement)]);
                path.insertBefore(demoElement);
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
          NAME: `Demo${index}`,
          SOURCE: demoSource
        });
        codeSources.push(generator(demoAst).code);
      });
  console.log(333, codeSources);
  const buildComponent = template(`
      CODE
      function Component () {
        return React.createElement('div', {},${codeSources.map((_, index) => `React.createElement(Demo${index}, { key: ${index} })`).join(',')} )
      }
    `);

  const componentAst = buildComponent({
    CODE: codeSources.join('\n'),
  });


  const commonImportAst = parser.parse(`
    import React from 'react';
  `, {
    sourceType: 'module',
  });

  const returnSource = `
    export default function () {
      return <div>
        <Component />
      </div>
    }
  `;
  const ast = parser.parse(returnSource, {
    sourceType: 'module',
    plugins: ['jsx']
  });
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
  // console.log(222, generator(ast).code);

});
