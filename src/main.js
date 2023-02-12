import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routers';
import { inject } from '@vercel/analytics';

createApp(App).use(router).mount('#app')

inject();