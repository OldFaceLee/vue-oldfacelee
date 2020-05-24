<template>
  <div class="hello">
    <button @click='getHandle'>get请求</button>
    <button @click='postHandle'>post请求</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '测试套件页面'
    }
  },
  methods: {
    postHandle(){
      console.log("开始Post请求测试")
      this.$axios.post("http://localhost:8080/testPostVue",{name:'li',id:1,date:new Date()}).then(res=>{
        console.log(res)
      }) 
    },
    getHandle(){
      console.log("开始Get请求测试")
      this.$axios.get("http://localhost:8080/testGetVue/getParam").then(response=>{
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
