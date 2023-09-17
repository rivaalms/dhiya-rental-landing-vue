<template>
<footer class="bg-amber-500">
   <div class="container mx-auto">
      <div class="grid grid-cols-1 gap-4 py-12 px-4 text-white">
         <p class="text-center text-sm md:text-base">
            {{ company.address }} | {{ company.email }} | {{ company.phone }}
         </p>
         <p class="text-center text-sm md:text-base">
            &copy; 2023 {{ company.name }}
         </p>
      </div>
   </div>
</footer>
</template>

<script setup lang="ts">
import { useCompany } from '@/composables/company'
import { ref } from 'vue'

const company = ref(useCompany)
</script>