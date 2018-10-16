import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Transition from '@/components/transition'
import T1 from '@/components/t1'
import T2 from '@/components/t2'
import T3 from '@/components/t3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition
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
    }
  ]
})
