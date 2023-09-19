<script setup lang="ts">
import Default from './layouts/default.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const isErrorPage = computed(() => useRoute().name === 'not-found' ? true : false)
</script>

<template>
	<RouterView v-if="isErrorPage"/>

	<Default v-else>
		<RouterView />
	</Default>	
</template>
