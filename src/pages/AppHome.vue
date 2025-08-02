<script setup lang="ts" name="AppHome">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div>
    <h1>这个是AppHome页面</h1>
    <button @click="router.push('/about')">切换页面</button>
  </div>
</template>
