<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue'
import AppNavbar from './components/layout/AppNavbar.vue'
import { site } from '~/data/portfolio'

const { initTheme } = useTheme()

useHead({
    titleTemplate: (titleChunk) => titleChunk ? `${titleChunk} | ${site.name}` : `${site.name} - ${site.role}`,
    templateParams: {
        siteName: site.name,
    },
})

useJsonLd('site-structured-data', createSiteJsonLd)

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
