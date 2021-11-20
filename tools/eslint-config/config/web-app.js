require('@rushstack/eslint-patch/modern-module-resolution');
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
  },
  rules: {
    semi: ['error', 'always'],
  },
};
