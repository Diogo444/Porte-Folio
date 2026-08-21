<script setup lang="ts">
import { site } from '~/data/portfolio'
import BaseButton from '../components/ui/BaseButton.vue'

usePageSeo({
  title: 'À propos de Diogo Andrade | Développeur front-end Angular',
  description:
    'Découvrez le parcours de Diogo Andrade, développeur front-end Angular à Besançon, étudiant en BTS CIEL et disponible pour un CDI dès juillet 2027.',
  path: '/a-propos',
  type: 'profile',
})

useJsonLd('about-breadcrumbs', createBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/a-propos' },
]))
</script>

<template>
  <main class="page-main">
    <section class="page-hero about-page-hero">
      <div class="container about-page-hero__grid">
        <div class="about-page-hero__content">
          <p class="eyebrow">À propos de moi</p>
          <h1>Mon parcours vers le développement front-end</h1>
          <p>
            Je m’appelle Diogo Andrade et je me spécialise dans le développement web front-end,
            principalement avec Angular et TypeScript.
          </p>
          <p>
            Actuellement en BTS CIEL, option Informatique et Réseaux, je développe mes compétences
            à travers ma formation, mes expériences en entreprise et des projets personnels répondant
            à des besoins concrets. Je terminerai mon BTS en juillet 2027 et souhaite ensuite rejoindre
            une équipe en CDI en tant que développeur front-end.
          </p>
          <div class="about-page-hero__actions">
            <BaseButton :href="site.cv" download>
              <span class="material-symbols-outlined" aria-hidden="true">download</span>
              Télécharger mon CV
            </BaseButton>
            <BaseButton to="/#projects" variant="secondary">Découvrir mes projets</BaseButton>
          </div>
        </div>

        <aside class="about-summary card" aria-labelledby="about-summary-title">
          <h2 id="about-summary-title">Mon profil en bref</h2>
          <dl>
            <div><dt>Profil</dt><dd>Développeur front-end</dd></div>
            <div><dt>Technologie principale</dt><dd>Angular et TypeScript</dd></div>
            <div><dt>Formation</dt><dd>BTS CIEL — Informatique et Réseaux</dd></div>
            <div><dt>Localisation</dt><dd>Besançon</dd></div>
            <div><dt>Disponibilité</dt><dd>À partir de juillet 2027</dd></div>
          </dl>
        </aside>
      </div>
    </section>

    <article class="container about-page">
      <section class="about-page__section" aria-labelledby="approach-title">
        <div class="about-page__heading">
          <p class="eyebrow">Ma manière de développer</p>
          <h2 id="approach-title">Une approche centrée sur les usages</h2>
        </div>
        <div class="about-page__prose">
          <p>J’apprécie particulièrement le travail sur les interfaces : organiser l’information, construire des composants réutilisables et rendre une application compréhensible dès les premières interactions. Angular est aujourd’hui ma technologie principale, complétée par Vue.js et Tailwind CSS.</p>
          <p>Étant moi-même malvoyant, je connais directement les difficultés provoquées par une interface mal structurée. Je sais utiliser différents lecteurs d’écran et j’ai déjà accompagné plusieurs personnes déficientes visuelles dans leur prise en main. Cette expérience m’aide à repérer des problèmes qui peuvent facilement passer inaperçus lors du développement.</p>
          <p>Je possède également des compétences en Node.js, NestJS, bases de données et déploiement Docker. Mon objectif n’est pas de me présenter comme développeur backend, mais de comprendre le fonctionnement global d’une application et de collaborer efficacement avec les autres membres d’une équipe.</p>
        </div>

        <div class="about-strengths">
          <article class="about-strength card">
            <h3>Front-end en priorité</h3>
            <p>Je souhaite principalement travailler sur des applications Angular, la conception des interfaces et l’intégration des données provenant d’API.</p>
          </article>
          <article class="about-strength card">
            <h3>Accessibilité concrète</h3>
            <p>Je vérifie notamment la structure sémantique, la navigation au clavier, le redimensionnement du texte et la compatibilité avec les technologies d’assistance.</p>
          </article>
          <article class="about-strength card">
            <h3>Vision d’ensemble</h3>
            <p>Mes compétences backend et DevOps me permettent de suivre les données depuis l’API jusqu’à l’interface et de déployer mes propres projets.</p>
          </article>
        </div>
      </section>

      <section class="about-page__section" aria-labelledby="experience-title">
        <div class="about-page__heading">
          <p class="eyebrow">Expériences professionnelles</p>
          <h2 id="experience-title">Mes expériences en entreprise</h2>
          <p>Mes stages et mon CDD m’ont permis de travailler sur des projets réellement utilisés, de découvrir différents environnements techniques et de progresser dans la conception d’applications web.</p>
        </div>
        <ol class="about-timeline about-timeline--experiences">
          <li>
            <p class="about-timeline__date">Juillet 2026</p>
            <div class="about-timeline__content"><h3>Développeur Web et IA en CDD</h3><p class="about-timeline__place">Wooplee SAS — Besançon</p><p>Création d’un agent connecté à l’API OpenAI et d’un serveur MCP destiné à l’administration de sites WordPress, avec une gestion sécurisée des accès et un assistant pour la configuration de formulaires ACF.</p></div>
          </li>
          <li>
            <p class="about-timeline__date">Mai à juillet 2026</p>
            <div class="about-timeline__content"><h3>Stagiaire développeur WordPress</h3><p class="about-timeline__place">Wooplee SAS — Besançon</p><p>Conception de widgets Elementor accessibles et personnalisables, regroupés dans un plugin interne afin de faciliter leur réutilisation sur différents projets WordPress.</p></div>
          </li>
          <li>
            <p class="about-timeline__date">Mai à juillet 2025</p>
            <div class="about-timeline__content"><h3>Stagiaire développeur web full-stack</h3><p class="about-timeline__place">Amphenol FCI — Besançon</p><p>Développement d’une application de gestion des signatures d’e-mail avec Angular et Node.js, comprenant une authentification Active Directory, la personnalisation des signatures et la gestion des administrateurs.</p></div>
          </li>
          <li>
            <p class="about-timeline__date">Décembre 2024 à janvier 2025</p>
            <div class="about-timeline__content"><h3>Stagiaire développeur web full-stack</h3><p class="about-timeline__place">Amphenol FCI — Besançon</p><p>Développement d’une application de traçabilité avec Angular et Node.js : import de données Excel, création d’une API, recherche dans les données et export des résultats.</p></div>
          </li>
          <li>
            <p class="about-timeline__date">Avril à mai 2024</p>
            <div class="about-timeline__content"><h3>Stagiaire développeur web full-stack</h3><p class="about-timeline__place">IDEE Numérique — Besançon</p><p>Développement et amélioration d’une application Symfony comprenant une authentification, une interface d’administration, une base de données et l’affichage dynamique des informations.</p></div>
          </li>
          <li>
            <p class="about-timeline__date">Janvier à février 2024</p>
            <div class="about-timeline__content"><h3>Stagiaire développeur web</h3><p class="about-timeline__place">Club Arcade — Besançon</p><p>Création de deux sites web avec HTML, CSS, JavaScript, PHP, Bootstrap et MariaDB.</p></div>
          </li>
          <li>
            <p class="about-timeline__date">Mai à juin 2023</p>
            <div class="about-timeline__content"><h3>Stagiaire technicien informatique et réseaux</h3><p class="about-timeline__place">Lycées Pasteur, Condé et Simone Veil — Besançon</p><p>Maintenance et déploiement de postes Windows, assistance aux utilisateurs et création de scripts pour automatiser certaines tâches d’administration.</p></div>
          </li>
        </ol>
      </section>

      <section class="about-page__section" aria-labelledby="education-title">
        <div class="about-page__heading">
          <p class="eyebrow">Formation</p>
          <h2 id="education-title">Ma formation</h2>
          <p>Mon parcours m’a progressivement conduit des systèmes informatiques et des réseaux vers une spécialisation dans le développement web.</p>
        </div>
        <ol class="about-timeline">
          <li>
            <p class="about-timeline__date">2025–2027</p>
            <div class="about-timeline__content">
              <h3>BTS CIEL — Informatique et Réseaux</h3>
              <p class="about-timeline__place">Lycée Jules Haag, Besançon</p>
              <p>Je poursuis actuellement ce BTS afin d’approfondir mes compétences en programmation, réseaux, bases de données et conception de solutions informatiques. La fin de ma formation est prévue en juillet 2027.</p>
            </div>
          </li>
          <li>
            <p class="about-timeline__date">2022–2025</p>
            <div class="about-timeline__content">
              <h3>Baccalauréat professionnel Systèmes Numériques</h3>
              <p>Cette formation m’a permis de découvrir différents domaines de l’informatique, des réseaux et du développement. J’y ai acquis mes premières expériences professionnelles et confirmé mon intérêt pour la création d’applications web.</p>
            </div>
          </li>
        </ol>
      </section>

      <section class="about-page__section" aria-labelledby="projects-title">
        <div class="about-page__heading">
          <p class="eyebrow">Projets personnels</p>
          <h2 id="projects-title">Apprendre en développant mes propres projets</h2>
          <p>En parallèle de ma formation et de mes expériences professionnelles, je développe des applications à partir de difficultés ou de besoins que je rencontre réellement. Ces projets me permettent d’expérimenter librement, de prendre des décisions techniques et d’assurer moi-même leur déploiement.</p>
        </div>
        <div class="about-projects">
          <article class="about-project card"><h3><NuxtLink to="/projects/ginku">Ginku</NuxtLink></h3><p>Une application Vue.js et Node.js facilitant la consultation des lignes, des arrêts et des horaires du réseau de transport de Besançon.</p></article>
          <article class="about-project card"><h3><NuxtLink to="/projects/miam-dv">Miam DV</NuxtLink></h3><p>Une application Angular et NestJS permettant aux jeunes déficients visuels de consulter plus facilement les menus de leur internat.</p></article>
          <article class="about-project card"><h3><NuxtLink to="/projects/coursfinder">CoursFinder</NuxtLink></h3><p>Un moteur de recherche qui extrait le contenu de documents Word et l’indexe dans Elasticsearch afin de retrouver rapidement une information dans mes cours.</p></article>
          <article class="about-project card"><h3><NuxtLink to="/projects/qrela">Qrela</NuxtLink></h3><p>Un générateur de QR codes personnalisables fonctionnant directement dans le navigateur, sans inscription ni envoi des données vers un serveur.</p></article>
        </div>
        <BaseButton to="/#projects" variant="secondary">Voir tous mes projets</BaseButton>
      </section>

      <section class="about-objective card" aria-labelledby="objective-title">
        <p class="eyebrow">Après mon BTS</p>
        <h2 id="objective-title">Rejoindre une équipe en tant que développeur front-end</h2>
        <p>À partir de juillet 2027, je souhaite poursuivre mon parcours en CDI sur un poste de développeur front-end, avec Angular comme technologie principale.</p>
        <p>Je recherche un environnement dans lequel je pourrai contribuer à des applications concrètes, travailler avec d’autres développeurs et continuer à approfondir mes compétences techniques et mes connaissances en accessibilité numérique.</p>
        <div class="about-objective__actions">
          <BaseButton :href="site.cv" download><span class="material-symbols-outlined" aria-hidden="true">download</span>Télécharger mon CV</BaseButton>
          <BaseButton to="/contact" variant="secondary">Me contacter</BaseButton>
        </div>
      </section>
    </article>
  </main>
</template>
