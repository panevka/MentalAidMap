import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  dts: false,
  entry: ["api/index.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  target: "es2022",
  minify: false,
  outDir: "dist/api",
  tsconfig: "tsconfig.json",
});
