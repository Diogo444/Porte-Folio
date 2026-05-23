<script setup lang="ts">
usePageSeo({
  title: 'Développeur Front-end Angular, Vue.js et APIs',
  description:
    "Portfolio de Diogo Andrade, développeur front-end spécialisé en Angular, Vue.js, accessibilité numérique, intégration d'APIs NestJS/Node et déploiement Docker.",
  path: '/',
})

useJsonLd('home-page-structured-data', {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': absoluteSiteUrl('/#profile-page'),
  url: absoluteSiteUrl('/'),
  name: 'Portfolio de Diogo Andrade',
  description:
    "Développeur front-end spécialisé en interfaces accessibles, Angular, Vue.js, APIs NestJS/Node et Docker.",
  inLanguage: 'fr-FR',
  mainEntity: {
    '@id': absoluteSiteUrl('/#person'),
  },
})
</script>

<template>
  <main class="page-main">
    <HomeHeroSection />
    <HomeAboutSection />
    <HomeTechnologiesSection />
    <HomeProjectsSection />
    <HomeContactSection />
  </main>
</template>
