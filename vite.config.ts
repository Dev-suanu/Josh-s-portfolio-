import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
 server: {
    host: true, // This enables the --host automatically
    watch: {
      usePolling: true, // Forces Vite to check files every few ms
    },
    hmr: {
      overlay: true, // Shows errors on the screen so you know if it breaks
    }
  }
})
