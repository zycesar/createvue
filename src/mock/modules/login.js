// 登录相关的接口模拟
// 登录接口
let urlQ="http://localhost:8081"
export function login() {
  return {
    url:urlQ+ '/sys/login',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": {
        "id": null,
        "userId": 1,
        "token": "77ae89be36504adfb5c09ef71409ea0e",
        "expireTime": "2018-09-01T16:24:50.473+0000",
        "createBy": null,
        "createTime": null,
        "lastUpdateBy": null,
        "lastUpdateTime": "2018-09-01T04:24:50.473+0000"
      }
    }
  }
}
