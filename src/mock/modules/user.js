// 用户相关的接口模拟
// 保存用户信息
let urlQ="http://localhost:8081"
export function saveUser() {
  return {
    url: urlQ+'/user/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 修改用户信息
export function updataUser() {
  return {
    url: urlQ+'/user/update',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 删除用户信息
export function deleteUser() {
  return {
    url: urlQ+'/user/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 查询单个具体用户信息
export function findByUserName() {
  return {
    url: urlQ+'/user/findByUserName',
    type: 'get',
    data: {
      "code": 200,
      "msg": null,
      "data": {
        "userId": 1,
        "username": "admin",
        "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
        "salt": "YzcmCZNvbXocrsz9dm8e",
        "email": "admin@qq.com",
        "mobile": "13612345678",
        TenantName:"yh租户",
        "status": 1,
        "deptId": null,
        "deptName": null,
        "createBy": null,
        "createTime": "2018-08-14T03:11:11.000+0000",
        "lastUpdateBy": null,
        "lastUpdateTime": null,
        "delFlag": 0
      }
    }
  }
}
// 分页查询用户信息
export function getUser() {
  return {
    url: urlQ+'/user/findPage',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": {
        "pageNum": 1,
        "pageSize": 5,
        "totalSize": 5,
        "totalPages": 1,
        "content": [{
            "userId": 1,
            "username": "admin",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "admin@qq.com",
            "mobile": "13612345678",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          },
          {
            "userId": 2,
            "username": "Louis",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "louis@qq.com",
            "mobile": "18200932238",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          },
          {
            "userId": 3,
            "username": "Kobe",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "kobe@qq.com",
            "mobile": "18200932238",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          },
          {
            "userId": 4,
            "username": "Iverson",
            "password": "9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d",
            "salt": "YzcmCZNvbXocrsz9dm8e",
            "email": "iverson@qq.com",
            "mobile": "18200932238",
            "status": 1,
            "deptId": null,
            "deptName": null,
            "createBy": null,
            "createTime": "2018-08-14T03:11:11.000+0000",
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0
          },
          {
            "userId": 110,
            "username": "test",
            "password": "123456",
            "salt": "1312321321",
            "email": "test@qq.com",
            "mobile": "test2@qq.com",
            "status": 0,
            "deptId": 110,
            "deptName": null,
            "createBy": 0,
            "createTime": "2018-09-01T05:40:23.000+0000",
            "lastUpdateBy": 0,
            "lastUpdateTime": "2018-09-01T05:40:23.000+0000",
            "delFlag": 0
          }
        ]
      }
    }
  }
}
// 更新密码
export function updatePassword() {
  return {
    url: urlQ+'/user/updatePassword',
    type: 'get',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
