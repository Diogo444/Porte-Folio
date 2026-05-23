<script setup lang="ts">
import type { Project } from '~/data/portfolio'
import BaseButton from './BaseButton.vue'

defineProps<{
  project: Project
}>()
</script>

<template>
  <article class="project-card card">
    <img class="project-card__image" :src="project.image" :alt="`Capture du projet ${project.cardTitle}`" loading="lazy">

    <div class="project-card__body">
      <h3>{{ project.cardTitle }}</h3>
      <p>{{ project.summary }}</p>

      <div class="project-card__actions">
        <BaseButton
          v-for="link in project.links"
          :key="link.href"
          :href="link.href"
          :variant="link.primary ? 'primary' : 'secondary'"
        >
          {{ link.label }}
        </BaseButton>

        <BaseButton :to="`/projects/${project.slug}`" variant="outline">
          <span>En savoir plus</span>
          <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
        </BaseButton>
      </div>
    </div>
  </article>
</template>
