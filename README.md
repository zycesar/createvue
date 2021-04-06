# vue-elementui-pc


# 项目打包

npm run build
打包打的指定文件夹是 ../jenkins/publish/dev
把打包好的文件夹提交 git，即可用 Jenkins 发布

# 分环境打包配置


### dev 内网开发环境（接口联调用）

打包命令：npm run build_dev
打包生成的文件夹相对位置：根目录\jenkins\publish\dev

### stag 内网测试环境（测试人员环境）

打包命令：npm run build_stag
打包生成的文件夹相对位置：根目录\jenkins\publish\stag

### uat 阿里云测试环境（客户产品运营预览版）

打包命令：npm run build_uat
打包生成的文件夹相对位置：根目录\jenkins\publish\uat

### prod 阿里云生产环境

打包命令：npm run build
打包生成的文件夹相对位置：根目录\jenkins\publish\prod

### 详情
 [vue-elementUI模板计划表 石墨文档](https://shimo.im/sheets/vpwYkJpJRTRJdC3R/MODOC)