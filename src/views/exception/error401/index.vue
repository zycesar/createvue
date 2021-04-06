<template>
  <div class="yh_container">
   <div class="page_main">
      <div class="error_box">
        <img class="error_img" src="@/assets/images/401.png" alt="">
       <div class="btn_box">
          <el-button plain  @click='$router.replace("/")'>返回首页</el-button>
       </div>
      </div>
   </div>
  </div>
</template>
<script src='./control.js'></script>

<style lang="scss" src="./style.scss" scoped></style>