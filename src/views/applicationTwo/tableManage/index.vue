<template>
  <div class="yh_container">
   <!-- 表单 -->
    <div class="search_boxs" id="el_style">
       <el-button class="element_style"  type="primary" icon="el-icon-plus" @click="addNews('form')">新增数据</el-button>
       <p class="element_style">姓名:</p>
      <el-input
        class="element_style"
        v-model="searchText"
        placeholder="请输入姓名"
        style="width:320px"
      ></el-input>
      <el-button class="element_style" type="primary" icon="el-icon-search" @click="seachListFun">搜索</el-button>
      <el-button class="element_style" type="primary" @click="reSet">重置</el-button>
    </div>
    <div class="table_box">
      <el-table :data="tableData" style="width: 100%" border>
          <el-table-column type="index" width="70" label="编号"></el-table-column>
           <el-table-column prop="Name" label="姓名">
          </el-table-column>
          <el-table-column prop="Title" label="标题">
          </el-table-column>
          <el-table-column prop="Content" label="内容">
          </el-table-column>
          <el-table-column prop="createdTime" label="创建时间">
          </el-table-column>
           <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button type="warning" size="small" @click="viewDetail(scope.row)">查看</el-button>
               <el-button type="danger" size="small" @click="deleteRow(scope.$index, tableData)">删除</el-button>
            </template>
          </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <com-page :total="page.total" @getData="getNewsList()" :PageIndex="page.PageIndex"></com-page>
    </div>

    <!-- 新增  -->
    <el-dialog
      title="新增数据"
      :visible.sync="dialogVisible"
      width="40%"
      :close-on-click-modal="false"
      :destroy-on-close="true"
      >
      <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="form">
        <el-row>
           <el-form-item label="姓名" prop="Name">
            <el-input :disabled="disabled" v-model="form.Name"  style="width:320px" placeholder="请输入姓名"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
           <el-form-item label="标题" prop="Title">
            <el-input  :disabled="disabled" v-model="form.Title"  style="width:320px" placeholder="请输入标题"></el-input>
          </el-form-item>
        </el-row>
         <el-row>
           <el-form-item label="内容" prop="Content">
            <el-input type="textarea" :disabled="disabled" v-model="form.Content" style="width:320px"  placeholder="请输入内容"></el-input>
          </el-form-item>
        </el-row>
      
        
       </el-form>
       <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitData('form')">确 定</el-button>
        </div>
    </el-dialog>

     
  </div>
</template>
<script src="./control.js"></script>
<style lang="scss" src="./style.scss" scoped></style>
