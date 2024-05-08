<template>
	<div class="registration-form">
		<h2>Регистрация</h2>
		<form @submit.prevent="submitForm">
			<label for="username">Имя пользователя</label>
			<input
				type="text"
				id="username"
				v-model="form.username"
				placeholder="Введите ваше имя"
			/>

			<label for="email">Почта</label>
			<input
				type="email"
				id="email"
				v-model="form.email"
				placeholder="Введите вашу почту"
			/>

			<label for="password">Пароль</label>
			<input
				type="password"
				id="password"
				v-model="form.password"
				placeholder="Введите ваш пароль"
			/>

			<button type="submit">Далее</button>
		</form>
	</div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const form = ref({
	username: '',
	email: '',
	password: '',
})

const validation = reactive({
	username: true,
	email: true,
	password: true,
})

function validateForm() {
	validation.username = form.value.username.length > 0
	validation.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.value.email)
	validation.password = form.value.password.length > 5
	return validation.username && validation.email && validation.password
}

function submitForm() {
	if (validateForm()) {
		// TODO: Отправка формы
    localStorage.setItem('userData', JSON.stringify(form.value))
    alert('Форма отправлена и данные сохранены')
  } else {
		alert('Пожалуйста, заполните форму корректно.')
	}
}
</script>

<style scoped>
.registration-form {
	max-width: 300px;
	background-color: #fdffaf;
	padding: 20px 40px 40px;
	border-radius: 10px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	margin: auto;
	color: #301c1c;
}

.registration-form h2 {
	text-align: center;
	margin-bottom: 20px;
}

.registration-form form {
	display: flex;
	flex-direction: column;
}

.registration-form label {
	margin-bottom: 5px;
	font-weight: 700;
}

.registration-form input {
	margin-bottom: 20px;
	padding: 15px 12px;
	border: none;
	border-radius: 5px;
	background-color: #e2e470;
}

.registration-form button {
	padding: 10px;
	background-color: #e2e470;
	border: none;
	border-radius: 5px;
	color: #301c1c;
	cursor: pointer;
	font-weight: 600;
	transition: background-color 0.3s ease;
}

.registration-form button:hover {
	background-color: #7bad2f;
}
</style>
