import vue from 'rollup-plugin-vue'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import scss from 'rollup-plugin-scss'
import postcss from 'postcss'
import autoprefixer from 'autoprefixer'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue({preprocessStyles: true,
        preprocessOptions: {
          scss: {
            additionalData: `@import './src/styles/main.scss';`
          },
        },
      }),
      scss({
        processor: () => postcss([autoprefixer()]),
        outputStyle: 'compressed'
      }),
       peerDepsExternal(),
    ]
  }
]