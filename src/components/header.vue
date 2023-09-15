<template>
<header class="shadow">
   <div class="container mx-auto">
      <div class="flex justify-end">
         <router-link 
            to="/"
            class="p-4 text-gray-700 hover:text-amber-500"
         >
            Home
         </router-link>

         <router-link
            to="/about"
            class="p-4 text-gray-700 hover:text-amber-500"
         >
            About
         </router-link>
      </div>
   </div>
</header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>