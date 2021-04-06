// axios 默认配置，包含基础路径等信息。
export default {
  // method: '',
  // // 基础url前缀
  // baseURL: '/gw',
  // // baseURL:'http://10.100.20.11:30001',
  // // baseURL:'http://10.100.20.12:30101',
  baseURL: 'http://localhost:8081',

  // // 请求头信息
  // headers: {
  //   'X-Requested-With': 'XMLHttpRequest',
  //   //'Accept': 'application/json',
  //   'Content-Type': 'application/json;charset=utf-8',
  //   'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjZEOUNFOUI1Nzg4QkI5QjdFRjU3Q0EyMDk2REFFOEU1IiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MDM4Nzc1OTEsImV4cCI6MTYwMzkwNjM5MSwiaXNzIjoiaHR0cDovLzEwLjEwMC4yMC4xMjozMDAwMiIsImNsaWVudF9pZCI6ImYzYWMwZWNhZWMwMjQ1Yjg4N2U4YWM2MTAwYjljNzY3Iiwic3ViIjoic2VydmljZXBsYXRmb3JtIzEjMSIsImF1dGhfdGltZSI6MTYwMzg3NzU5MSwiaWRwIjoibG9jYWwiLCJqdGkiOiJDNEU2NEE3QThGMjdBQUY4ODFBMTMwRkI2NDA4RDFCNiIsImlhdCI6MTYwMzg3NzU5MSwic2NvcGUiOlsiZXNtYXJ0Il0sImFtciI6WyJjbGllbnRfY3JlZGVudGlhbHNfc2VuY2UiXX0.Wt6Ls0AvudL4QMs76VhpZ_vjlFd0M0rKNcQ1GD-U-yvFf1YBi5NNySpbm3YJ-vDKMHBzkop9MrGEER1S6J_O7-JdzTCkylSkzCvnm_HvZxTCv4d11nhHkXigeXU3fBHIb2gK592ssresLY5T6L9_RCPF9qxIQVksv3falGgrAvAb0rueXk6gpGwYWg59m3oqJI3FKjY8_7dTA5qpkwAlhkHrbVjvPQcl8zq05Bpa3TfgnmXVBeCxNlsBiXDBzzc2Cu_IaLFcHzALzJSsSGo9jyhFNO6RYRuUMHsn_J9VavjJhfQpSlsof4Rw26FYMGJV4g1s4kyBz5X9AeIFmg_f3A'
  // },
  // // 参数
  // data: {},
  // // 设置超时时间
  // timeout: 10000,
  // // 携带凭证
  // //withCredentials: true,
  // // 返回数据类型
  // responseType: 'json',
  // baseURL: function () {
  //   if (process.env.NODE_ENV == 'production') {
  //     let url = 'gw';
  //     return url
  //   }
  //   if (process.env.NODE_ENV == 'uat') {
  //     let url = 'gw';
  //     return url
  //   }
  //   if (process.env.NODE_ENV == 'dev') {
  //     let url = 'api';
  //     return url
  //   }
  //   if (process.env.NODE_ENV == 'development') {
  //     let url = 'gw';
  //     return url
  //   }
  //   if (process.env.NODE_ENV == 'stag') {
  //     let url = 'gw';
  //     return url
  //   }
  // },
  SystemPrefix: {
    // serviceplatform: "yh-common-serviceplatform-adminapi", //服务化管理端  http://10.100.20.12:30101/swagger/index.html  
    // businessuser: "yh-business-user-adminapi", //活动用户  http://10.100.20.12:31121/swagger/index.html
    // businesscode: "yh-business-code-adminapi", //生码 http://10.100.20.12:31101/swagger/index.html
    // businessms: 'yh-business-markingstrategy-adminapi', //营销策略 http://10.100.20.12:31141/swagger/index.html
    // commonFile: "yh-common-file-webapi", //公共文件http://10.100.20.51:30121/swagger/index.html
    // commonMap: "yh-common-map-webapi", //地图服务,
    // commonsms: "yh-common-sms-adminapi", //短信模板  http://10.100.20.12:30112/swagger/index.html
    // commonWeb: 'yh-common-sms-webapi',
    // businessWeb: 'yh-business-markingstrategy-webapi',
    // businessUtcAdmin: 'yh-business-utc-adminapi', //UTC中台管理端 http://10.100.20.12:31171/swagger/index.html 
    // businessOrderAdmin: 'yh-business-order-adminapi', // 订单管理  http://10.100.20.12:31111/swagger/index.html   
    // commonRiskAdmin: 'yh-common-risk-adminapi', // 风控管理  http://10.100.20.12:30191/swagger/index.html
    // businessMaterialAdmin: 'yh-business-material-adminapi', // 资源管理 http://10.100.20.12:31131/swagger/index.html
    // businessScancodetoolAdmin: 'yh-business-scancodetool-adminapi' // 扫码工具管理端http://10.100.20.12:31191/swagger/index.html
    // C端  http://10.100.20.12:31192/swagger/index.html
  }
}
