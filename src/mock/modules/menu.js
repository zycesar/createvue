/* eslint-disable */
// 菜单相关的接口模拟
// 保存菜单信息
let urlQ = "http://localhost:8081"
export function saveMenu() {
  return {
    url: urlQ + '/menu/save',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 修改菜单信息
export function updateMenu() {
  return {
    url: urlQ + '/menu/update',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 删除菜单信息
export function deleteMenu() {
  return {
    url: urlQ + '/menu/delete',
    type: 'post',
    data: {
      "code": 200,
      "msg": null,
      "data": 1
    }
  }
}
// 查询菜单树
export function findTreeMenu() {
  return {
    url: urlQ + '/menu/findTree',
    type: 'get',
    data: {
      "code": 200,
      "msg": null,
      "data": [{
          "menuId": 388,
          "parentId": 0,
          "title": "应用一",
          "MenuCode": "application1",
          "url": null,
          "type": 0,
          "icon": "iconfont yh-iconshouye",
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "delFlag": 0,
          "children": [{
              "menuId": 34,
              "parentId": 25,
              "title": "dashboard",
              "MenuCode": "sys_index",
              "url": null,
              "type": 1,
              "icon": "iconfont yh-iconshouye2",
              "orderNum": 1,
              "createBy": null,
              "createTime": null,
              "lastUpdateBy": null,
              "lastUpdateTime": null,
              "delFlag": 0,
              "children": [{
                "menuId": 34,
                "parentId": 25,
                "title": "dashboard",
                "MenuCode": "index",
                "url": "/index",
                "type": 1,
                "icon": "iconfont yh-iconshouye2",
                "orderNum": 1,
                "createBy": null,
                "createTime": null,
                "lastUpdateBy": null,
                "lastUpdateTime": null,
                "delFlag": 0,
                "children": [],

              }],
            },
            {
              "menuId": 41,
              "parentId": 0,
              "title": "前端代码规范",
              "MenuCode": "sys_html",
              "url": null,
              "type": 0,
              "icon": "iconfont yh-iconzhanghaoquanxianguanli",
              "createBy": null,
              "createTime": null,
              "lastUpdateBy": null,
              "lastUpdateTime": null,
              "delFlag": 0,
              "children": [{
                "menuId": 42,
                "parentId": 41,
                "title": "前端代码规范",
                "url": "/htmlStatement",
                "MenuCode": "sys_rules",
                "type": 1,
                "icon": "iconfont yh-iconzhanghaoquanxianguanli",
                "orderNum": 1,
                "createBy": null,
                "createTime": null,
                "lastUpdateBy": null,
                "lastUpdateTime": null,
                "delFlag": 0,
                "children": [],

              }]
            }, {
              "menuId": 43,
              "parentId": 0,
              "title": "异常页",
              "url": null,
              "MenuCode": "sys_error",
              "type": 0,
              "icon": "iconfont yh-iconzhanghaoquanxianguanli",
              "createBy": null,
              "createTime": null,
              "lastUpdateBy": null,
              "lastUpdateTime": null,
              "delFlag": 0,
              "children": [{
                "menuId": 44,
                "parentId": 43,
                "title": "403",
                "url": "/exception/error403",
                "MenuCode": "err_403",
                "type": 1,
                "icon": "iconfont yh-iconzhanghaoquanxianguanli",
                "orderNum": 1,
                "createBy": null,
                "createTime": null,
                "lastUpdateBy": null,
                "lastUpdateTime": null,
                "delFlag": 0,
                "children": [],

              }, {
                "menuId": 45,
                "parentId": 43,
                "title": "404",
                "url": "/exception/error404",
                "MenuCode": "err_404",
                "type": 1,
                "icon": "iconfont yh-iconzhanghaoquanxianguanli",
                "orderNum": 1,
                "createBy": null,
                "createTime": null,
                "lastUpdateBy": null,
                "lastUpdateTime": null,
                "delFlag": 0,
                "children": [],

              }, {
                "menuId": 46,
                "parentId": 43,
                "title": "500",
                "url": "/exception/error500",
                "MenuCode": "err_500",
                "type": 1,
                "icon": "iconfont yh-iconzhanghaoquanxianguanli",
                "orderNum": 1,
                "createBy": null,
                "createTime": null,
                "lastUpdateBy": null,
                "lastUpdateTime": null,
                "delFlag": 0,
                "children": [],

              },
              {
                "menuId": 47,
                "parentId": 43,
                "title": "401",
                "url": "/exception/error401",
                "MenuCode": "err_401",
                "type": 1,
                "icon": "iconfont yh-iconzhanghaoquanxianguanli",
                "orderNum": 1,
                "createBy": null,
                "createTime": null,
                "lastUpdateBy": null,
                "lastUpdateTime": null,
                "delFlag": 0,
                "children": [],

              }]
            },
          ]
        },
        {
          "menuId": 488,
          "parentId": 0,
          "title": "应用二",
          "url": null,
          "MenuCode": "application2",
          "type": 0,
          "icon": "iconfont yh-iconshouye",
          "createBy": null,
          "createTime": null,
          "lastUpdateBy": null,
          "lastUpdateTime": null,
          "delFlag": 0,
          "children": [{
            "menuId": 51,
            "parentId": 488,
            "title": "表格示例",
            "MenuCode": "sys_table",
            "url": null,
            "type": 0,
            "icon": "iconfont yh-iconshouye",
            "createBy": null,
            "createTime": null,
            "lastUpdateBy": null,
            "lastUpdateTime": null,
            "delFlag": 0,

            "children": [{
              "menuId": 511,
              "parentId": 51,
              "title": "Table",
              "url": '/applicationTwo/tableManage',
              "MenuCode": "sys_table_list",
              "type": 1,
              "icon": "iconfont yh-iconshouye",
              "createBy": null,
              "createTime": null,
              "lastUpdateBy": null,
              "lastUpdateTime": null,
              "delFlag": 0,
              "children": []
            }]
          }]
        }

      ]
    }
  }
}
