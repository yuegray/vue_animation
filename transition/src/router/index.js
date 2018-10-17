import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import T0 from '@/components/t0'
import T1 from '@/components/t1'
import T2 from '@/components/t2'
import T3 from '@/components/t3'
import T4 from '@/components/t4'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/t0',
      name: 'Transition',
      component: T0
    },
    {
      path: '/t1',
      name: 'T1',
      component: T1
    },
    {
      path: '/t2',
      name: 'T2',
      component: T2
    },
    {
      path: '/t3',
      name: 'T3',
      component: T3
    },
    {
      path: '/t4',
      name: 'T4',
      component: T4
    }
  ]
})
