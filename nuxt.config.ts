// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    // To deply in GH pages
    generate:{
      nojekyll: true, //not working on this version
    },
    ssr: true, //server side rendered enabled //When true
    target: "static", // and static, nuxt generates a hybrid static site
    // To deploy in GH pages
    router: {
      base: '/My-Web/'
    },

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
    app:{
      head:{
        link:[
          {rel:"shortcut icon", type:"image/x-icon", href:"/favicon.ico"}
        ]
      },
      baseURL: "/My-Web/"
    }
  })
