<template>
    <div>
        <!--<video src="http://flv2.bn.netease.com/videolib3/1604/28/fVobI0704/SD/fVobI0704-mobile.mp4" controls  width="100%"></video>-->


        <div class="slide">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in banner" :key="index"><img :src="item.banner" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="recPer bgWhite" v-if="showRecommend">
            <img :src='recommend.head' alt="">
            <div>来自 <span class="yellow">{{recommend.nick}}</span> 的分享，关注我们获取更多优惠</div>
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
        <div class="bgWhite pa bt lh35">
            <i class="icon iconfont icon-gonggao1 black "></i>
            <span class="pr br mr black">公告</span>
            <span class="fs26 gray spc lh30" style="">{{gonggao}}</span>
        </div>
        <img src="../assets/img/gg.jpg" class="gg" alt="">

        <!--shop-->

        <div class="bgWhite pa mt" v-for=" (item,index) in productList" :key="index">
            <img :src="item.image" class="gg" alt="">
            <div class=" ">
                <p class="fs26 mt mb"><span class="crl"><i class="icon iconfont icon-shouji white fs40"></i></span> &nbsp; {{item.title}}</p>
                <!--<p>-->
                    <!--<span class="crl"><i class="icon iconfont icon-shouji white"></i></span>-->
                    <!--<span class="fs28 deepRed"><i class="icon iconfont icon-renminbi"></i>{{item.price}}</span>-->
                    <!--<span class="gray fs26 fr tf">￥{{item.oldPrice}}</span>-->
                <!--</p>-->
            </div>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import '../assets/css/common.less';
    .recPer{
        .of;
        .pa;
        line-height: 0.9rem;
        img{
            .fl;
            .mr;
            width: 0.9rem;
            border-radius: 50%;
        }
        div{
            .fl;
        }
    }
    .spc{
        display: inline-block;
        width: 5.2rem;
        height: 0.26rem;
        .of;
    }
    .crl{
        width: 0.5rem;
        height: 0.5rem;
        .tac;
        display: inline-block;
        vertical-align: middle;
        line-height: 0.5rem;
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
                showRecommend:false,
                gonggao:'',
                recommend:{},
                banner:[],
                productList:[],
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
            let that = this;
            if(window._route){
                var defineRoute =window._route.toString();
                console.log(defineRoute)
                delete window._route;
                this.$router.push({ path: defineRoute })
            }else{
                //  banner
                this.axios.get(this.$config.path+'/index/getBanners')
                    .then(function (response) {
                        console.log(response.data);
                        that.banner=response.data.obj;
                        console.log(that.banner)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                //商品
                this.axios.get(this.$config.path+'/index/getRecommendProduct',{})
                    .then(function (response) {
                        console.log(response.data);
                        that.productList = response.data.obj.dataList
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                //获取推荐人昵称
                if(window.openId){
                    this.showrecommend =true;
                    this.axios.get(this.$config.path+'/index/getRecomenderName',{
                        params:{
                            openId:window.openId
                        }
                    }).then(function (response) {
                        console.log(response.data);
                        that.recommend = response.data.obj;
                    })
                        .catch(function (error) {
                            console.log(error);
                        });
                }


                //公告
                this.axios.get(this.$config.path+'/index/getNoticeList',{})
                    .then(function (response) {
                        console.log(response.data);
                        that.gonggao = response.data.obj.dataList[0].title
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }

        }
    }

</script>