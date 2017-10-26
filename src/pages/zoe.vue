<template>
    <div>
        <div class="top of">
            <div class="head fl">
                <div>
                    <img :src="information.head" alt="">
                </div>
            </div>
            <div class="rp white">
                <i class="icon iconfont icon-right-arrow fr white mt"></i>
                <div class="mt"></div>
                <p class="fs28 mt">{{information.nick}}</p>
                <p class="fs24">ID：{{information.ID}}</p>
            </div>
        </div>

        <div class="bgWhite of tac lh35 pt pb">
            <div class="w50 fl br borderBox">
                <p class="fs30">210.13</p>
                <p class="fs26 mt">我的钱包</p>
            </div>
            <div class="w50 fl">

                <p class="fs30">342</p>
                <p class="fs26 mt">我的积分</p>
            </div>
        </div>

        <div class="pt pb mt mb bgWhite of fs40 tac">
            <div class="ec fl ">
                <span class="circle">
                    <i class="icon iconfont icon-daifukuan"></i>
                </span>
                <p class="lh50">待付款</p>
            </div>
            <div class="ec fl ">
                <span class="circle">
                    <i class="icon iconfont icon-pingjia"></i>
                </span>
                <p class="lh50">评价</p>
            </div>
            <div class="ec fl ">
                <span class="circle">
                    <i class="icon iconfont icon-shouhou"></i>
                </span>
                <p class="lh50">售后</p>
            </div>
            <div class="line"></div>

            <div class="add">
                <i class="icon iconfont icon-Ankerwebicon-"></i>
                <p class="fs24">全部订单</p>
            </div>
        </div>

        <router-link tag="div" :to="item.router" class="bgWhite pa fs26 bb" :class="{'mt':index==3}" v-for="(item,index) in list" :key="index">

            <i class="icon iconfont  " :class="item.icon"></i>
            {{item.name}}
            <i class="icon iconfont icon-right-arrow fr "></i>
        </router-link>
    </div>
</template>
<style scoped lang="less">
    @import "../assets/css/common.less";
    .pa{padding:0.3rem}
    .top{
        padding: 0.36rem 0.6rem;
        background: url("../assets/img/personbg.jpg");
        background-size: 100% 100%;
        height: 1.5rem;
        .head{
            padding: 0.1rem;
            border:1px solid #ccc;
            .circle;
            .mr;
            div{
                padding: 0.1rem;
                border:1px solid  #ccc;
                .circle;
                img{
                    width: 1.1rem;
                    height: 1.1rem;
                    .circle;
                }
            }
        }
        .rp{
            padding-top: 0.2rem;
            line-height: 0.4rem;
            .icon{
                margin-top: 0.4rem;
            }
        }
    }
    .line{
        .fl;
        height: 0.5rem;
        .bl;
        margin-top: 0.3rem;
    }
    .add{

        .tac;
        margin-top: 0.15rem;
        .fl;
        margin-left: 0.7rem;
        .icon{
            font-size: 0.5rem;
            display: inline-block;
            margin-bottom: 0.1rem;
        }
    }
    .ec{
        margin:0 0.5rem;
        .fs20;
        .circle{
            width: 0.64rem;
            height: 0.64rem;
            background: @yellow;
            display: inline-block;
            .tac;
            line-height: 0.6rem;
            .white;
            i{font-size: 0.4rem}
        }
    }
</style>
<script>
    export default {
        data() {
            return {
                information:{},
                list:[
                    {
                        name:'加盟申请',
                        icon:'icon-ictabbarapplynor-copy',
                        router:'/join'
                    },
                    {
                        name:'我的团队',
                        icon:'icon-team',
                        router:''
                    },
                    {
                        name:'我的项目 ',
                        icon:'icon-normal',
                        router:''
                    },
                    {
                        name:'账户与安全',
                        icon:'icon-anquan',
                        router:''
                    },
                    {
                        name:'服务管家',
                        icon:'icon-ren',
                        router:''
                    },
                    {
                        name:'我的优惠券',
                        icon:'icon-552cc40952152',
                        router:''
                    }
                ]
            }
        },
        mounted(){
            let that = this;
            this.axios.get(this.$config.path+'/member/getInfo',{})
            .then(function (response) {
                console.log(response.data);
                that.information = response.data;
                console.log(that.information)
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
</script>