<script setup lang="ts">
import { homeTechnologies } from '~/data/portfolio'
import SectionTitle from '../ui/SectionTitle.vue'
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <SectionTitle title="Technologies" />
      <div class="tech-pills">
        <span
          v-for="tech in homeTechnologies"
          :key="tech.name"
          class="tech-pill"
          :style="{ backgroundColor: tech.color, color: tech.textColor }"
        >
          {{ tech.name }}
        </span>
      </div>
    </div>
  </section>
</template>
