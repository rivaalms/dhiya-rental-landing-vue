<template>
<header class="">
   <div class="container mx-auto text-white">
      <div class="flex justify-center md:justify-end py-2 md:px-0">
         <router-link 
            to="/"
            class="p-4 hover:text-amber-500 transition-colors"
            :class="currentRoute === '/' ? activeClass : ''"
         >
            Home
         </router-link>

         <router-link
            to="/products"
            class="p-4 hover:text-amber-500 transition-colors"
            :class="currentRoute === '/products' ? activeClass : ''"
         >
            Produk
         </router-link>
         
         <router-link
            to="/about"
            class="p-4 hover:text-amber-500 transition-colors"
            :class="currentRoute === '/about' ? activeClass : ''"
         >
            Tentang
         </router-link>

         <router-link
            to="/contacts"
            class="p-4 hover:text-amber-500 transition-colors"
            :class="currentRoute === '/contacts' ? activeClass : ''"
         >
            Kontak
         </router-link>
      </div>
   </div>
</header>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const isHomePage = computed(() => {
   return useRoute().name === 'home' ? true : false
})

const currentRoute = computed(() => {
   return useRoute().path
})

const activeClass = ref([
   'text-amber-500',
   'font-medium',
   'underline',
   'decoration-2',
   'underline-offset-8'
])
</script>