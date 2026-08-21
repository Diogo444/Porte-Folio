<script setup lang="ts">
import { projects } from '~/data/portfolio'
import ProjectCard from '../ui/ProjectCard.vue'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="section-heading">
        <h2>Quelques projets</h2>
        <p>Ces projets répondent à des besoins concrets et me permettent d’approfondir mes compétences en développement front-end, en accessibilité et en intégration d’API.</p>
      </div>
      <div class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </div>
  </section>
</template>
