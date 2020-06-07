import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TestCase from '@/components/TestCase'
import TestSuite from '@/components/TestSuite'
import SystemConfig from '@/components/SystemConfig'
import Result from '@/components/Result'

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
    },
    {
      path: '/systemConfig',
      // eslint-disable-next-line no-undef
      component: SystemConfig
    },
    {
      path: '/result',
      // eslint-disable-next-line no-undef
      component: Result
    }
  ]
})
