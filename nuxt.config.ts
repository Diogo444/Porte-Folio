// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
   css: [
    '~/assets/css/global.css'
  ],
  app: {
    head: {
      
      title: 'Porte-Folio Diogo Andrade',
      meta: [
        { name: 'description', content: 'Porte-Folio de Diogo Andrade' },
      ],
      htmlAttrs: { lang: 'fr-FR' },
    }
  }
})
