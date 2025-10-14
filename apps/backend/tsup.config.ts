import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: false,
  entry: ["api/index.ts"],
  format: ["cjs"],
  sourcemap: true,
  target: "es2022",
  minify: false,
  outDir: "dist",
  tsconfig: "tsconfig.json",
});
