import type { Config } from "jest";
import { pathsToModuleNameMapper } from "ts-jest";
const { compilerOptions } = require("./apps/frontend/tsconfig.app.json");

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  moduleNameMapper: pathsToModuleNameMapper(
    compilerOptions.paths /*, { prefix: '<rootDir>/' } */,
  ),
  rootDir: ".",
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};

export default config;
