<template>
    <div>
        <ul  v-show="$route.meta.navShow">
            <router-link :to="item.router" tag="li" active-class="active" v-for="(item,index) in navList"
                         :key="index"
                         @click="handleClick(item,index)">
                <p><i class="icon iconfont" :class="item.icon"></i></p>
                {{item.name}}
            </router-link>
        </ul>
    </div>
</template>
<style scoped lang="less">
    @import "../assets/css/common.less";

    .active {
        background: #26292c;
    }
    ul {
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 1.15rem;
        li {
            width: 25%;
            float: left;
            height: 1.15rem;
            color: white;
            background: #373b3e;
            .tac;
            .icon{
                font-size: 0.4rem;
                margin-top: 0.2rem;
                display: inline-block;
                margin-bottom: 0.1rem;
            }
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                navList: [
                    {
                        name: '首页',
                        icon: 'icon-shouye',
                        router: '/home'
                    },
                    {
                        name: '产品分类',
                        icon: 'icon-fenlei',
                        router: '/sort'
                    },
                    {
                        name: '购物车',
                        icon: 'icon-caigoutonggerenbangaobaozhencaigou09',
                        router: '/cart'
                    },
                    {
                        name: '个人中心',
                        icon: 'icon-geren',
                        router: '/zoe'
                    }
                ]
            }
        }
    }
</script>