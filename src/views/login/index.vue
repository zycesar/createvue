<template>
  <div class="contenter">
    <el-form :model="loginForm"
             :rules="fieldRules"
             ref="loginForm"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-container">
      <h3 class="title">源慧码平台</h3>
      <el-form-item prop="account">
        <el-input id="inputId"
                  type="text"
                  @keyup.enter.native="login('loginForm')"
                  v-model="loginForm.account"
                  auto-complete="off"
                  placeholder="账号：随便输入"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password"
                  @keyup.enter.native="login('loginForm')"
                  v-model="loginForm.password"
                  auto-complete="off"
                  placeholder="密码：随便输入"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary"
                   style="width:100%;"
                   @click="login('loginForm')"
                   :loading="logining">登 录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src="./control.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
