import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', ()  => {
   const organizationName = ref('Dhiya Multi Niaga')
   const about = ref({
      address: 'Jl. Radio No. 798, Kota Bandung, Jawa Barat 50830',
      email: 'arahimah@example.com',
      phone: '(+62) 363 2331 763'
   })

   return { about, organizationName }
})