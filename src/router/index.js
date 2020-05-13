import Vue from 'vue'
import VueRouter from 'vue-router'
import caigou from "../caigou/caigou"
import Login from "../views/Login" //登录组件
import Yonghu from "../views/yonghu" //用户界面组件
import reg from "../views/reg"//用户注册组件
import gongsi from "../views/gongsi"//用户注册——公司信息组件
import shezhi from "../views/shezhi"//用户设置组件
import dizhi from "../views/dizhi"//地址填写组件
import mima from "../views/mima"//修改密码组件
import seldizi from "../views/seldizi"//选择地址组件
import dingdan from "../views/dingdan"//订单组件
import shouhou from "../views/shouhou"//售后组件
import kefui from "../views/kefui"//客服详情组件
import shangpingshoucang from "../views/shangpingshoucang"//商品收藏组件
import dianpushoucang from "../views/dianpushoucang"//店铺收藏组件
import liulanjilu from "../views/liulanjilu"//浏览记录组件
import kefusel from "../views/kefusel"
import regend from "../views/regend"
import querendingdan from "../caigou/querendingdan"
import zhifu from "../caigou/zhifu"
Vue.use(VueRouter)

const routes = [
  {
    path: '/regend',
    name: 'regend',
    component: regend
  },
  {
    path: '/caigou',
    name: 'caigou',
    component: caigou
  },
  {
    path: '/shangpingshoucang',
    name: 'shangpingshoucang',
    component: shangpingshoucang
  },
  {
    path: '/dianpushoucang',
    name: 'dianpushoucang',
    component: dianpushoucang
  },
  {
    path: '/liulanjilu',
    name: 'liulanjilu',
    component: liulanjilu
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Yonghu',
    component: Yonghu
  },
  {
    path: '/reg',
    name: 'reg',
    component: reg
  },
  {
    path: '/gongsi',
    name: 'gongsi',
    component: gongsi
  },
  {
    path: '/shezhi',
    name: 'shezhi',
    component: shezhi
  },
  {
    path: '/kefusel',
    name: 'kefusel',
    component: kefusel
  },
  {
    path: '/kefui',
    name: 'kefui',
    component: kefui
  },
  {
    path: '/dizhi',
    name: 'dizhi',
    component: dizhi
  },
  {
    path: '/mima',
    name: 'mima',
    component: mima
  },
  {
    path: '/seldizi',
    name: 'seldizi',
    component: seldizi
  },
  {
    path: '/shouhou',
    name: 'shouhou',
    component: shouhou
  },

  {
    path: '/dingdan/:active',
    name: 'dingdan',
    component: dingdan,
    props: true
  },
  {
    path: '/querendingdan',
    name: 'querendingdan',
    component: querendingdan
  },
  {
    path: '/zhifu',
    name: 'zhifu',
    component: zhifu
  },

  // {
  //   path: '',
  //   name: '',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '')
  // }
]

const router = new VueRouter({
  routes
})

export default router
