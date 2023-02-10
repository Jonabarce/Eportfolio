import { createRouter, createWebHistory} from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import ProjectpageView from '../views/ProjectpageView.vue'


const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomepageView
    },
    {
        path: '/projectpage',
        name: 'Projectpage',
        component: ProjectpageView
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router