<template>
   <Hero bg="/img/pangalengan-2.jpg" height="420">
      <p class="uppercase text-gray-200 font-semibold text-4xl md:text-5xl">
         Tentang
      </p>
   </Hero>
   <div class="py-12 md:w-2/3 px-4 md:px-0 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
         <div class="md:col-span-2 flex items-center">
            <p class="leading-relaxed">
               {{ company.name }} adalah perusahaan yang bergerak di bidang jasa penyedia transportasi pariwisata dan layanan jasa perjalanan pariwisata. Kami memberikan pelayanan jasa transportasi yang sesuai dengan kebutuhan Anda. Dengan tim yang berpengalaman dan performa layanan terbaik, kami siap melayani kebutuhan pariwisata Anda dengan harga yang bersahabat.
            </p>
         </div>
         <div class="order-first md:order-last">
            <img src="/img/dhiya-rental-logo.png" alt="" class="w-full h-auto">
         </div>
      </div>
   </div>
   <div class="bg-emerald-900">
      <div class="md:w-2/3 px-4 md:px-0 mx-auto py-24">
         <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div class="text-gray-200">
               <h5 class="mb-4 text-4xl font-bold tracking-tight uppercase">
                  Visi
               </h5>
               <p class="leading-relaxed">
                  Menjadi penyedia layanan transportasi terkemuka yang memungkinkan konektivitas global, memberikan nilai tambah bagi pelanggan, dan berkomitmen pada mobilitas yang berkelanjutan.
               </p>
            </div>
   
            <div class="text-gray-200">
               <h5 class="mb-4 text-4xl font-bold tracking-tight uppercase">
                  Misi
               </h5>
               <p class="leading-relaxed">
                  Memberikan layanan transportasi yang aman dan andal dengan komitmen mutlak pada kepuasan pelanggan.
               </p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import Hero from '@/components/hero.vue'
import { company as Company } from '@/models/company'
import { computed } from 'vue'

const company = computed(() => Company)
</script>