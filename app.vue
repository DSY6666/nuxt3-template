<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - site-name` : `site-name`;
  }
})
</script>