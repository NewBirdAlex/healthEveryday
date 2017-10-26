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

        <!--产品-->
        <div class="of pdwrap">
            <div class="product " v-for="(item,index) in dataList" :key="index">
                <div class="tac">
                    <img :src="item.image" alt="">
                    <h4>{{item.title}}</h4>
                    <div class="pb of">
                        <span class="yellow fs30 fl"><i class="icon iconfont icon-renminbi"></i>{{item.price}}.00</span>
                        <span class="gray fr fs20">{{item.count}}人已购买</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../assets/css/common.less";

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
                dataList:[]
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