import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import SignUpView from '../views/SignUp.vue'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/sign-up',
      name: 'signUp',
      component: SignUpView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }
  ]
})

export default router
