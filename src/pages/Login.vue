<template>
  <div class="login-form">
    <h2>Вход</h2>
    <form @submit.prevent="submitLoginForm">
      <label for="loginUsername">Имя пользователя</label>
      <input
          type="text"
          id="loginUsername"
          v-model="loginForm.username"
          placeholder="Введите ваше имя пользователя"
      />

      <label for="loginPassword">Пароль</label>
      <input
          type="password"
          id="loginPassword"
          v-model="loginForm.password"
          placeholder="Введите ваш пароль"
      />

      <button type="submit">Войти</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loginForm = ref({
  username: '',
  password: '',
})

function submitLoginForm() {
  const userData = localStorage.getItem('userData')
  if (userData) {
    const savedData = JSON.parse(userData)
    if (loginForm.value.username === savedData.username && loginForm.value.password === savedData.password) {
      localStorage.setItem('isAuthenticated', 'true')
      window.dispatchEvent(new CustomEvent('auth-change', { detail: { isAuthenticated: true } }))
      alert('Вход выполнен успешно')
      window.location.reload();
    } else {
      alert('Неверное имя пользователя или пароль')
    }
  } else {
    alert('Пользователь не найден')
  }
}
</script>

<style scoped>
.login-form {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.login-form input[type="text"],
.login-form input[type="password"] {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.login-form button {
  background-color: #e2e470;
  color: black;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

.login-form button:hover {
  opacity: 0.8;
}
</style>
