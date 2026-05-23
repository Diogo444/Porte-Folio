<script setup lang="ts">
import { navLinks, site } from '~/data/portfolio'
import ThemeTooggle from './ThemeTooggle.vue'

const route = useRoute()
const menuOpen = ref(false)

const isActive = (to: string) => {
    if (to.includes('#')) {
        return false
    }

    return route.path === to
}
</script>

<template>
    <header class="navbar">
        <nav class="navbar__inner" aria-label="Navigation principale">
            <NuxtLink class="navbar__brand" to="/" @click="menuOpen = false">
                <img class="navbar__logo" src="/assets/favicon.ico" alt="Logo">
                <h2 class="navbar__title">{{ site.name }}</h2>
            </NuxtLink>

            <div class="navbar__links">
                <NuxtLink v-for="link in navLinks" :key="link.to" class="navbar__link"
                    :class="{ 'navbar__link--active': isActive(link.to) }" :to="link.to">
                    {{ link.label }}
                </NuxtLink>
            </div>

            <div class="navbar__actions">
                <ThemeTooggle />
                <button class="navbar__menu" type="button" :aria-expanded="menuOpen" aria-controls="mobile-menu"
                    @click="menuOpen = !menuOpen">
                    <span class="material-symbols-outlined">{{ menuOpen ? 'close' : 'menu' }}</span>
                </button>
            </div>
        </nav>

        <div v-if="menuOpen" id="mobile-menu" class="navbar__mobile">
            <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" @click="menuOpen = false">
                {{ link.label }}
            </NuxtLink>
        </div>
    </header>
</template>
