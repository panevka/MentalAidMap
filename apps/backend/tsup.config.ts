import { defineConfig } from "tsup";

export default defineConfig({
  // splitting: true,
  clean: true,
  // dts: false,
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  sourcemap: true,
  target: "es2022",
  minify: false,
  bundle: false,
  outDir: "dist",
  tsconfig: "tsconfig.json",
  // esbuildOptions(options, context) {
  //   // the directory structure will be the same as the source
  //   options.outbase = "./";
  // },
});
