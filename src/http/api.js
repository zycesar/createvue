// 请求接口汇总模块，聚合模块 API。
/* 
 * 接口统一集成模块
 */
// mock数据

import * as login from './modules/servicePlatform/login'
import * as user from './modules/servicePlatform/user'
import * as menu from './modules/servicePlatform/menu'
import * as news from './modules/servicePlatform/news'

// // 默认全部导出
export default {
  login,
  user,
  menu,
  news
}
