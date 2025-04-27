import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/*/**', 'src/index.ts', 'src/debounce.ts', 'src/wait.ts'],
  format: ['cjs', 'esm'],
  target: 'esnext',
  clean: true,
  dts: true,
  treeshake: false,
  splitting: false,
  minify: true,
  sourcemap: true,
  external: ['react', 'react-dom', '@reduxjs/toolkit'],
})
