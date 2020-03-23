<template>
  <div id="app">
    <el-container>
      <!-- 顶部导航栏 -->
      <div class="topbar">

      </div>
      <!-- 顶部导航栏END -->

      <!-- 顶栏容器 -->
      <el-header>

      </el-header>
      <!-- 顶栏容器END -->


      <!-- 主要区域容器 -->
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
      <!-- 主要区域容器END -->

      <!-- 底栏容器 -->
      <el-footer>

      </el-footer>
      <!-- 底栏容器END -->
    </el-container>
  </div>
</template>

<style lang="less">
  body{
    margin: 0;
    padding: 0;
    list-style: none;

  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .el-main{
    padding: 0!important;
  }
  .el-header{
    padding: 0;
  }

</style>
