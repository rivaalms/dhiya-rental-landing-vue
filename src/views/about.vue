<template>
   <div class="h-[420px] bg-[url('/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
      <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"></div>
      <Header class="absolute h-full w-full"/>
      <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
         <div class="grid grid-cols-1 gap-4 place-items-center z-10">
            <p class="uppercase text-gray-200 font-semibold text-5xl">
               Tentang
            </p>
         </div>
      </div>
   </div>
   <div class="py-12 w-2/3 mx-auto">
      <div class="grid grid-cols-3 gap-4">
         <div class="col-span-2 flex items-center">
            <p class="leading-relaxed">
               {{ store.organizationName }} adalah perusahaan yang bergerak di bidang jasa penyedia transportasi pariwisata dan layanan jasa perjalanan pariwisata. Kami memberikan pelayanan jasa transportasi yang sesuai dengan kebutuhan Anda. Dengan tim yang berpengalaman dan performa layanan terbaik, kami siap melayani kebutuhan pariwisata Anda dengan harga yang bersahabat.
            </p>
         </div>
         <div class="">
            <img src="/img/dhiya-rental-logo.png" alt="" class="w-full h-auto">
         </div>
      </div>
   </div>
   <div class="bg-emerald-900">
      <div class="w-2/3 mx-auto py-24">
         <div class="grid grid-cols-2 gap-12">
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
import Header from '../components/header.vue'
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>