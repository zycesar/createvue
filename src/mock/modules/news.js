// 表格数据接口模拟
import config from '@/http/config'
// let urlQ=config.baseURL
let urlQ = "http://localhost:8081"

// 导入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random

// mock新闻数据，包括新闻标题title、内容content、创建时间createdTime
function produceNewsData() {
  let newsList = []
  for (let i = 0; i < 6; i++) {
    let newNewsObject = {
      Id:i,
      Name:Random.cname(),
      //  Random.ctitle( min, max) 随机产生一个中文标题，长度默认在3-7之间
      Title: Random.ctitle(), 
      // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
     Content: Random.cparagraph(),
      // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd
      createdTime: Random.datetime()
    }
    newsList.push(newNewsObject)
  }
  return newsList
}

export function getNewsList() {
  return {
    url:urlQ+ '/news/getNewsList',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": {
        "data":produceNewsData(),
        "total":0
      }
    },
  }
}

// 新增
export function addNews() {
  return {
    url: urlQ + '/news/add',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 删除信息
export function deleteNews() {
  return {
    url: urlQ + '/news/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
