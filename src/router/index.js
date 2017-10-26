import Vue from 'vue'
import Router from 'vue-router'
import VueRouterTitle from 'vue-router-title'

const home = () => import('../pages/home.vue');//首页
const cart = () => import('../pages/cart.vue');//购物车
const zoe = () => import('../pages/zoe.vue');//个人空间
const sort = () => import('../pages/sort.vue');//商品匪类
const join = () => import('../pages/join.vue');//加盟招商

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
        },
        {
            path: '/sort',
            name: 'sort',
            component: sort,
            meta:{
                navShow: true,
                title:'个人中心'
            }
        },
        {
            path: '/join',
            name: 'join',
            component: join,
            meta:{
                navShow: false,
                title:'加盟'
            }
        }
    ]
})
Vue.use(VueRouterTitle,{router});

export default router
