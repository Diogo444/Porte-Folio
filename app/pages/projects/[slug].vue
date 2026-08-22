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
    ? 'Ginku : transports de Besançon sur Web et Android | Diogo Andrade'
    : project.value?.slug === 'miam-dv'
      ? 'Miam DV : menus d’internat accessibles avec Angular | Diogo Andrade'
      : project.value?.slug === 'coursfinder'
        ? 'CoursFinder : projet Elasticsearch et Vue.js | Diogo Andrade'
        : project.value?.slug === 'qrela'
          ? 'Qrela : générateur de QR code gratuit | Diogo Andrade'
    : `${project.value?.cardTitle || 'Projet'} - Étude de cas`,
  description: () => project.value?.slug === 'ginku'
    ? 'Découvrez Ginku, mon application Vue.js et Android pour consulter les horaires, les arrêts proches et les informations du réseau de transport de Besançon.'
    : project.value?.slug === 'miam-dv'
      ? 'Découvrez Miam DV, une application Angular et NestJS conçue pour consulter et administrer les menus d’un internat en tenant compte de l’accessibilité.'
      : project.value?.slug === 'coursfinder'
        ? 'Découvrez CoursFinder, un projet expérimental créé pour apprendre Elasticsearch en indexant des cours Word et en les recherchant depuis Vue.js.'
        : project.value?.slug === 'qrela'
          ? 'Découvrez Qrela, mon générateur de QR code gratuit et personnalisable, développé en JavaScript et utilisable sans inscription ni envoi de données.'
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
          fetchpriority="high"
          alt="Accueil de Ginku avec la recherche et les prochains passages enregistrés en favoris"
        >
      </div>
    </section>

    <section v-else-if="project.slug === 'miam-dv'" class="miam-hero">
      <div class="container miam-hero__grid">
        <div class="miam-hero__content">
          <p class="eyebrow">Projet personnel</p>
          <h1>Miam DV — Consulter les menus de l’internat plus simplement</h1>
          <p>Miam DV est une application web que j’ai créée à partir d’un besoin rencontré dans mon quotidien à l’internat du CRDV. Elle permet de consulter les menus de la semaine depuis un téléphone ou un ordinateur, dans une interface conçue pour rester compréhensible et utilisable par des personnes malvoyantes ou non-voyantes.</p>
          <p>Le projet a progressivement évolué vers une application complète, avec une interface publique développée sous Angular, une administration protégée, une API NestJS, une base de données MySQL et un serveur MCP facilitant la publication des menus.</p>
          <div class="miam-actions">
            <BaseButton href="https://miamdv.diogo-andrade.org/">Voir l’application</BaseButton>
            <BaseButton href="https://github.com/Diogo444/Miam-DV" variant="secondary">Consulter le code source</BaseButton>
          </div>
        </div>
        <aside class="miam-facts card" aria-label="Informations principales sur Miam DV">
          <dl>
            <div><dt>Rôle</dt><dd>Conception et développement du front-end, de l’API, de l’administration et du déploiement</dd></div>
            <div><dt>Technologie principale</dt><dd>Angular et TypeScript</dd></div>
            <div><dt>Backend</dt><dd>NestJS, TypeORM et MySQL</dd></div>
            <div><dt>Déploiement</dt><dd>Docker et Caddy</dd></div>
          </dl>
        </aside>
      </div>
      <div class="container">
        <img
          class="miam-hero__image"
          :src="project.image"
          width="1375"
          height="1600"
          fetchpriority="high"
          alt="Page d’accueil de Miam DV présentant les menus de plusieurs jours de la semaine"
        >
      </div>
    </section>

    <section v-else-if="project.slug === 'coursfinder'" class="coursfinder-hero">
      <div class="container coursfinder-hero__content">
        <p class="eyebrow">Projet expérimental</p>
        <h1>CoursFinder : découvrir Elasticsearch avec mes documents de cours</h1>
        <p class="coursfinder-hero__lead">Un prototype local créé pour comprendre l’indexation de documents Word et la recherche plein texte avec Elasticsearch.</p>
        <ul class="coursfinder-tags" aria-label="Technologies principales">
          <li>Elasticsearch</li>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>Docker</li>
        </ul>
        <BaseButton href="https://github.com/Diogo444/CoursFinder">Voir le code source sur GitHub</BaseButton>
        <span class="material-symbols-outlined coursfinder-hero__icon" aria-hidden="true">search</span>
      </div>
    </section>

    <section v-else-if="project.slug === 'qrela'" class="qrela-hero">
      <div class="container qrela-hero__grid">
        <div class="qrela-hero__content">
          <p class="eyebrow">Outil web</p>
          <h1>Qrela : créer un QR code gratuitement et sans inscription</h1>
          <p>Un générateur personnalisable qui fonctionne directement dans le navigateur, sans compte et sans envoyer les données saisies à un serveur.</p>
          <ul class="qrela-tags" aria-label="Technologies principales">
            <li>JavaScript</li>
            <li>Vite</li>
            <li>Tailwind CSS</li>
            <li>Docker</li>
          </ul>
          <div class="qrela-actions">
            <BaseButton href="https://qrela.diogo-andrade.org/">Créer un QR code</BaseButton>
            <BaseButton href="https://github.com/Diogo444/Qrela" variant="outline">Voir le code source</BaseButton>
          </div>
        </div>
        <figure class="qrela-hero__figure">
          <img
            src="/projets/qrela/contenu.png"
            width="1920"
            height="1080"
            fetchpriority="high"
            alt="Interface de Qrela avec l’aperçu d’un QR code et les options permettant de modifier son contenu."
          >
        </figure>
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

    <article
      class="article-container"
      :class="{
        'ginku-article': project.slug === 'ginku',
        'miam-article': project.slug === 'miam-dv',
        'coursfinder-article': project.slug === 'coursfinder',
        'qrela-article': project.slug === 'qrela',
      }"
    >
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
          <section class="coursfinder-section coursfinder-intro">
            <div class="coursfinder-prose">
              <h2>Un projet conçu pour expérimenter</h2>
              <p>CoursFinder est un petit projet personnel que j’ai développé pour découvrir Elasticsearch autrement qu’en suivant uniquement de la documentation ou quelques exemples isolés.</p>
              <p>Je voulais comprendre comment des documents pouvaient être transformés en données interrogeables par un moteur de recherche. Pour donner un cas concret à cette expérimentation, j’ai utilisé mes propres fichiers de cours au format Word.</p>
              <p>L’objectif n’était pas de construire une application destinée à être mise en ligne ou maintenue sur le long terme. Je souhaitais surtout mettre en place une chaîne complète, depuis l’importation d’un document jusqu’à l’affichage des résultats dans une interface web.</p>
            </div>
            <aside class="coursfinder-facts card" aria-label="Informations principales sur CoursFinder">
              <dl>
                <div><dt>Type</dt><dd>Projet personnel expérimental</dd></div>
                <div><dt>Objectif</dt><dd>Découvrir Elasticsearch</dd></div>
                <div><dt>Utilisation</dt><dd>Prototype local</dd></div>
                <div><dt>État</dt><dd>Expérimentation terminée</dd></div>
                <div><dt>Démonstration</dt><dd>Non disponible</dd></div>
              </dl>
            </aside>
          </section>

          <section class="coursfinder-section">
            <h2>Des documents Word aux résultats de recherche</h2>
            <div class="coursfinder-flow" aria-label="Fonctionnement général de CoursFinder">
              <article>
                <span class="material-symbols-outlined" aria-hidden="true">description</span>
                <p class="coursfinder-flow__step">01</p>
                <h3>Document Word</h3>
                <p>Dépôt d’un fichier <code>.docx</code></p>
              </article>
              <span class="material-symbols-outlined coursfinder-flow__arrow" aria-hidden="true">arrow_forward</span>
              <article>
                <span class="material-symbols-outlined" aria-hidden="true">text_snippet</span>
                <p class="coursfinder-flow__step">02</p>
                <h3>Extraction du texte</h3>
                <p>Lecture du contenu avec Mammoth</p>
              </article>
              <span class="material-symbols-outlined coursfinder-flow__arrow" aria-hidden="true">arrow_forward</span>
              <article>
                <span class="material-symbols-outlined" aria-hidden="true">database</span>
                <p class="coursfinder-flow__step">03</p>
                <h3>Indexation</h3>
                <p>Enregistrement dans Elasticsearch</p>
              </article>
              <span class="material-symbols-outlined coursfinder-flow__arrow" aria-hidden="true">arrow_forward</span>
              <article>
                <span class="material-symbols-outlined" aria-hidden="true">search</span>
                <p class="coursfinder-flow__step">04</p>
                <h3>Recherche</h3>
                <p>Affichage des résultats avec Vue.js</p>
              </article>
            </div>
          </section>

          <section class="coursfinder-section coursfinder-split">
            <div class="coursfinder-prose">
              <h2>Transformer des fichiers Word en données recherchables</h2>
              <p>La première étape consistait à récupérer le contenu de mes documents <code>.docx</code>.</p>
              <p>J’ai créé un script Node.js qui parcourt un dossier contenant les fichiers à traiter. La bibliothèque Mammoth extrait leur texte brut, sans conserver leur mise en page ni leurs images. Le nom du fichier devient ensuite le titre du document, tandis que le texte extrait constitue son contenu.</p>
              <p>Ces deux informations sont enregistrées dans un index Elasticsearch nommé <code>cours</code>. Cette partie du projet m’a permis de mieux comprendre qu’un moteur de recherche ne travaille pas directement avec les fichiers d’origine : il faut d’abord en extraire les informations utiles et les organiser sous une forme qu’il pourra indexer.</p>
            </div>
            <aside class="coursfinder-technical card" aria-labelledby="coursfinder-data-title">
              <p class="eyebrow">Structure de l’index</p>
              <h3 id="coursfinder-data-title">Données envoyées à Elasticsearch</h3>
              <dl>
                <div><dt><code>title</code></dt><dd>Nom du fichier Word</dd></div>
                <div><dt><code>content</code></dt><dd>Texte extrait du document</dd></div>
                <div><dt>Index utilisé</dt><dd><code>cours</code></dd></div>
              </dl>
              <p class="coursfinder-note">Après son indexation, chaque document est déplacé dans un dossier d’archive pour éviter qu’il soit traité une seconde fois.</p>
            </aside>
          </section>

          <section class="coursfinder-section coursfinder-search">
            <div class="coursfinder-result-wrap">
              <div class="coursfinder-result card" aria-label="Exemple de la structure d’un résultat de recherche">
                <span class="material-symbols-outlined" aria-hidden="true">description</span>
                <div>
                  <h3>Cours de réseau.docx</h3>
                  <p>Aperçu du contenu du document correspondant à la recherche…</p>
                  <p class="coursfinder-result__score">Score de pertinence : <strong>4,72</strong></p>
                </div>
              </div>
              <p class="coursfinder-caption">Exemple représentant la structure d’un résultat, et non une capture de l’application.</p>
            </div>
            <div class="coursfinder-prose">
              <h2>Rechercher dans le contenu depuis Vue.js</h2>
              <p>Pour tester les données indexées, j’ai développé une petite interface avec Vue.js et Tailwind CSS.</p>
              <p>L’utilisateur saisit un mot ou une expression, puis l’application interroge Elasticsearch sur deux champs : le titre du document et son contenu. La recherche utilise une requête <code>multi_match</code>, ce qui permet de rechercher le même terme dans ces deux zones.</p>
              <p>Les résultats affichent le nom du fichier, un aperçu des premières lignes de son contenu ainsi que le score de pertinence calculé par Elasticsearch. L’interface propose également quelques suggestions et permet de relancer une requête depuis la page des résultats.</p>
              <p>Le projet reste volontairement simple : le bouton prévu pour ouvrir un cours n’a notamment pas été finalisé.</p>
            </div>
          </section>

          <section class="coursfinder-section coursfinder-limits">
            <p class="eyebrow">Périmètre du projet</p>
            <h2>Un prototype pensé pour fonctionner localement</h2>
            <p>Elasticsearch est lancé dans un conteneur Docker en mode nœud unique. Les données de l’index sont conservées dans un volume local afin de les retrouver après le redémarrage du conteneur.</p>
            <p>Dans cette première version, l’interface Vue communique directement avec Elasticsearch sur <code>localhost</code>. La sécurité du moteur et les restrictions CORS ont été désactivées pour simplifier les essais. Cette configuration convient à une expérimentation sur mon ordinateur, mais ne serait pas adaptée à une mise en production.</p>
            <div class="coursfinder-limits__grid">
              <div>
                <h3><span class="material-symbols-outlined" aria-hidden="true">check_circle</span> Ce qui a été réalisé</h3>
                <ul>
                  <li>Importation des fichiers <code>.docx</code></li>
                  <li>Extraction du texte</li>
                  <li>Indexation dans Elasticsearch</li>
                  <li>Recherche sur le titre et le contenu</li>
                  <li>Affichage des résultats et de leur score</li>
                  <li>Lancement d’Elasticsearch avec Docker</li>
                </ul>
              </div>
              <div>
                <h3><span class="material-symbols-outlined" aria-hidden="true">remove_circle_outline</span> Ce qui n’a pas été développé</h3>
                <ul>
                  <li>Consultation complète des documents</li>
                  <li>API intermédiaire sécurisée</li>
                  <li>Authentification</li>
                  <li>Filtres avancés</li>
                  <li>Déploiement public</li>
                  <li>Configuration adaptée à la production</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="coursfinder-section">
            <h2>Les technologies utilisées</h2>
            <div class="coursfinder-stack">
              <article class="card"><h3>Elasticsearch</h3><p>Indexation et recherche plein texte</p></article>
              <article class="card"><h3>Vue.js</h3><p>Interface de recherche et résultats</p></article>
              <article class="card"><h3>Node.js</h3><p>Exécution du script d’importation</p></article>
              <article class="card"><h3>Mammoth</h3><p>Extraction du texte des fichiers Word</p></article>
              <article class="card"><h3>Tailwind CSS</h3><p>Mise en forme de l’interface</p></article>
              <article class="card"><h3>Docker</h3><p>Lancement local d’Elasticsearch</p></article>
            </div>
          </section>

          <section class="coursfinder-section coursfinder-learning">
            <div class="coursfinder-prose">
              <h2>Ce que cette expérimentation m’a appris</h2>
              <p>CoursFinder m’a offert une première approche concrète d’Elasticsearch. J’ai pu découvrir le principe d’un index, l’enregistrement de documents et la recherche plein texte sur plusieurs champs.</p>
              <p>Le projet m’a également permis de relier plusieurs étapes souvent présentées séparément : lire des fichiers Word, en extraire le texte, préparer les données, les indexer puis les exploiter depuis une interface web.</p>
              <p>Avec le recul, je construirais différemment une application destinée à être réellement utilisée. J’ajouterais notamment une API entre le front-end et Elasticsearch, une configuration sécurisée, une meilleure gestion des erreurs et une véritable consultation des documents trouvés.</p>
            </div>
            <blockquote>CoursFinder n’est pas un produit terminé, mais il m’a permis de comprendre toute la chaîne située entre un document Word et un résultat de recherche.</blockquote>
          </section>

          <section class="coursfinder-final card">
            <p class="eyebrow">Code source</p>
            <h2>Consulter le projet</h2>
            <p>Le prototype n’est pas disponible en ligne, mais son code source reste consultable sur GitHub.</p>
            <div class="coursfinder-actions">
              <BaseButton href="https://github.com/Diogo444/CoursFinder">Voir CoursFinder sur GitHub</BaseButton>
              <BaseButton to="/#projects" variant="outline">← Découvrir mes autres projets</BaseButton>
            </div>
          </section>
        </template>

        <template v-else-if="project.slug === 'miam-dv'">
          <section class="miam-section">
            <p class="eyebrow">Le besoin de départ</p>
            <h2>Un projet né d’un besoin concret</h2>
            <p>À l’internat, les menus étaient principalement communiqués sur papier. Des adaptations pouvaient être proposées, notamment avec des caractères agrandis, mais ce format n’était pas toujours pratique à consulter ou disponible au moment où l’on en avait besoin.</p>
            <p>J’ai donc imaginé une application permettant de retrouver les menus de la semaine depuis n’importe quel appareil. Mon objectif n’était pas uniquement de reproduire le document papier à l’écran, mais d’organiser les informations de manière plus claire : un jour, un repas et une catégorie de plat à la fois.</p>
            <p>Miam DV reste un projet personnel. Il s’inspire directement de situations que je connais en tant que personne malvoyante et de mes échanges avec d’autres personnes déficientes visuelles.</p>
          </section>

          <section class="miam-section">
            <p class="eyebrow">Fonctionnement</p>
            <h2>Consulter et gérer les menus</h2>
            <p>L’interface publique présente les menus du lundi au vendredi. Pour chaque journée, les repas du midi et du soir sont séparés, avec les différentes parties du menu : entrée, plat, fromage et dessert.</p>
            <p>L’affichage s’adapte à la taille de l’écran. Sur mobile, les journées peuvent être parcourues sous forme de cartes. Sur un écran plus large, plusieurs jours sont visibles simultanément.</p>
            <p>L’application propose également une blague ou un proverbe de la semaine. Les utilisateurs peuvent envoyer leurs propres suggestions depuis un formulaire public. Ces propositions ne sont pas publiées immédiatement : elles doivent d’abord être examinées et acceptées depuis l’espace d’administration.</p>
            <div class="miam-feature-grid">
              <article class="miam-feature card"><h3>Consultation des menus</h3><p>Les menus sont classés par jour et par période afin de retrouver rapidement le repas recherché.</p></article>
              <article class="miam-feature card"><h3>Suggestions des utilisateurs</h3><p>Un formulaire permet de proposer une blague ou un proverbe, qui sera ensuite soumis à modération.</p></article>
              <article class="miam-feature card"><h3>Administration</h3><p>Une interface protégée permet d’ajouter, de modifier ou de supprimer les menus, de traiter les suggestions et de gérer les comptes administrateurs.</p></article>
              <article class="miam-feature card"><h3>Mise à jour hebdomadaire</h3><p>Les anciennes données sont automatiquement supprimées chaque vendredi à 16 heures afin de préparer la publication de la semaine suivante.</p></article>
              <article class="miam-feature card"><h3>Préférences d’affichage</h3><p>L’utilisateur peut choisir le thème de l’interface. Sa préférence est conservée dans le navigateur.</p></article>
            </div>
          </section>

          <section class="miam-section miam-accessibility">
            <div>
              <p class="eyebrow">Accessibilité</p>
              <h2>Une accessibilité intégrée au développement</h2>
              <p>L’accessibilité a été prise en compte dès la conception du projet. L’objectif est de proposer une interface dont la structure et les retours restent compréhensibles avec différents moyens de navigation.</p>
              <p>Ce travail améliore l’utilisation de l’application avec un lecteur d’écran ou sans souris. Il ne remplace toutefois pas un audit RGAA complet : je présente donc Miam DV comme une application conçue en tenant compte de l’accessibilité, et non comme une application certifiée ou « 100 % accessible ».</p>
            </div>
            <ul class="miam-points">
              <li>Séparation claire des jours et des repas</li>
              <li>Champs associés à leurs intitulés</li>
              <li>Erreurs et confirmations annoncées par des zones de statut</li>
              <li>Intitulés descriptifs pour les actions</li>
              <li>États de chargement et messages d’erreur</li>
              <li>Utilisation au clavier des formulaires et de l’administration</li>
              <li>Adaptation aux petits écrans et aux préférences visuelles</li>
            </ul>
          </section>

          <section class="miam-section">
            <p class="eyebrow">Architecture</p>
            <h2>Une application répartie en plusieurs services</h2>
            <p>Le front-end est développé avec Angular, TypeScript, Angular Material et Tailwind CSS. Il récupère les menus, les proverbes et les suggestions auprès d’une API REST réalisée avec NestJS.</p>
            <p>L’API utilise TypeORM pour communiquer avec une base de données MySQL. Elle gère les menus, les suggestions, les contenus publiés et les comptes administrateurs.</p>
            <p>L’espace d’administration est protégé par une authentification JWT. Le rôle de l’utilisateur et une version du jeton sont vérifiés par le backend. Lorsqu’un compte administrateur est modifié ou supprimé, ses anciens jetons peuvent être invalidés.</p>
            <div class="miam-architecture" aria-label="Architecture de Miam DV reliant Angular, l’API NestJS, MySQL et le serveur MCP">
              <div>Front-end Angular</div><span aria-hidden="true">→</span><div>API NestJS</div><span aria-hidden="true">→</span><div>Base MySQL</div><span aria-hidden="true">←</span><div>Serveur MCP</div>
            </div>
            <p>L’ensemble est réparti dans plusieurs services Docker. Caddy sert de reverse proxy et achemine les requêtes vers le front-end Angular, l’API NestJS, la base de données MySQL et le serveur MCP.</p>
          </section>

          <section class="miam-section miam-technical-grid">
            <div>
              <p class="eyebrow">Administration</p>
              <h2>Une interface protégée pour gérer les contenus</h2>
              <p>L’administration permet d’ajouter, de modifier et de supprimer les menus, de modérer les suggestions reçues et de gérer les comptes administrateurs.</p>
              <p>La séparation entre l’interface publique et cet espace plus dense m’a amené à concevoir deux parcours différents, tout en conservant des retours clairs pour les chargements, les erreurs et les confirmations.</p>
            </div>
            <div>
              <p class="eyebrow">Model Context Protocol</p>
              <h2>Faciliter la publication avec MCP</h2>
              <p>La saisie manuelle de tous les repas d’une semaine peut être répétitive. J’ai donc ajouté un serveur MCP afin d’automatiser une partie de la publication.</p>
              <ul>
                <li>Publier ou remplacer le menu d’une semaine</li>
                <li>Publier le proverbe ou la blague de la semaine</li>
                <li>Transformer un menu textuel en données structurées</li>
                <li>Supprimer les données d’une semaine déterminée</li>
              </ul>
              <p>Le serveur transmet les informations à l’API NestJS avec des permissions limitées et une limitation du nombre de requêtes. Cette partie m’a permis de travailler sur la transformation de données textuelles, leur validation et la communication entre plusieurs services.</p>
            </div>
          </section>

          <section class="miam-section">
            <p class="eyebrow">Défis techniques</p>
            <h2>Principales difficultés</h2>
            <div class="miam-challenges">
              <article><h3>Structurer les menus</h3><p>Il fallait représenter plusieurs journées, deux périodes par jour et différentes catégories de plats, tout en conservant un affichage simple à parcourir.</p></article>
              <article><h3>Concevoir deux interfaces différentes</h3><p>L’interface publique doit rester très simple, tandis que l’administration rassemble davantage d’actions, de formulaires et d’états.</p></article>
              <article><h3>Gérer les retours dynamiques</h3><p>Les chargements, les erreurs, les confirmations et les résultats d’une modération doivent être visibles sans perturber la navigation, y compris avec une technologie d’assistance.</p></article>
              <article><h3>Protéger l’administration</h3><p>J’ai mis en place l’authentification, les rôles et l’invalidation des anciens jetons lorsqu’un compte administrateur est modifié.</p></article>
              <article><h3>Déployer plusieurs services</h3><p>Docker m’a permis de séparer le front-end, l’API, la base de données et le serveur MCP tout en facilitant leur déploiement.</p></article>
            </div>
          </section>

          <section class="miam-section">
            <p class="eyebrow">Enseignements</p>
            <h2>Ce que ce projet m’a appris</h2>
            <p>Miam DV m’a permis d’approfondir Angular sur une application répondant à un besoin réel. J’ai travaillé sur les composants standalone, les formulaires, les appels vers une API, la gestion des états et la création d’interfaces adaptées à différents écrans.</p>
            <p>J’ai également progressé avec NestJS, TypeORM et l’authentification JWT. Même si mon orientation reste le développement front-end, comprendre le fonctionnement du backend m’aide à mieux structurer les échanges de données et à concevoir des interfaces plus cohérentes avec l’API.</p>
            <p>Enfin, le projet m’a appris qu’une interface accessible ne repose pas sur une seule fonctionnalité. Elle demande de vérifier la structure des pages, les intitulés, les messages dynamiques, la navigation et les différents parcours utilisateur tout au long du développement.</p>
          </section>

          <section class="miam-final card">
            <h2>Découvrir Miam DV</h2>
            <p>Le code du front-end, du backend et du serveur MCP est disponible sur GitHub.</p>
            <div class="miam-actions">
              <BaseButton href="https://miamdv.diogo-andrade.org/">Voir l’application</BaseButton>
              <BaseButton href="https://github.com/Diogo444/Miam-DV" variant="secondary">Consulter le dépôt GitHub</BaseButton>
              <BaseButton to="/#projects" variant="outline">Découvrir mes autres projets</BaseButton>
            </div>
          </section>
        </template>

        <template v-else-if="project.slug === 'qrela'">
          <section class="qrela-section qrela-origin">
            <p class="eyebrow">L’origine</p>
            <h2>Un outil né d’un besoin personnel</h2>
            <div class="qrela-origin__prose">
              <p>Qrela est né d’un besoin assez simple : je cherchais un moyen de créer rapidement un QR code sans devoir ouvrir un compte ou découvrir, au moment du téléchargement, que certaines fonctions étaient payantes.</p>
              <p>J’aurais pu utiliser l’un des nombreux générateurs déjà disponibles, mais j’ai préféré créer mon propre outil. Cela me permettait de répondre à mon besoin tout en travaillant davantage avec JavaScript vanilla, sans utiliser Angular ou Vue pour gérer l’interface.</p>
              <p>Le projet a ensuite évolué pour devenir un outil public. L’objectif était de proposer un générateur gratuit, utilisable immédiatement et suffisamment complet pour ne pas se limiter à une simple URL.</p>
            </div>
          </section>

          <section class="qrela-section">
            <p class="eyebrow">Contenus</p>
            <h2>Plusieurs types de contenus dans un même générateur</h2>
            <p class="qrela-section__lead">Chaque choix adapte les champs affichés dans le formulaire. L’aperçu est mis à jour directement pendant la saisie, sans avoir à relancer la génération.</p>
            <div class="qrela-types">
              <article class="qrela-type card"><span class="material-symbols-outlined" aria-hidden="true">link</span><div><h3>URL</h3><p>Ouvrir un site ou une page</p></div></article>
              <article class="qrela-type card"><span class="material-symbols-outlined" aria-hidden="true">notes</span><div><h3>Texte</h3><p>Afficher un contenu libre</p></div></article>
              <article class="qrela-type card"><span class="material-symbols-outlined" aria-hidden="true">mail</span><div><h3>Email</h3><p>Préparer un message</p></div></article>
              <article class="qrela-type card"><span class="material-symbols-outlined" aria-hidden="true">call</span><div><h3>Téléphone</h3><p>Composer un numéro</p></div></article>
              <article class="qrela-type card"><span class="material-symbols-outlined" aria-hidden="true">sms</span><div><h3>SMS</h3><p>Préparer un SMS</p></div></article>
              <article class="qrela-type card"><span class="material-symbols-outlined" aria-hidden="true">wifi</span><div><h3>Wi-Fi</h3><p>Partager les informations d’un réseau</p></div></article>
            </div>
            <div class="qrela-export">
              <span class="material-symbols-outlined" aria-hidden="true">download</span>
              <p>Une fois le QR code terminé, il peut être téléchargé en <strong>PNG</strong> pour une utilisation courante ou en <strong>SVG</strong> pour conserver une image nette lors d’une impression ou d’un agrandissement.</p>
            </div>
          </section>

          <section class="qrela-section qrela-customization">
            <figure class="qrela-figure">
              <img
                src="/projets/qrela/apparence.png"
                width="1920"
                height="1080"
                loading="lazy"
                alt="Options de personnalisation de Qrela avec le choix des couleurs, du style des points, des coins et l’ajout d’un logo."
              >
              <figcaption>Les réglages d’apparence permettent d’ajuster précisément le rendu du QR code.</figcaption>
            </figure>
            <div class="qrela-prose">
              <p class="eyebrow">Personnalisation</p>
              <h2>Personnaliser le QR code sans compliquer son utilisation</h2>
              <p>Je ne voulais pas limiter Qrela à la génération d’un carré noir et blanc. L’outil propose plusieurs réglages pour adapter le résultat à un site, une affiche ou un document.</p>
              <p>Il est possible de modifier la taille, la marge, le style des points, la forme des coins et les couleurs. Qrela prend également en charge les dégradés, les fonds transparents et l’ajout d’une image ou d’un logo au centre.</p>
              <p>J’ai ajouté plusieurs presets pour obtenir rapidement un style classique, sombre, coloré ou avec un contraste renforcé. Les réglages plus précis restent disponibles pour les personnes qui souhaitent créer leur propre apparence.</p>
              <p>La personnalisation doit néanmoins conserver un QR code lisible. L’interface explique donc le rôle de la marge, du contraste et du niveau de correction d’erreur.</p>
            </div>
          </section>

          <section class="qrela-section qrela-privacy">
            <p class="eyebrow">Confidentialité</p>
            <h2>Une génération locale, sans compte</h2>
            <p>Qrela fonctionne entièrement dans le navigateur. Le texte, le mot de passe Wi-Fi ou toute autre information saisie n’est pas envoyé à un serveur pour produire l’image.</p>
            <div class="qrela-privacy__grid">
              <article><span class="material-symbols-outlined" aria-hidden="true">person_off</span><h3>Aucune inscription</h3><p>Pas de compte utilisateur, de tableau de bord ni de stockage des QR codes générés.</p></article>
              <article><span class="material-symbols-outlined" aria-hidden="true">shield_lock</span><h3>Données conservées localement</h3><p>Le contenu est transformé en QR code directement dans le navigateur.</p></article>
              <article><span class="material-symbols-outlined" aria-hidden="true">all_inclusive</span><h3>Aucune limite de scans</h3><p>Le lien n’est pas redirigé et Qrela ne suit pas le nombre d’utilisations.</p></article>
            </div>
            <p class="qrela-privacy__note"><strong>À savoir :</strong> les QR codes créés sont statiques. Une fois téléchargés, leur contenu ne peut plus être modifié. Pour changer une adresse ou un texte, il faut en générer un nouveau.</p>
          </section>

          <section class="qrela-section qrela-code">
            <div class="qrela-prose">
              <p class="eyebrow">Développement</p>
              <h2>Construire l’interface en JavaScript vanilla</h2>
              <p>J’ai volontairement développé Qrela en JavaScript vanilla avec Vite. Ce choix m’a permis de travailler directement sur la gestion des événements, l’état de l’interface et la mise à jour du QR code, sans m’appuyer sur le système de composants d’un framework.</p>
              <p>La bibliothèque <code>qr-code-styling</code> prend en charge la génération et la personnalisation du QR code. Tailwind CSS permet de conserver une présentation cohérente sur ordinateur comme sur mobile.</p>
              <p>Cette organisation était importante, car l’application possède de nombreux réglages qui doivent rester synchronisés. Une modification de couleur, de contenu ou de taille doit immédiatement être visible dans l’aperçu sans provoquer une régénération inutile à chaque frappe.</p>
            </div>
            <div class="qrela-code__map" aria-label="Organisation du code de Qrela">
              <article><span>01</span><h3>Génération et export</h3><p>Création du QR code et téléchargement en PNG ou SVG.</p></article>
              <article><span>02</span><h3>Gestion de l’interface</h3><p>Événements du formulaire et mise à jour de l’aperçu.</p></article>
              <article><span>03</span><h3>État de l’application</h3><p>Synchronisation du contenu et des réglages visuels.</p></article>
              <article><span>04</span><h3>Validation et presets</h3><p>Contrôle des données et styles prêts à utiliser.</p></article>
            </div>
          </section>

          <section class="qrela-section qrela-deployment">
            <div>
              <p class="eyebrow">Mise en ligne</p>
              <h2>Un outil déployé et mis à jour automatiquement</h2>
              <p>Qrela est construit avec Vite puis servi par Nginx dans un conteneur Docker. Le conteneur rejoint le réseau utilisé par Caddy, qui rend ensuite l’application accessible depuis son sous-domaine.</p>
              <p>Le déploiement est automatisé avec GitHub Actions. Lorsqu’une modification est envoyée sur la branche principale, le workflow se connecte à mon VPS, récupère la nouvelle version du dépôt et reconstruit le conteneur.</p>
              <p>Cette partie du projet m’a permis d’aller au-delà de la création de l’interface. Qrela est un véritable outil public que je peux corriger et faire évoluer sans effectuer manuellement toutes les étapes du déploiement.</p>
            </div>
            <div class="qrela-deployment__flow" aria-label="Chaîne de déploiement de Qrela">
              <div><strong>GitHub Actions</strong><span>Automatisation</span></div>
              <span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span>
              <div><strong>Docker + Nginx</strong><span>Construction et service</span></div>
              <span class="material-symbols-outlined" aria-hidden="true">arrow_downward</span>
              <div><strong>Caddy + VPS</strong><span>Mise à disposition publique</span></div>
            </div>
          </section>

          <section class="qrela-section qrela-learnings">
            <p class="eyebrow">Bilan</p>
            <h2>Ce que je retiens de Qrela</h2>
            <div class="qrela-learnings__grid">
              <div class="qrela-prose">
                <p>Qrela m’a permis de revenir aux bases du développement front-end en construisant une interface dynamique avec JavaScript vanilla.</p>
                <p>J’ai travaillé sur la transformation de plusieurs types de données, la synchronisation d’un formulaire avec un aperçu en temps réel, la personnalisation d’un rendu graphique et l’export dans plusieurs formats.</p>
                <p>Le projet m’a également appris à réfléchir à ce qui se passe après le développement : confidentialité des données, pages d’aide, référencement, déploiement et maintenance.</p>
              </div>
              <blockquote>Aujourd’hui, Qrela est disponible gratuitement et peut être utilisé sans créer de compte. Il répond toujours au besoin qui m’avait poussé à le développer, tout en étant accessible à d’autres personnes.</blockquote>
            </div>
          </section>

          <section class="qrela-final card">
            <p class="eyebrow">À vous de créer</p>
            <h2>Créer votre QR code avec Qrela</h2>
            <p>L’outil est disponible gratuitement, sans inscription et directement depuis votre navigateur.</p>
            <div class="qrela-actions">
              <BaseButton href="https://qrela.diogo-andrade.org/">Essayer Qrela</BaseButton>
              <BaseButton to="/#projects" variant="outline">Voir mes autres projets</BaseButton>
            </div>
          </section>
        </template>

        <template v-else>
          <section>
            <h2>Présentation du projet</h2>
            <p>{{ project.summary }}</p>
          </section>
        </template>

        <section v-if="project.slug !== 'ginku' && project.slug !== 'miam-dv' && project.slug !== 'qrela' && project.slug !== 'coursfinder'">
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
