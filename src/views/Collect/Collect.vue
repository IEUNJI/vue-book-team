<template>
  <div class="box">
    <book-header>Collect</book-header>
    <div>
      <item v-for="item in collectList" :key="item.bookId" :data='item' @del='del' :isShowCollect='false'></item>
    </div>
  </div>
</template>

<script>
import item from '../List/ListItem.vue'
export default {
  created() {
    console.log(this.collectList)
  },
  components:{
    item
  },
  computed:{
    collectList(){
      return this.$store.state.collectData
    }
  },
  methods: {
    del(data){
      this.$store.commit('removeCollect',data)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  padding: 1rem 0;
}
</style>
