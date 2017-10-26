<template>
    <div>
        <div class="of">
            <img src="../assets/img/jiameng.jpg" class="w100 fl" alt="">
        </div>

        <div class="bgWhite pa">
            <div class="mt" style="margin-top: 0.8rem;"></div>
            <div class="mt bb pb">
                <p class="fs30 lh40"><span class="vac">*</span> 请选择加盟身份</p>
                <div class="of tac fs24 type pa">
                    <span :class="{'active':item.active}" v-for="(item,index) in typeList" @click="pick(item,index)">{{item.name}}</span>
                </div>
            </div>

            <onlyInput v-for="(item,index) in inputData"v-model="item.val" :key="index" v-if="index<=2" :ph="item.ph" :need="item.need">{{item.label}}</onlyInput>

            <div class="pt pb bb bgWhite" >
                <span style="width: 22%;display: inline-block" >
                    地址
                </span>
                <span @click="show = true">
                    <span v-if="result">
                        {{result.province.name}}省
                        {{result.city.name}}市
                        {{result.area.name}}区
                    </span>
                    <span v-if="!result">请选择地址</span>
                    <i class="icon iconfont icon-icon-up"></i>
                </span>
            </div>
            <onlyInput v-for="(item,index) in inputData" v-model="item.val" :key="index" v-if="index>2" :ph="item.ph" :need="item.need">{{item.label}}</onlyInput>

            <div class="sp tac">
                <i class="icon iconfont "
                   :class="{'icon-yuanquan':!agreen,'icon-yuanquan1':agreen,'yellow':agreen}"
                   @click="agreen=!agreen"
                ></i>
                我已同意 <span class="red">《加盟协议》</span>
            </div>

            <div class="confirm" @click="upload">确定</div>

            <vue-area :props-show="show" :props-result="result" v-on:result="areaResult"></vue-area>
        </div>
    </div>
</template>
<style scoped lang="less">
    @import "../assets/css/common.less";
    .confirm{margin:1rem auto}
    .sp{
        margin:0.5rem 0;
    }
    .type{
        .mt;
        span{
            display: inline-block;
            width: 1.4rem;
            height: 0.6rem;
            margin: 0 0.3rem;
            line-height: 0.6rem;
            .border;
            border-radius: 0.1rem;
            &.active{
                background-color: rgba(255, 108, 0, 1);
                .white;
                border:none;
            }
        }
    }
</style>
<script>
    import onlyInput from '../components/onlyInput.vue'
    import vueArea from '../components/vue-area.vue'
    export default {
        data() {
            return {
                address:'',
                city:'',
                district:'',
                mobile:'',
                province:'',
                realName:'',
                recommender:'',
                target:1,
                result: null,
                show: false,
                agreen:false,
                typeList:[
                    {
                        name:'股东',
                        active:true
                    },
                    {
                        name:'分公司',
                        active:false
                    },
                    {
                        name:'店家',
                        active:false
                    }
                ],
                inputData:[
                    {
                        need:true,
                        label:'您的名字',
                        val:'',
                        ph:'请输入名字'
                    },
                    {
                        need:true,
                        label:'您的电话',
                        val:'',
                        ph:'请输入电话号码'
                    },
                    {
                        need:false,
                        label:'推荐人',
                        val:'',
                        ph:'请输入电话号码'
                    },
                    {
                        need:false,
                        label:'详细地址',
                        val:'',
                        ph:'请输入详细地址'
                    },
                ]
            }
        },
        components:{
            onlyInput,
            vueArea
        },
        methods:{
            areaResult: function(show, result){
                this.show = show
                this.result = result
            },
            pick(item,index){
                this.typeList.forEach( arg => arg.active=false);
                item.active=true;
                this.target =index+1;
            },
            upload(){
                let that = this;
                console.log(that.target)
                if(this.agreen){
                    this.axios.post(this.$config.path+'/member/joinUs',
                        this.$jsonToFormData({
                        address:that.inputData[3].val,
                        city:that.result.city.name,
                        district:that.result.area.name,
                        mobile:that.inputData[1].val,
                        province:that.result.province.name,
                        realName:that.inputData[2].val,
                        recommender:that.inputData[2].val,
                        target:that.target
                    })).then((response) => {
                        console.log(response.data)
                        if(response.data.code==200){
                            this.$toast({
                                message:'恭喜您加入我们的大家庭' ,
                                position: 'middle',
                                duration: 2000
                            });
                            this.$router.push('/zoe');
                        }else{
                            this.$toast({
                                message:response.data.msg ,
                                position: 'middle',
                                duration: 2000
                            });
                        }
                    })
                }else{
                    this.$toast({
                        message: '点击同意',
                        position: 'middle',
                        duration: 2000
                    });
                }

            }
        },
        mounted(){
            console.log(this.$config.path)
            console.log(this.axios)

        }
    }
</script>