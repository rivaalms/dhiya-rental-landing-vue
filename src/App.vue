<script setup lang="ts">
import Default from './layouts/default.vue'
import Homepage from './layouts/homepage.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const isHomePage = computed(() => {
	return useRoute().name === 'home' ? true : false
})
</script>

<template>
<component :is="isHomePage ? Homepage : Default">
	<RouterView />
</component>
</template>
