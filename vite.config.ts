import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'VITE_API_URL': JSON.stringify(env.VITE_API_URL),
      'VITE_API_TOKEN': JSON.stringify(env.VITE_API_TOKEN),
      'process.env.NODE_ENV': JSON.stringify(env.NODE_ENV),
    },
    plugins: [react()],
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      },
    },
    base: '/tasks-app-challenge'
  }
});
