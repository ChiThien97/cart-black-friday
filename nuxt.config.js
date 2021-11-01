export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Cart New Gen',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css'}
    ]
  },

  router: {
    base: '/',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://www.npmjs.com/package/@nuxtjs/fontawesome
    '@nuxtjs/fontawesome',

    // https://github.com/nuxt-community/device-module
    '@nuxtjs/device',
  ],
  env: {
    cartServer: process.env.CART_SEVER,
  },

  fontawesome: {
    icons: {
      solid: [
        'faChevronRight',
        'faChevronLeft',
        'faChevronDown',
        'faSearch',
        'faStar',
        'faCircle',
        'faMobileAlt',
        'faUserCircle',
        'faMapMarkerAlt',
        'faListAlt',
        'faBirthdayCake',
        'faCalendarCheck',
        'faAward',
        'faCreditCard',
        'faEye',
        'faComments',
        'faTimes',
        'faTrashAlt',
        'faPlus',
        'faMinus',
        'faShoppingCart',
        'faAddressCard',
        'faBoxOpen',
        'faQuestionCircle',
        'faFrown'
      ]
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',

    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    'cookie-universal-nuxt'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      compact: true
    },
    splitChunks: {
      layouts: true
    }
  }
}
