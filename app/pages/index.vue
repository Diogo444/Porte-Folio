<script setup lang="ts">
useHead({
  title: 'Diogo Andrade – Développeur Front-end (Angular, Vue.js, APIs)',
  meta: [
    {
      name: 'description',
      content:
        "Portfolio de Diogo Andrade – développeur front-end. Spécialités : Angular, Vue.js, intégration d'APIs (NestJS/Node), déploiement Docker. Interfaces épurées et performantes.",
    },
  ],
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
