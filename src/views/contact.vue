<template>
   <div class="container mx-auto">
      <div class="">
         <div class="p-4">
            <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               Kontak Kami
            </p>

            <div class="mb-4">
               <p class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Alamat
               </p>
               <p>{{ store.about.address }}</p>
            </div>

            <div class="mb-4">
               <p class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Email
               </p>
               <p>{{ store.about.email }}</p>
            </div>

            <div class="">
               <p class="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                  Telepon
               </p>
               <p>{{ store.about.phone }}</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import { computed, ref} from 'vue'
import { useAppStore } from '../stores/app'

const store = useAppStore()
</script>