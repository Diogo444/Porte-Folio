<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue'
import AppNavbar from './components/layout/AppNavbar.vue'

const { initTheme } = useTheme()

onMounted(() => {
    initTheme()
})
</script>

<template>
    <div class="app-shell">
        <AppNavbar />
        <NuxtPage />
        <AppFooter />
    </div>
</template>