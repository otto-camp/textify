/** @type {import("eslint").Linter.Config} */
const config = {
  extends: [
    "next/core-web-vitals",
    "prettier",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "tailwindcss/classnames-order": 'off',
    "tailwindcss/no-custom-classname": 'off',
  }
};

module.exports = config;