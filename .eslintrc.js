module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "16.13", // Tells eslint-plugin-react to automatically detect the version of React to use
      pragma: "h",
    },
  },
  env: {
    es6: true,
    "node": true
  },
  globals: {
    axios: "readonly",
  },
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": 0, // handled this automatically
    "react/jsx-uses-react": 0,
    "react/jsx-uses-vars": 2,
    "react/jsx-no-undef": [2, { allowGlobals: true }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
  },
};
