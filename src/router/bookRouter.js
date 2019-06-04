export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {},
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/list',
    name: 'list',
    meta: {},
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
