<template>
<div class="h-[420px] bg-[url('/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
   <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"></div>
   <Header class="absolute h-full w-full"/>
   <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
      <div class="grid grid-cols-1 gap-4 place-items-center z-10">
         <p class="uppercase text-gray-200 font-semibold text-5xl">
            Produk
         </p>
      </div>
   </div>
</div>
<div class="w-2/3 mx-auto py-12">
   <div class="py-12">
      <p class="mb-4">
         Sewa Bus Bandung di Dago Holiday yang selalu siap menghantar Anda berwisata murah dengan armada bus pariwisata di Bandung, Indonesia dengan pelayanan profesional, bersahabat, dan memuaskan.
      </p>
      <p class="mb-4">
         Dhiya Multi Niaga bekerja sama dengan perusahaan Bus pariwisata di Bandung guna menyediakan Sewa Bus Bandung untuk kebutuhan pariwisata dan lainnya.
      </p>
   </div>
   <div class="grid grid-cols-3 gap-4 py-12">
      <div v-for="item in data" :key="item.name" class="card p-0">
         <div class="aspect-video">
            <img :src="item.img" alt="" class="rounded-t-[0.45rem]">
         </div>
         <div class="p-5">
            <p class="font-semibold text-lg mb-2">
               {{ item.name }}
            </p>
            <p class="text-sm">
               Kendaraan berkapasitas {{ item.capacity }} penumpang.
            </p>
            <div class="pt-6 pb-1 text-end">
               <router-link :to="item.href" class="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-400/75 rounded-full tracking-wide px-5 py-2">
                  Detail
               </router-link>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
import Header from '../../components/header.vue'
import { computed } from 'vue'
import { useProducts } from '../../composables/products'

const data = computed(() => {
   return useProducts()
})

const useCurrency = (price: number) : string => {
   const formatted = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
   }).format(price)

   return formatted
}
</script>