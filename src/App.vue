<template>
    <div id="app">
        <router-view></router-view>
        <navigate></navigate>
    </div>
</template>
<style scoped lang="less">
    @import "assets/css/common.less";

</style>
<script>
    import navigate from './components/nav.vue'
    export default {
        name: 'app',
        data() {
            return {
                msg: ''
            }
        },
        components:{
            navigate
        }
    }
</script>


