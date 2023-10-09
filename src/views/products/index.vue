<template>
<Hero bg="/img/pangalengan-2.jpg" height="420">
   <p class="uppercase text-gray-200 font-semibold text-4xl md:text-5xl">
      Produk
   </p>
</Hero>
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
import Hero from '@/components/hero.vue'
import { computed } from 'vue'
import { getAllVehicles, useCurrency } from '@/models/products'
import { company as Company } from '@/models/company'

const company = computed(() => Company)
const data = computed(() => getAllVehicles())
</script>