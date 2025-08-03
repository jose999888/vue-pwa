<script setup lang="ts" name="AppHome">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div>
    <h1>这个是AppHome页面</h1>
    <h2>这个是用来测试是否可以自动更新的</h2>
    <button @click="router.push('/about')">切换页面</button>
  </div>
</template>
