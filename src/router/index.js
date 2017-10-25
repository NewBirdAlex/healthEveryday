import Vue from 'vue'
import Router from 'vue-router'
import VueRouterTitle from 'vue-router-title'

const home = () => import('../pages/home.vue');//首页
const cart = () => import('../pages/cart.vue');//首页
const zoe = () => import('../pages/zoe.vue');//首页

Vue.use(Router);
const router = new Router({
    routes: [
        {
            path: '/',
            redirect:'/home'
        },

        {
            path: '/home',
            name: 'home',
            component: home,
            meta:{
                navShow: true,
                title:'首页'
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: cart,
            meta:{
                navShow: true,
                title:'购物车'
            }
        },
        {
            path: '/zoe',
            name: 'zoe',
            component: zoe,
            meta:{
                navShow: true,
                title:'个人中心'
            }
        }
    ]
})
Vue.use(VueRouterTitle,{router});

export default router
