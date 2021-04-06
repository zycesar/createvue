// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './http/index'
import '@/assets/css/common.css'
import store from './store'
import '../static/iconfont/iconfont.css'
import VueClipboard from 'vue-clipboard2'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import comPage from '@/components/comPage/index'

Vue.use(mavonEditor)
Vue.use(VueClipboard)
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(api)
Vue.component('comPage', comPage)



// mock数据
if (process.env.NODE_ENV !== 'production') {
  require('@/mock/index.js')
}

new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
