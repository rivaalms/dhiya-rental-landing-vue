<template>
   <div class="h-[420px] bg-[url('/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
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
      <div class="p-4 flex justify-center gap-4">
         <div class="w-1/2">
            <div class="w-2/3 mx-auto">
               <img src="/img/contact.png" alt="" class="w-full">
            </div>
         </div>
         <div class="flex flex-col justify-center">
            <div class="mb-6">
               <p class="text-lg mb-2 font-semibold tracking-tight text-gray-900">
                  Alamat
               </p>
               <p>{{ store.about.address }}</p>
            </div>
            <div class="mb-6">
               <p class="text-lg mb-2 font-semibold tracking-tight text-gray-900">
                  Email
               </p>
               <p>{{ store.about.email }}</p>
            </div>
            <div class="mb-6">
               <p class="text-lg mb-2 font-semibold tracking-tight text-gray-900">
                  Telepon
               </p>
               <p>{{ store.about.phone }}</p>
            </div>
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