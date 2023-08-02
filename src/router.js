import { createRouter, createWebHistory } from "vue-router";

const PersonalInfo = () => import('./components/PersonalInfo.vue')
const Plan = () => import('./components/Plan.vue')
const AddOns = () => import('./components/AddOns.vue')
const FinishingUp = () => import('./components/FinishingUp.vue')
const ThankYou = () => import("./components/ThankYou.vue");


const routes = [
  { path: '/', redirect: '/personal-info' },
  {
    path: '/personal-info',
    component: PersonalInfo,
    meta: {
      prev: '',
      next: '/plan'
    }
  },
  {
    path: '/plan',
    component: Plan,
    meta: {
      prev: '/personal-info',
      next: '/add-ons'
    }
  },
  {
    path: '/add-ons',
    component: AddOns,
    meta: {
      prev: '/plan',
      next: '/finishing-up'
    }
  },
  {
    path: '/finishing-up',
    component: FinishingUp,
    meta: {
      prev: '/add-ons',
      next: ''
    }
  },
  {
    path: '/thank-you',
    component: ThankYou,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;