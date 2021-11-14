const parser = require('@babel/parser');

module.exports = (sourceCode) => {
  return parser.parse(sourceCode, {
    sourceType: 'module',
    plugins: ['jsx']
  })
}
