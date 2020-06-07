<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './components/Home'
import Index from './components/Index'
import TestCase from './components/TestCase'
import TestSuite from './components/TestSuite'
import SystemConfig from './components/SystemConfig'
import Result from './components/Result'
export default {
  name: 'App',
  components: {
    Home,
    Index,
    TestCase,
    TestSuite,
    SystemConfig,
    Result

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
