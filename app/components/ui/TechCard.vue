<script setup lang="ts">
import type { Technology } from '~/data/portfolio'

defineProps<{
  tech: Technology
}>()
</script>

<template>
  <article class="tech-card">
    <div class="tech-card__head">
      <div class="tech-card__icon" :style="{ backgroundColor: tech.color }">
        <img v-if="tech.icon" :src="tech.icon" :alt="`Logo de ${tech.shortName || tech.name}`">
      </div>
      <div>
        <h3>{{ tech.name }}</h3>
        <small>{{ tech.family }}</small>
      </div>
    </div>
    <p>{{ tech.description }}</p>
  </article>
</template>
