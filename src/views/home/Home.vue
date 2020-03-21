<template>
  <div class="home">
    <el-container>
      <el-header class="header">Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
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

<style scoped>
.header {
    background-color: blue;
}
</style>