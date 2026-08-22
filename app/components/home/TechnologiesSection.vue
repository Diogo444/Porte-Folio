<script setup lang="ts">
const technologyGroups = [
  { title: 'Technologies principales', featured: true, items: ['Angular', 'TypeScript'] },
  { title: 'Développement front-end', items: ['Vue.js', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Compétences complémentaires', items: ['Node.js', 'NestJS', 'Docker', 'Caddy', 'Elasticsearch'] },
]
</script>

<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="section-heading">
        <h2>Technologies</h2>
        <p>Angular et TypeScript constituent le cœur de mon profil. J’utilise également Vue.js et Tailwind CSS pour développer mes interfaces, avec des compétences complémentaires en backend et en déploiement.</p>
      </div>
      <div class="technology-groups">
        <article v-for="group in technologyGroups" :key="group.title" class="technology-group card" :class="{ 'technology-group--featured': group.featured }">
          <h3>{{ group.title }}</h3>
          <ul>
            <li v-for="technology in group.items" :key="technology">{{ technology }}</li>
          </ul>
        </article>
      </div>
      <NuxtLink class="text-link section-link" to="/technologies/">
        Voir toutes mes compétences
        <span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
      </NuxtLink>
    </div>
  </section>
</template>
