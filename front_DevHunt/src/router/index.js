import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import Services from '@/views/Services.vue'
import Authentication from '@/layout/Authentication.vue'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Chat from '@/views/Chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/Chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/Services/:id',
    name: 'services',
    component: Services
  },  
  {
    path: '/Sign',
    name: 'Sign',
    component: Authentication,
    children:[
      {
        path: 'In',
        name: 'SignIn',
        component: SignIn
      },
      {
        path: 'Up',
        name: 'SignUp',
        component: SignUp
      }
    ]
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
