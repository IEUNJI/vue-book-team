import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/store.js'

// 针对 750px 的设计稿，定义 1rem = 100px
document.documentElement.style.fontSize = window.innerWidth / 750 * 100 + 'px'

// 导入全局样式 (reset)
import './less/common.less';
// 导入Swiper样式
import 'swiper/dist/css/swiper.css'

// 注册Header (头部) 为全局组件
import BookHeader from './compent/Bookheader.vue'
Vue.component('BookHeader', BookHeader)

// 注册全局过滤器
import filters from './filter/filter.js'
filters.forEach(filter => {
  Vue.filter(filter.name, filter)
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
