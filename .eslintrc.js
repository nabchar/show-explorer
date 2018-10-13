module.exports = {
  parser: 'babel-eslint',
  extends: 'eslint-config-airbnb',
  env: {
    browser: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
  }
};
