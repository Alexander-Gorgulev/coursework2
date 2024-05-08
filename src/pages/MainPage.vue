<template>
	<div class="main-page">
		<h1>
			Design<br />
			<span style="display: block; margin-left: 325px; margin-top: -40px"
				>Mate</span
			>
		</h1>
		<div class="main-page__description">
			<p>
				Онлайн-дизайнер - инновационный проект, который создает
				персонализированный интерьер в соответствии с вашим запросом. Просто
				укажите параметры комнаты и предпочтения, а программа сгенерирует
				уникальный дизайн. Это удобное решение для тех, кто хочет преобразить
				свой дом без лишних затрат времени и денег.
			</p>
			<RouterLink class="link" to="/modal">Генерация</RouterLink>

			<button style="background-color: #ffeec1">Купить</button>
		</div>
		<div class="main-page__img">
			<img src="../assets/ikea-sofa.png" alt="Диван, кек" />
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'
import ModalComp from '../components/ModalComp.vue'
</script>

<style scoped>
h1 {
	color: #301c1c;
	font-weight: 700;
	font-size: 120px;
	margin-bottom: 0;
	margin-top: 0;
}
.link {
	display: block;
	padding: 18px 40px;
	font-size: 20px;
	color: #1e1e1a;
	border-radius: 30px;
	background-color: rgb(255, 238, 193);
}

.main-page {
	padding: 0 150px;
}
.main-page__description {
	display: flex;
	align-items: center;
	gap: 30px;
}
.main-page__description p {
	font-weight: 300;
	margin-right: 40px;
	font-size: 14px;
	max-width: 45%;
	color: #1e1e1a;
}
.main-page__description button {
	height: 64px;
	padding: 0 40px;
	font-size: 20px;
	color: #1e1e1a;
	border-radius: 30px;
}
.main-page__img {
	margin: 40px auto 0;
	width: 700px;
}
.main-page__img img {
	width: 100%;
}
</style>
