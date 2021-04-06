<template>
  <!-- v-loading 控制loading是否显示 -->
  <!-- 在绑定了v-loading指令的元素上添加element-loading-text属性，
  其值会被渲染为加载文案，并显示在加载图标的下方。
  类似地，element-loading-spinner和element-loading-background属性分别用来设定图标类名和背景色值。-->
  <!--  全屏loading v-loading.fullscreen.lock="fullscreenLoading" -->
  <div
    class="yh_container"
    v-loading="loading"
    v-loading.fullscreen.lock="fullscreenLoading"
    :element-loading-text="loadingType && '拼命加载中'"
    :element-loading-spinner="loadingType && 'el-icon-loading'"
    :element-loading-background="loadingType && 'rgba(0, 0, 0, 0.8)'"
  >
    <div class="page_main">
      <p class="page_title">
        前端代码规范
        <br />
        <span>(如果不按此规则编写代码，管理员有权要求你重写页面)</span>
      </p>
      <el-row class="page_item">
        <span style="font-size:16px;font-weight: bolder;">提示：页面开发标准参考页面—— 租户设置>数据管理>商圈管理</span>
      </el-row>
      <el-row class="page_item">
        1、主颜色深蓝色（页面头部、左侧菜单）：#293348
        <span class="demo_color" style="background:#293348"></span>
      </el-row>
      <el-row class="page_item">
        2、主颜色蓝色（按钮背景、高亮字体）：#1890ff
        <span class="demo_color" style="background:#1890ff"></span>
      </el-row>
      <el-row class="page_item">3、页面适配统一使用Element 中的 Layout 布局</el-row>
      <el-row class="page_item">4、弹框、表单元素、表单验证、和其他组件必须使用Element框架的组件</el-row>
      <el-row class="page_item">5、全局统一字体 14px，小一号字体12px</el-row>
      <el-row class="page_item">
        6、全局统一字体颜色rgba(0,0,0,.65);，深一点的颜色rgba(0,0,0,.85)
        <span
          class="demo_color"
          style="background:rgba(0,0,0,.65);"
        ></span>
        <span class="demo_color" style="background:rgba(0,0,0,.85)"></span>
      </el-row>
      <el-row class="page_item">7、输入框、下拉框、时间选择框的高度32px，</el-row>
      <el-row class="page_item">8、按钮颜色、样式</el-row>
      <el-row class="page_item">
        <el-button size="mini" type="primary">编辑按钮</el-button>
        <el-button size="mini" type="primary">设置按钮</el-button>
        <el-button size="mini" type="warning">查看按钮</el-button>
        <el-button type="danger" size="mini">作废</el-button>
        <el-button type="danger" size="mini">删除</el-button>
        <el-button type="danger" size="mini">取消</el-button>
        <el-button type="primary">
          <i class="seacrch_icon_btn el-icon-search"></i> 搜索
        </el-button>
        <el-button type="primary">
          <i class="seacrch_icon_btn el-icon-search"></i>查询
        </el-button>
        <el-button type="primary">
          <i class="seacrch_icon_btn el-icon-plus"></i>新增按钮
        </el-button>
        <el-button type="primary">提交按钮</el-button>
        <el-button type="success">分配按钮</el-button>
        <el-button type="success">返回</el-button>
        <el-button type="info" disabled>禁用按钮</el-button>
      </el-row>
      <el-row class="page_item">9、Message 消息提示</el-row>
      <el-row class="page_item">
        <el-button plain @click="openVn">VNode</el-button>
        <el-button plain @click="open(message.center)">文字居中</el-button>
        <el-button plain @click="open(message.html)">使用 HTML 片段</el-button>
        <el-button type="success" @click="open(message.success)">成功</el-button>
        <el-button type="warning" @click="open(message.warning)">警告</el-button>
        <el-button type="info" @click="open(message.info)">消息</el-button>
        <el-button type="danger" @click="open(message.error)">错误</el-button>
        <el-button type="success" @click="open(message.successClose)">可关闭消息</el-button>
        <el-button type="warning" @click="open(message.warningClose)">可关闭成功</el-button>
        <el-button type="info" @click="open(message.infoClose)">可关闭警告</el-button>
        <el-button type="danger" @click="open(message.errorClose)">可关闭错误</el-button>
      </el-row>
      <el-row class="page_item">10、comfirm 确认框</el-row>
      <el-row class="page_item">
        <el-button plain @click="openComfirmAlert">点击打开 comfirm 消息提示</el-button>
        <el-button plain @click="openComfirm">点击打开 comfirm 确认消息</el-button>
        <el-button plain @click="openPrompt">点击打开 comfirm 提交内容</el-button>
        <el-button plain @click="openMsgBox">点击打开 comfirm 自定义内容</el-button>
        <el-button plain @click="openCenter">点击打开 comfirm 居中布局</el-button>
      </el-row>
      <el-row class="page_item">11、Loading 加载</el-row>
      <el-row class="page_item">
        <el-button plain @click="openLoading(false)">打开loading</el-button>
        <el-button plain @click="openLoading(true)">打开自定义loading</el-button>
        <el-button plain @click="openFullLoading">打开全屏loading</el-button>
      </el-row>
      <el-row class="page_item">12、Dialog 对话框</el-row>
      <el-row class="page_item">
        <el-button plain @click="dialogVisibleSmall = true">点击打开 Dialog（small size）</el-button>
        <el-dialog
          title="提示"
          :close-on-click-modal="false"
          :visible.sync="dialogVisibleSmall"
          width="40%"
        >
          <span>这是一个相对小size的对话框</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisibleSmall = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisibleSmall = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-button plain @click="dialogVisible = true">点击打开 Dialog（标准size）</el-button>
        <el-dialog
          title="提示"
          :close-on-click-modal="false"
          :visible.sync="dialogVisible"
          width="50%"
        >
          <span>这是一个标准size的对话框</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 嵌套表格的 Table -->
        <el-button @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>
        <el-dialog title="收货地址" width="50%" :visible.sync="dialogTableVisible">
          <el-table :data="gridData">
            <el-table-column property="date" label="日期" width="150"></el-table-column>
            <el-table-column property="name" label="姓名" width="200"></el-table-column>
            <el-table-column property="address" label="地址"></el-table-column>
          </el-table>
        </el-dialog>
        <!-- <el-button @click="centerDialogVisible = true">点击打开居中布局 Dialog</el-button> -->
        <el-dialog title="提示" :visible.sync="centerDialogVisible" width="50%" center>
          <span>需要注意的是内容是默认不居中的</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
      </el-row>
      <p class="page_title">代码规范</p>
      <el-row class="page_item">1、页面的代码最外层的div的class命名为yh_contenter（不包含组件）</el-row>
      <el-row class="page_item">
        <img src="@/assets/images/pageDemoOne.jpg" alt />
      </el-row>
      <el-row class="page_item">2、搜素表单最外层的class统一为seach_box</el-row>
      <el-row class="page_item">3、新建页面必须有name，name的命名必须与文件夹名字一致</el-row>
      <el-row class="page_item">
        <img src="@/assets/images/pageDemoThree.png" alt />
      </el-row>
      <el-row class="page_item">
        4、项目的icon来源于iconfont，如果编写代码需要icon，我们要到自己的组件库去找，如果没有你要icon,可以自行加入我们的icon库。更新下面 图1 这个文件夹。
        需要iconfont的项目账号的可以找张荣荣开权限
      </el-row>
      <el-row class="page_item">
        <img src="@/assets/images/pageDemoSecond.png" alt />
      </el-row>
      <p class="page_title">
        <span>(此文案最终解释权归张荣荣所有)</span>
      </p>
    </div>
  </div>
</template>
<script src="./control.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
