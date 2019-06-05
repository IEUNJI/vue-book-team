<template>
  <div class="box">
    <book-header>Home</book-header>
    <home-swiper :data="bannerData"></home-swiper>
    <home-hot :data="hotData"></home-hot>
  </div>
</template>

<script>
import HomeSwiper from './HomeSwiper.vue'
import HomeHot from './HomeHot.vue'
import { getBanner, getHot } from '../../api/api.js'
export default {
  // 首页已进行缓存(keepAlive)，created 钩子只会在页面加载时执行一次
  async created() {
    const { data: bannerData } = await getBanner()
    this.bannerData = bannerData
  },
  // 缓存页面切换时也会触发 activated 钩子执行，即热门图书数据始终会进行 AJAX 请求
  async activated() {
    const { data: hotData } = await getHot()
    this.hotData = hotData
  },
  data () {
    return {
      bannerData: [],
      hotData: []
    }
  },
  components: {
    HomeSwiper,
    HomeHot
  }
}
</script>

<style lang="less" scoped>
.box {
  padding: 1rem 0;
}
</style>
