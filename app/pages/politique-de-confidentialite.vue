<script setup lang="ts">
import { site } from '~/data/portfolio'

usePageSeo({
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité du site diogo-andrade.org : données collectées, cookies, Google Analytics, Google AdSense, sécurité et droits RGPD.',
  path: '/politique-de-confidentialite',
})

useJsonLd('privacy-breadcrumbs', createBreadcrumbJsonLd([
  { name: 'Accueil', path: '/' },
  { name: 'Politique de confidentialité', path: '/politique-de-confidentialite' },
]))
</script>

<template>
  <main class="page-main">
    <section class="page-hero">
      <div class="container">
        <h1>Politique de confidentialité</h1>
        <p>Dernière mise à jour : 5 août 2026</p>
      </div>
    </section>

    <article class="article-container">
      <div class="article-content">
        <section>
          <h2>Introduction</h2>
          <p>
            La présente politique de confidentialité décrit comment le site <strong>diogo-andrade.org</strong>
            collecte, utilise et protège les informations des visiteurs. Nous attachons une grande importance
            à la protection de votre vie privée et nous nous engageons à respecter le RGPD.
          </p>
        </section>

        <section>
          <h2>Responsable du traitement</h2>
          <ul>
            <li><strong>Nom :</strong> {{ site.name }}</li>
            <li><strong>Email :</strong> {{ site.email }}</li>
            <li><strong>Site web :</strong> {{ site.url }}</li>
          </ul>
          <p>
            Pour toute question relative à la protection de vos données personnelles, vous pouvez me contacter
            à l'adresse email indiquée ci-dessus.
          </p>
        </section>

        <section>
          <h2>Données collectées</h2>
          <p>
            Ce site est un portfolio personnel qui ne collecte que très peu de données. Des données de navigation
            anonymes peuvent être utilisées à des fins statistiques pour améliorer l'expérience utilisateur.
          </p>
          <h3>Données de contact</h3>
          <p>
            Si vous choisissez de me contacter par email, vous me fournissez volontairement votre adresse email
            et les informations contenues dans votre message. Ces données sont utilisées uniquement pour répondre
            à votre demande.
          </p>
        </section>

        <section>
          <h2>Cookies et technologies similaires</h2>
          <p>
            Le site utilise un cookie fonctionnel, stocké localement, pour mémoriser votre préférence d'affichage
            en mode sombre ou clair. Ce cookie est nécessaire au confort d'utilisation.
          </p>

          <h3>Google Analytics</h3>
          <p>
            Avec votre accord, le site utilise Google Analytics afin de mesurer de manière agrégée la fréquentation
            et les pages consultées. Aucun script Google Analytics n'est chargé avant votre acceptation des cookies
            statistiques. Votre choix est enregistré localement dans votre navigateur et vous pouvez le modifier en
            supprimant les données du site dans les paramètres de votre navigateur.
          </p>

          <h3>Gestion des cookies</h3>
          <p>
            Vous pouvez à tout moment modifier vos préférences en matière de cookies via les paramètres de votre
            navigateur.
          </p>
        </section>

        <section>
          <h2>Google AdSense</h2>
          <p>
            Ce site est susceptible d'afficher des publicités fournies par <strong>Google AdSense</strong>.
            Google utilise des cookies pour diffuser des annonces basées sur vos centres d'intérêt et votre historique
            de navigation.
          </p>
          <p>
            Pour en savoir plus :
            <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
              Comment Google utilise les données
            </a>.
          </p>
        </section>

        <section>
          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
          <ul>
            <li><strong>Droit d'accès</strong> : demander à connaître les données vous concernant.</li>
            <li><strong>Droit de rectification</strong> : demander la correction de données inexactes.</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données.</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données.</li>
            <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format lisible.</li>
          </ul>
          <p>Pour exercer ces droits, contactez-moi à l'adresse : <strong>{{ site.email }}</strong>.</p>
        </section>

        <section>
          <h2>Sécurité et conservation</h2>
          <p>
            Je mets en œuvre des mesures de sécurité appropriées pour protéger vos données. Les données collectées
            sont conservées pendant une durée limitée et proportionnée à leur finalité.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Pour toute question concernant cette politique de confidentialité :</p>
          <ul>
            <li><strong>Email :</strong> {{ site.email }}</li>
            <li><strong>Page de contact :</strong> <NuxtLink to="/contact">diogo-andrade.org/contact</NuxtLink></li>
          </ul>
        </section>
      </div>
    </article>
  </main>
</template>
