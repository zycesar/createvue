import axios from '../../axios'
import config from '../../config'

let prefix = config.baseURL
/* 
 * 菜单管理模块
 */

export const findMenuTree = (params) => {
  return axios({
    url: prefix+'/menu/findTree',
    method: 'get',
    params
  })
}
