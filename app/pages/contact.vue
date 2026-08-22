<script setup lang="ts">
import { site, socialLinks } from '~/data/portfolio'
import BaseButton from '../components/ui/BaseButton.vue'

usePageSeo({
  title: 'Contact — opportunité front-end Angular',
  description:
    'Contactez Diogo Andrade pour une opportunité de développeur front-end Angular, un échange sur l’accessibilité web ou l’un de ses projets.',
  path: '/contact',
})

useJsonLd('contact-page-structured-data', [
  createBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Contact', path: '/contact' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    '@id': absoluteSiteUrl('/contact#contact-page'),
    url: absoluteSiteUrl('/contact'),
    name: 'Contact Diogo Andrade',
    description: 'Page de contact pour une opportunité front-end Angular ou un échange sur l’accessibilité et les projets présentés.',
    mainEntity: {
      '@id': absoluteSiteUrl('/#person'),
    },
  },
])
</script>

<template>
  <main class="page-main">
    <section class="page-hero page-hero--center">
      <div class="container">
        <h1>Contactez-moi</h1>
        <p>
          Une opportunité professionnelle, une question sur mon parcours ou sur l’un de mes projets ?
          Je suis ouvert à la discussion et je réponds généralement sous 24 à 48 heures ouvrées.
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
              <div class="contact-card__icon contact-card__icon--primary">
                <span class="material-symbols-outlined" aria-hidden="true">mail</span>
              </div>
              <h3>Email</h3>
              <p>Pour les opportunités professionnelles et les demandes détaillées</p>
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
              <div
                class="contact-card__icon"
                :class="social.icon === 'linkedin' ? 'contact-card__icon--linkedin' : 'contact-card__icon--github'"
              >
                <span v-if="social.icon === 'linkedin'">in</span>
                <span v-else class="material-symbols-outlined" aria-hidden="true">code</span>
              </div>
              <h3>{{ social.label }}</h3>
              <p>
                {{ social.icon === 'linkedin'
                  ? 'Pour les opportunités professionnelles et mon réseau'
                  : 'Pour consulter mes projets et leur code source'
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
              <h3>Réponse rapide</h3>
              <p>Je m'efforce de répondre à tous les messages dans un délai de 24 à 48 heures ouvrées.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3>Échange attentif</h3>
              <p>Je prends le temps de comprendre le contexte du poste, de l’équipe ou de votre question.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">💡</div>
              <h3>Réponses concrètes</h3>
              <p>Je réponds aussi précisément que possible et partage les informations utiles sur mon expérience.</p>
            </article>
            <article class="feature-card">
              <div class="feature-icon">🤝</div>
              <h3>Transparence</h3>
              <p>Je présente clairement ma disponibilité, mes compétences et les limites de mon expérience.</p>
            </article>
          </div>
        </section>

        <section>
          <h2>Sujets sur lesquels échanger</h2>
          <p>
            Je recherche principalement un CDI en développement front-end à partir de juillet 2027,
            tout en restant disponible pour échanger autour du Web et de l’accessibilité.
          </p>
          <ul>
            <li><strong>Opportunités professionnelles</strong> : postes de développeur front-end, principalement avec Angular et TypeScript.</li>
            <li><strong>Accessibilité numérique</strong> : retours d’expérience sur les lecteurs d’écran, la navigation au clavier et les interfaces inclusives.</li>
            <li><strong>Projets présentés</strong> : questions techniques ou fonctionnelles sur Ginku, Miam DV, CoursFinder et Qrela.</li>
            <li><strong>Développement web</strong> : échanges autour de Vue.js, Node.js, des API, de Docker et du déploiement.</li>
          </ul>
        </section>

        <section class="card section-card contact-preview">
          <h2>Échangeons</h2>
          <p>
            Si mon profil correspond à votre recherche ou si vous souhaitez en savoir plus sur mon parcours,
            envoyez-moi un message.
          </p>
          <BaseButton :href="`mailto:${site.email}`">
            <span class="material-symbols-outlined" aria-hidden="true">mail</span>
            <span>Envoyer un email</span>
          </BaseButton>
        </section>
      </div>
    </article>
  </main>
</template>
