<template>
  <section>
    <nuxt-link :to="{path: '/news/555'}">新闻页面</nuxt-link>
  </section>
  <div>url:{{url}}</div>
</template>

<script setup>
let url  = process.env.VUE_APP_BASE_RUL;
useHead({
    title: '首页'
})
</script>