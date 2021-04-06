<template>
  <div
    class="container"
    :class="
      $store.state.app.collapse ? 'menu-bar-collapse-width' : 'menu-bar-width'
    "
  >
    <div class="router_link_box">
      <router-link
        :to="{ path: '/index' }"
        @click.native="clickIndex"
        tag="span"
        ref="tag"
        :class="isIndex?'active':''"
        class="tags-view-item first_tag"
      >
        <i v-if="isIndex" class="dot_icon"></i>
        首页
      </router-link>
      <router-link
        v-for="(tag,index) in visitedViews"
        ref="tag"
        :key="index"
        :class="isActive(tag)?'active':''"
        :to="{ path: tag.url, query: tag.query, fullPath: tag.fullPath }"
        tag="span"
        class="tags-view-item"
        @click.native="openMenu($event,tag)"
      >
        <i v-if="isActive(tag)" class="dot_icon"></i>
        {{ tag.title }}
        <span
          class="el-icon-close"
          @click.prevent.stop="closeSelectedTag(tag)"
        />
      </router-link>
    </div>
    <transition name="fade" mode="out-in">
      <keep-alive :include="keepAlive">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations, mapAction } from 'vuex'
export default {
  data() {
    return {
      isIndex: true,
    }
  },
   components: {
    
  },
  computed: {
    ...mapState({
      visitedViews: (state) => state.tagsViews.visitedViews,
      menuId: (state) => state.app.menuId,
      keepAlive: (state) => state.tagsViews.keepAlive,
    }),
  },
  methods: {
    // 当我们刷新也面时，初始化面包屑的数据
    initTags() {
      let linkData = this.$route
      if (this.visitedViews != []) {
        this.isIndex = false
      }
      if (linkData.path != '/index') {
        let view = {
          title: linkData.meta.title || 'no-name',
          name: linkData.name || 'no-name',
          url: linkData.path,
          fullPath: linkData.fullPath,
          menuCode: sessionStorage.getItem('MenuCode'),
        }
        this.$store.commit('menuUrl', linkData.path)
        this.$store.dispatch('addView', view)
      }
    },
    clickIndex() {
      this.isIndex = true
    },
    // 当前点击的面包屑，添加样式
    isActive(route) {
      return route.url === this.$route.path
    },
    // 删除面包屑的方法
    closeSelectedTag(tag) {
      this.$store.dispatch('delView', tag).then(({ visitedViews }) => {
        if (this.isActive(tag)) {
          this.toLastView(visitedViews, tag)
        }
      })
    },
    // 删除面包屑后，跳转处理
    toLastView(visitedViews, tag) {
      const latestView = visitedViews.slice(-1)[0]
      if (latestView) {
        this.$router.push(latestView.url)
        this.$store.commit('menuUrl', latestView.url)
      } else {
        this.$router.push('/')
        this.$store.commit('menuUrl', '/index')
      }
    },
    // 点击面包屑
    openMenu(event, tag) {
      this.isIndex = false
      sessionStorage.setItem('MenuCode', tag.menuCode)
      this.$store.commit('menuUrl', tag.url)
    },
  },
  mounted() {
    this.initTags()
  },
}
</script>

<style scoped lang="scss">
.container {
  position: absolute;
  top: 60px;
  bottom: 0px;
  left: 200px;
  right: 0px;
  background: #f0f2f5;
  height: calc(100vh -0px);
  overflow-y: auto;
}
.menu-bar-width {
  left: 200px;
}
.menu-bar-collapse-width {
  left: 65px;
}
.router_link_box {
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 60px;
  left: 200px;
  min-height: 46px;
  border-bottom: 1px solid #e2e2e2;
  box-shadow: 0px 10px 15px -15px #999;
  padding-bottom: 5px;
  background: #fff;
  .tags-view-item {
    display: inline-block;
    cursor: pointer;
    *display: inline;
    *zoom: 1;
    vertical-align: middle;
    font-size: 14px;
    border-radius: 4px;

    line-height: 30px;
    min-width: 65px;
    padding: 0 8px;
    text-align: center;
    border: 1px solid #d9d9d9;
    margin-top: 6px;
    margin-left: 15px;
  }
  .first_tag {
    margin-right: -4px;
  }
  .active {
    background: #1890ff;
    color: #fff;
  }
  .dot_icon {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
  }
}
.el-icon-close {
  border-radius: 50%;
}
.active .el-icon-close {
  background: #f2e0e0;
  color: #666;
}
.el-icon-close:hover {
  background: #b4aeae;
  color: #666;
}
</style>
