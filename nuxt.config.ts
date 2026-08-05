// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/global.css"],

  hooks: {
    "pages:extend"(pages) {
      const technologiesPage = pages.find((page) =>
        page.file?.replace(/\\/g, "/").endsWith("/pages/Technologies.vue"),
      );

      if (technologiesPage) {
        technologiesPage.name = "technologies";
        technologiesPage.path = "/technologies";
      }
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        "/",
        "/a-propos",
        "/technologies",
        "/contact",
        "/mentions-legales",
        "/politique-de-confidentialite",
        "/projects/ginku",
        "/projects/coursfinder",
        "/projects/miam-dv",
        "/projects/qrela",
        "/sitemap.xml",
      ],
    },
    compressPublicAssets: true,
  },

  routeRules: {
    "/a-propos.html": { redirect: "/a-propos" },
    "/technologies.html": { redirect: "/technologies" },
    "/contact.html": { redirect: "/contact" },
    "/mentions-legales.html": { redirect: "/mentions-legales" },
    "/politique-de-confidentialite.html": {
      redirect: "/politique-de-confidentialite",
    },
    "/projects/ginku.html": { redirect: "/projects/ginku" },
    "/projects/coursfinder.html": { redirect: "/projects/coursfinder" },
    "/projects/miam-dv.html": { redirect: "/projects/miam-dv" },
    "/projects/qrela.html": { redirect: "/projects/qrela" },
  },

  app: {
    head: {
      htmlAttrs: { lang: "fr-FR" },
      title: "Diogo Andrade – Développeur Front-end",
      meta: [
        {
          name: "description",
          content:
            "Portfolio de Diogo Andrade, développeur front-end spécialisé en Angular, Vue.js, accessibilité numérique, APIs NestJS/Node et déploiement Docker.",
        },
        { name: "robots", content: "index,follow" },
        { name: "author", content: "Diogo Andrade" },
        { name: "application-name", content: "Diogo Andrade" },
        { name: "apple-mobile-web-app-title", content: "Diogo Andrade" },
        { name: "name", content: "Diogo Andrade" },
        { name: "color-scheme", content: "light dark" },
        { name: "theme-color", content: "#111111" },
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Diogo Andrade" },
        { property: "og:locale", content: "fr_FR" },
        {
          property: "og:image",
          content:
            "https://diogo-andrade.org/assets/img/android-chrome-512x512.png",
        },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:image",
          content:
            "https://diogo-andrade.org/assets/img/android-chrome-512x512.png",
        },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "preload",
          as: "image",
          href: "/assets/img/android-chrome-192x192.png",
        },
        { rel: "icon", href: "/assets/favicon.ico", sizes: "any" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/assets/img/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/assets/img/favicon-32x32.png",
        },
        { rel: "apple-touch-icon", href: "/assets/img/apple-touch-icon.png" },
      ],
    },
  },

  modules: ["@nuxt/scripts"],

});
