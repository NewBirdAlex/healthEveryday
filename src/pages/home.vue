<template>
    <div>
        <div class="slide">
            <mt-swipe :auto="4000">
                <mt-swipe-item><img src="../assets/img/nav.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/2.jpg" alt=""></mt-swipe-item>
                <mt-swipe-item><img src="../assets/img/nav.jpg" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <!--搜索-->
        <div class="pa bgWhite bt of search">
            <img src="../assets/img/logo.png" class="fl logo" alt="">
            <i class="icon iconfont icon-fenlei  fr fenlei" ></i>
            <div class="middle">
                <input type="text" placeholder="请输入关键词" class="pa">
                <i class="icon iconfont icon-sousuo fr mr fenlei"></i>
            </div>
        </div>
        <!--栏目-->
        <div class="bgWhite of pt pb ">
            <div class="item fl tac itemList mb" v-for="(item,index) in itemList" :key="index">
                <span :style="item.bgc">
                    <i class="icon iconfont " :class="item.icon" ></i>
                </span>
                <p>{{item.name}}</p>
            </div>
        </div>
        <!--公告-->
        <div class="bgWhite pa bt ">
            <i class="icon iconfont icon-gonggao1 black"></i>
            <span class="pr br mr black">公告</span>
            <span class="fs20 gray spc" style="">10月1号-10月8号天美康联国庆中秋双假期正常营业，如需预约>></span>
        </div>
        <img src="../assets/img/gg.jpg" class="gg" alt="">
        <!--shop-->
        <div class="bgWhite pa mt" v-for=" (item,index) in productList" :key="index">
            <img :src="item.img" class="gg" alt="">
            <!--<img src="../assets/img/gg2.jpg" class="gg" alt="">-->
            <div class="pl ">
                <p class="fs26 mt mb">{{item.name}}</p>
                <p>
                    <span class="crl"><i class="icon iconfont icon-shouji white"></i></span>
                    <span class="fs28 deepRed"><i class="icon iconfont icon-renminbi"></i>{{item.price}}</span>
                    <span class="gray fs26 fr tf">￥{{item.oldPrice}}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../assets/css/common.less';
    .spc{
        display: inline-block;
        width: 5.5rem;
        height: 0.26rem;
        .of;
    }
    .crl{
        width: 0.4rem;
        height: 0.4rem;
        .tac;
        display: inline-block;
        vertical-align: middle;
        line-height: 0.4rem;
        border-radius: 50%;
        background: #ef3089;

    }
    .itemList{
        width: 25%;

        span{
            display: inline-block;
            width: 0.84rem;
            height: 0.84rem;

            line-height: 0.84rem;
            .white;
            i{font-size: 0.5rem}
            border-radius: 50%;
            margin-bottom: 0.1rem;
        }
    }

    .search{
        .logo{
            width: 0.6rem;
        }
        .fenlei{
            font-size: 0.4rem;
            margin-top: 0.15rem;

        }
        .middle{
            width: 5.28rem;
            margin: 0 auto;
            border-radius: 0.15rem;
            background: #e9e9e9;
            input{
                background: none;
                border:none;
                outline: none;
            }
            i{
                margin-top: 0.15rem;
            }
        }
    }
    .slide{
        height: 3.74rem;
        position: relative;
        img{
            width: 100%;
            height: 100%;
        }
    }

</style>
<script>

    export default {
        data(){
            return{
                productList:[
                    {
                        img:require('../assets/img/gg2.jpg'),
                        name:'雪域精粹焕发新肌',
                        price:628.00,
                        oldPrice:200
                    },
                    {
                        img:require('../assets/img/gg3.jpg'),
                        name:'雪域精粹焕发新肌',
                        price:628.00,
                        oldPrice:200
                    },{
                        img:require('../assets/img/gg4.jpg'),
                        name:'雪域精粹焕发新肌',
                        price:628.00,
                        oldPrice:200
                    }
                ],
                itemList:[
                    {
                        name:'公告通知',
                        icon:"icon-laba",
                        bgc:"background-color: rgba(226, 63, 117, 1);"
                    },
                    {
                        name:'行业知识',
                        icon:"icon-shujia2",
                        bgc:"background-color: rgba(239, 158, 8, 1);"
                    },
                    {
                        name:'申请加盟',
                        icon:"icon-jiameng1",
                        bgc:"background-color: rgba(63, 147, 226, 1);"
                    },
                    {
                        name:'积分兑换',
                        icon:"icon-jifen",
                        bgc:"background-color: rgba(63, 226, 178, 1);"
                    },
                ]
            }
        },
        components:{
        },
        mounted(){
            console.log(this.$route.path)
        }
    }

</script>