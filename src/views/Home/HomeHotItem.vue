<template>
  <div class="item">
    <img :src="data.img">
    <p>{{ data.title }}</p>
  </div>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style lang="less" scoped>
.item {
  float: left;
  width: 50%;
  height: 5rem;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
