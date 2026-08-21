<script setup lang="ts">
import { footerLinks, legalLinks, site, socialLinks } from '~/data/portfolio'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div class="footer__grid">
        <div class="footer__identity">
          <h3>{{ site.name }}</h3>
          <p>Développeur front-end Angular basé à Besançon.</p>
        </div>

        <div>
          <h3>Navigation</h3>
          <ul>
            <li v-for="link in footerLinks" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3>Informations</h3>
          <ul>
            <li v-for="link in legalLinks" :key="link.to">
              <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <h3>Réseaux</h3>
          <ul>
            <li v-for="social in socialLinks" :key="social.href">
              <a :href="social.href" :target="social.href.startsWith('http') ? '_blank' : undefined" :rel="social.href.startsWith('http') ? 'noopener noreferrer' : undefined">{{ social.label }}</a>
            </li>
          </ul>
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
