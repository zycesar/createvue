<template>
  <div
    class="container_headerBar"
    :class="
      $store.state.app.collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'
    "
  >
    <!-- 导航菜单隐藏显示切换 -->
    <span class="collapse-switcher">
      <Hamburger :toggleClick="collapse" :isActive="$store.state.app.collapse"></Hamburger>
    </span>
    <!-- 导航菜单 -->
    <span class="navbar">
      <!-- :index="menuItem.menuId" -->
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        background-color="#293348"
        text-color="#bdbec1"
        active-text-color="#ffffff"
        mode="horizontal"
        @select="selectNavBar"
      >
        <el-menu-item :index="menuItem.menuId" v-for="menuItem in firstMenu" :key="menuItem.menuId">
          <i :class="['seacrch_icon_btn iconfont',menuItem.icon]"></i>
          {{menuItem.title}}
        </el-menu-item>
      </el-menu>
    </span>
    <span class="tool-bar">
      <el-dropdown class="user-info-dropdown" trigger="hover">
        <span class="el-dropdown-link">
          <span style="font-size:14px">用户：</span>
          {{ username }}
          <i class="el-icon-caret-bottom"></i>
        </span>

        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item @click.native="changeTenant" v-if="isShow">切换租户</el-dropdown-item> -->
          <!-- <el-dropdown-item @click.native="editPwd">修改密码</el-dropdown-item> -->
          <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
    <div class="tenant_name">
      租户：
      <span>{{TenantName}}</span>
    </div>
  </div>
</template>

<script>
// import mock from '@/mock/index.js'
import Hamburger from '@/components/Hamburger/index'
import axios from 'axios'
import Cookies from 'js-cookie'

export default {
  components: { Hamburger },
  data() {
    return {
      isCollapse: false,
      isShow: false,
      username: '',
      TenantName: '',
      activeIndex: '',
      firstMenu: [],
    }
  },
  methods: {
    // 修改密码
    editPwd() {
      this.$router.push('/accountManager/updataPwd')
    },
    // 获取登录账户的信息
    getCurrentUser() {
      this.$api.user.findByUserName()
        .then((res) => {
          // console.log(res.data);
          this.username = res.data.username
          this.TenantName = res.data.TenantName
          sessionStorage.setItem('user', JSON.stringify(res.data))
          this.findMenuTree()
        })
        .catch((res) => {})
    },
    //加载导航菜单
    findMenuTree() {
      if (!this.$store.state.app.menuRouteLoaded) {
        this.$api.menu
          .findMenuTree()
          .then((res) => {
            this.firstMenu = res.data
            res.data.forEach((item,i)=>{
              item.menuId=`${item.menuId}`
              if(res.data[i].children.length>0){
                  res.data[i].children.forEach((v)=>{
                         v.menuId=`${v.menuId}`
                  })
              }
            })
            this.$store.commit(
              'setMenuTree',
              res.data[0] ? res.data[0].children : []
            )
            this.activeIndex = res.data[0] ?`${res.data[0].menuId}` : '0'
            this.$store.commit('menuRouteLoaded', true)
          })
          .catch((res) => {})
      } else {
      }
    },
    selectNavBar(event) {
      this.firstMenu.forEach((val, index) => {
        if (val.menuId == event) {
          this.$store.commit('setMenuTree', val.children)
        }
      })
    },

    //折叠导航栏
    collapse: function () {
      this.$store.commit('collapse')
    },
    //退出登录
    logout: function () {
      var _this = this
      this.$confirm('确认退出吗?', '提示', {
        type: 'warning',
      })
        .then(() => {
          this.$store.commit('menuRouteLoaded', false)
          this.$store.commit('clearVisitedViews', [])
          sessionStorage.removeItem('user')
          Cookies.remove('token')
          Cookies.remove('token_type')
          this.$router.push('/login')
        })
        .catch(() => {})
    },
  },
  mounted() {
    if (localStorage.getItem('IsMulitple') == 'true') {
      this.isShow = true
    } else {
      this.isShow = false
    }

    this.getCurrentUser()
  },
}
</script>

<style scoped lang="scss">
.container_headerBar {
  position: absolute;
  left: 200px;
  right: 0px;
  height: 60px;
  line-height: 60px;
  background: #293348;
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):focus,
  .el-menu--horizontal > .el-menu-item:not(.is-disabled):hover,
  .el-menu--horizontal > .el-submenu .el-submenu__title:hover {
    color: #ffff !important;
    i {
      color: #ffff !important;
    }
  }
  .collapse-switcher {
    width: 40px;
    float: left;
    padding-top: 10px;
    cursor: pointer;
    text-align: center;
    line-height: 30px;
    // background: #009685;
    margin-top: 10px;
    margin-left: 10px;
    // color: white;
  }
  .nav-bar {
    margin-left: auto;
    float: left;
    .el-menu {
      background: #4b5f6e;
    }
  }
  .navbar {
    float: left;
    margin-left: 10px;
  }
  .tool-bar {
    float: right;
    .theme-picker {
      padding-right: 10px;
    }
    .lang-selector {
      padding-right: 10px;
      font-size: 15px;
      color: #fff;
      cursor: pointer;
    }
    .user-info-dropdown {
      font-size: 20px;
      padding-right: 20px;
      color: #fff;
      cursor: pointer;
      img {
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin: 10px 0px 10px 10px;
        float: right;
      }
    }
  }
}
.menu-bar-width {
  left: 200px;
}
.menu-bar-collapse-width {
  left: 65px;
}
.iconfont {
  color: #bdbec1;
  font-size: 18px;
}
.tenant_name {
  padding-top: 3px;
  float: right;
  font-size: 15px;
  color: #fff;
  margin-right: 15px;
  span {
    display: inline-block;
    border: 1px solid #5fb878;
    line-height: 28px;
    height: 25px;
    padding: 0 10px;
    border-radius: 10px;
    font-size: 14px;
  }
}
</style>
<style>
.navbar .el-menu-item {
  background: #293348 !important;
}
.navbar .el-menu--horizontal > .el-menu-item.is-active {
  /* border-bottom: 3px solid#5FB878 !important; */
  background: #1890ff !important;
  border-bottom: 0px !important;
}
</style>
