const rollup = require('rollup');
const path = require('path');
const typescript = require('@rollup/plugin-typescript');
const { default: babel } = require('@rollup/plugin-babel');
const { default: resolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');


async function build() {
  console.log(`--------开始打包--------`);

  const bundle = await rollup.rollup({
    input: path.resolve(__dirname, '../src/index.ts'),
    plugins: [resolve(), commonjs(), typescript({
      outDir: process.env.buildVersion === 'cjs' ? path.resolve(__dirname, '../lib')
        : path.resolve(__dirname, '../es')
    }),  babel({
      exclude: 'node_modules/**' // only transpile our source code
  })],
    external: ['react', 'react-dom'],
  });

  await bundle.write({
    dir: process.env.buildVersion === 'cjs' ?  path.resolve(__dirname, '../lib') : path.resolve(__dirname, '../es'),
    format: process.env.buildVersion === 'cjs' ? 'cjs' : 'es'
  });
  await build.write
}

build();
