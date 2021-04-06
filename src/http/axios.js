// 二次封装 axios 模块，包含拦截器等信息。
import Vue from 'vue';
import axios from 'axios';
import config from './config';
import qs from 'qs';
import Cookies from "js-cookie";
import router from '@/router'

// 使用vuex做全局loading时使用
// import store from '@/store'
export default function $axios(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: config.baseURL, // api 的 base_url
      timeout: 5000 // request timeout
      //headers: config.headers,
      //  transformResponse: [function (data) {}]
    })

    // request 拦截器
    instance.interceptors.request.use(
      config => {
        let token_type = Cookies.get('token_type') ? Cookies.get('token_type') : "";
        let token = token_type + ' ' + (Cookies.get('token') ? Cookies.get('token') : '');
        //配置token
        config.headers['Authorization'] = token
        // config.headers['AppSence'] = 'serviceplatform#1#1' //发布生产的时候要注释掉，本地调试时打开
        if (!token) {
          this.$router.push('/login')
        }
        if (config.method === 'get') {
          // 如果是get请求，且params是数组类型如arr=[1,2]，则转换成arr=1&arr=2
          config.paramsSerializer = function (params) {
            return qs.stringify(params, {
              arrayFormat: 'repeat'
            })
          }
        }
        return config
      },
      error => {
        // 请求错误时
        // 1. 判断请求超时
        if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
          // return service.request(originalRequest);// 再重复请求一次
        }
        // 2. 需要重定向到错误页面
        const errorInfo = error.response
        if (errorInfo) {
          error = errorInfo.data // 页面那边catch的时候就能拿到详细的错误信息,看最下边的Promise.reject
          const errorStatus = errorInfo.status; // 404 403 500 ...
          router.push({
            path: `/error/${errorStatus}`
          })
        }
        return Promise.reject(error) // 在调用的那边可以拿到(catch)你想返回的错误信息
      }
    )
    // response 拦截器
    instance.interceptors.response.use(
      response => {
        let data;
        // IE9时response.data是undefined，因此需要使用response.request.responseText(Stringify后的字符串)
        if (response.data == undefined) {
          data = JSON.parse(response.request.responseText)
        } else {
          data = response.data
        }
        // 二进制流文件-单独对blob的处理
        if(response.config.responseType == 'blob'){
            return data
        }
        if (data.code != 200) {
            Vue.prototype.$message({
              message: data.msg,
              type: 'warning'
            });
            return Promise.reject(error)
        }
        return data
      },
      err => {
        if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = '请求错误'
              break
            case 401:
              Vue.prototype.$message({
                message: "登录失效，请重新登录",
                type: 'warning'
              });
              Cookies.remove('token')
              Cookies.remove('token_type')
              router.push({
                path: '/login'
              })
              break
            case 403:
              router.push({
                path: '/exception/error403'
              })
              break
            case 404:
              err.message = `请求地址出错: ${err.response.config.url}`
              break
            case 408:
              err.message = '请求超时'
              break
            case 500:
              router.push({
                path: '/exception/error500'
              })
              break
            case 501:
              err.message = '服务未实现'
              break
            case 502:
              err.message = '网关错误'
              break
            case 503:
              err.message = '服务不可用'
              break
            case 504:
              err.message = '网关超时'
              break
            case 505:
              err.message = 'HTTP版本不受支持'
              break
            default:
          }
        }
        console.error(err)
        return Promise.reject(err) // 返回接口返回的错误信息
      }
    )

    // 请求处理
    instance(options).then(res => {
      resolve(res)
      return false
    }).catch(error => {
      reject(error)
    })
  })
}
