<script lang="ts" setup name="BaseRaceCars">
interface Props {
  number: number
}
const props = defineProps<Props>()
</script>
<template>
  <div>
    <img :src="`/public/cars/image${number}.png`" alt="" />
  </div>
</template>
