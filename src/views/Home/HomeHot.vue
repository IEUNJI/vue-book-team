<template>
  <div class="hotBook">
    <hot-item v-for="(item,index) in data" :key="index" :data="item"></hot-item>
  </div>
</template>

<script>
import HotItem from './HomeHotItem'
export default {
  props: ['data'],
  components: {
    HotItem
  }
}
</script>

<style lang="less" scoped>
.hotBook {
  font-size: 0.4rem;
  overflow: hidden;
}
</style>
