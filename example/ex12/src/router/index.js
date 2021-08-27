import Vue from 'vue';
import VueRouter from 'vue-router';
import {initializeApp} from 'firebase/app';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'start_page',
        component: () => import('../components/start_page.vue'),
    },
    {
        path: '/main',
        name: 'main_page',
        component: () => import('../components/main_page.vue'),
        meta: { bAuth: true },
    },
    {
        path: '/login',
        name: 'login_page',
        component: () => import('../components/login_page.vue'),
    },
    {
        path: '/*',
        name: 'error_page',
        component: () => import('../components/error_page.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    const bNeedAuth = to.matched.some((record) => record.meta.bAuth);
    const bCheckAuth = initializeApp.auth().currentUser;
    if (bNeedAuth && !bCheckAuth) {
        next('/login');
    } else {
        next();
    }
});

export default router;
