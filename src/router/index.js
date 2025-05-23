import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../public/pages/home.component.vue';

const ApartmentComponent = () => import('../properties/reting/new/pages/apartment.vue');
const PageNotFound = () => import('../public/pages/page-not-found.component.vue');

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
        meta: { title: 'Home' },
    },
    {
        path: '/properties/renting/new/apartment',
        name: 'apartment',
        component: ApartmentComponent,
        meta: { title: 'Apartment' },
    },
    {
        path: '/',
        name: 'default',
        redirect: { name: 'home' },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: PageNotFound,
        meta: { title: 'Page Not Found' }
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
}); 

export default router;