<template>
<footer class="bg-amber-500">
   <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 py-12 text-white">
         <p class="text-center">
            {{ store.about.address }} | {{ store.about.email }} | {{ store.about.phone }}
         </p>
         <p class="text-center">
            &copy; 2023 Dhiya Multi Niaga
         </p>
      </div>
   </div>
</footer>
</template>

<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>