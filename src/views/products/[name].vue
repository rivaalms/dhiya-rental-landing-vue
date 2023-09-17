<template>
<div class="h-[420px] bg-[url('/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
   <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"></div>
   <Header class="absolute h-full w-full"/>
   <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
      <div class="grid grid-cols-1 gap-4 place-items-center z-10">
         <p class="uppercase text-gray-200 font-semibold text-5xl">
            {{ data?.name }}
         </p>
      </div>
   </div>
</div>
<div class="pb-12 pt-24">
   <div class="md:w-2/3 sm:container mx-auto">
      <p class="mb-4">
         Sewa <b>{{ data?.name }}</b> Bandung dengan harga yang terjangkau didukung dengan fasilitas yang bagus. Dhiya Multi Niaga merupakan perusahaan penyedia jasa transportasi di Bandung.
      </p>
      <p class="mb-4">
         Didukung dengan armada dengan kondisi yang selalu prima dan pelayanan crew yang selalu ramah dalam melayani serta memiliki fasilitas yang sudah memiliki standar pariwisata, kami siap melayani anda yang akan berwisata di dalam Kota Bandung maupun keluar kota.
      </p>
      <p class="mb-4">
         Penggunaan <b>{{ data?.name }}</b> Bandung untuk di dalam Kota Bandung maksimal penggunaan adalah 12 jam, dan untuk keluar Kota Bandung maksimal penggunaan adalah 18 jam (pada hari yang sama). 
      </p>
      <p class="mb-4">
         Jam sewa <b>{{ data?.name }}</b> minimal penggunaan pukul 03.00 dan maksimal kembali pukul 23.00. Jika penggunaan sewa kurang dari jam yang ditentukan (cth: 5 jam), maka akan tetap dihitung sebagai 1 hari.
      </p>
   </div>
</div>
<div class="py-12">
   <div class="md:w-2/3 sm:container mx-auto">
      <div class="grid grid-cols-2 gap-8">
         <div class="aspect-video overflow-hidden flex items-center">
            <img :src="data?.img" alt="">
         </div>
         <div class="">
            <table class="w-full text-gray-600 text-left">
               <tbody>
                  <tr class="text-gray-900">
                     <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap">Kapasitas</th>
                     <td class="px-6 py-2">{{ data?.capacity }} seat</td>
                  </tr>
                  <tr class="text-gray-900">
                     <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap">Harga dalam kota</th>
                     <td class="px-6 py-2">{{ useCurrency(data?.price_inside_city) }}</td>
                  </tr>
                  <tr class="text-gray-900">
                     <th scope="row" class="px-6 py-2 font-medium whitespace-nowrap">Harga luar kota</th>
                     <td class="px-6 py-2">{{ useCurrency(data?.price_outside_city) }}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>
<div class="py-12">
   <div class="md:w-2/3 sm:w-full mx-auto">
      <p class="text-2xl mb-8 font-semibold text-center uppercase">
         Daftar Harga Sewa Berdasarkan Tujuan
      </p>
      <div class="relative overflow-x-auto mb-12">
         <table class="w-full text-gray-600 text-left">
            <thead class="text-sm uppercase">
               <tr class="bg-gray-100">
                  <th scope="col" class="px-6 py-3">Tujuan</th>
                  <th scope="col" class="px-6 py-3">Jumlah hari</th>
                  <th scope="col" class="px-6 py-3">Harga</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="item in data?.price_by_destination" :key="item.destination" class="border-b text-gray-900">
                  <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">{{ item.destination }}</th>
                  <td class="px-6 py-4">{{ item.days }} hari</td>
                  <td class="px-6 py-4">{{ useCurrency(item.price) }}</td>
               </tr>
            </tbody>
         </table>
      </div>
      <div class="">
         <p class="text-xl mb-4 font-semibold">
            Catatan
         </p>
         <ul class="list-disc">
            <li class="mb-2">
               <span class="font-semibold">Harga termasuk:</span> BBM, jasa driver.
            </li>
            <li class="mb-2">
               <span class="font-semibold">Harga tidak termasuk:</span> biaya tol, biaya parkir, tip dan konsumsi driver, tiket masuk lokasi wisata, biaya penyebrangan.
            </li>
            <li class="mb-2">
               Untuk penggunaan ke luar kota yang lebih dari 3 hari penggunaan, pengemudi yang bertugas adalah 2 orang demi keselamatan dan kenyamanan Anda dan rombongan.
            </li>
         </ul>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
import { onBeforeMount, computed, ref, type ComputedRef } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Header from '../../components/header.vue'
import { useProducts, useVehicle } from '../../composables/products'

const route = useRoute()
const acceptedRoutes : ComputedRef<string[]> = computed(() => {
   return ['tayo', 'thomas', 'lani']
})
const data = ref(useVehicle(route.params.name.toString()))

onBeforeMount(() => {
   if (!acceptedRoutes.value.find((item) => route.params.name === item)) {
      useRouter().push('/')
   }
})

const useCurrency = (price?: number) : string => {
   if (!price) return 'N/A'

   const formatted = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
   }).format(price!)

   return formatted
}
</script>