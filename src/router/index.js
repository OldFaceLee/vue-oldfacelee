import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TestCase from '@/components/TestCase'
import TestSuite from '@/components/TestSuite'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/testcase',
      // eslint-disable-next-line no-undef
      component: TestCase
    },
    {
      path: '/testsuite',
      // eslint-disable-next-line no-undef
      component: TestSuite
    }
  ]
})
