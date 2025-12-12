module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      globals: {
        // Browser globals
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        // Node globals
        process: "readonly",
        __dirname: "readonly",
        __filename: "readonly",
        module: "readonly",
        require: "readonly",
        // ES2021 globals
        Promise: "readonly",
        Map: "readonly",
        Set: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "off",
      "no-console": "off",
      "no-debugger": "off",
    },
  },
];
