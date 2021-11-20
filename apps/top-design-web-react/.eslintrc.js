// This is a workaround for https://github.com/eslint/eslint/issues/3458

module.exports = {
  extends: ['@smallwebbird/eslint-config/config/web-app'],
  parserOptions: { tsconfigRootDir: __dirname },
};
