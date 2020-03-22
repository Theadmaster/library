<template>
  <div class="home">
    <el-container class="home-container">
      <!-- 页面头部 -->
      <el-header>
        <img src="~assets/img/logo.png" alt />
        <el-dropdown trigger="click" >
          <div class="avatar-wrapper">
          <img src="@/assets/avatar.gif" class="user-avatar">
          <i class="el-icon-caret-bottom" />
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <!-- <el-dropdown-item>
            <span style="display:block;" @click="$router.push('/userinfo')">{{ name }}</span>
          </el-dropdown-item> -->
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
  
      <!-- 页面主题区域 -->
      <el-container>

        <!-- 侧边栏 -->
        <el-aside width="200px">
          <el-menu
            background-color="#487eb0"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            
          </el-menu>
        </el-aside>

        <!-- 右侧主体内容 -->
        <el-main>Main</el-main>
      </el-container>

    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/login')
      location.reload()
    },
    getMenuList(){
      this.$store.dispatch('menu/getMenuTree').then(res => {
        console.log(res);
      })
      
    },
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created() {
    // 获取所有菜单
    this.getMenuList()
  }
};
</script>

<style >
* {
  padding: 0;
  margin: 0;
}
.el-header {
  background-color: #fafafa;
  vertical-align: middle;
  display: flex;
  padding-left: 0;
  align-items: center;
  justify-content: space-between;
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

.user-avatar{
  height: 30px;
}
</style>