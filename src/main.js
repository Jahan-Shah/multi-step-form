import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import './reset.css'
import './style.css'

const pinia = createPinia();
const app = createApp(App)

app.use(pinia).use(router)
app.mount('#app')