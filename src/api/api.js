import axios from 'axios'

axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5cf23614830e6440fc3b77fe/api'

// 获取首页轮播图数据
export function getBanner() {
  return axios.get('/bannerData')
}

// 获取首页热门图书数据
export function getHot() {
  return axios.get('/hotData')
}

export function getList(){
  return axios.get('/listData')
}