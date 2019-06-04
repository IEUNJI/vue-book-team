import Vue from 'vue'
import VueRouter from 'vue-router'
import bookRouter from './bookRouter.js'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    ...bookRouter,
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})
