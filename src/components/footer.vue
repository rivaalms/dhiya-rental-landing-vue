<template>
<footer class="bg-amber-500">
   <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 py-12 px-4 text-white">
         <p class="text-center text-sm md:text-base">
            {{ store.about.address }} | {{ store.about.email }} | {{ store.about.phone }}
         </p>
         <p class="text-center text-sm md:text-base">
            &copy; 2023 {{ store.organizationName }}
         </p>
      </div>
   </div>
</footer>
</template>

<script setup lang="ts">
import { useAppStore } from '../stores/app'
const store = useAppStore()
</script>