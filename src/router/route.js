import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import HomeView from "@/Views/HomeView.vue";

const routes = [
    {path: '/', component: HomeView}
]

export default createRouter({
    history: createWebHistory(),
    routes,
})