<template>
<Hero bg="/img/pangalengan-2.jpg" height="420">
   <p class="uppercase text-gray-200 font-semibold text-4xl md:text-5xl">
      {{ data?.name }}
   </p>
</Hero>
<div class="pb-12 pt-12 md:pt-24">
   <div class="md:w-2/3 px-4 md:px-0 mx-auto">
      <p class="mb-4">
         Sewa <b>{{ data?.name }}</b> Bandung dengan harga yang terjangkau didukung dengan fasilitas yang bagus. {{ company.name }} merupakan perusahaan penyedia jasa transportasi di Bandung.
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
<div class="md:py-12">
   <div class="md:w-2/3 px-4 md:px-0 mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div class="aspect-video overflow-hidden flex items-center">
            <img :src="data?.img" alt="">
         </div>
         <div class="">
            <table class="w-full text-gray-600 text-left">
               <tbody>
                  <tr class="text-gray-900">
                     <th scope="row" class="px-6 py-2 font-semibold whitespace-nowrap">Kapasitas</th>
                     <td class="px-6 py-2">{{ data?.capacity }} seat</td>
                  </tr>
                  <tr class="text-gray-900">
                     <th scope="row" class="px-6 py-2 font-semibold whitespace-nowrap">Harga dalam kota</th>
                     <td class="px-6 py-2">{{ useCurrency(data!.price_inside_city) }}</td>
                  </tr>
                  <tr class="text-gray-900">
                     <th scope="row" class="px-6 py-2 font-semibold whitespace-nowrap">Harga luar kota</th>
                     <td class="px-6 py-2">{{ useCurrency(data!.price_outside_city) }}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</div>
<div class="py-12">
   <div class="md:w-2/3 px-4 md:px-0 mx-auto">
      <p class="text-xl md:text-2xl mb-8 font-semibold text-center uppercase">
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
         <p class="text-lg md:text-xl mb-4 font-semibold">
            Catatan
         </p>
         <ul class="list-disc ps-8">
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
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Hero from '@/components/hero.vue'
import { useCurrency, getVehicle } from '@/models/products'
import { company as Company } from '@/models/company'

const route = useRoute()
const company = computed(() => Company)
const data = computed(() => getVehicle(route.params.name.toString()))
</script>