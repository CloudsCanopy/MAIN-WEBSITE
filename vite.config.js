import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      // Exclude files locked by OneDrive or other processes
      ignored: ['**/IntroAnimation.css', '**/*.css.tmp', '**/.~lock.*'],
    },
  },
})
