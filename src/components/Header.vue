<template>
  <header>
    <div class="header-btns header-btns-left">
      <RouterLink v-for="btn in leftBtnsData" :key="btn.id" :to="btn.to" @click="btn.action ? btn.action() : null">
        {{ btn.name }}
      </RouterLink>
    </div>
    <div>
      <RouterLink to="/" class="logo-wrapper">
        <img src="../assets/logo.png" class="logo" alt="Design Mate" />
      </RouterLink>
    </div>
    <div class="header-btns header-btns-right">
      <RouterLink v-for="btn in rightBtnsData" :key="btn.id" :to="btn.to" @click="btn.action ? btn.action() : null">
        {{ btn.name }}
      </RouterLink>
    </div>
  </header>
</template>


<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

var isAuthenticated = computed(() => localStorage.getItem('isAuthenticated') === 'true')

const btnsData = computed(() => {
  const buttons = [
    { id: 1, name: 'Главная', model: 'MainPage', to: '/' },
    { id: 2, name: 'Галерея', model: 'GalleryPage', to: '/gallery' },
    { id: 3, name: 'Инструкция', model: 'TutorialPage', to: '/tutorial' },
    { id: 4, name: 'Контакты', model: 'ContactsPage', to: '/contacts' }
  ]

  if (isAuthenticated.value) {
    buttons.push({ id: 7, name: 'Выйти', model: 'Logout', to: '/', action: logout })
  } else {
    buttons.push({ id: 5, name: 'Регистрация', model: 'Register', to: '/register' })
    buttons.push({ id: 6, name: 'Войти', model: 'Login', to: '/login' })
  }

  return buttons
})

function logout() {
  localStorage.removeItem('isAuthenticated')
  isAuthenticated.value = false  // Обновляем статус аутентификации напрямую
  // window.dispatchEvent(new CustomEvent('auth-change', { detail: { isAuthenticated: false } }))
  alert('Вы вышли из системы')
  window.location.reload();
}

const halfSize = computed(() => Math.ceil(btnsData.value.length / 2))
const leftBtnsData = computed(() => btnsData.value.slice(0, halfSize.value))
const rightBtnsData = computed(() => btnsData.value.slice(halfSize.value))


function handleAuthChange(event) {
  console.log("Auth status changed:", event.detail.isAuthenticated)
  isAuthenticated.value = event.detail.isAuthenticated
}

onMounted(() => {
  window.addEventListener('auth-change', handleAuthChange)
})

onUnmounted(() => {
  window.removeEventListener('auth-change', handleAuthChange)
})

</script>

<style scoped>
header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	margin-top: -20px;
}
.header-btns {
	display: flex;
	flex-wrap: wrap;
	gap: 0.8em;
}
.header-btns a {
	font-weight: 700;
	padding: 0.5em;
	background-color: transparent;
	color: #301c1c;
	transition: 1s;
}
.header-btns a:hover {
	color: #883b3b;
	transition: none;
}
.header-btns-right {
	justify-content: end;
}

.logo-wrapper {
	display: block;
	width: 12em;
}
.logo {
	display: block;
	width: 100%;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #00e5ff);
}
</style>
