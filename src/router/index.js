import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Checkin from '@/components/Checkin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/checkin',
      name: 'Checkin',
      component: Checkin
    }
  ]
})
