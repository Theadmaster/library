<template>
  <div class="home">
    <el-container class="home-container">
      <!-- 页面头部 -->
      <el-header>
        <img src="~assets/img/logo.png" alt="">
      </el-header>
      <!-- 页面主题区域 -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px">Aside</el-aside>
        <!-- 右侧主体内容 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style >
*{
  padding: 0;
  margin: 0;
}
.el-header {
    background-color: #fafafa;
    vertical-align: middle;
    display: flex;
    padding-left: 0;
    align-items: center;
}
.el-header img {
  height: 50px;
}
.el-main {
  background-color: #f5f6fa;
}
.el-aside {
  background-color: #487eb0;
}
.home-container {
  height: 100vh;
}
</style>