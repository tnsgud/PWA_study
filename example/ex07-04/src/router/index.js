import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MainPage from '../components/main_page.vue';
import SubPage from '../components/sub_page.vue';

Vue.use(VueRouter);

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: function() {
    //         return import(/* webpackChunkName: "about" */ '../views/About.vue');
    //     },
    // },
    {
        path: '/',
        name: 'Main',
        component: MainPage,
    },
    {
        path: '/sub',
        name: 'Sub',
        component: SubPage,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
