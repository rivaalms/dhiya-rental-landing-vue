<template>
   <div class="h-[420px] bg-[url('../public/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
      <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"></div>
      <Header class="absolute h-full w-full"/>
      <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
         <div class="grid grid-cols-1 gap-4 place-items-center z-10">
            <p class="uppercase text-gray-200 font-semibold text-5xl">
               Kontak Kami
            </p>
         </div>
      </div>
   </div>
   <div class="w-2/3 mx-auto py-20">
      <div class="p-4 grid grid-cols-3 gap-4">
         <div class="card shadow-none">
            <p class="text-lg pb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
               Alamat
            </p>
            <p>{{ store.about.address }}</p>
         </div>

         <div class="card shadow-none">
            <p class="text-lg pb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
               Email
            </p>
            <p>{{ store.about.email }}</p>
         </div>

         <div class="card shadow-none">
            <p class="text-lg pb-2 font-semibold tracking-tight text-gray-900 dark:text-white">
               Telepon
            </p>
            <p>{{ store.about.phone }}</p>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { computed, ref} from 'vue'
import { useAppStore } from '../stores/app'
import Header from '../components/header.vue'

const store = useAppStore()
</script>