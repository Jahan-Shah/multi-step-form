import { createRouter, createWebHistory } from "vue-router";

const PersonalInfo = () => import('./components/PersonalInfo.vue')
const Plan = () => import('./components/Plan.vue')
const AddOns = () => import('./components/AddOns.vue')
const FinishingUp = () => import('./components/FinishingUp.vue')

const routes = [
  { path: '/', redirect: '/personal-info' },
  { path: '/personal-info', component: PersonalInfo },
  { path: '/plan', component: Plan },
  { path: '/add-ons', component: AddOns },
  { path: '/finishing-up', component: FinishingUp },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router;