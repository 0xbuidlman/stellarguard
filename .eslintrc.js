module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': false,
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'require-await': ['error']
  },
  env: { browser: true, node: true, es6: true }
};
