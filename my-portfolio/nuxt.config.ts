// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
      'bootstrap/dist/css/bootstrap.min.css',
      '@/assets/common.css'
    ],
    script: [
      {
        src: 'bootstrap/dist/js/bootstrap.bundle.min.js'
      }
    ],
    vite: {
      define: {
        'process.env.DEBUG': false,
      },
    },
  })
