<template>
  <div id="app">
    <Home></Home>
    <!--router-view/-->
  </div>
</template>

<script>
import Home from './components/Home'
import Index from './components/Index'
import TestCase from './components/TestCase'
import TestSuite from './components/TestSuite'
export default {
  name: 'App',
  components: {
    Home,
    Index,
    TestCase,
    TestSuite

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
