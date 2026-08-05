<script setup lang="ts">
const { initialize } = useGtag();

const isVisible = ref(false);

const CONSENT_STORAGE_KEY = "analytics-consent";

type AnalyticsConsent = "accepted" | "refused";

/**
 * Accepte Google Analytics.
 * Le choix est sauvegardé, puis le script Google Analytics est chargé.
 */
function acceptAnalytics(): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");

  initialize();

  isVisible.value = false;
}

/**
 * Refuse Google Analytics.
 * Comme initMode vaut "manual", le script Google n'est jamais chargé.
 */
function refuseAnalytics(): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, "refused");

  isVisible.value = false;
}

onMounted(() => {
  const consent = localStorage.getItem(
    CONSENT_STORAGE_KEY,
  ) as AnalyticsConsent | null;

  if (consent === "accepted") {
    // L'utilisateur avait déjà accepté lors d'une précédente visite.
    initialize();
    return;
  }

  if (consent === "refused") {
    // On respecte le refus enregistré.
    return;
  }

  // Aucun choix n'a encore été enregistré : on affiche la bannière.
  isVisible.value = true;
});
</script>

<template>
  <aside
    v-if="isVisible"
    class="cookie-consent"
    aria-labelledby="cookie-consent-title"
    aria-describedby="cookie-consent-description"
  >
    <div class="cookie-consent__content">
      <h2 id="cookie-consent-title">
        Cookies statistiques
      </h2>

      <p id="cookie-consent-description">
        J’utilise Google Analytics pour comprendre comment mon portfolio est
        consulté et améliorer son contenu. Vous pouvez accepter ou refuser ces
        cookies.
      </p>

      <NuxtLink to="/politique-de-confidentialite">
        Consulter la politique de confidentialité
      </NuxtLink>

      <div class="cookie-consent__actions">
        <button
          type="button"
          class="cookie-consent__button cookie-consent__button--secondary"
          @click="refuseAnalytics"
        >
          Refuser
        </button>

        <button
          type="button"
          class="cookie-consent__button cookie-consent__button--primary"
          @click="acceptAnalytics"
        >
          Accepter
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.cookie-consent {
  position: fixed;
  z-index: 1000;
  right: 1rem;
  bottom: 1rem;
  left: 1rem;
  display: flex;
  justify-content: center;
}

.cookie-consent__content {
  width: min(100%, 48rem);
  padding: 1.5rem;
  border: 1px solid currentColor;
  border-radius: 1rem;
  background: #111111;
  color: #ffffff;
  box-shadow: 0 1rem 3rem rgb(0 0 0 / 35%);
}

.cookie-consent__content h2 {
  margin-top: 0;
}

.cookie-consent__content a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}

.cookie-consent__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-end;
  margin-top: 1.25rem;
}

.cookie-consent__button {
  min-height: 2.75rem;
  padding: 0.65rem 1.25rem;
  border: 2px solid #ffffff;
  border-radius: 0.5rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.cookie-consent__button--primary {
  background: #ffffff;
  color: #111111;
}

.cookie-consent__button--secondary {
  background: transparent;
  color: #ffffff;
}

.cookie-consent__button:focus-visible,
.cookie-consent__content a:focus-visible {
  outline: 3px solid #ffffff;
  outline-offset: 4px;
}

@media (max-width: 35rem) {
  .cookie-consent__actions {
    flex-direction: column-reverse;
  }

  .cookie-consent__button {
    width: 100%;
  }
}
</style>