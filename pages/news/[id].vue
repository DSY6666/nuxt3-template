<template>
  <article>文章</article>
  <p>{{ params }}</p>
  <div>
      <nuxt-link :to="{ name: 'news-detail-id', params: { id: 23232 } }">文章详情</nuxt-link>
  </div>
</template>

<script setup>
const router = useRouter();
const currentRoute = router.currentRoute.value;
// params, query 取值
const { params, query,name } = currentRoute;
console.log(params)
useHead({
  title: '新闻列表'
})
</script>