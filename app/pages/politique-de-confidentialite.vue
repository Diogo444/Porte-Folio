<script setup lang="ts">
import { site } from '~/data/portfolio'

usePageSeo({
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité de diogo-andrade.org : hébergement Cloudflare, stockage local, Google Analytics, sécurité et droits RGPD.',
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
        <p>Dernière mise à jour : 22 août 2026</p>
      </div>
    </section>

    <article class="article-container">
      <div class="article-content">
        <section>
          <h2>Introduction</h2>
          <p>
            La présente politique de confidentialité décrit comment le site <strong>diogo-andrade.org</strong>
            traite et protège les informations des visiteurs. Elle s'applique au portfolio et à ses pages,
            mais pas aux sites externes accessibles depuis les liens présents sur le site.
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
          <h2>Données traitées</h2>
          <p>
            Ce site ne comporte ni compte utilisateur, ni formulaire de contact, ni espace de paiement.
            Les données traitées dépendent de votre utilisation du site et de votre choix concernant les statistiques.
          </p>
          <h3>Données de contact</h3>
          <p>
            Si vous choisissez de me contacter par email, vous me fournissez volontairement votre adresse email
            et les informations contenues dans votre message. Ces données sont utilisées uniquement pour répondre
            à votre demande.
          </p>
          <h3>Journaux techniques d'hébergement</h3>
          <p>
            Le site est hébergé avec <strong>Cloudflare Workers</strong>. Lorsqu'une page ou une ressource est demandée,
            Cloudflare peut traiter des données techniques telles que l'adresse IP, la date et l'heure de la requête,
            l'URL demandée, le site référent, le type de navigateur et des informations utiles à la détection d'abus.
          </p>
          <p>
            Ce traitement sert à distribuer le site, prévenir les attaques, diagnostiquer les erreurs et maintenir
            le service disponible. Il repose sur mon intérêt légitime à exploiter un site fiable et sécurisé.
            Cloudflare agit comme prestataire technique et traite ces informations conformément à ses propres
            engagements contractuels et à sa
            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>.
          </p>
        </section>

        <section>
          <h2>Stockage local et cookies</h2>
          <p>
            Le site utilise le stockage local de votre navigateur (<code>localStorage</code>) pour mémoriser le thème
            clair ou sombre choisi et votre décision concernant Google Analytics. Ces informations restent sur votre
            appareil et ne sont pas envoyées au responsable du traitement par ce mécanisme.
          </p>

          <h3>Google Analytics</h3>
          <p>
            Uniquement avec votre accord, le site charge Google Analytics afin de mesurer la fréquentation et les
            pages consultées. Le service peut alors déposer ou lire des identifiants statistiques et traiter des
            informations sur la navigation, l'appareil et la localisation approximative. Les signaux publicitaires
            restent désactivés par défaut.
          </p>
          <p>
            Le traitement repose sur votre consentement. Google Ireland Limited fournit ce service pour les utilisateurs
            de l'Espace économique européen. Certaines données peuvent être traitées hors de l'Union européenne selon
            les garanties décrites dans la
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">politique de confidentialité de Google</a>.
          </p>

          <h3>Gérer votre choix</h3>
          <p>
            Vous pouvez accepter, refuser ou modifier ce choix à tout moment avec le bouton
            <strong>« Gérer mes cookies »</strong> présent dans le pied de page. Vous pouvez également supprimer les
            données du site depuis les paramètres de votre navigateur.
          </p>
        </section>

        <section>
          <h2>Icônes fournies par Google Fonts</h2>
          <p>
            Les icônes Material Symbols sont chargées depuis Google Fonts afin d'assurer une présentation
            cohérente du site. Le navigateur contacte alors les serveurs de Google et leur transmet nécessairement
            des informations techniques, notamment l'adresse IP et les en-têtes de la requête. Aucune publicité
            Google AdSense n'est affichée sur ce site.
          </p>
        </section>

        <section>
          <h2>Vos droits</h2>
          <p>Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :</p>
          <ul>
            <li><strong>Droit d'accès</strong> : demander à connaître les données vous concernant.</li>
            <li><strong>Droit de rectification</strong> : demander la correction de données inexactes.</li>
            <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données.</li>
            <li><strong>Droit à la limitation</strong> : demander la suspension temporaire de certains traitements.</li>
            <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données.</li>
            <li><strong>Droit à la portabilité</strong> : recevoir les données concernées dans un format lisible, lorsque ce droit s'applique.</li>
            <li><strong>Droit de retirer votre consentement</strong> : à tout moment et sans effet rétroactif.</li>
          </ul>
          <p>Pour exercer ces droits, contactez-moi à l'adresse : <strong>{{ site.email }}</strong>.</p>
          <p>
            Si vous estimez que vos droits ne sont pas respectés, vous pouvez également adresser une réclamation à la
            <a href="https://www.cnil.fr/" target="_blank" rel="noopener noreferrer">CNIL</a>.
          </p>
        </section>

        <section>
          <h2>Sécurité et conservation</h2>
          <p>
            Le site est distribué en HTTPS et bénéficie des mécanismes de sécurité de Cloudflare. Les messages reçus
            par email sont conservés uniquement pendant la durée nécessaire au traitement de l'échange et à son suivi.
            Les préférences locales restent dans votre navigateur jusqu'à leur modification ou leur suppression.
            Les durées applicables aux journaux Cloudflare et aux données Google Analytics dépendent de la configuration
            de ces services et de leurs politiques de conservation.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>Pour toute question concernant cette politique de confidentialité :</p>
          <ul>
            <li><strong>Email :</strong> {{ site.email }}</li>
            <li><strong>Page de contact :</strong> <NuxtLink to="/contact/">diogo-andrade.org/contact</NuxtLink></li>
          </ul>
        </section>
      </div>
    </article>
  </main>
</template>
