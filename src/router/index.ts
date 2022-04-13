import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/premium',
    name: 'Premium',
    component: () => import('../views/Premium.vue'),
  },
  {
    path: '/residential',
    name: 'Residential',
    component: () => import('../views/Residential.vue'),
  },
  {
    path: '/dedicated',
    name: 'Dedicated',
    component: () => import('../views/Dedicated.vue'),
  },
  {
    path: '/free-proxy-list',
    name: 'Free',
    component: () => import('../views/Free.vue'),
  },
  {
    path: '/web-proxy',
    name: 'Web',
    component: () => import('../views/Web.vue'),
  },
  {
    path: '/online-proxy-checker',
    name: 'Checker',
    component: () => import('../views/Checker.vue'),
  },
  {
    path: '/proxy-filter',
    name: 'Filter',
    component: () => import('../views/Filter.vue'),
  },
  {
    path: '/help-center',
    name: 'Help',
    component: () => import('../views/Help.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
