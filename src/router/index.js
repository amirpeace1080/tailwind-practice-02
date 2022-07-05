import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView'
import Custom from "@/views/Custom";
import ButtonView from "@/views/ButtonView";
import FlexView from "@/views/FlexView";
import GalleryView from "@/views/GalleryView";
import FocusView from "@/views/FocusView";
import FormName from "@/views/FormName";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/custom',
    name: 'custom',
    component: Custom
  },
  {
    path: '/button',
    name: 'button',
    component: ButtonView
  },
  {
    path: '/flex',
    name: 'flex',
    component: FlexView
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryView
  },
  {
    path: '/focus',
    name: 'focus',
    component: FocusView
  },
  {
    path: '/formName',
    name: 'formName',
    component: FormName
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
