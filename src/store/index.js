import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import AppStore from './modules/AppStore.js';
import MenuStore from './modules/MenuStore.js';
import TagsViews from './modules/tagsViews.js';

const store = new vuex.Store({
  modules: {
    app: AppStore,
    menu: MenuStore,
    tagsViews: TagsViews
    // 其他
  }
})

export default store
