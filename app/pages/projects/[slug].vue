<script setup lang="ts">
import { projects } from '~/data/portfolio'
import BaseButton from '../../components/ui/BaseButton.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const project = computed(() => projects.find((item) => item.slug === slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' })
}

useHead(() => ({
  title: `${project.value?.title || 'Projet'} | Diogo Andrade`,
  meta: [
    {
      name: 'description',
      content: project.value?.summary || 'Page projet de Diogo Andrade.',
    },
  ],
}))
</script>

<template>
  <main v-if="project" class="page-main">
    <section class="article-hero" :style="{ backgroundImage: `url('${project.image}')` }">
      <div class="article-hero__content">
        <span class="article-hero__tag">{{ project.category }}</span>
        <h1>{{ project.title }}</h1>
        <p>{{ project.subtitle }}</p>
      </div>
    </section>

    <div class="container">
      <NuxtLink class="back-link" to="/#projects">
        <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
        Retour aux projets
      </NuxtLink>
    </div>

    <article class="article-container">
      <div class="article-content">
        <template v-if="project.slug === 'ginku'">
          <section>
            <h2>Pourquoi ce projet ?</h2>
            <p>
              En tant que personne <strong>déficiente visuelle</strong>, j'ai souvent été confronté à des
              applications mobiles et web qui ne prenaient pas assez en compte les besoins d'accessibilité.
              L'application officielle Ginko de Besançon, bien que fonctionnelle, présentait des lacunes pour
              les utilisateurs de synthèse vocale.
            </p>
            <p>
              C'est de cette frustration qu'est née <strong>Ginku</strong> : une application web pensée dès
              le départ pour être <strong>accessible à tous</strong>.
            </p>
            <div class="info-box">
              <p><strong>Le saviez-vous ?</strong> En France, environ 1,7 million de personnes sont atteintes d'un trouble de la vision.</p>
            </div>
          </section>

          <section>
            <h2>Fonctionnalités principales</h2>
            <div class="feature-grid">
              <article class="feature-card"><div class="feature-icon">🕐</div><h4>Horaires en temps réel</h4><p>Consultez les prochains passages de bus et tramway avec une mise à jour automatique.</p></article>
              <article class="feature-card"><div class="feature-icon">🚌</div><h4>Toutes les lignes</h4><p>Accédez à l'ensemble des lignes du réseau Ginko : bus, tramway et lignes spéciales.</p></article>
              <article class="feature-card"><div class="feature-icon">⚠️</div><h4>Infos trafic</h4><p>Restez informé des perturbations, travaux et modifications de parcours.</p></article>
              <article class="feature-card"><div class="feature-icon">⭐</div><h4>Lignes favorites</h4><p>Enregistrez vos lignes préférées pour y accéder rapidement.</p></article>
              <article class="feature-card"><div class="feature-icon">🔍</div><h4>Recherche rapide</h4><p>Trouvez une ligne ou un arrêt en quelques caractères.</p></article>
              <article class="feature-card"><div class="feature-icon">🔊</div><h4>Compatible synthèse vocale</h4><p>Navigation accessible aux lecteurs d'écran comme VoiceOver, NVDA et JAWS.</p></article>
            </div>
          </section>

          <section>
            <h2>Stack technique</h2>
            <div class="tech-pills">
              <span v-for="tag in project.tags" :key="tag" class="tech-badge button--primary">{{ tag }}</span>
            </div>
            <p>
              Le backend Node.js avec Express sert de proxy entre le frontend et l'API officielle Ginko.
              L'application est containerisée avec Docker et servie via Caddy.
            </p>
          </section>

          <section>
            <h2>Architecture du projet</h2>
            <div class="architecture-box">
              <div class="architecture-flow">
                <div class="arch-item"><div class="feature-icon">👤</div><span>Utilisateur</span></div>
                <span class="arch-arrow">→</span>
                <div class="arch-item"><div class="feature-icon">🌐</div><span>Caddy</span></div>
                <span class="arch-arrow">→</span>
                <div class="arch-item"><div class="feature-icon">💚</div><span>Vue.js SPA</span></div>
                <span class="arch-arrow">→</span>
                <div class="arch-item"><div class="feature-icon">🟢</div><span>Backend Node</span></div>
                <span class="arch-arrow">→</span>
                <div class="arch-item"><div class="feature-icon">🚌</div><span>API Ginko</span></div>
              </div>
            </div>
          </section>
        </template>

        <template v-else-if="project.slug === 'coursfinder'">
          <section>
            <h2>L'idée de départ</h2>
            <p>
              <strong>CoursFinder</strong> est né d'un besoin très simple : retrouver rapidement une information
              dans mes fichiers de cours. L'objectif était d'uploader mes documents Word, d'extraire le texte,
              puis de chercher dedans avec Elasticsearch.
            </p>
            <div class="info-box">
              <p><strong>Le concept :</strong> uploader mes fichiers Word, extraire automatiquement le texte et le titre, puis indexer le tout pour une recherche rapide.</p>
            </div>
          </section>

          <section>
            <h2>Comment ça fonctionne ?</h2>
            <div class="feature-grid">
              <article class="feature-card"><div class="feature-icon">📄</div><h4>Upload de documents</h4><p>L'interface permet d'uploader des fichiers Word (.docx) contenant mes notes de cours.</p></article>
              <article class="feature-card"><div class="feature-icon">🧾</div><h4>Extraction de texte</h4><p>Le contenu textuel est extrait automatiquement, ainsi que le titre du document.</p></article>
              <article class="feature-card"><div class="feature-icon">🔎</div><h4>Indexation Elasticsearch</h4><p>Les données sont envoyées à Elasticsearch qui les indexe pour une recherche rapide.</p></article>
              <article class="feature-card"><div class="feature-icon">⚡</div><h4>Recherche instantanée</h4><p>Une simple requête permet de retrouver tous les documents contenant un terme précis.</p></article>
            </div>
          </section>

          <section>
            <h2>Le défi : configurer Elasticsearch</h2>
            <p>
              La partie la plus formatrice du projet a été la configuration d'Elasticsearch : paramètres de sécurité,
              ports, index, mapping et requêtes. Plusieurs essais ont été nécessaires avant d'obtenir une configuration
              stable.
            </p>
            <h3>Ce que j'ai appris</h3>
            <ul>
              <li><strong>Lire la doc officielle</strong> reste indispensable pour des outils qui évoluent vite.</li>
              <li><strong>Configuration fine</strong> : comprendre elasticsearch.yml et les options de sécurité.</li>
              <li><strong>Tester, échouer, recommencer</strong> : plusieurs installations ratées avant la bonne configuration.</li>
            </ul>
          </section>
        </template>

        <template v-else-if="project.slug === 'miam-dv'">
          <section>
            <h2>Le contexte : un besoin concret</h2>
            <p>
              <strong>Miam DV</strong> répond à un besoin du CRDV : rendre le menu de la semaine de l'internat
              plus simple à consulter, surtout pour les jeunes malvoyants et non-voyants.
            </p>
            <div class="info-box">
              <p><strong>La situation initiale :</strong> les menus étaient distribués sur papier, en gros caractères et avec plusieurs adaptations.</p>
            </div>
          </section>

          <section>
            <h2>Fonctionnalités de l'application</h2>
            <div class="feature-grid">
              <article class="feature-card"><div class="feature-icon">🍽️</div><h4>Menu de la semaine</h4><p>Affichage clair des menus midi et soir, du lundi au vendredi.</p></article>
              <article class="feature-card"><div class="feature-icon">♿</div><h4>100% Accessible</h4><p>Compatible avec VoiceOver, TalkBack et les outils d'accessibilité.</p></article>
              <article class="feature-card"><div class="feature-icon">💬</div><h4>Proverbe ou blague</h4><p>Chaque semaine, un proverbe ou une blague est affiché pour créer du lien.</p></article>
              <article class="feature-card"><div class="feature-icon">🔐</div><h4>Administration sécurisée</h4><p>Interface d'administration avec authentification JWT pour gérer les menus.</p></article>
            </div>
          </section>

          <section>
            <h2>L'accessibilité au cœur du projet</h2>
            <p>
              L'application web permet de laisser chaque utilisateur utiliser ses propres réglages :
              zoom, contraste, synthèse vocale et navigation clavier.
            </p>
            <ul>
              <li><strong>HTML sémantique</strong> pour une navigation logique au lecteur d'écran.</li>
              <li><strong>Navigation clavier</strong> sur tous les éléments interactifs.</li>
              <li><strong>Contrastes suffisants</strong> pour respecter les ratios WCAG.</li>
              <li><strong>Texte redimensionnable</strong> jusqu'à 200% sans perte d'information.</li>
            </ul>
          </section>
        </template>

        <template v-else>
          <section>
            <h2>Objectif du projet</h2>
            <p>
              <strong>Qrela</strong> est un générateur de QR code conçu pour rester <strong>gratuit</strong>,
              <strong> sans inscription</strong>, <strong>sans abonnement</strong> et <strong>entièrement personnalisable</strong>.
            </p>
            <p>
              Ce projet a aussi une dimension pragmatique : tester un modèle simple avec Google AdSense pour aider
              à financer l'infrastructure qui héberge mes outils web.
            </p>
          </section>

          <section>
            <h2>Ce que Qrela permet</h2>
            <div class="feature-grid">
              <article class="feature-card"><div class="feature-icon">🔗</div><h4>Types de contenu</h4><p>URL, texte, email, téléphone, SMS et Wi-Fi, avec validation des champs.</p></article>
              <article class="feature-card"><div class="feature-icon">🖼️</div><h4>Export PNG / SVG</h4><p>Téléchargement immédiat en PNG pour le web ou SVG pour l'impression.</p></article>
              <article class="feature-card"><div class="feature-icon">🎨</div><h4>Personnalisation avancée</h4><p>Taille, marge, correction d'erreur, styles de points et couleurs.</p></article>
              <article class="feature-card"><div class="feature-icon">🔒</div><h4>Confidentialité</h4><p>Génération locale dans le navigateur, sans envoi du contenu saisi au serveur.</p></article>
            </div>
          </section>

          <section>
            <h2>Stack technique et architecture</h2>
            <p>
              Qrela est développé avec une stack front-end légère : <strong>Vite.js</strong>,
              <strong> JavaScript vanilla</strong>, <strong>Tailwind CSS</strong> et
              <strong> qr-code-styling</strong>.
            </p>
            <div class="architecture-box">
              <div class="architecture-flow">
                <div class="arch-item"><div class="feature-icon">👤</div><span>Utilisateur</span></div>
                <span class="arch-arrow">→</span>
                <div class="arch-item"><div class="feature-icon">⚡</div><span>App Vite.js</span></div>
                <span class="arch-arrow">→</span>
                <div class="arch-item"><div class="feature-icon">🧠</div><span>QR Engine</span></div>
                <span class="arch-arrow">→</span>
                <div class="arch-item"><div class="feature-icon">📤</div><span>PNG / SVG</span></div>
              </div>
            </div>
          </section>
        </template>

        <section>
          <h2>Voir le projet</h2>
          <p>Le projet est disponible en ligne ou sur GitHub selon les liens ci-dessous.</p>
          <div class="cta-section">
            <BaseButton
              v-for="link in project.links"
              :key="link.href"
              :href="link.href"
              :variant="link.primary ? 'primary' : 'secondary'"
            >
              <span class="material-symbols-outlined" aria-hidden="true">{{ link.primary ? 'open_in_new' : 'code' }}</span>
              {{ link.label }}
            </BaseButton>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>
