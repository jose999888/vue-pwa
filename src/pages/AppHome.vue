<script setup lang="ts" name="AppHome">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isShow = ref(true)
function reload() {
  location.reload()
}
function goToTarget() {
  console.log('🚀 ~ goToTarget ~ goToTarget:', goToTarget)
  alert('aboutabout')
  router.push('/about')
}
</script>
<template>
  <div>
    <h1 class="home-page" v-show="isShow">这个是AppHome页面</h1>
    <h2>自动更新要加reload.啦啦啦啦啦啦啦</h2>
    <button @click="goToTarget">切换页面</button>
    <button @click="reload">刷新页面</button>
    <button @click="isShow = !isShow">v-show会造成重排，也就是动画会重新执行</button>
  </div>
</template>
<style>
@keyframes example {
  0% {
    background-color: red;
  }
  100% {
    background-color: yellow;
  }
}
.home-page {
  animation: example 500ms linear forwards;
}
</style>
