<template>
   <div class="h-[420px] bg-[url('/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
      <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"></div>
      <Header class="absolute h-full w-full"/>
      <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
         <div class="grid grid-cols-1 gap-4 place-items-center z-10">
            <p class="uppercase text-gray-200 font-semibold text-4xl md:text-5xl">
               Kontak
            </p>
         </div>
      </div>
   </div>
   <div class="md:w-2/3 px-4 md:px-0 mx-auto py-20">
      <div class="p-4 flex justify-center gap-4">
         <div class="w-1/2 hidden md:block">
            <div class="w-2/3 mx-auto">
               <img src="/img/contact.png" alt="" class="w-full">
            </div>
         </div>
         <div class="flex flex-col justify-center">
            <div class="mb-6">
               <p class="text-lg mb-2 font-semibold tracking-tight text-gray-900">
                  Alamat
               </p>
               <p>{{ company.address }}</p>
            </div>
            <div class="mb-6">
               <p class="text-lg mb-2 font-semibold tracking-tight text-gray-900">
                  Email
               </p>
               <p>{{ company.email }}</p>
            </div>
            <div class="mb-6">
               <p class="text-lg mb-2 font-semibold tracking-tight text-gray-900">
                  Telepon
               </p>
               <p>{{ company.phone }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { ref} from 'vue'
import { useCompany } from '@/composables/company'
import Header from '@/components/header.vue'

const company = ref(useCompany)
</script>