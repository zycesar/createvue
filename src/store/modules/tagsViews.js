//面包屑tab状态管理
export default {
  state: {
    visitedViews: [], // 面包屑的导航列表
    keepAlive: [],
  },
  getters: {

  },
  mutations: {
    clearVisitedViews: (state, visitedViews) => {
      state.visitedViews = visitedViews
    },
    //添加导航列表数据
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some(v => v.url === view.url)) return
      state.visitedViews.push(view)
      // console.log('keep', state.keepAlive)
    },
    //删除导航列表数据
    DEL_VISITED_VIEW: (state, view) => {
      state.visitedViews.forEach((val, i) => {
        if (val.url === view.url) {
          state.visitedViews.splice(i, 1)
        }
      })
    },
  },
  actions: {
    addView({
      dispatch
    }, view) {
      dispatch('addVisitedView', view)
    },
    addVisitedView({
      commit
    }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    delView({
      dispatch,
      state
    }, view) {
      return new Promise(resolve => {
        dispatch('delVisitedView', view)
        resolve({
          visitedViews: [...state.visitedViews],
        })
      })
    },
    delVisitedView({
      commit,
      state
    }, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEW', view)
        resolve([...state.visitedViews])
      })
    },
  }
}
