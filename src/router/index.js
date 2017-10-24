import Vue from 'vue'
import Router from 'vue-router'
import VueRouterTitle from 'vue-router-title'

const home = () => import('../pages/Home.vue');//首页

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
        }
    ]
})
Vue.use(VueRouterTitle,{router});

export default router
