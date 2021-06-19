import { createMemoryHistory, createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const isServer = typeof window === 'undefined';
const history = isServer ? createMemoryHistory() : createWebHistory(process.env.BASE_URL);

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/jobs'
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: () => import('@/views/JobsPage.vue')
    },
    {
        path: '/jobs/:slug',
        name: 'jobs.detail',
        component: () => import('@/views/JobDetailsPage.vue')
    }
];

const router = createRouter({
    history,
    routes
});

export default router;

export function createServerRouter() {
    return createRouter({routes, history});
}
