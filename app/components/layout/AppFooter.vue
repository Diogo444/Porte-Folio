<script setup lang="ts">
import { footerLinks, legalLinks, site, socialLinks } from '~/data/portfolio'
import SocialIcon from '../ui/SocialIcon.vue'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__grid">
        <div>
          <h3>Navigation</h3>
          <ul>
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3>Légal</h3>
          <ul>
            <li v-for="link in legalLinks" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3>Me suivre</h3>
          <div class="footer__socials">
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

      <div class="footer__bottom">
        <p>© {{ year }} {{ site.name }}. Tous droits réservés.</p>
        <NuxtLink to="/#home">
          Retour en haut
          <span class="material-symbols-outlined" aria-hidden="true">arrow_upward</span>
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
