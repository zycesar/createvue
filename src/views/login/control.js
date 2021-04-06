
import Cookies from "js-cookie";
export default {
  name: "login",
  data() {
    return {
      logining: false,
      loginForm: {
        account: '',
        password: ''
      },
      fieldRules: {
        account: [{
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }, ],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, ]
      },
      checked: true
    };
  },
  components: {},
  computed: {},
  created() {

  },
  methods: {
    login(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.logining = true
          this.$api.login.login({
              "Account": this.loginForm.account,
              "Pwd": this.loginForm.password
            })
            .then((res) => {
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              this.logining = false
              this.$store.commit('menuRouteLoaded', false)
              // localStorage.setItem('IsMulitple', res.data.IsMulitple)
              Cookies.set('token', res.data.token) // 放置token到Cookie
              // Cookies.set('token_type', res.data.Token.token_type) // 放置token到Cookie
              this.$router.push('/')
            })
            .catch((res) => {
              this.logining = false
            })
        }
        })
    },
    reset() {
      this.$refs.loginForm.resetFields();
    },
  },
  mounted() {
    document.getElementById('inputId').focus()
    // var _self = this;
    // document.onkeydown = function (e) {
    //   var key = window.event.keyCode;
    //   if (key == 13) {
    //     _self.login()
    //   }
    // }
  },
};
