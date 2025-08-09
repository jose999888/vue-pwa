<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import BaseRaceCars from '@/componets/BaseRaceCars.vue'

const roadLeft = ref(370)
const lineLeft = ref(270)
const roadSpeed = 5
const lineSpeed = 5
const carsList = ref([])

let roadId: null | number = null
let lineId: null | number = null
function roadAnimate() {
  roadLeft.value = roadLeft.value < 10 ? 370 : roadLeft.value - roadSpeed
  roadId = requestAnimationFrame(roadAnimate)
}
function firstLineAnimate() {
  if (lineLeft.value < 0) {
    requestAnimationFrame(secLineAnimate)
    return
  }
  lineLeft.value = lineLeft.value > 380 ? -104 : lineLeft.value + lineSpeed
  lineId = requestAnimationFrame(firstLineAnimate)
}
function secLineAnimate() {
  if (lineLeft.value >= 40 && lineId) {
    cancelAnimationFrame(lineId)
    return
  }
  lineLeft.value = lineLeft.value > 40 ? 40 : lineLeft.value + lineSpeed
  lineId = requestAnimationFrame(secLineAnimate)
}
function startAnimate() {
  console.log(carsList.value, 'carsList')
  if (roadId && lineId) {
    cancelAnimationFrame(roadId)
    cancelAnimationFrame(lineId)
    roadId = null
  } else {
    requestAnimationFrame(roadAnimate)
    requestAnimationFrame(firstLineAnimate)
    randomCarsPosition()
  }
}
function resetLine() {
  lineLeft.value = 273
}
const time = ref(0)
function randomCarsPosition() {
  if (time.value > 1) return
  carsList.value.forEach((el) => {
    const currentLeft = parseFloat(el.style.left) || 0
    const randomMove = Math.random() * 50 - 10
    el.style.left = currentLeft - randomMove + 'px'
    console.log(el.style.left, 'left')
  })
  setTimeout(() => {
    randomCarsPosition()
  }, 1000)
  time.value++
}

onMounted(() => {
  carsList.value.forEach((el, index) => {
    el.style.left = 344 - (index + 1) * 4 + 'px'
  })
})
</script>
<template>
  <div>
    <div class="w-full overflow-hidden">
      <div class="h-[20px] bg-blue-500 rounded" @click="startAnimate">road-start</div>
      <div class="h-[20px] bg-red-500 rounded" @click="resetLine">reset</div>
      <div>header</div>
      <div>bg</div>
      <div class="w-full h-[145px] relative">
        <div class="road w-[759px] h-[145px] absolute top-0 left-0 overflow-hidden">
          <div class="absolute top-0" :style="{ left: `-${roadLeft}px` }">
            <img src="/public/road.png" class="w-[759px] h-[145px]" alt="" />
          </div>
          <div class="absolute top-0 left-[62px]" :style="{ left: `${lineLeft}px` }">
            <img src="/public/finish-line.png" class="w-[70px] h-[138px]" alt="" />
          </div>
          <div
            v-for="(_, index) in 10"
            :key="index + 1"
            class="absolute transition-all duration-1000"
            :ref="
              (el) => {
                carsList[index] = el
              }
            "
            :style="{ top: `${13 * index}px` }"
          >
            <BaseRaceCars
              :number="index + 1"
              class="w-[46px] h-[13px]"
              :style="{ width: `${44 + (index + 1) * 2}px` }"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
