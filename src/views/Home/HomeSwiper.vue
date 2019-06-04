<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in data" :key="index">
        <img :src="item.img">
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  // 数据更新后再初始化轮播图
  updated() {
    this.init()
  },
  props: ['data'],
  methods: {
    init() {
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-slide {
  img {
    width: 100%;
  }
}
</style>
