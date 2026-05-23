<script setup lang="ts">
import { site } from '~/data/portfolio'
import BaseButton from '../components/ui/BaseButton.vue'

useHead({
  title: 'À propos – Diogo Andrade | Développeur Front-end passionné',
  meta: [
    {
      name: 'description',
      content:
        "Découvrez le parcours de Diogo Andrade, développeur front-end spécialisé en Angular, Vue.js et APIs NestJS/Node. Un engagement pour l'accessibilité et les interfaces performantes.",
    },
  ],
})
</script>

<template>
  <main class="page-main">
    <section class="page-hero">
      <div class="container about-hero">
        <div>
          <h1>À propos de moi</h1>
          <p>
            Développeur front-end passionné par les interfaces épurées,
            l'accessibilité numérique et les technologies modernes.
          </p>
        </div>
        <div class="about-hero__avatar" :style="{ backgroundImage: `url('${site.avatar}')` }" />
      </div>
    </section>

    <article class="article-container">
      <div class="article-content">
        <section>
          <h2>Mon parcours</h2>
          <p>
            Je m'appelle <strong>Diogo Andrade</strong> et je suis développeur front-end basé en France.
            Ma passion pour le développement web est née de ma curiosité naturelle pour la technologie et
            de mon désir de créer des solutions qui améliorent le quotidien des utilisateurs.
          </p>
          <p>
            Mon parcours m'a permis de développer une expertise solide dans les frameworks modernes comme
            <strong> Angular</strong> et <strong>Vue.js</strong>. Je maîtrise également le développement
            backend avec <strong>NestJS</strong> et <strong>Node.js</strong>, ce qui me permet de concevoir
            des applications complètes, de l'interface utilisateur jusqu'à l'API.
          </p>
          <p>
            Ce qui me distingue, c'est mon engagement pour <strong>l'accessibilité numérique</strong>.
            Étant moi-même déficient visuel, je comprends intimement les défis que rencontrent les personnes
            en situation de handicap face aux interfaces numériques.
          </p>
        </section>

        <section>
          <h2>Ma philosophie de développement</h2>
          <p>
            Je crois fermement que le code de qualité est un code qui <strong>sert les utilisateurs</strong>.
            Une interface peut être techniquement parfaite, mais si elle n'est pas accessible ou intuitive,
            elle échoue dans sa mission première.
          </p>

          <div class="feature-grid">
            <article class="feature-card">
              <div class="feature-icon">♿</div>
              <h4>Accessibilité d'abord</h4>
              <p>Chaque interface que je crée est pensée pour être utilisable par tous, quelles que soient leurs capacités.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">⚡</div>
              <h4>Performance optimale</h4>
              <p>Des applications rapides et réactives qui offrent une expérience fluide sur tous les appareils.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">🎨</div>
              <h4>Design épuré</h4>
              <p>Des interfaces claires et élégantes qui privilégient la lisibilité et la simplicité d'utilisation.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">🔧</div>
              <h4>Code maintenable</h4>
              <p>Une architecture propre et documentée qui facilite l'évolution et la maintenance des projets.</p>
            </article>
          </div>
        </section>

        <section>
          <h2>Mes compétences clés</h2>
          <p>
            Au fil de mes projets, j'ai acquis une maîtrise approfondie de plusieurs technologies et méthodologies
            qui me permettent de répondre à des besoins variés.
          </p>

          <h3>Développement Frontend</h3>
          <p>
            Mon expertise principale réside dans le développement d'interfaces utilisateur avec
            <strong> Angular</strong> et <strong>Vue.js</strong>. Je maîtrise les composants réutilisables,
            le routing, l'optimisation des performances et <strong>Tailwind CSS</strong>.
          </p>

          <h3>Développement Backend</h3>
          <p>
            Côté serveur, je travaille principalement avec <strong>NestJS</strong>, un framework Node.js
            qui offre une architecture modulaire inspirée d'Angular. Je gère également l'intégration d'APIs
            externes et la connexion à diverses bases de données.
          </p>

          <h3>DevOps & Déploiement</h3>
          <p>
            La containerisation avec <strong>Docker</strong> fait partie intégrante de mon workflow.
            Je configure des environnements reproductibles et je déploie mes applications avec Docker Compose
            et <strong>Caddy</strong>.
          </p>
        </section>

        <section>
          <h2>Mon engagement pour l'accessibilité</h2>
          <p>
            L'accessibilité n'est pas une option pour moi, c'est une conviction profonde. En tant que personne
            déficiente visuelle, j'utilise quotidiennement des technologies d'assistance comme les lecteurs d'écran.
          </p>
          <p>
            Dans chaque projet, j'applique les bonnes pratiques d'accessibilité : HTML sémantique, attributs ARIA
            appropriés, navigation au clavier, contrastes suffisants et tests avec différents outils d'assistance.
          </p>

          <div class="info-box">
            <p>
              <strong>Le saviez-vous ?</strong> En France, environ 12 millions de personnes sont en situation de handicap.
              L'accessibilité numérique n'est pas un luxe, c'est une nécessité légale et éthique.
            </p>
          </div>
        </section>

        <section>
          <h2>Travaillons ensemble</h2>
          <p>
            Vous avez un projet qui nécessite une interface accessible et performante ? N'hésitez pas à me contacter
            pour discuter de vos besoins.
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
