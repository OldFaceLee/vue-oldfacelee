<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu
          router
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <!-- <el-menu-item index="/index">
            <i class="el-icon-location"></i>
            <span slot="title">首页导航</span>
          </el-menu-item>
          <el-menu-item index="/testsuite">
            <i class="el-icon-menu"></i>
            <span slot="title">测试套件</span>
          </el-menu-item>
          <el-menu-item index="/testcase">
            <i class="el-icon-document"></i>
            <span slot="title">测试用例</span>
          </el-menu-item>
          <el-menu-item index="/systemConfig">
            <i class="el-icon-setting"></i>
            <span slot="title">系统配置</span>
          </el-menu-item> -->
          <el-menu-item index="/result">
            <i class="el-icon-setting"></i>
            <span slot="title">gis</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <div>
            <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"></el-avatar>
          </div>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
