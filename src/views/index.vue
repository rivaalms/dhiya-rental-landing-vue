<template>
<!-- Hero -->
<div class="h-[650px] bg-[url('../public/img/pangalengan-2.jpg')] backdrop-brightness-50 bg-center bg-no-repeat bg-cover relative">
   <div class="absolute h-full w-full bg-black -z-30 opacity-[25%]"></div>
   <Header class="absolute h-full w-full"/>
   <div class="container mx-auto h-full grid grid-cols-1 gap-4 place-items-center">
      <div class="grid grid-cols-1 gap-4 place-items-center z-10">
         <p class="uppercase text-gray-200 font-semibold text-2xl">
            Travel and Tour Bandung
         </p>
         <div class="w-40 border-2 border-amber-500"></div>
         <p class="uppercase text-gray-200 tracking-wide font-semibold text-6xl mb-12">
            {{ store.organizationName }}
         </p>
         <div>
            <router-link to="/contacts" class="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-400/75 font-medium rounded-full tracking-wide px-8 py-4 mb-2 transition-colors">
               RESERVASI SEKARANG
            </router-link>
         </div>
      </div>
   </div>
</div>

<div class="container mx-auto">
   <!-- Showcase card -->
   <div class="py-24 grid grid-cols-4 gap-4 px-16">
      <div class="card shadow-none border-0">
         <div class="flex justify-center pb-6 text-amber-500">
            <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 13a3 3 0 0 1 2.08 5.162L12.17 20H15v2H9v-1.724l3.693-3.555A1 1 0 1 0 11 16H9a3 3 0 0 1 3-3Zm6 0v4h2v-4h2v9h-2v-3h-4v-6h2ZM4 12a7.985 7.985 0 0 0 3 6.246v2.416A9.995 9.995 0 0 1 2 12h2Zm8-10c5.185 0 9.449 3.947 9.95 9h-2.012A8.001 8.001 0 0 0 5.865 6.865L8 9H2V3l2.447 2.446A9.98 9.98 0 0 1 12 2Z"></path>
            </svg>
         </div>
         <p class="text-center text-xl font-medium">
            Pelayanan 24 Jam
         </p>
      </div>
      <div class="card shadow-none border-0">
         <div class="flex justify-center pb-6 text-amber-500">
            <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 11a5 5 0 0 1 5 5v6H7v-6a5 5 0 0 1 5-5Zm-6.712 3.006a6.984 6.984 0 0 0-.28 1.65L5 16v6H2v-4.5a3.5 3.5 0 0 1 3.119-3.48l.17-.014h-.001Zm13.424 0A3.501 3.501 0 0 1 22 17.5V22h-3v-6c0-.693-.1-1.362-.288-1.994ZM5.5 8a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
            </svg>
         </div>
         <p class="text-center text-xl font-medium">
            Tim yang Berpengalaman
         </p>
      </div>
      <div class="card shadow-none border-0">
         <div class="flex justify-center pb-6 text-amber-500">
            <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1ZM5 5v9h14V5H5Zm0 11v2h4v-2H5Zm10 0v2h4v-2h-4Z"></path>
            </svg>
         </div>
         <p class="text-center text-xl font-medium">
            Performa Layanan Terbaik
         </p>
      </div>
      <div class="card shadow-none border-0">
         <div class="flex justify-center pb-6 text-amber-500">
            <svg width="64" height="64" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 9h19a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9Zm1-6h15v4H2V4a1 1 0 0 1 1-1Zm12 11v2h3v-2h-3Z"></path>
            </svg>
         </div>
         <p class="text-center text-xl font-medium">
            Harga Bersahabat
         </p>
      </div>
   </div>

   <!-- Products -->
   <div class="py-24 grid grid-cols-1">
      <p class="text-4xl mb-8 font-semibold text-center uppercase">
         Transportasi Pariwisata
      </p>
      <div class="w-2/3 mx-auto">
         <div class="grid grid-cols-3 gap-4">
            <template v-for="product in products" :key="product.label">
               <div class="card p-0">
                  <div class="aspect-video">
                     <img :src="product.img" alt="" class="rounded-t-[0.45rem]">
                  </div>
                  <div class="p-5 flex flex-col items-center gap-4">
                     <p class="font-semibold text-lg">
                        {{ product.label }}
                     </p>
                     <div class="mb-3">
                        <router-link :to="product.href" class="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-400/75 rounded-full tracking-wide px-5 py-2">
                           Detail
                        </router-link>
                     </div>
                  </div>
               </div>
            </template>
         </div>
      </div>
   </div>

   <!-- Contacts -->
   <div class="py-24 grid grid-cols-1">
      <p class="text-4xl mb-8 font-semibold text-center uppercase">
         Reservasi Sekarang
      </p>
      <div class="grid grid-cols-3 gap-4 h-96 w-full mx-auto bg-[url('../public/img/ranca-upas.jpg')] bg-left-bottom bg-no-repeat bg-cover relative">
         <div class="absolute h-full w-full bg-black opacity-[45%]"></div>
         <div class="col-span-2 px-28 flex items-center">
            <div class="z-40 text-gray-200">
               <p class="mb-8 text-lg">Kami menawarkan beragam armada transportasi dalam dan luar Kota Bandung</p>
               <router-link to="/contacts" class="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-amber-400/75 text-sm font-medium rounded-full tracking-wide px-8 py-4 mr-2 mb-2">
                  RESERVASI SEKARANG
               </router-link>
            </div>
         </div>
      </div>
   </div>
</div>
</template>

<script setup lang="ts">
import Header from '../components/header.vue'
import { ref, computed } from 'vue'
import { useAppStore } from '../stores/app'

const store = useAppStore()

const products = computed(() => {
   return [
      {
         label: 'Bus 1',
         href: '/products/bus-1',
         img: '/img/bus-1.jpg'
      },
      {
         label: 'Bus 2',
         href: '/products/bus-2',
         img: '/img/bus-1.jpg'
      },
      {
         label: 'Bus 3',
         href: '/products/bus-3',
         img: '/img/bus-1.jpg'
      },
   ]
})
</script>