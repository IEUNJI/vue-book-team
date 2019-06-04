<template>
  <div class="form-box">
    <item placeholder="书的名字" v-model="name">书的名字</item>
    <item placeholder="书的信息" v-model="desc">书的信息</item>
    <item placeholder="书的价格" v-model="price">书的价格</item>
    <button @click="add">添加</button>
  </div>
</template>

<script>
import item from "./item.vue";
export default {
  data() {
    return {
      name: "",
      desc: "",
      price: null
    };
  },
  components: {
    item
  },
  methods: {
    add() {
      this.$store.commit("addData", {
        bookCover:
          "https://img14.360buyimg.com/n1/jfs/t733/236/713204451/71588/7e62c286/54d332abN7e74cb0b.jpg",
        bookId: Math.random(),
        bookInfo: this.desc,
        bookName: this.name,
        bookPrice: this.price
      });
      this.$router.push("/list");
    }
  }
};
</script>

<style lang="less" scoped>
.form-box {
  padding: 1.5rem 0;
  text-align: center;
  button {
    width: 3rem;
    height: 0.8rem;
    border: none;
    background: rgb(9, 167, 9);
    border-radius: 0.2rem;
    color: #fff;
    font-size: 0.4rem;
    outline: none;
  }
}
</style>
