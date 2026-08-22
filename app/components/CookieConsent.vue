<script setup lang="ts">
const scriptsConsent = useScriptTriggerConsent();

const { consent } = useScriptGoogleAnalytics({
  id: "G-GNVRFR1HQR",
  scriptOptions: {
    trigger: scriptsConsent,
    bundle: false,
    warmupStrategy: false,
  },
  defaultConsent: {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  },
});

const isVisible = ref(false);

const CONSENT_STORAGE_KEY = "analytics-consent";
const OPEN_PREFERENCES_EVENT = "open-cookie-preferences";

type AnalyticsConsent = "accepted" | "refused";

/**
 * Accepte Google Analytics.
 * Le choix est sauvegardé, puis le script est chargé côté navigateur.
 */
function acceptAnalytics(): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, "accepted");

  consent.update({
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "granted",
  });
  scriptsConsent.accept();

  isVisible.value = false;
}

/**
 * Refuse Google Analytics.
 * Le déclencheur de Nuxt Scripts conserve le script Google Analytics bloqué.
 */
function refuseAnalytics(): void {
  localStorage.setItem(CONSENT_STORAGE_KEY, "refused");

  consent.update({
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
  scriptsConsent.revoke();

  isVisible.value = false;
}

function openPreferences(): void {
  isVisible.value = true;
}

onMounted(() => {
  window.addEventListener(OPEN_PREFERENCES_EVENT, openPreferences);

  const storedConsent = localStorage.getItem(
    CONSENT_STORAGE_KEY,
  ) as AnalyticsConsent | null;

  if (storedConsent === "accepted") {
    // L'utilisateur avait déjà accepté lors d'une précédente visite.
    consent.update({
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "granted",
    });
    scriptsConsent.accept();
    return;
  }

  if (storedConsent === "refused") {
    // On respecte le refus enregistré.
    return;
  }

  // Aucun choix n'a encore été enregistré : on affiche la bannière.
  isVisible.value = true;
});

onBeforeUnmount(() => {
  window.removeEventListener(OPEN_PREFERENCES_EVENT, openPreferences);
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
      <div class="cookie-consent__accent" aria-hidden="true" />

      <div class="cookie-consent__body">
        <div class="cookie-consent__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M15.7 4.4a3.2 3.2 0 0 1-4 4 3.2 3.2 0 0 1-4 4 3.2 3.2 0 0 1-4 4 7.4 7.4 0 1 0 12-12Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.7"
            />
            <path
              d="M8.2 15.7h.01M14.3 14.3h.01M13.3 19.1h.01"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2.4"
            />
          </svg>
        </div>

        <div class="cookie-consent__copy">
          <p class="cookie-consent__eyebrow">
            Votre confidentialité
          </p>

          <h2 id="cookie-consent-title">
            Cookies statistiques
          </h2>

          <p id="cookie-consent-description">
            Avec votre accord, Google Analytics m’aide à comprendre comment le
            portfolio est consulté pour en améliorer le contenu.
          </p>

          <NuxtLink
            class="cookie-consent__link"
            to="/politique-de-confidentialite"
          >
            En savoir plus
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>

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
  animation: cookie-consent-enter 300ms ease-out both;
}

.cookie-consent__content {
  position: relative;
  width: min(100%, 43rem);
  overflow: hidden;
  padding: 1.25rem 1.35rem 1.35rem;
  border: 1px solid color-mix(in srgb, var(--color-accent) 36%, var(--border-default));
  border-radius: 1.25rem;
  background:
    linear-gradient(135deg, rgb(255 255 255 / 8%), transparent 43%),
    var(--background-surface);
  color: var(--text-main);
  box-shadow: 0 1.25rem 3.75rem rgb(0 0 0 / 35%);
}

.cookie-consent__accent {
  position: absolute;
  top: 0;
  right: 1.25rem;
  left: 1.25rem;
  height: 3px;
  border-radius: 0 0 1rem 1rem;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
}

.cookie-consent__body {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.cookie-consent__icon {
  display: grid;
  flex: 0 0 auto;
  width: 2.75rem;
  height: 2.75rem;
  margin-top: 0.2rem;
  place-items: center;
  border: 1px solid color-mix(in srgb, var(--color-accent) 45%, transparent);
  border-radius: 0.85rem;
  background: color-mix(in srgb, var(--color-primary) 18%, transparent);
  color: var(--color-accent);
}

.cookie-consent__icon svg {
  width: 1.45rem;
  height: 1.45rem;
}

.cookie-consent__copy {
  min-width: 0;
}

.cookie-consent__eyebrow {
  margin: 0 0 0.3rem;
  color: var(--color-accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.cookie-consent__content h2 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.45rem);
  line-height: 1.2;
}

.cookie-consent__content p:not(.cookie-consent__eyebrow) {
  max-width: 37rem;
  margin: 0.6rem 0 0;
  color: var(--text-muted);
  line-height: 1.55;
}

.cookie-consent__link {
  display: inline-flex;
  gap: 0.35rem;
  align-items: center;
  margin-top: 0.75rem;
  color: var(--text-main);
  font-size: 0.9rem;
  font-weight: 650;
  text-decoration: none;
}

.cookie-consent__link span {
  transition: transform 160ms ease;
}

.cookie-consent__link:hover span {
  transform: translateX(0.2rem);
}

.cookie-consent__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: flex-end;
  margin: 1.1rem 0 0 3.75rem;
}

.cookie-consent__button {
  min-height: 2.75rem;
  padding: 0.65rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.7rem;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
}

.cookie-consent__button--primary {
  background: var(--button-primary-background);
  color: #ffffff;
  box-shadow: 0 0.45rem 1.15rem color-mix(in srgb, var(--color-primary) 32%, transparent);
}

.cookie-consent__button--secondary {
  border-color: var(--border-default);
  background: var(--background-surface-soft);
  color: var(--text-main);
}

.cookie-consent__button:hover {
  transform: translateY(-1px);
}

.cookie-consent__button--primary:hover {
  background: var(--button-primary-background-hover);
  box-shadow: 0 0.65rem 1.35rem color-mix(in srgb, var(--color-primary) 42%, transparent);
}

.cookie-consent__button:focus-visible,
.cookie-consent__link:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 4px;
}

@keyframes cookie-consent-enter {
  from {
    opacity: 0;
    transform: translateY(0.75rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 35rem) {
  .cookie-consent {
    right: 0.75rem;
    bottom: 0.75rem;
    left: 0.75rem;
  }

  .cookie-consent__content {
    padding: 1.15rem;
  }

  .cookie-consent__body {
    gap: 0.8rem;
  }

  .cookie-consent__icon {
    width: 2.45rem;
    height: 2.45rem;
  }

  .cookie-consent__actions {
    margin-left: 0;
    justify-content: stretch;
  }

  .cookie-consent__button {
    flex: 1 1 9rem;
  }
}

@media (max-width: 24rem) {
  .cookie-consent__body {
    display: block;
  }

  .cookie-consent__icon {
    margin-bottom: 0.8rem;
  }

  .cookie-consent__button {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cookie-consent,
  .cookie-consent__button,
  .cookie-consent__link span {
    animation: none;
    transition: none;
  }
}
</style>
