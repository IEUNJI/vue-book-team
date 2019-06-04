<template>
  <div>
    <!-- 根据路由原信息(meta: { keepAlive: true })，对页面进行缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <router-link to="/home">Home</router-link>
    <router-link to="/list">List</router-link>
    <router-link to="/collect">Collect</router-link>
    <router-link to="/add">Add</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="less" scoped>
// 暂时调小字体
a {
  font-size: 0.4rem;
}
</style>
