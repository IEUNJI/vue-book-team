export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      // 路由原信息：是否缓存页面
      keepAlive: true
    },
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: {
      keepAlive: true
    },
    component: () => import('../views/List/List.vue')
  },
  {
    path: '/collect',
    name: 'collect',
    meta: {},
    component: () => import('../views/Collect/Collect.vue')
  },
  {
    path: '/add',
    name: 'add',
    meta: {},
    component: () => import('../views/Add/Add.vue')
  }
]
