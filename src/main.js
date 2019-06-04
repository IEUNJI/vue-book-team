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

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
