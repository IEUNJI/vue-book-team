<template>
  <div>
    <!-- 根据路由原信息(meta: { keepAlive: true })，对页面进行缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <base-tab></base-tab>
  </div>
</template>

<script>
import BaseTab from './compent/BaseTab.vue'
export default {
  components: {
    BaseTab
  }
}
</script>

<style lang="less" scoped>
// 暂时调小字体
a {
  font-size: 0.4rem;
}
</style>
