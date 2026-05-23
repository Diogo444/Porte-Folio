<script setup lang="ts">
import { site } from '~/data/portfolio'
import BaseButton from '../ui/BaseButton.vue'
</script>

<template>
  <section id="home" class="hero">
    <div class="container hero__grid">
      <div class="hero__content">
        <h1>{{ site.name }}</h1>
        <h2>{{ site.tagline }}</h2>
        <p>
          Développeur front-end passionné par les interfaces épurées et performantes.
          Je travaille surtout avec Angular et Vue.js, et j'aime connecter le tout à des APIs
          NestJS/Node, avec un déploiement propre via Docker.
        </p>

        <div class="hero__actions">
          <BaseButton to="/#projects">Voir mes projets</BaseButton>
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
        :aria-label="`Photo de ${site.name}`"
      />
    </div>
  </section>
</template>
