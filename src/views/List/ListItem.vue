<template>
  <div class="item">
    <div class="imgBox">
      <img :src="data.bookCover">
    </div>
    <div class="infoBox">
      <h2>{{ data.bookName }}</h2>
      <p>{{ data.bookInfo }}</p>
      <span>{{ data.bookPrice | handleMoney}}</span>
      <div class="btnBox">
        <i class="del" @click="del(data)">删除</i>
        <i class="collect" @click="collect(data)" v-if="isShowCollect">收藏</i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data:{},
    isShowCollect:{
      default:true
    }
  },
  methods: {
    del(data) {
      this.$emit('del', data)
    },
    collect(data) {
      this.$emit('collect', data)
    }
  }
}
</script>

<style lang="less" scoped>
.item {
  display: flex;
  margin-bottom: 0.2rem;
  padding: 0.2rem 0.2rem;
  border-bottom: 1px solid #ccc;
  .imgBox {
    flex: 1;
    img {
      width: 100%;
    }
  }
  .infoBox {
    flex: 2;
    h2 {
      line-height: 0.8rem;
      font-size: 0.4rem;
    }
    p {
      line-height: 0.5rem;
      font-size: 0.3rem;
      color: #777;
    }
    span {
      display: block;
      line-height: 0.6rem;
      font-size: 0.4rem;
      color: lightcoral;
    }
    .btnBox {
      display: flex;
      font-size: 0;
      i {
        margin-right: 0.4rem;
        padding: 0.1rem;
        font-size: 0.2rem;
        font-style: normal;
        background: lightcoral;
      }
    }
  }
}
</style>
