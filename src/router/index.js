import { createRouter, createWebHistory } from 'vue-router'
import AddUsers from '../views/AddUsers.vue'
import Users from '../views/Users.vue'

const routes = [
  {
    path: '/',
    name: 'AddUsers',
    component: AddUsers
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
