## vue-elementui-pc

### 项目打包

npm run build
打包打的指定文件夹是 ../jenkins/publish/dev
把打包好的文件夹提交 git，即可用 Jenkins 发布

### 分环境打包配置

#### dev 内网开发环境（接口联调用）

打包命令：npm run build_dev
打包生成的文件夹相对位置：根目录\jenkins\publish\dev

#### stag 内网测试环境（测试人员环境）

打包命令：npm run build_stag
打包生成的文件夹相对位置：根目录\jenkins\publish\stag

#### uat 阿里云测试环境（客户产品运营预览版）

打包命令：npm run build_uat
打包生成的文件夹相对位置：根目录\jenkins\publish\uat

#### prod 阿里云生产环境

打包命令：npm run build
打包生成的文件夹相对位置：根目录\jenkins\publish\prod

### 详情



- 项目结构搭建（vue+elementUI+vue-router+vuex）
- 相关三方插件的引入（vuex、axios、element-ui、sass）
- 项目的基本目录（公共组件、页面、路由、存储、http 请求、通用 css\js）
-  路由管理模块 vue-router 的配置
-  状态管理模块 vuex 的配置
-  请求模块 axios 的配置
- 页面基本结构
  - （element-ui）
  - 顶栏 用户状态
  - 侧边菜单栏
  - 内容区
  - 底部区
- 其他配置
 - mock 数据：如左侧菜单栏数据
 - 分环境打包配置（常用 dev、production）
- 导航内容 
 - 1.前端规范 间距，按钮大小 ...
 - 2.table table，dialog ,增删改查
