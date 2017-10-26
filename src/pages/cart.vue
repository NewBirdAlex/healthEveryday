<template>
    <div class="mt">

        <div class="bgWhite pa">
            亲，您还没有选购任何产品哦！
        </div>
        <div class="list bgWhite pt pb bt " v-for="i in 0">
            <div class="left">
                <i class="icon iconfont icon-yuanquan"></i>
            </div>
            <div class="middle  tac">
                <img src="../assets/img/gg2.jpg" alt="">
            </div>
            <div class="right pr">
                <div class="top fs26 lh30 mt">
                    邓老凉茶12罐装/箱 清热解毒 解酒护肝 罐装凉茶 每罐310ml
                </div>
                <div class="mt">
                    <span class="yellow fs30">
                       <i class="icon iconfont icon-renminbi"></i><span>88.00</span>
                    </span>
                    <div class="fr">
                        <i class="icon iconfont icon-jian yellow"></i>
                        <span class="fs26 ml mr">1</span>
                        <i class="icon iconfont icon-jia yellow"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="sp"></div>

        <!--tongji-->
        <div class=" count bt">
            <i class="icon iconfont icon-yuanquan ml"></i>
            <span>全选</span>
            <span class="white fr js">下单</span>
            <span class="fr mr">
               总4件:
                <span class=" ml yellow">
                     <i class="icon iconfont icon-renminbi"></i><span>00.00</span>
                </span>
            </span>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../assets/css/common.less";

    /*count*/
    .count{
        position: fixed;
        bottom: 1.1rem;
        .bgWhite;
        width: 100%;
        line-height: 1rem;
        .js{
            background: @yellow;
            width: 2.2rem;
            height: 1rem;
            line-height: 1rem;
            .tac;
            .fs28;
        }
    }

    .sp{
        margin-bottom: 2rem;
    }
    .list {
        .of;
        .left {
            width: 0.9rem;
            .tac;
            .fl;
            line-height: 1.6rem;
        }
        .middle {
            .fl;
            width: 1.58rem;
            .mr;
            .of;
            .border;
            padding: 0.1rem;
            img {
                .fl;
                width: 1.58rem;
                height: 1.58rem;
            }
        }
    }

</style>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>