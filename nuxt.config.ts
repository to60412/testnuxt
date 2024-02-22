// https://nuxt.com/docs/api/configuration/nuxt-config
//import vuetify from 'vite-plugin-vuetify'
//export default defineNuxtConfig




export default ({
  css: [
    'vuetify/lib/styles/main.sass',
    '~/assets/bootstrap.scss',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
    extend(config: any, ctx: any) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig: {
    public: {
      // baseApi: 'https://localhost:7073/',

      baseApi: 'https://172.40.12.53:7073/',
      apiKey: '53189636',
      ver: '230908.1.0.0'
    }
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  router: {
    middleware: ['permission-auth'],
  },
  head: {
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.5.1.min.js',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/node-forge@0.7.0/dist/forge.min.js',
      },
      {
        src: 'https://ecpg-stage.ecpay.com.tw/Scripts/sdk-1.0.0.js?t=20210121100116',
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/vue@2',
      },
      {
        src: '@/utils/mathjax',
      },
      {
        src: 'https://cdn.bootcss.com/mathjax/3.0.5/es5/tex-mml-chtml.js',
      }
    ]
  }
})

