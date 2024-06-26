import path from 'node:path'
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react-swc'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Unocss(),
    React(),
    AutoImport({
      imports: ['react', 'react-i18next'],
      dts: 'src/auto-imports.d.ts',
    }),
    Pages(),
  ],
})
