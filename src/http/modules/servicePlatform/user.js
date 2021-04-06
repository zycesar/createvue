import axios from '../../axios'
import config from '../../config'

/* 
 * 用户管理模块
 */
let prefix = config.baseURL
export const findByUserName = (params) => {
  return axios({
    url:prefix+'/user/findByUserName',
    method: 'get',
    params
  })
}
