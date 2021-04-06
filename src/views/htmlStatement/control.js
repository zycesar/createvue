/* eslint-disable */
export default {
  name: 'htmlStatement',
  data() {
    return {
      /* Message 消息提示data start */
      message: {
        success: {
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        },
        warning: {
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        },
        error: {
          message: '错了哦，这是一条错误消息',
          type: 'error'
        },
        info: {
          message: '这是一条消息提示',
          type: 'info'
        },
        successClose: {
          message: '恭喜你，这是一条成功消息',
          type: 'success',
          showClose: true
        },
        warningClose: {
          message: '警告哦，这是一条警告消息',
          type: 'warning',
          showClose: true
        },
        errorClose: {
          message: '错了哦，这是一条错误消息',
          type: 'error',
          showClose: true
        },
        infoClose: {
          message: '这是一条消息提示',
          type: 'info',
          showClose: true
        },
        center: {
          message: '居中的文字',
          center: true
        },
        html: {
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        }
      },
      /* Message 消息提示data end */
      dialogVisible: false,
      dialogVisibleSmall: false,
      loading: false,
      fullscreenLoading: false,
      loadingType: false,
      dialogTableVisible: false,
      centerDialogVisible: false,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
    }
  },
  components: {},
  computed: {},
  created() {},
  methods: {
    /* Message 消息提示 start */
    openVn() {
      const h = this.$createElement
      this.$message({
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', {
            style: 'color: teal'
          }, 'VNode')
        ])
      })
    },
    open(data) {
      this.$message({
        ...data
      });
    },
    /* Message 消息提示 end */

    /* Comfirm 确认框 start */
    openComfirmAlert() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.open({
            ...this.message.info,
            message: action
          })
        }
      });
    },

    openComfirm() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.open(this.message.success)
      }).catch(() => {
        this.open(this.message.error)
      });
    },

    openPrompt() {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({
        value
      }) => {
        this.open({
          ...this.message.success,
          message: value
        })
      }).catch(() => {
        this.open(this.message.info)
      });
    },

    openMsgBox() {
      const h = this.$createElement;
      this.$msgbox({
        title: '消息',
        message: h('p', null, [
          h('span', null, '内容可以是 '),
          h('i', {
            style: 'color: teal'
          }, 'VNode')
        ]),
        showCancelButton: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        /**
         * action 的值为'confirm', 'cancel'或'close'；
         *instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；
         *done 用于关闭 MessageBox 实例
         */
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '执行中...';
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 2000);
          } else {
            done();
          }
        }
      }).then(action => {
        this.open({
          ...this.message.success,
          message: action
        })
      });
    },

    openCenter() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        this.open(this.message.success)
      }).catch(() => {
        this.open(this.message.error)
      });
    },
    /* Comfirm 确认框 end */

    /* loading start */
    openLoading(type) {
      this.loadingType = type
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    openFullLoading() {
      this.fullscreenLoading = true
      setTimeout(() => {
        this.fullscreenLoading = false
      }, 2000)
    }
    /* loading end */
  },
  mounted() {

  }
}
