<template>
<div
   class="backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative"
   :class="[ heightClass, mdHeightClass, bgClass ]"
>
   <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"/>
   <Header class="absolute h-full w-full"/>
   <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
      <div class="grid grid-cols-1 gap-4 place-items-center z-10">
         <slot/>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Header from '@/components/header.vue'

const prop = defineProps<{
   height?: string
   mdHeight?: string
   bg: string
}>()

const heightClass = computed(() => prop.height ? `h-[${prop.height}px]` : `h-screen`)
const mdHeightClass = computed(() => prop.mdHeight ? `md:h-[${prop.mdHeight}px]` : ``)
const bgClass = computed(() => `bg-[url('${prop.bg}')]`)
</script>