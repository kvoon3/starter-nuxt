// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
  ],

  devtools: { enabled: true },

  css: [
    '~/styles/global.css',
    '@unocss/reset/tailwind.css',
  ],

  colorMode: {
    classSuffix: '',
    storage: 'cookie',
  },

  compatibilityDate: '2024-11-01',

  eslint: {
    config: {
      standalone: false,
    },
  },
})
