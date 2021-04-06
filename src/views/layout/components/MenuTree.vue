<template>
  <el-submenu
    class="menu_content"
    v-if="menu.children && menu.children.length >= 1"
    :index="menu.menuId"
    popper-append-to-body:true
  >
    <template slot="title">
      <i :class="['iconfont',menu.icon]"></i>
      <span slot="title">{{menu.title}}</span>
    </template>
    <MenuTree v-for="item in menu.children" :key="item.menuId" :menu="item"></MenuTree>
  </el-submenu>
  <el-menu-item v-else :index="menu.url" @click="handleRoute(menu)">
    <i :class="['iconfont',menu.icon]"></i>
    <span slot="title">{{menu.title}}</span>
  </el-menu-item>
</template>
<script>
export default {
  name: 'MenuTree',
  props: {
    menu: {
      type: Object,
      required: true,
    },
  },
  methods: {
    //手动点击左侧菜单
    handleRoute(menu) {
      console.log('menu', menu)
      if (menu.type == 1) {
        let view = {
          title: menu.title || 'no-name',
          name: menu.title || 'no-name',
          url: menu.url,
          fullPath: menu.url,
          menuId: menu.menuId,
          menuCode: menu.MenuCode,
        }
        sessionStorage.setItem('MenuCode', menu.MenuCode)
        this.$store.dispatch('addView', view)
        // 通过菜单URL跳转至指定路由
        this.$router.push(menu.url)
      } else if (menu.type == 3) {
        window.open(menu.url)
      }
    },
  },
}
</script>
<style lang="scss">
.menu_content.el-menu-item:hover {
  background: rgba(0, 0, 0, 0.3) !important ;
}
.menu_content .el-menu-item.is-active {
  background: #1890ff !important ;
  i {
    color: #fff;
  }
}
.menu_content .el-menu-item.is-active:hover {
  background: #1890ff !important ;
}
.menu_content .el-menu-item {
  background: #131d30 !important ;
}
.menu_content .el-submenu__title i,
.menu_content .el-menu-item i {
  color: #bdbec1;
}
.menu_content .el-submenu__title {
  background: #293348 !important;
  border-left: solid #293348 5px;
}
.menu_content.el-submenu:hover {
  .el-submenu__title {
    color: #fff !important ;
    background: #4e5465 !important ;
    border-left: solid #1890ff 5px;
    i {
      color: #fff;
    }
  }
}
.menu_content.el-submenu.is-active {
  .el-submenu__title {
    color: #fff !important ;
    background: #293348 !important ;
    border-left: solid #293348 5px;
    i {
      color: #fff;
    }
  }
}
</style>