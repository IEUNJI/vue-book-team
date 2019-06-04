<template>
  <div>
    <home-swiper :data="bannerData"></home-swiper>
  </div>
</template>

<script>
import HomeSwiper from './HomeSwiper.vue'
import { getBanner } from '../../api/api.js'
export default {
  async created() {
    const { data: bannerData } = await getBanner()
    this.bannerData = bannerData
  },
  data () {
    return {
      bannerData: []
    }
  },
  components: {
    HomeSwiper
  }
}
</script>

<style lang="less" scoped>

</style>
