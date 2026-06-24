<script setup lang="ts">
import AppFooter from './components/layout/AppFooter.vue'
import AppNavbar from './components/layout/AppNavbar.vue'
import { site } from '~/data/portfolio'

const { initTheme } = useTheme()

useSeoMeta({
    title: `${site.name} - ${site.role}`,
    description: site.description,
    ogSiteName: site.name,
    ogTitle: `${site.name} - ${site.role}`,
    ogDescription: site.description,
    ogType: 'website',
    ogLocale: 'fr_FR',
    ogImage: absoluteSiteUrl(site.ogImage),
    twitterCard: 'summary_large_image',
    twitterImage: absoluteSiteUrl(site.ogImage),
})

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
