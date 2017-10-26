<template>
    <div class="wp bgWhite pt pb bb">
        <span class="left fs26">
            <span v-if="need" class="vac">*</span>
            <slot></slot>
        </span>
        <input type="text" :placeholder="ph" :value="value" @input="$emit('input', $event.target.value)">
    </div>
</template>
<style scoped lang="less">
    @import "../assets/css/common.less";
    .wp{
        padding: 0.3rem 0;
        .left{
            display: inline-block;
            .vac;
            width: 23%;
        }
        input{
            outline: none;
            border:none;
            width: 70%;
        }
    }
</style>
<script>
    export default {
        data() {
            return {

            }
        },
        props:[
            'ph',
            'need',
            'value'
        ]
    }
</script>