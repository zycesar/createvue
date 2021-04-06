import axios from '../../axios'
import config from '../../config'
/* 
 * table模块
 */

// 
let prefix = config.baseURL
export const getNewsList = (data) => {
  return axios({
    url: prefix+'/news/getNewsList',
    method: 'post',
    data
  })
}

export const addNews = (data) => {
  return axios({
    url: prefix+'/news/add',
    method: 'post',
    data
  })
}


