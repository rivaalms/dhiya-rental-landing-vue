<template>
   <div class="min-h-[calc(100dvh-56px-160px)]">
      <slot/>
   </div>
   
   <Footer/>
   </template>
   
   <script setup lang="ts">
   import Footer from "../components/footer.vue"
   </script>