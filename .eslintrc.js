module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  settings: { react: { version: '18.2' } },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'react-app',
    'react-app/jest',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  overrides: [{ files: ['.test.js', '*.test.js'] }],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  globals: {
    window: true,
    module: true,
    _: 'readonly',
  },
}
