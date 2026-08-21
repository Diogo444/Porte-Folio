<script setup lang="ts">
usePageSeo({
  title: 'Développeur front-end Angular à Besançon | Diogo Andrade',
  description:
    "Développeur front-end Angular basé à Besançon, je recherche un CDI. Découvrez mes projets en Angular, Vue.js, accessibilité numérique et API Node.js.",
  path: '/',
})

useJsonLd('home-page-structured-data', {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': absoluteSiteUrl('/#profile-page'),
  url: absoluteSiteUrl('/'),
  name: 'Diogo Andrade, développeur front-end Angular à Besançon',
  description:
    "Développeur front-end Angular basé à Besançon, spécialisé en interfaces accessibles, Vue.js et intégration d'API Node.js.",
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
