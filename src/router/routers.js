import { createRouter, createWebHistory} from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import ProjectpageView from '../views/ProjectpageView.vue'
import ResumepageView from '../views/ResumepageView.vue'


const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: HomepageView
    },
    {
        path: '/projects',
        name: 'Projectpage',
        component: ProjectpageView
    },
    {
        path: '/resume',
        name: 'Resumepage',
        component: ResumepageView
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router