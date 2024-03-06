import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import Services from '@/views/Services.vue'
import Authentication from '@/layout/Authentication.vue'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Chat from '@/views/Chat'
import MonitoratEni from '@/views/MonitoratEni.vue'
 //ajouter tojo
import Acceuille from '@/views/Acceuille.vue'
import TrouverMontor from '@/views/TrouverMontor.vue'

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
  //ajouter tojo
  {
    path: '/Aceuille',
    name: 'aceuille',
    component: Acceuille
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
  {
    path: '/monitorat',
    name: 'guide',
    component: MonitoratEni
  },
  {
    path: '/trouver',
    name: 'guide',
    component: TrouverMontor
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
