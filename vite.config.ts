import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/slides-bootstrap-stylex/',
  plugins: [react({
    babel: {
      plugins: [['@stylexjs/babel-plugin', {
        dev: true,
        runtimeInjection: true,
        genConditionalClasses: true,
      }]],
    },
  })],
})
