<script setup lang="ts">
import { projects, site } from '~/data/portfolio'
import BaseButton from '../../components/ui/BaseButton.vue'

const route = useRoute()
const slug = computed(() => String(route.params.slug))
const project = computed(() => projects.find((item) => item.slug === slug.value))

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' })
}

usePageSeo({
  title: () => project.value?.slug === 'ginku'
    ? 'Ginku : application web et Android pour les transports de Besançon | Diogo Andrade'
    : `${project.value?.cardTitle || 'Projet'} - Étude de cas`,
  description: () => project.value?.slug === 'ginku'
    ? 'Découvrez Ginku, mon application Vue.js et Android pour consulter les horaires, les arrêts proches et les informations du réseau de transport de Besançon.'
    : project.value?.summary || 'Page projet de Diogo Andrade.',
  path: () => (project.value ? `/projects/${project.value.slug}` : route.path),
  image: () => project.value?.image || site.ogImage,
  type: 'article',
})

useJsonLd('project-page-structured-data', () => {
  if (!project.value) {
    return []
  }

  return [
    createBreadcrumbJsonLd([
      { name: 'Accueil', path: '/' },
      { name: 'Projets', path: '/#projects' },
      { name: project.value.cardTitle, path: `/projects/${project.value.slug}` },
    ]),
    createProjectJsonLd(project.value),
  ]
})
</script>

