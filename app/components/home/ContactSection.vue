<script setup lang="ts">
import { site, socialLinks } from '~/data/portfolio'
import BaseButton from '../ui/BaseButton.vue'

const linkedIn = socialLinks.find((link) => link.icon === 'linkedin')
</script>

<template>
  <section id="contact" class="section contact-preview">
    <div class="container">
      <div class="section-card card">
        <p class="eyebrow">Une opportunité à me proposer ?</p>
        <h2>Travaillons dans la même équipe</h2>
        <p>
          Je souhaite rejoindre une entreprise en CDI à partir de juillet 2027, en tant que développeur front-end avec Angular comme technologie principale.
        </p>
        <p>
          Si mon profil correspond à un poste actuel ou à une future opportunité au sein de votre équipe, vous pouvez consulter mon CV ou me contacter directement par email ou sur LinkedIn.
        </p>

        <div class="contact-preview__actions">
          <BaseButton :href="`mailto:${site.email}`">Me contacter par email</BaseButton>
          <BaseButton v-if="linkedIn" :href="linkedIn.href" variant="secondary">Voir mon profil LinkedIn</BaseButton>
        </div>
        <a class="text-link contact-preview__cv" :href="site.cv" download>Télécharger mon CV</a>
      </div>
    </div>
  </section>
</template>
