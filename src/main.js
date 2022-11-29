import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/router/permission'

import "tailwindcss/tailwind.css"
import 'vant/lib/index.css';
import '@/styles/index.scss'

import { loadSvg } from '@/icons'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(loadSvg)

app.mount('#app')
