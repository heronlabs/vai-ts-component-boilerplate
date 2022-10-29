import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/entry-point.ts',
  output: [
    {
      file: 'bin/entry-point.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'bin/entry-point.es.js',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    del({targets: 'bin/*'}),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.bin.json',
      useTsconfigDeclarationDir: true,
    }),
    postcss(),
  ],
};
