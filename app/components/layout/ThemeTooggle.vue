<script setup lang="ts">
const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="isDark ? 'Passer en thème clair' : 'Passer en thème sombre'"
    @click="toggleTheme"
  >
    <span class="material-symbols-outlined">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
  </button>
</template>
