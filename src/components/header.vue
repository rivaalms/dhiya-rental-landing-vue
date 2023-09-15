<template>
<header class="">
   <div class="container mx-auto"
      :class="{
         'text-white': isHomePage,
         'text-gray-800': !isHomePage
      }"
   >
      <div class="flex justify-end">
         <router-link 
            to="/"
            class="p-4 hover:text-amber-500"
         >
            Home
         </router-link>

         <router-link
            to="/about"
            class="p-4 hover:text-amber-500"
         >
            Tentang
         </router-link>

         <router-link
            to="/contacts"
            class="p-4 hover:text-amber-500"
         >
            Kontak Kami
         </router-link>
      </div>
   </div>
</header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const isHomePage = computed(() => {
   return useRoute().name === 'home' ? true : false
})
</script>