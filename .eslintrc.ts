module.exports = {
  rules: {
    "react/display-name": "off",
  },
  parser: "@babel/eslint-parser",
  extends: ["plugin:@next/next/recommended", ["eslint:recommended", "next"]],
};
