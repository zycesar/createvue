import axios from '../../axios'
import config from '../../config'
/* 
 * 系统登录模块
 */

// 登录
let prefix = config.baseURL
export const login = (data) => {
  return axios({
    url: prefix+'/sys/login',
    method: 'post',
    data
  })
}
