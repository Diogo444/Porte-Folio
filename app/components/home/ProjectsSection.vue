<script setup lang="ts">
import { projects } from '~/data/portfolio'
import ProjectCard from '../ui/ProjectCard.vue'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="projects" class="section">
    <div class="container">
      <SectionTitle title="Projets" />
      <div class="project-grid">
        <ProjectCard v-for="project in projects" :key="project.slug" :project="project" />
      </div>
    </div>
  </section>
</template>
