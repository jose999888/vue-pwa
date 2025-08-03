<script setup lang="ts" name="AppHome">
import { useRouter } from 'vue-router'

const router = useRouter()
function reload() {
  location.reload()
}
function goToTarget() {
  console.log('about')
  alert('about')
  router.push('/about')
}
</script>
<template>
  <div>
    <h1>这个是AppHome页面</h1>
    <h2>自动更新要加reload.啦啦啦啦啦啦啦</h2>
    <h3>这次我改了js</h3>
    <button @click="goToTarget">切换页面</button>
    <button @click="reload">刷新页面</button>
  </div>
</template>
