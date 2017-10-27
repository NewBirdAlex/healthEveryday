<template>
    <div>
        <div class="top">
            <!--搜索-->
            <div class="pa bgWhite bt of search">
                <div class="fr">
                    <i class="icon iconfont icon-fenlei  fr fenlei" ></i>
                    <p class="white lh30">分类</p>
                </div>
                <div class="middle">
                    <input type="text" placeholder="请输入关键词" class="pa">
                    <i class="icon iconfont icon-sousuo fr mr fenlei"></i>
                </div>
            </div>
        </div>

        <!--排序-->
        <div class="sort">
            <div class="sortNav" v-for="(item ,index) in navList" :key="index" @click="selSort(item)">
                <!--<i class="icon iconfont "-->
                    <!--:class="{'icon-paixu':item.type==0,'icon-pc-sort-up-copy-down':item.type==1,'icon-sort-small':item.type==2}"-->
                <!--&gt;</i>-->
                <svg class="icon myIcon" aria-hidden="true"
                     :class="{'icon-paixu':item.type==0,'icon-sort-small':item.type==1,'icon-pc-sort-up-copy-down':item.type==2,}">
                    <use xlink:href="#icon-paixu" v-if="item.type==0"></use>
                    <use xlink:href="#icon-sort-small"  v-if="item.type==1"></use>
                    <use xlink:href="#icon-pc-sort-up-copy-down"  v-if="item.type==2"></use>
                </svg>
                {{item.name}}
                <span class="line"></span>
                <span class="hline" v-if="item.active"></span>
            </div>
        </div>
        <!--产品-->
        <div class="of pdwrap">
            <div class="product " v-for="(item,index) in dataList" :key="index">
                <div class="tac">
                    <img :src="item.image" alt="">
                    <h4>{{item.title}}</h4>
                    <div class="pb of lh30">
                        <span class="yellow fs30 fl"><i class="icon iconfont icon-renminbi"></i>{{item.price | price}}</span>
                        <span class="gray fr fs20">{{item.salesCount}}人已购买</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../assets/css/common.less";
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
    .sort{
        .of;
        .bgWhite;

        .sortNav{
            .fl;
            .borderBox;
            width: 25%;
            position: relative;
            .tac;
            height: 0.9rem;
            line-height: 0.9rem;
            .fs26;
            .icon-sort-small{
                font-size: 0.3rem;
            }
            .icon-paixu{
                font-size: 0.18rem;
                color:#6d6d6d;
            }
            .icon-pc-sort-up-copy-down{
                font-size: 0.3rem;
            }
            .line{
                .fr;
                height: 0.5rem;
                border-right: @border;
                margin-top: 0.2rem;
            }
            .hline{
                position: absolute;
                bottom: 0;
                left: 50%;
                transform: translate(-50%);
                width: 1.75rem;
                border-top: 0.04rem solid @yellow;
            }
        }
    }
    .pdwrap{
        padding: 0 0.3rem;
        .product{
            width: 3.09rem;
            padding:0.1rem;
            .bgWhite;
            &:nth-child(odd){
                .fl;
            }
            &:nth-child(even){
                .fr;
            }
            .mt;
            img{
                width: 3.09rem;
                height: 3.09rem;
            }
            h4{
                text-align: left;
                .mt;
                margin-bottom: 0.3rem;
                .lh30;
            }
        }
    }

    .search{
        background-color: rgba(77, 77, 77, 1);
        .logo{
            width: 0.6rem;
        }
        .fenlei{
            font-size: 0.4rem;
            color:white;
            /*margin-top: 0.15rem;*/

        }
        .middle{
            width: 5.28rem;
            margin: 0 auto;
            border-radius: 0.15rem;
            background: #fff;
            input{
                background: none;
                border:none;
                outline: none;
            }
            i{
                margin-top: 0.15rem;
                .black;
            }
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                navList:[
                    {
                        name:'综合',
                        type:2,
                        active:true
                    },
                    {
                        name:'销量',
                        type:0,
                        active:false
                    },
                    {
                        name:'价格',
                        type:0,
                        active:false
                    },
                    {
                        name:'综合',
                        type:0,
                        active:false
                    }
                ],
                dataList:[]
            }
        },
        methods:{
            selSort(item){
                if(item.active){
                    item.type+=1;
                    if(item.type>=3) item.type=0;
                }else{
                    this.navList.forEach(arg=>arg.active=false)
                    item.active=true
                }
            }
        },
        mounted(){
            let that = this;
            this.axios.get(this.$config.path+'/product/getProductList',{})
                .then(function (response) {
                    console.log(response.data);
                    that.dataList = response.data.obj.dataList;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
</script>