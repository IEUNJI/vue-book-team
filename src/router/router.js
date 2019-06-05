import Vue from 'vue'
import VueRouter from 'vue-router'
import bookRouter from './bookRouter.js'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'current',
  routes: [
    ...bookRouter,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})

// 注册路由全局前置守卫，更改title信息
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'vue-book-team'
  next()
})

export default router
