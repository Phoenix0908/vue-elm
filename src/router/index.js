import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods'
import Sellers from '@/components/sellers'
import Ratings from '@/components/ratings'

import '@/common/stylus/index.styl'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'Goods' }
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/sellers',
      name: 'Sellers',
      component: Sellers
    },
    {
      path: '/ratings',
      name: 'Ratings',
      component: Ratings
    }
  ]
})
