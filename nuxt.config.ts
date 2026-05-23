// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/global.css'],
  routeRules: {
    '/a-propos.html': { redirect: '/a-propos' },
    '/technologies.html': { redirect: '/technologies' },
    '/contact.html': { redirect: '/contact' },
    '/mentions-legales.html': { redirect: '/mentions-legales' },
    '/politique-de-confidentialite.html': { redirect: '/politique-de-confidentialite' },
    '/projects/ginku.html': { redirect: '/projects/ginku' },
    '/projects/coursfinder.html': { redirect: '/projects/coursfinder' },
    '/projects/miam-dv.html': { redirect: '/projects/miam-dv' },
    '/projects/qrela.html': { redirect: '/projects/qrela' },
  },
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Diogo Andrade – Développeur Front-end',
      meta: [
        { name: 'robots', content: 'index,follow' },
        { name: 'author', content: 'Diogo Andrade' },
        { name: 'theme-color', content: '#111827' },
        { name: 'color-scheme', content: 'light dark' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Diogo Andrade' },
        { property: 'og:locale', content: 'fr_FR' },
        { name: 'twitter:card', content: 'summary_large_image' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preload', as: 'image', href: '/assets/img/android-chrome-192x192.png' },
        { rel: 'icon', href: '/assets/favicon.ico', sizes: 'any' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/assets/img/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/assets/img/favicon-32x32.png',
        },
        { rel: 'apple-touch-icon', href: '/assets/img/apple-touch-icon.png' },
      ],
    },
  },
})
