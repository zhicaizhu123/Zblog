const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main.scss', 'element-ui/lib/theme-chalk/index.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/axios', ssr: false },
    { src: '~/plugins/prototype', ssr: false },
    { src: '~/plugins/element-ui', ssr: true },
    { src: '~/plugins/vue-mavon-editor', srr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  axios: {
    prefix: 'http://localhost:9004/',
    proxy: true
  },
  proxy: {
    '/api': {
      target: 'http://localhost:9004/',
      changeOrigin: true, // 是否跨域
      pathRewrite: { '^/api': '' }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // transpile: [/^element-ui/],
    analyze: {
      analyzerMode: 'static'
    },
    // extractCSS: { allChunks: true },
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    },
    babel: {
      // 配置按需引入规则
      plugins: [
        [
          'component',
          {
            libraryName: 'element-ui',
            styleLibraryName: 'theme-chalk'
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      config.plugins.unshift(new LodashModuleReplacementPlugin());
      // rules[2].use[0] is babel-loader
      config.module.rules[2].use[0].options.plugins = ['lodash'];
    }
  },

  server: {
    port: 9005, // default: 3000
    host: '0.0.0.0' // default: localhost,
  }
};
