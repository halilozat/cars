import { createRouter, createWebHistory } from 'vue-router';
import carList from '@/screens/List/carList.vue';
import carDetails from '@/screens/Details/carDetails.vue';

const routes = [
    {
        path: '/',
        name: 'carList',
        component: carList
    },
    {
        path: '/detail/:id',
        name: 'carDetails',
        component: carDetails,
        props: true
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes
});

export default router;
