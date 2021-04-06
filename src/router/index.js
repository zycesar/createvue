import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Layout from '@/views/layout/index'
import Index from '@/views/index/index'
import HtmlStatement from '@/views/htmlStatement/index'
import Error403 from '@/views/exception/error403'
import Error404 from '@/views/exception/error404'
import Error500 from '@/views/exception/error500'
import Error401 from '@/views/exception/error401'
import TableManage from '@/views/applicationTwo/tableManage/index'




const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)
const router = new Router({
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [{
        path: '/index',
        name: 'index',
        component: Index,
        meta: {
          title: '首页'
        }
      }]
    },
    {
      path: '/htmlStatement',
      component: Layout,
      hidden: true,
      children: [{
        path: '/htmlStatement:path*',
        component: HtmlStatement,
        name: 'htmlStatement',
        meta: {
          title: '前端编码规范'
        }
      }]
    },
    {
      path: '/applicationTwo',
      component: Layout,
      hidden: true,
      children: [{
        path: '/applicationTwo/tableManage:path*',
        component: TableManage,
        name: 'tableManage',
        meta: {
          title: 'Table'
        }
      }]
    },
    {
      path: '/exception',
      component: Layout,
      hidden: true,
      children: [{
          path: '/exception/error403:path*',
          component: Error403,
          name: 'error403',
          meta: {
            title: '403'
          }
        },
        {
          path: '/exception/error401:path*',
          component: Error401,
          name: 'Error401',
          meta: {
            title: '401'
          }
        },
        {
          path: '/exception/error404:path*',
          component: Error404,
          name: 'error404',
          meta: {
            title: '404'
          }
        }, {
          path: '/exception/error500:path*',
          component: Error500,
          name: 'error500',
          meta: {
            title: '500'
          }
        }
      ]
    },
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0) // 重置滚动条到底部
  next()
})
export default router
