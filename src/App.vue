<template>
	<div class="wrapper">
		<div class="wrapper-in">
			<Header></Header>
			<div class="container">
				<router-view v-slot="{ Component }">
					<transition name="fade" mode="out-in">
						<component :is="Component" />
					</transition>
				</router-view>
			</div>
		</div>
	</div>
</template>

<script setup>
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
.container {
	padding: 0 30px;
}
.wrapper {
	min-height: 100vh;
}
</style>
