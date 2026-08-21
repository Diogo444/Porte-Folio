<script setup lang="ts">
import { site } from '~/data/portfolio'
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <p class="eyebrow">Développeur front-end basé à Besançon</p>
        <h1>Diogo Andrade, développeur front-end Angular</h1>
        <p>
          Je conçois des applications web accessibles et structurées, principalement avec Angular
          et TypeScript. Je travaille également avec Vue.js et je possède des compétences en
          Node.js et NestJS pour intégrer des API et comprendre le fonctionnement d’une application
          dans son ensemble.
        </p>
        <p class="hero__availability">Je recherche actuellement un CDI en tant que développeur front-end.</p>

        <div class="hero__actions">
          <BaseButton to="/#projects">Découvrir mes projets</BaseButton>
          <BaseButton :href="site.cv" variant="secondary" download>
            <span class="material-symbols-outlined" aria-hidden="true">download</span>
            Télécharger mon CV
          </BaseButton>
        </div>
      </div>

      <div
        class="hero__portrait"
        :style="{ backgroundImage: `url('${site.avatar}')` }"
        role="img"
        :aria-label="`Logo de ${site.name}`"
      />
    </div>
  </section>
</template>