<template>
  <main v-if="project" class="page-main">
    <section v-if="project.slug === 'ginku'" class="ginku-hero">
      <div class="container ginku-hero__grid">
        <div class="ginku-hero__content">
          <p class="eyebrow">Projet personnel</p>
          <h1>Ginku — Consulter les transports de Besançon sur le Web et Android</h1>
          <p>Ginku est une application personnelle permettant de consulter les horaires, les lignes, les arrêts et les informations de trafic du réseau de transport de Besançon.</p>
          <p>Je l’ai développée avec Vue.js et Node.js en portant une attention particulière à la simplicité de navigation et à l’accessibilité. Initialement disponible sur le Web, l’application existe désormais également sur Android grâce à Capacitor.</p>
          <p class="ginku-hero__disclaimer">Ginku utilise les données fournies par l’API du réseau Ginko, mais constitue un projet indépendant qui n’est ni affilié ni géré par Ginko ou Grand Besançon Métropole.</p>
          <ul class="ginku-hero__tags" aria-label="Plateformes et caractéristique principale">
            <li>Web</li><li>Android</li><li>Accessibilité</li>
          </ul>
          <div class="ginku-actions">
            <BaseButton href="https://ginku.diogo-andrade.org">Ouvrir l’application</BaseButton>
            <BaseButton href="https://github.com/Diogo444/Ginku/releases/latest" variant="secondary">Télécharger l’application Android</BaseButton>
            <BaseButton href="https://github.com/Diogo444/Ginku" variant="outline">Consulter le code source</BaseButton>
          </div>
        </div>
        <img
          class="ginku-hero__image"
          :src="project.image"
          width="1920"
          height="1032"
          alt="Accueil de Ginku avec la recherche et les prochains passages enregistrés en favoris"
        >
      </div>
    </section>

    <section v-else class="article-hero" :style="{ backgroundImage: `url('${project.image}')` }">
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

    <article class="article-container" :class="{ 'ginku-article': project.slug === 'ginku' }">
      <div class="article-content">
        <template v-if="project.slug === 'ginku'">
          <section class="ginku-facts" aria-labelledby="ginku-facts-title">
            <h2 id="ginku-facts-title" class="sr-only">Informations rapides sur Ginku</h2>
            <dl>
              <div><dt>Mon rôle</dt><dd>Conception de l’interface, développement front-end et backend, intégration de l’API et déploiement.</dd></div>
              <div><dt>Plateformes</dt><dd>Application web responsive et application Android.</dd></div>
              <div><dt>Technologies principales</dt><dd>Vue.js 3, Vite, Tailwind CSS, Node.js, Express et Capacitor.</dd></div>
              <div><dt>Infrastructure</dt><dd>Docker, Caddy et GitHub Actions.</dd></div>
            </dl>
          </section>

          <section class="ginku-section">
            <p class="eyebrow">Le besoin de départ</p>
            <h2>Une interface plus directe pour les transports de Besançon</h2>
            <p>Je consulte régulièrement les horaires du réseau Ginko et je souhaitais disposer d’une interface plus directe, avec une navigation claire et moins d’étapes pour accéder aux prochains passages.</p>
            <p>Le projet est également lié à mon expérience de l’accessibilité numérique. Certaines informations essentielles peuvent devenir difficiles à retrouver lorsque la structure d’une interface est complexe ou que la navigation avec une technologie d’assistance n’a pas été suffisamment prise en compte.</p>
            <p>J’ai donc commencé Ginku avec un objectif précis : rassembler les informations utiles du réseau dans une application simple, responsive et utilisable au clavier comme avec un lecteur d’écran.</p>
          </section>

          <section class="ginku-section">
            <p class="eyebrow">Fonctionnalités</p>
            <h2>Ce que permet l’application</h2>
            <p>Ginku ne se limite plus à l’affichage des horaires. Ses différentes pages permettent de retrouver les informations du réseau à partir d’une ligne, d’un arrêt, de la position de l’utilisateur ou du numéro d’un véhicule.</p>
            <div class="ginku-feature-grid">
              <article class="ginku-feature card"><h3>Recherche centralisée</h3><p>La recherche de l’accueil permet de retrouver une ligne, un arrêt ou un véhicule depuis un seul champ. Les résultats sont regroupés par type afin de faciliter leur identification.</p></article>
              <article class="ginku-feature card"><h3>Horaires et favoris</h3><p>Chaque arrêt affiche les prochains passages regroupés par ligne et par destination. Une ligne peut être ajoutée aux favoris pour retrouver directement ses trois prochains horaires depuis l’accueil.</p><p>Les données des favoris sont actualisées automatiquement toutes les trente secondes.</p></article>
              <article class="ginku-feature card"><h3>Arrêts proches</h3><p>Avec l’autorisation de l’utilisateur, Ginku utilise la géolocalisation de l’appareil pour afficher les arrêts les plus proches, leur distance et les prochains passages.</p><p>Un lien permet également d’ouvrir un itinéraire vers l’arrêt sélectionné dans Google Maps.</p></article>
              <article class="ginku-feature card"><h3>Lignes et directions</h3><p>Les lignes sont organisées par catégories, notamment les tramways, les Lianes et les lignes urbaines. L’utilisateur peut consulter les arrêts d’une ligne et inverser son sens de circulation.</p></article>
              <article class="ginku-feature card"><h3>Informations de trafic</h3><p>Une page rassemble l’état du réseau, les perturbations en cours ou prévues et les messages associés aux différentes lignes.</p></article>
              <article class="ginku-feature card"><h3>Informations sur les véhicules</h3><p>À partir du numéro d’un véhicule, Ginku peut afficher les informations disponibles sur ses équipements, son accessibilité, son énergie et certaines données en temps réel comme l’affluence ou sa position.</p></article>
            </div>
            <figure class="ginku-figure">
              <img
                src="/projets/ginku/fiche-vehicule.png"
                width="1920"
                height="1032"
                loading="lazy"
                alt="Fiche du véhicule 459 indiquant son type, son énergie et ses équipements d’accessibilité"
              >
              <figcaption>La fiche d’un véhicule rassemble les informations disponibles sur ses équipements.</figcaption>
            </figure>
          </section>

          <section class="ginku-section ginku-accessibility">
            <p class="eyebrow">Accessibilité</p>
            <h2>Des choix d’accessibilité intégrés au code</h2>
            <p>L’accessibilité de Ginku ne repose pas uniquement sur son apparence. J’ai intégré plusieurs comportements destinés à rendre la navigation plus compréhensible avec un clavier ou un lecteur d’écran.</p>
            <p>À chaque changement de page, le focus est déplacé vers le titre principal afin que l’utilisateur sache immédiatement où il se trouve. Un lien d’évitement permet également de rejoindre directement le contenu principal.</p>
            <p>Les boutons possèdent des intitulés explicites, la page active est indiquée dans la navigation et les icônes purement décoratives sont masquées aux technologies d’assistance.</p>
            <p>Les changements importants, comme l’actualisation des arrêts proches, sont annoncés à l’aide de zones dynamiques. La fenêtre de mise à jour Android gère également le déplacement du focus, sa restauration après fermeture et la navigation avec la touche Échap.</p>
            <ul class="ginku-points">
              <li>Structure HTML sémantique</li><li>Lien d’évitement</li><li>Navigation au clavier</li><li>Gestion du focus entre les pages</li><li>Intitulés accessibles pour les boutons</li><li>Annonces dynamiques avec aria-live</li><li>Fenêtres modales avec gestion du focus</li><li>Réduction des animations selon les préférences du système</li>
            </ul>
          </section>

          <section class="ginku-section">
            <p class="eyebrow">Architecture</p>
            <h2>Une architecture séparant l’interface et les données</h2>
            <p>Le front-end est une application Vue.js 3 construite avec Vite et Vue Router. Il communique avec un backend Node.js et Express qui sert d’intermédiaire avec l’API Ginko.</p>
            <p>Ce backend évite d’exposer la clé de l’API dans le navigateur. Il normalise certaines réponses et utilise plusieurs durées de cache selon la nature des données : les informations en temps réel sont conservées moins longtemps que les informations plus stables sur les lignes ou les véhicules.</p>
            <p>Il évite également de lancer plusieurs requêtes identiques lorsqu’un même appel est déjà en cours.</p>
            <div class="ginku-architecture" aria-label="Architecture technique de Ginku">
              <div>Application Web ou Android</div><span aria-hidden="true">→</span><div>Vue.js et Capacitor</div><span aria-hidden="true">→</span><div>API Node.js et Express</div><span aria-hidden="true">→</span><div>Cache du backend</div><span aria-hidden="true">→</span><div>API Ginko</div>
            </div>
            <p>La version Web est déployée avec Docker. Caddy sert l’application et transmet les requêtes adressées à l’API vers le conteneur backend.</p>
          </section>

          <section class="ginku-section ginku-android-grid">
            <div>
              <p class="eyebrow">Application Android</p>
              <h2>Du site responsive à l’application Android</h2>
              <p>J’ai utilisé Capacitor pour transformer le front-end Vue.js existant en application Android sans maintenir une seconde interface séparée.</p>
              <p>La version Android utilise les fonctionnalités natives de Capacitor pour la géolocalisation et la conservation des préférences. Les favoris et le thème sélectionné peuvent ainsi être conservés directement sur l’appareil.</p>
              <p>J’ai également développé un plugin Android spécifique pour gérer les mises à jour distribuées depuis GitHub. Lorsque l’application détecte une version plus récente, une fenêtre accessible propose de télécharger le nouvel APK. Le téléchargement passe par le gestionnaire Android et l’installation s’ouvre une fois le fichier récupéré.</p>
              <figure class="ginku-figure ginku-figure--mobile">
                <img
                  src="/projets/ginku/mise-a-jour-android.jpg"
                  width="900"
                  height="2012"
                  loading="lazy"
                  alt="Fenêtre proposant de télécharger la version 1.0.6 de l’application Ginku sur Android"
                >
                <figcaption>La fenêtre de mise à jour affichée dans l’application Android.</figcaption>
              </figure>
            </div>
            <div>
              <p class="eyebrow">Automatisation</p>
              <h2>Une publication Android automatisée</h2>
              <p>La création de l’application Android est automatisée avec GitHub Actions.</p>
              <p>Lorsqu’un tag de version au format vX.Y.Z est envoyé sur GitHub, le workflow installe les dépendances, construit le front-end, synchronise Capacitor et génère un APK signé.</p>
              <p>La signature est vérifiée avant que l’APK soit ajouté automatiquement à une release GitHub. Les informations sensibles du certificat de signature restent protégées dans les secrets du dépôt.</p>
            </div>
          </section>

          <section class="ginku-section">
            <p class="eyebrow">Difficultés et apprentissages</p>
            <h2>Ce que ce projet m’a appris</h2>
            <div class="ginku-learnings">
              <article><h3>Gérer des données dont la fréquence de mise à jour varie</h3><p>Les horaires, la position des véhicules et les informations générales ne peuvent pas utiliser la même durée de cache. J’ai donc adapté la stratégie de mise en cache à chaque type de donnée afin de limiter les appels sans afficher trop longtemps des informations devenues anciennes.</p></article>
              <article><h3>Fiabiliser la géolocalisation</h3><p>La fonctionnalité des arrêts proches doit gérer les autorisations refusées, les délais d’attente, les positions indisponibles et les déplacements de l’utilisateur. Elle arrête également les actualisations inutiles lorsque la page n’est plus visible.</p></article>
              <article><h3>Conserver une navigation accessible dans une SPA</h3><p>Avec Vue Router, le navigateur ne replace pas automatiquement le focus lors d’un changement de vue. J’ai dû ajouter cette gestion pour que la navigation reste compréhensible avec un lecteur d’écran.</p></article>
              <article><h3>Distribuer une application en dehors du Play Store</h3><p>La version Android m’a amené à travailler sur la signature d’un APK, les versions, les permissions d’installation, les releases GitHub et l’automatisation de la compilation.</p></article>
              <article><h3>Faire évoluer un projet sans tout réécrire</h3><p>Le même front-end fonctionne aujourd’hui dans le navigateur et dans l’application Android. Capacitor m’a permis d’ajouter des fonctions natives tout en conservant l’architecture Vue.js existante.</p></article>
            </div>
          </section>

          <section class="ginku-final card">
            <h2>Voir Ginku</h2>
            <p>Ginku est toujours en cours d’évolution. Son code source est public et l’application peut être utilisée depuis un navigateur ou installée sur un appareil Android.</p>
            <div class="ginku-actions">
              <BaseButton href="https://ginku.diogo-andrade.org">Utiliser la version Web</BaseButton>
              <BaseButton href="https://github.com/Diogo444/Ginku/releases/latest" variant="secondary">Télécharger l’APK Android</BaseButton>
              <BaseButton href="https://github.com/Diogo444/Ginku" variant="outline">Voir le dépôt GitHub</BaseButton>
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

        <section v-if="project.slug !== 'ginku'">
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
