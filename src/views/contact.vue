<template>
   <Hero bg="/img/pangalengan-2.jpg" height="420">
      <p class="uppercase text-gray-200 font-semibold text-4xl md:text-5xl">
         Kontak
      </p>
   </Hero>
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
import { computed } from 'vue'
import { company as Company } from '@/models/company'
import Hero from '@/components/hero.vue'

const company = computed(() => Company)
</script>