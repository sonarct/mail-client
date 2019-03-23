module.exports = {
  'env': {
    'react-native/react-native': true,
    'es6': true
  },
  'extends': [
    'standard',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'react-native'
  ],
  'rules': {
    "react/jsx-uses-vars": [2],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    // "react-native/no-inline-styles": 2,
    // "react-native/no-color-literals": 2,
    // "react-native/no-raw-text": 2
  },
}
