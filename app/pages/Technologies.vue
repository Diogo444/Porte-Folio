<script setup lang="ts">
import { technologies } from '~/data/portfolio'
import BaseButton from '../components/ui/BaseButton.vue'
import TechCard from '../components/ui/TechCard.vue'

useHead({
  title: 'Technologies – Diogo Andrade | Stack technique et compétences',
  meta: [
    {
      name: 'description',
      content:
        "Découvrez les technologies maîtrisées par Diogo Andrade : Angular, Vue.js, NestJS, Node.js, Docker, Elasticsearch et bien d'autres.",
    },
  ],
})
</script>

<template>
  <main class="page-main">
    <section class="page-hero page-hero--center">
      <div class="container">
        <h1>Technologies & Compétences</h1>
        <p>
          Une stack technique moderne et éprouvée pour créer des applications web performantes,
          accessibles et maintenables.
        </p>
      </div>
    </section>

    <article class="article-container">
      <div class="article-content">
        <section>
          <h2>Ma philosophie technique</h2>
          <p>
            Le choix des technologies n'est jamais anodin. Chaque outil que j'utilise a été sélectionné
            pour des raisons précises : <strong>productivité</strong>, <strong>maintenabilité</strong>,
            <strong>performance</strong> et <strong>accessibilité</strong>.
          </p>
          <p>
            Mon approche est résolument <strong>full-stack</strong> : je maîtrise aussi bien la création
            d'interfaces utilisateur élégantes que le développement d'APIs robustes et le déploiement
            d'infrastructures conteneurisées.
          </p>
        </section>

        <section>
          <h2>Développement Frontend</h2>
          <p>
            Le frontend est mon domaine de prédilection. C'est là où l'expérience utilisateur prend vie,
            où l'accessibilité devient tangible, et où le design rencontre la technologie.
          </p>
          <div class="tech-card-grid">
            <TechCard v-for="tech in technologies.slice(0, 4)" :key="tech.name" :tech="tech" />
          </div>
        </section>

        <section>
          <h2>Développement Backend</h2>
          <p>
            Côté serveur, je privilégie les technologies Node.js qui permettent d'utiliser JavaScript/TypeScript
            sur l'ensemble de la stack.
          </p>
          <div class="tech-card-grid">
            <TechCard v-for="tech in technologies.slice(4, 8)" :key="tech.name" :tech="tech" />
          </div>
        </section>

        <section>
          <h2>DevOps & Déploiement</h2>
          <p>
            La maîtrise du déploiement est essentielle pour livrer des applications fiables.
            J'utilise Docker et Caddy pour garantir des environnements reproductibles et sécurisés.
          </p>
          <div class="tech-card-grid">
            <TechCard v-for="tech in technologies.slice(8)" :key="tech.name" :tech="tech" />
          </div>
        </section>

        <section>
          <h2>Outils & Méthodologies</h2>
          <p>
            Au-delà des langages et frameworks, j'utilise un ensemble d'outils qui optimisent mon workflow
            quotidien et garantissent la qualité du code.
          </p>
          <ul>
            <li><strong>Git & GitHub</strong> : gestion de version, branches feature et pull requests.</li>
            <li><strong>VS Code</strong> : éditeur principal avec extensions TypeScript, Angular, Vue et accessibilité.</li>
            <li><strong>pnpm</strong> : gestionnaire de paquets rapide et efficace.</li>
            <li><strong>ESLint & Prettier</strong> : linting et formatage automatique pour un code cohérent.</li>
            <li><strong>Vite</strong> : bundler moderne pour des builds ultra-rapides en développement.</li>
          </ul>
        </section>

        <section>
          <h2>Prêt à collaborer ?</h2>
          <p>
            Vous avez un projet qui nécessite ces compétences ? Que ce soit pour une application web complète,
            une refonte d'interface ou l'optimisation de l'accessibilité, je suis prêt à relever le défi.
          </p>
          <div class="cta-section">
            <BaseButton to="/contact">
              <span class="material-symbols-outlined" aria-hidden="true">mail</span>
              Me contacter
            </BaseButton>
            <BaseButton to="/#projects" variant="secondary">
              <span class="material-symbols-outlined" aria-hidden="true">folder</span>
              Voir mes projets
            </BaseButton>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>
