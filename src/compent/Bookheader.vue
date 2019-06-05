<template>
    <div class="title">
        {{name}}
        <slot></slot>
    </div>
</template>


<script>
    export default {
        props:['name']
    }
</script>

<style lang="less" scoped>
    .title{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        height: 1rem;
        width: 100%;
        text-align: center;
        line-height: 1rem;
        background: salmon;
        color: #fff;
        font-size: .4rem;
    }
</style>