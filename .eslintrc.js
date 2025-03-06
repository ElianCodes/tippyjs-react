module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react']
    },
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
};
