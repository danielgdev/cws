module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
}
