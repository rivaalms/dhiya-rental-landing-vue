<template>
<div class="h-[420px] bg-[url('/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
   <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"></div>
   <Header class="absolute h-full w-full"/>
   <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
      <div class="grid grid-cols-1 gap-4 place-items-center z-10">
         <p class="uppercase text-gray-200 font-semibold text-4xl md:text-5xl">
            Produk
         </p>
      </div>
   </div>
</div>
<div class="container px-4 md:px-0 md:w-2/3 mx-auto py-12">
   <div class="pb-6 md:py-12">
      <p class="mb-4">
         Sewa Bus Bandung di {{ company.name }} yang selalu siap menghantar Anda berwisata murah dengan armada bus pariwisata di Bandung, Indonesia dengan pelayanan profesional, bersahabat, dan memuaskan.
      </p>
      <p class="mb-4">
         {{ company.name }} bekerja sama dengan perusahaan Bus pariwisata di Bandung guna menyediakan Sewa Bus Bandung untuk kebutuhan pariwisata dan lainnya.
      </p>
      <p class="mb-4">
         Berikut ini adalah daftar armada yang kami tawarkan. Silakan klik tombol detail untuk informasi lebih lanjut.
      </p>
   </div>
   <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-12">
      <div v-for="item in data" :key="item.name" class="card p-0">
         <div class="aspect-video">
            <img :src="item.img" alt="" class="rounded-t-[0.45rem]">
         </div>
         <div class="p-5">
            <p class="font-semibold text-lg mb-2">
               {{ item.name }}
            </p>
            <p class="text-sm leading-relaxed">
               Kendaraan berkapasitas {{ item.capacity }} penumpang dengan harga mulai dari {{ useCurrency(item.price_inside_city) }}.
            </p>
            <div class="pt-6 pb-2 text-center">
               <router-link :to="item.href" class="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-400/75 rounded-full tracking-wide px-5 py-2">
                  Detail
               </router-link>
            </div>
         </div>
      </div>
   </div>
   <div class="pb-6 pt-12 md:py-12">
      <p class="text-xl md:text-2xl font-semibold text-center uppercase mb-4">
         Fasilitas
      </p>
      <p>
         Fasilitas Bus pariwisata di {{ company.name }} dilengkapi dengan AC, TV, DVD, Karaoke, Reclining Seats, dan Charging Port. Beberapa armada juga memiliki fasilitas tambahan seperti bantal, selimut, Smoking Area, dan Toilet.
      </p>
   </div>
</div>
</template>

<script setup lang="ts">
import Header from '@/components/header.vue'
import { computed, ref } from 'vue'
import { useProducts, useCurrency } from '@/composables/products'
import { useCompany } from '@/composables/company'

const company = ref(useCompany)
const data = computed(() => {
   return useProducts()
})
</script>