<template>
  <div>
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
