<template>
  <div class="box">
    <book-header>List</book-header>
    <div>
      <item v-for="item in list" :key="item.bookId" :data='item' @del='del' @collect='collect'></item>
    </div>
  </div>
</template>

<script>
import item from './ListItem.vue'
export default {
  created() {
    this.$store.dispatch('getListAsync')
  },
  components:{
    item
  },
  computed:{
    list(){
      return this.$store.state.listData
      // console.log(this.$store.state.listData);
    }
  },
  methods: {
    del(data){
      this.$store.commit('removeList',data)
    },
    collect(data){
      this.$store.commit('collectList',data)
    }
  },
}
</script>

<style lang="less" scoped>
.box {
  padding: 1rem 0;
}
</style>
