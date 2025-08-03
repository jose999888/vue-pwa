<script setup lang="ts" name="AppHome">
import { useRouter } from 'vue-router'

const router = useRouter()
function reload() {
  location.reload()
}
</script>
<template>
  <div>
    <h1>这个是AppHome页面</h1>
    <h2>自动更新要加reload.啦啦啦啦啦啦啦</h2>
    <button @click="router.push('/about')">切换页面</button>
    <button @click="reload">刷新页面</button>
  </div>
</template>
