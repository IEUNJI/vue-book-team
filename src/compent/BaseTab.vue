<template>
  <div class="tab">
    <router-link to="/home">
      <div class="iconfont icon-shouye"></div>
      <div>Home</div>
    </router-link>
    <router-link to="/list">
      <div class="iconfont icon-liebiao"></div>
      <div>List</div>
    </router-link>
    <router-link to="/collect">
      <div class="iconfont icon-shoucang"></div>
      <div>Collect</div>
    </router-link>
    <router-link to="/add">
      <div class="iconfont icon-tianjia"></div>
      <div>Add</div>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
  .tab {
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    padding-top: .1rem;
    width: 100%;
    height: 1rem;
    font-size: .4rem;
    border-top: .04rem solid #ccc;
    box-shadow: 0 0 .6rem 0 #ccc;
    border-radius: .2rem .2rem 0 0;
    background: rgba(255, 255, 255, 0.8);
    z-index: 9;
    a {
      flex: 1;
      text-align: center;
      color: #2ca9e1;
      &.current {
        color: #ec6d71;
      }
    }
  }
</style>
