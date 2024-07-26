import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // if login.html is in a different folder
  build: {
    rollupOptions: {
      input: './login.html' // Specify the path to login.html
    }
  }
})
