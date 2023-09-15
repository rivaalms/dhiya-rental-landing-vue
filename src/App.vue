<script setup lang="ts">
	import Header from "./components/header.vue"
	import Footer from "./components/footer.vue"
</script>

<template>
	<Header />

	<div class="min-h-[calc(100dvh-56px-160px)] px-2">
		<RouterView />
	</div>

	<Footer />
</template>
