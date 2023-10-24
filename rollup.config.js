import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import { visualizer } from "rollup-plugin-visualizer";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [{ file: packageJson.module, format: 'esm' }],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    postcss({ plugins: [] }),
    typescript({ tsconfig: './tsconfig.json' }),
    url({ include: ['./**/*.woff'], limit: Infinity }),
    terser({
      mangle: { keep_classnames: true, keep_fnames: true },
      compress: true
    }),
    process.env.ANALYZE === 'true' && visualizer()
  ]
}
