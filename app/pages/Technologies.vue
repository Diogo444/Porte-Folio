<script setup lang="ts">
import { site, technologies } from '~/data/portfolio'
import BaseButton from '../components/ui/BaseButton.vue'

usePageSeo({
  title: 'Technologies front-end et compétences Angular | Diogo Andrade',
  description:
    'Découvrez mes compétences en Angular, TypeScript, Vue.js et accessibilité web, ainsi que mes connaissances en Node.js, NestJS, Docker et Git.',
  path: '/technologies',
})

useJsonLd('technologies-page-structured-data', [
  createBreadcrumbJsonLd([
    { name: 'Accueil', path: '/' },
    { name: 'Technologies', path: '/technologies' },
  ]),
  {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': absoluteSiteUrl('/technologies#technologies-page'),
    url: absoluteSiteUrl('/technologies'),
    name: 'Technologies et compétences techniques de Diogo Andrade',
    description: 'Compétences front-end Angular, accessibilité web, intégration d’API et déploiement.',
    inLanguage: 'fr-FR',
    about: technologies.map((tech) => tech.name),
  },
])
</script>

<template>
  <main class="page-main">
    <section class="page-hero technologies-hero">
      <div class="container">
        <p class="eyebrow">Mon savoir-faire technique</p>
        <h1>Technologies et compétences techniques</h1>
        <p>Mon profil est principalement orienté vers le développement front-end avec Angular et TypeScript. J’utilise ces technologies pour construire des interfaces structurées, connecter des API et répondre à des besoins concrets.</p>
        <p>Je travaille également avec Vue.js, Tailwind CSS et JavaScript. Mes connaissances en backend et en déploiement complètent mon profil et me permettent de comprendre le fonctionnement d’une application web dans son ensemble.</p>
        <BaseButton to="/#projects" variant="secondary">Découvrir mes projets</BaseButton>
      </div>
    </section>

    <article class="container technologies-page">
      <section class="technologies-primary card" aria-labelledby="angular-title">
        <div class="technologies-primary__content">
          <p class="eyebrow">Technologies principales</p>
          <h2 id="angular-title">Angular et TypeScript</h2>
          <p>Angular constitue la technologie principale de mon parcours de développeur front-end. Je l’utilise pour organiser des applications en composants réutilisables, gérer la navigation, créer des formulaires et intégrer les données provenant d’API.</p>
          <p>TypeScript m’aide à structurer le code, à définir clairement les données manipulées et à détecter certaines erreurs pendant le développement.</p>
          <ul class="technologies-checklist">
            <li>Composants standalone</li>
            <li>Routing et navigation</li>
            <li>Formulaires réactifs</li>
            <li>Services et injection de dépendances</li>
            <li>Appels HTTP et intégration d’API</li>
            <li>Angular Material</li>
            <li>Interfaces responsives</li>
            <li>Accessibilité des composants</li>
          </ul>
        </div>
        <div class="technologies-primary__aside">
          <img src="/assets/SVG/angular.svg" alt="" aria-hidden="true">
          <ul class="technologies-pills" aria-label="Technologies Angular principales">
            <li>Angular</li>
            <li>TypeScript</li>
            <li>Angular Material</li>
          </ul>
          <NuxtLink class="text-link" to="/projects/miam-dv">Voir un projet développé avec Angular</NuxtLink>
        </div>
      </section>

      <section class="technologies-section" aria-labelledby="frontend-title">
        <div class="technologies-section__heading">
          <p class="eyebrow">Front-end</p>
          <h2 id="frontend-title">Développement d’interfaces web</h2>
          <p>Je sélectionne les outils front-end en fonction des besoins du projet. Angular reste ma technologie principale, mais j’ai également développé plusieurs applications avec Vue.js et des interfaces reposant sur JavaScript.</p>
        </div>
        <div class="technologies-card-grid">
          <article class="technology-skill-card card">
            <h3>Vue.js</h3>
            <p>J’utilise Vue.js pour créer des interfaces réactives et organiser une application en composants. Cette technologie est notamment utilisée dans Ginku et CoursFinder.</p>
          </article>
          <article class="technology-skill-card card">
            <h3>HTML, CSS et Tailwind CSS</h3>
            <p>Je porte une attention particulière à la structure HTML, au responsive design et à la lisibilité des interfaces. Tailwind CSS me permet de construire rapidement une mise en page tout en conservant une organisation cohérente des styles.</p>
          </article>
          <article class="technology-skill-card card">
            <h3>JavaScript</h3>
            <p>JavaScript me permet de développer des interactions directement dans le navigateur et de comprendre le fonctionnement sur lequel reposent les frameworks que j’utilise.</p>
          </article>
        </div>
      </section>

      <section class="technologies-section technologies-accessibility" aria-labelledby="accessibility-title">
        <div class="technologies-section__heading">
          <p class="eyebrow">Qualité des interfaces</p>
          <h2 id="accessibility-title">L’accessibilité intégrée au développement</h2>
          <p>L’accessibilité ne constitue pas une étape ajoutée à la fin d’un projet. Je la prends en compte dès la structure de l’interface et pendant son développement.</p>
          <p>Je vérifie notamment la cohérence des titres, l’utilisation des éléments HTML appropriés, la navigation au clavier, la visibilité du focus et l’étiquetage des champs de formulaire. Je teste également le comportement des interfaces avec l’agrandissement du texte et différents lecteurs d’écran.</p>
        </div>
        <ul class="technologies-points">
          <li>HTML sémantique</li>
          <li>Navigation au clavier</li>
          <li>Gestion du focus</li>
          <li>Formulaires accessibles</li>
          <li>Compatibilité avec les lecteurs d’écran</li>
          <li>Lisibilité et agrandissement du texte</li>
          <li>Attributs ARIA lorsqu’ils sont nécessaires</li>
        </ul>
      </section>

      <section class="technologies-section technologies-backend" aria-labelledby="backend-title">
        <div class="technologies-section__heading">
          <p class="eyebrow">Compétences complémentaires</p>
          <h2 id="backend-title">Backend et intégration d’API</h2>
          <p>Même si je souhaite me spécialiser dans le développement front-end, je possède des connaissances en Node.js et NestJS. Je les utilise pour créer des API, traiter des données et connecter mes interfaces à différents services.</p>
          <p>Ces compétences me permettent de réaliser des projets complets, mais aussi de mieux comprendre les échanges entre le front-end et le backend au sein d’une équipe.</p>
        </div>
        <ul class="technologies-pills" aria-label="Compétences backend complémentaires">
          <li>Node.js</li>
          <li>NestJS</li>
          <li>API REST</li>
          <li>Authentification</li>
          <li>Bases de données</li>
          <li>Services externes</li>
        </ul>
      </section>

      <section class="technologies-section" aria-labelledby="tools-title">
        <div class="technologies-section__heading">
          <p class="eyebrow">Workflow</p>
          <h2 id="tools-title">Outils de développement et déploiement</h2>
        </div>
        <div class="technologies-tools">
          <article class="technology-tool card">
            <h3>Git et GitHub</h3>
            <p>J’utilise Git et GitHub pour versionner mes projets, travailler avec des branches et organiser les modifications à l’aide de pull requests.</p>
          </article>
          <article class="technology-tool card">
            <h3>Docker et Caddy</h3>
            <p>Je conteneurise mes applications avec Docker et je déploie plusieurs de mes projets sur mes propres serveurs. Caddy me permet de gérer leur exposition sur le Web et les certificats HTTPS.</p>
          </article>
          <article class="technology-tool card">
            <h3>Elasticsearch</h3>
            <p>J’ai découvert Elasticsearch avec CoursFinder, un projet permettant d’importer et d’indexer le contenu de documents afin d’effectuer des recherches par mots-clés.</p>
          </article>
        </div>
      </section>

      <section class="technologies-section" aria-labelledby="projects-technologies-title">
        <div class="technologies-section__heading">
          <p class="eyebrow">Mise en pratique</p>
          <h2 id="projects-technologies-title">Ces technologies dans mes projets</h2>
          <p>Mes projets montrent comment j’utilise ces technologies dans des situations concrètes, depuis la conception de l’interface jusqu’à son intégration avec une API et son déploiement.</p>
        </div>
        <div class="technologies-table-wrapper" tabindex="0" role="region" aria-label="Technologies utilisées par projet">
          <table class="technologies-table">
            <thead><tr><th scope="col">Projet</th><th scope="col">Front-end</th><th scope="col">Backend et données</th><th scope="col">Déploiement</th></tr></thead>
            <tbody>
              <tr><th scope="row"><NuxtLink to="/projects/miam-dv">Miam DV</NuxtLink></th><td>Angular, Angular Material</td><td>Node.js</td><td>Docker</td></tr>
              <tr><th scope="row"><NuxtLink to="/projects/ginku">Ginku</NuxtLink></th><td>Vue.js</td><td>Node.js, API Ginko</td><td>Docker, Caddy</td></tr>
              <tr><th scope="row"><NuxtLink to="/projects/coursfinder">CoursFinder</NuxtLink></th><td>Vue.js, Tailwind CSS</td><td>Elasticsearch</td><td>Docker</td></tr>
              <tr><th scope="row"><NuxtLink to="/projects/qrela">Qrela</NuxtLink></th><td>JavaScript, Vite, Tailwind CSS</td><td>Traitement dans le navigateur</td><td>Déploiement web</td></tr>
            </tbody>
          </table>
        </div>
        <BaseButton to="/#projects" variant="secondary">Explorer mes projets</BaseButton>
      </section>

      <section class="technologies-cta card" aria-labelledby="technologies-cta-title">
        <h2 id="technologies-cta-title">Mon profil vous intéresse ?</h2>
        <p>Je terminerai mon BTS CIEL en juillet 2027 et souhaite ensuite rejoindre une entreprise en CDI en tant que développeur front-end Angular.</p>
        <div class="technologies-cta__actions">
          <BaseButton :href="site.cv" download><span class="material-symbols-outlined" aria-hidden="true">download</span>Consulter mon CV</BaseButton>
          <BaseButton to="/contact" variant="secondary">Me contacter</BaseButton>
        </div>
      </section>
    </article>
  </main>
</template>
