<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'outline'
    download?: boolean
  }>(),
  {
    variant: 'primary',
    download: false,
  },
)

const isExternal = computed(() => {
  if (!props.href || props.download) {
    return false
  }

  return props.href.startsWith('http')
})
</script>

<template>
  <NuxtLink v-if="to" class="button" :class="`button--${variant}`" :to="to">
    <slot />
  </NuxtLink>

  <a
    v-else
    class="button"
    :class="`button--${variant}`"
    :href="href"
    :download="download || undefined"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
  >
    <slot />
  </a>
</template>
