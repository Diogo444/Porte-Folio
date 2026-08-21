<script setup lang="ts">
import type { Project } from '~/data/portfolio'
import BaseButton from './BaseButton.vue'

defineProps<{
  project: Project
}>()

const actionLabels: Record<string, string> = {
  ginku: 'Découvrir Ginku',
  coursfinder: 'Découvrir CoursFinder',
  'miam-dv': 'Découvrir Miam DV',
  qrela: 'Découvrir Qrela',
}
</script>

<template>
  <article class="project-card card">
    <img class="project-card__image" :src="project.image" :alt="`Capture du projet ${project.cardTitle}`" loading="lazy">

    <div class="project-card__body">
      <h3>{{ project.cardTitle }}</h3>
      <p>{{ project.summary }}</p>
      <p class="project-card__technologies">{{ project.tags.slice(0, 3).join(' · ') }}</p>

      <div class="project-card__actions">
        <BaseButton :to="`/projects/${project.slug}`">{{ actionLabels[project.slug] }}</BaseButton>
        <div v-if="project.links.length" class="project-card__secondary-links">
          <a v-for="link in project.links" :key="link.href" :href="link.href" target="_blank" rel="noopener noreferrer">
            {{ link.label }}
          </a>
        </div>
      </div>
    </div>
  </article>
</template>
