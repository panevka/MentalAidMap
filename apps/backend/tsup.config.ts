import { defineConfig } from "tsup";

export default defineConfig({
  // splitting: true,
  clean: true,
  // dts: false,
  entry: ["src/index.ts"],
  format: ["esm"],
  sourcemap: true,
  target: "es2022",
  minify: false,
  bundle: false,
  outDir: ".vercel/output/functions",
  tsconfig: "tsconfig.json",
  // esbuildOptions(options, context) {
  //   // the directory structure will be the same as the source
  //   options.outbase = "./";
  // },
});
