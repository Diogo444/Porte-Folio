<script setup lang="ts">
import { socialLinks } from '~/data/portfolio'
import SocialIcon from '../ui/SocialIcon.vue'
</script>

<template>
  <section id="contact" class="section contact-preview">
    <div class="container">
      <div class="section-card card">
        <h2>Contact</h2>
        <p>Un projet, une idée, une opportunité ? Écris-moi ou retrouve-moi sur les réseaux.</p>

        <div class="social-links">
          <SocialIcon
            v-for="social in socialLinks"
            :key="social.href"
            :href="social.href"
            :label="social.label"
            :icon="social.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>
