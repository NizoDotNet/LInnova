import { createApp } from 'vue'
import App from './App.vue'
import router from './router/route.js'
import {createPinia} from "pinia";
import "./assets/main.css"
import "./assets/linnova.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(bootstrap)
app.use(router)
app.mount('#app')
