// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app:
    {baseURL:'',},

  css: ['vuetify/styles'],

  build: {
    transpile: ['vuetify'],
  },

  extends: [
   './front-app'
 ],

  modules: ['@nuxtjs/i18n'],
  i18n:{
    defaultLocale: 'fa',
    locales:[
      {code: 'fa', name:'Farsi', file:'fa.js'},
      {code: 'en', name:'English', file: 'en.js'}
      
    ]
  }
})