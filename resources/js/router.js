import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from './components/admin/Dashboard.vue';
import * as auth from './services/auth_service';
import Home from './components/Home/layout/Home.vue';

Vue.use(Router);

const routes = [{
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        children: [{
                path: 'home',
                name: 'home',
                component: () =>
                    import ('./components/admin/Welcome.vue')
            },
            {
                path: 'categories',
                name: 'categories',
                component: () =>
                    import ('./components/admin/Categories.vue')
            },
            {
                path: 'products',
                name: 'products',
                component: () =>
                    import ('./components/admin/Products.vue')
            }
        ],
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next('/login');
            } else {
                next()

            }
        }
    },

    {
        path: '/register',
        name: 'register',
        component: () =>
            import ('./components/authentication/Register.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('./components/authentication/Login.vue'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/dashboard/home');
            }
        }
    },
    {
        path: '/forgotPassword',
        name: 'forgotPassword',
        component: () =>
            import ('./components/authentication/ForgotPassword.vue')
    },
    {
        path: '/beranda',
        name: 'Beranda',
        component: Home,

    }
];

const router = new Router({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'active'
});

export default router;