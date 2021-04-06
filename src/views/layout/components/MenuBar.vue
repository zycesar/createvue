<template>
  <div class="menu-bar-container">
    <!-- logo -->
    <div class="logo" :class="collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'">
      <img :src="this.logo" />
      <!-- <div>{{ collapse ? "" : $store.state.app.appName }}</div> -->
    </div>
    <!-- 导航菜单 -->
    <el-menu
      :default-active="menuUrl"
      :unique-opened="true"
      :class="collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'"
      @open="handleopen12"
      @close="handleclose12"
      background-color="#293348"
      text-color="#bdbec1"
      active-text-color="#ffffff"
      @select="handleselect12"
      :collapse="collapse"
      :collapse-transition="false"
    >
      <MenuTree v-for="item in menuTree" :key="item.MenuId" :menu="item"></MenuTree>
    </el-menu>
  </div>
</template>
<script>
import { mapState, mapMutations, mapAction } from 'vuex'
import MenuTree from './MenuTree'
export default {
  data() {
    return {
      isCollapse: false,
      logo: '',
    }
  },
  components: {
    MenuTree,
  },
  computed: {
    ...mapState({
      appName: (state) => state.app.appName,
      collapse: (state) => state.app.collapse,
      menuTree: (state) => state.menu.menuTree,
      menuRouteLoaded: (state) => state.app.menuRouteLoaded,
      menuUrl: (state) => state.app.menuUrl,
    }),
  },
  methods: {
    handleopen12() {},
    handleclose12() {},
    handleselect12(a, b) {},
  },
  mounted() {
    this.logo = require('@/assets/images/logo2.png')
  },
}
</script>

<style scoped lang="scss">
.menu-bar-container {
  .el-menu {
    position: absolute;
    top: 60px;
    bottom: 0px;
    text-align: left;
  }
  .logo {
    position: absolute;
    top: 0px;
    height: 60px;
    line-height: 60px;
    background-color: #293348;
    img {
      // width: 30px;
      // height: 30px;
      // border-radius: 0px;
      margin: 5px 10px 10px 10px;
      float: left;
    }
    div {
      font-size: 20px;
      color: #fff;
      text-align: left;
    }
  }
  .menu-bar-width {
    width: 200px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .menu-bar-collapse-width {
    width: 65px;
  }
}
</style>