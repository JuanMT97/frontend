import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import About from '../views/About.vue'
import { authGuard } from "../auth/authGuard";
import { authAdmin } from "../auth/authGuard";
import ProfileAdmin from '../views/ProfileAdmin.vue'
import Neonato from '../views/Neonato.vue'
import TercerTrimestre from '../views/TercerTrimestre.vue'
import PrimerYSegundoTrimestre from '../views/PrimerYSegundoTrimestre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    beforeEnter: authGuard
  },
  {
    path: "/primerYSegundoTrimestre",
    name: "primerYSegundoTrimestre",
    component: PrimerYSegundoTrimestre,
    beforeEnter: authGuard
  },
  {
    path: "/tercerTrimestre",
    name: "tercerTrimestre",
    component: TercerTrimestre,
    beforeEnter: authGuard
  },
  {
    path: "/neonato",
    name: "neonato",
    component: Neonato,
    beforeEnter: authGuard
  },
  {
    path: "/profileAdmin",
    name: "profileAdmin",
    component: ProfileAdmin,
    beforeEnter: authAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
