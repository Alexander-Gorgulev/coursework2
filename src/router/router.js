import { createMemoryHistory, createRouter } from 'vue-router'

import MainPage from '../pages/MainPage.vue'
import RegisterVue from '../pages/Register.vue'
import ContactsPageVue from '../pages/ContactsPage.vue'
import TutorialPageVue from '../pages/TutorialPage.vue'
import GalleryPageVue from '../pages/GalleryPage.vue'
import LoginPageVue from '../pages/Login.vue'
import ModalCompVue from '../components/ModalComp.vue'

const routes = [
	{ path: '/', component: MainPage },
	{ path: '/register', component: RegisterVue },
	{ path: '/contacts', component: ContactsPageVue },
	{ path: '/tutorial', component: TutorialPageVue },
	{ path: '/gallery', component: GalleryPageVue },
	{ path: '/login', component: LoginPageVue },
	{ path: '/modal', component: ModalCompVue },
]

const router = createRouter({
	history: createMemoryHistory(),
	routes,
})

export default router
