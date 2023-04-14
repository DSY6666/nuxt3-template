<template>
  <div>文章详情</div>
  <div>{{ name }}</div>
  <div>{{ params }}</div>
  <nuxt-link :to="{path: '/'}">返回首页</nuxt-link>
</template>

<script setup>
  const router = useRouter();
  const currentRoute = router.currentRoute.value;
  // params, query 取值
  const { params, query,name } = currentRoute;
  console.log(params)
  useHead({
    title: '新闻详情'
  })
</script>