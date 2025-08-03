<script lang="ts" setup name="AppAbout">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>
<template>
  <div>
    <h1>about</h1>
    <button @click="router.back()">返回</button>
    <button @click="router.push('/')">去首页</button>
  </div>
</template>
