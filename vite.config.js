import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
const BASE = '/x-memory/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: BASE,
})
