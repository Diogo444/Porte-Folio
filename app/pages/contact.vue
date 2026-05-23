<script setup lang="ts">
import { site, socialLinks } from '~/data/portfolio'
import BaseButton from '../components/ui/BaseButton.vue'

useHead({
  title: 'Contact – Diogo Andrade | Développeur Front-end',
  meta: [
    {
      name: 'description',
      content:
        'Contactez Diogo Andrade pour discuter de votre projet web. Développeur front-end spécialisé en Angular, Vue.js et accessibilité.',
    },
  ],
})
</script>

<template>
  <main class="page-main">
    <section class="page-hero page-hero--center">
      <div class="container">
        <h1>Contactez-moi</h1>
        <p>
          Un projet, une question, une opportunité de collaboration ? Je suis toujours ouvert à la discussion
          et je réponds généralement sous 24 à 48 heures.
        </p>
      </div>
    </section>

    <article class="article-container">
      <div class="article-content">
        <section>
          <h2>Comment me joindre</h2>
          <p>
            Plusieurs options s'offrent à vous pour me contacter. Que vous préfériez l'email classique
            ou les réseaux professionnels, choisissez le canal qui vous convient le mieux.
          </p>

          <div class="contact-card-grid">
            <a class="contact-card" :href="`mailto:${site.email}`">
              <div class="contact-card__icon" style="background-color: rgba(221, 0, 49, 0.12); color: #dd0031">
                <span class="material-symbols-outlined">mail</span>
              </div>
              <h3>Email</h3>
              <p>Pour les demandes détaillées et les propositions de projet</p>
              <strong>{{ site.email }}</strong>
            </a>

            <a
              v-for="social in socialLinks.filter((item) => item.icon !== 'mail')"
              :key="social.href"
              class="contact-card"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div class="contact-card__icon" style="background-color: rgba(0, 119, 181, 0.12)">
                <span v-if="social.icon === 'linkedin'">in</span>
                <span v-else class="material-symbols-outlined">code</span>
              </div>
              <h3>{{ social.label }}</h3>
              <p>
                {{ social.icon === 'linkedin'
                  ? 'Pour les opportunités professionnelles et le networking'
                  : 'Pour voir mes projets open source et contributions'
                }}
              </p>
              <strong>{{ social.icon === 'linkedin' ? 'Diogo Andrade' : '@Diogo444' }}</strong>
            </a>
          </div>
        </section>

        <section>
          <h2>À quoi s'attendre</h2>
          <p>Lorsque vous me contactez, voici comment se déroule généralement notre échange :</p>
          <div class="feature-grid">
            <article class="feature-card">
              <div class="feature-icon">⏱️</div>
              <h4>Réponse rapide</h4>
              <p>Je m'efforce de répondre à tous les messages dans un délai de 24 à 48 heures ouvrées.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">🎯</div>
              <h4>Écoute attentive</h4>
              <p>Je prends le temps de comprendre vos besoins et objectifs avant de proposer des solutions.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">💡</div>
              <h4>Conseils personnalisés</h4>
              <p>Je partage mon expertise pour vous orienter vers les meilleures solutions techniques.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">🤝</div>
              <h4>Transparence</h4>
              <p>Communication claire sur les délais, coûts et contraintes techniques dès le départ.</p>
            </article>
          </div>
        </section>

        <section>
          <h2>Types de projets</h2>
          <p>
            Je suis particulièrement intéressé par les projets qui valorisent l'accessibilité et l'expérience utilisateur.
          </p>
          <ul>
            <li><strong>Développement d'applications web</strong> : création d'applications complètes avec Angular ou Vue.js.</li>
            <li><strong>Audit et amélioration d'accessibilité</strong> : recommandations pour rendre un site conforme aux normes WCAG.</li>
            <li><strong>Refonte d'interfaces</strong> : modernisation de sites existants avec les dernières bonnes pratiques UX.</li>
            <li><strong>Intégration d'APIs</strong> : connexion à des services tiers et création de backends sur mesure.</li>
            <li><strong>Formation et conseil</strong> : accompagnement sur l'accessibilité et le développement front-end.</li>
          </ul>
        </section>

        <section class="card section-card contact-preview">
          <h2>Prêt à démarrer ?</h2>
          <p>
            N'attendez plus pour donner vie à votre projet. Envoyez-moi un message et discutons de vos besoins !
          </p>
          <BaseButton :href="`mailto:${site.email}`">
            <span class="material-symbols-outlined" aria-hidden="true">mail</span>
            Envoyer un email
          </BaseButton>
        </section>
      </div>
    </article>
  </main>
</template>
