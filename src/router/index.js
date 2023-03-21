/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2021-11-27 20:54:07
 * @LastEditors: kangjinrui
 * @LastEditTime: 2023-03-17 18:09:15
 */
import {
    createRouter,
    createWebHashHistory
} from "vue-router";
import Layout from "@/layout/Index.vue";

const routes = [{
        path: '/',
        redirect: '/dashboard'
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/404",
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import( /* webpackChunkName: "login" */ "../views/login/index.vue")
    },

    {
        path: "/",
        name: "Layout",
        component: Layout,
        children: [{
                path: "/dashboard",
                name: "dashboard",
                meta: {
                    title: '首页',
                    keepAlive: true
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "../views/index/index.vue")
            },
            {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限',
                    keepAlive: true
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "../views/permission/index.vue")
            },
            {
                path: '/test/json',
                name: "test-icon-json",
                meta: {
                    title: 'test-icon-json',
                    keepAlive: true
                },
                component: () => import( /* webpackChunkName: "dashboard" */ "../views/test/iconJson.vue")
            },
            {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import( /* webpackChunkName: "404" */ '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import( /* webpackChunkName: "403" */ '../views/403.vue')
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;