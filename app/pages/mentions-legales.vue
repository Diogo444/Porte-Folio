<script setup lang="ts">
import { site } from '~/data/portfolio'

useHead({
  title: 'Mentions légales – Diogo Andrade',
  meta: [
    {
      name: 'description',
      content:
        "Mentions légales du site diogo-andrade.org. Informations sur l'éditeur, l'hébergeur, la propriété intellectuelle et les conditions d'utilisation.",
    },
  ],
})
</script>

<template>
  <main class="page-main">
    <section class="page-hero">
      <div class="container">
        <h1>Mentions légales</h1>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance
          dans l'économie numérique.
        </p>
      </div>
    </section>

    <article class="article-container">
      <div class="article-content">
        <section>
          <h2>Éditeur du site</h2>
          <p>Le présent site <strong>diogo-andrade.org</strong> est édité par :</p>
          <ul>
            <li><strong>Nom :</strong> {{ site.name }}</li>
            <li><strong>Statut :</strong> Particulier (site personnel à caractère non commercial)</li>
            <li><strong>Adresse email :</strong> {{ site.email }}</li>
            <li><strong>Site web :</strong> {{ site.url }}</li>
          </ul>
          <p>
            Ce site est un portfolio personnel présentant mes compétences et réalisations en développement web.
            Il n'a pas vocation à exercer une activité commerciale directe.
          </p>
        </section>

        <section>
          <h2>Directeur de la publication</h2>
          <p>Le directeur de la publication du site est <strong>{{ site.name }}</strong>.</p>
          <p>
            En cette qualité, il est responsable du contenu publié sur le site et peut être contacté
            à l'adresse email : <strong>{{ site.email }}</strong>.
          </p>
        </section>

        <section>
          <h2>Hébergement</h2>
          <p>Le site diogo-andrade.org est hébergé par :</p>
          <ul>
            <li><strong>Hébergeur :</strong> GitHub Pages</li>
            <li><strong>Société :</strong> GitHub, Inc.</li>
            <li><strong>Adresse :</strong> 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis</li>
            <li><strong>Site web :</strong> <a href="https://pages.github.com" target="_blank" rel="noopener noreferrer">pages.github.com</a></li>
          </ul>
          <p>
            GitHub Pages est un service d'hébergement de sites web statiques fourni par GitHub,
            filiale de Microsoft Corporation.
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, code source, etc.)
            est la propriété exclusive de Diogo Andrade, sauf mention contraire explicite.
          </p>
          <h3>Droits d'auteur</h3>
          <p>
            Toute reproduction, représentation, modification, publication ou adaptation des éléments du site
            est interdite sans autorisation écrite préalable, sauf citation courte, usage privé ou partage via
            les fonctionnalités prévues.
          </p>
          <h3>Ressources tierces</h3>
          <ul>
            <li><strong>Google Fonts (Inter)</strong> : polices sous licence Open Font License.</li>
            <li><strong>Material Symbols</strong> : icônes Google sous licence Apache 2.0.</li>
            <li><strong>Nuxt</strong> : framework Vue sous licence MIT.</li>
          </ul>
        </section>

        <section>
          <h2>Conditions d'utilisation</h2>
          <p>
            L'utilisation du site diogo-andrade.org implique l'acceptation pleine et entière des conditions
            générales d'utilisation décrites ci-après.
          </p>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d'un accès à Internet. Je m'efforce
            de maintenir le site disponible, mais ne peux garantir une disponibilité permanente.
          </p>
        </section>

        <section>
          <h2>Protection des données personnelles</h2>
          <p>
            La collecte et le traitement des données personnelles sont régis par la
            <NuxtLink to="/politique-de-confidentialite">Politique de confidentialité</NuxtLink>,
            conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Pour toute question concernant ces mentions légales ou le site en général :</p>
          <ul>
            <li><strong>Email :</strong> {{ site.email }}</li>
            <li><strong>Page de contact :</strong> <NuxtLink to="/contact">diogo-andrade.org/contact</NuxtLink></li>
            <li><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/diogo-andrade-3874b0305" target="_blank" rel="noopener noreferrer">Diogo Andrade</a></li>
          </ul>
        </section>
      </div>
    </article>
  </main>
</template>
