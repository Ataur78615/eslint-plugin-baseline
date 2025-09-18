// eslint.config.js (for ESLint v9)
import baselinePlugin from "eslint-plugin-baseline";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    plugins: {
      baseline: baselinePlugin
    },
    rules: {
      "baseline/no-non-baseline-api": "warn"
    },
    languageOptions: {
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly"
      }
    }
  }
];
