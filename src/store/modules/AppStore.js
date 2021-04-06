//用于全局的状态管理
export default {
  state: {
    appName: "vue-elementui", // 应用名称
    collapse: false, // 导航栏收缩状态
    menuRouteLoaded: false, //是否调用列表接口
    menuUrl: "", //当前激活的菜单
  },
  getters: {
    collapse(state) { // 对应着上面state
      return collapse;
    }
  },
  mutations: {
    collapse(state) { // 改变收缩状态
      state.collapse = !state.collapse;
    },
    menuRouteLoaded(state, menuRouteLoaded) {
      state.menuRouteLoaded = menuRouteLoaded
    },
    menuUrl(state, menuUrl) {
      state.menuUrl = menuUrl
    }
  },
  actions: {

  }
}
