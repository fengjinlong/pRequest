// import axios from 'axios'
// import qs from 'query-string'

// function isEmptyObject (obj) {
//   return !obj || !Object.keys(obj).length
// }
// // 清理headers中不需要的属性
// const METHOD = ['common', 'get', 'post', 'put', 'delete', 'patch', 'options', 'head']
// function clearUpHeaders (headers) {
//   METHOD.forEach(prop => headers[prop] && delete headers[prop])
//   return headers
// }
// // 组合请求方法的headers
// // headers = default <= common <= method <= extra
// function resolveHeaders (method, defaults = {}, extras = {}) {
//   method = method && method.toLowerCase()
//   // check method参数的合法性

//   if (!/^(get|post|put|delete|patch|options|head)$/.test(method)) {
//     throw new Error(`method:${method}不是合法的请求方法`)
//   }

//   const headers = { ...defaults }
//   const commonHeaders = headers.common || {}
//   const headersForMethod = headers[method] || {}

//   return clearUpHeaders({
//     ...headers,
//     ...commonHeaders,
//     ...headersForMethod,
//     ...extras
//   })
// }

// // 组合请求方法的config
// // config = default <= extra
// function resolveConfig (method, defaults = {}, extras = {}) {
//   console.log(111111)
//   if (isEmptyObject(defaults) && isEmptyObject(extras)) {
//     return {}
//   }
//   let ob = resolveHeaders(method, defaults.headers, extras.headers)
//   console.log(ob)
//   return {
//     ...defaults,
//     ...extras,
//     ob
//   }
// }

// class HttpClientModule {
//   constructor (options = {}) {
//     const defaultHeaders = options.headers || {}
//     if (options.headers) {
//       delete options.headers
//     }

//     const defaultOptions = {
//       baseURL: 'http://210.12.23.78:8082',
//       transformRequest: [function (data, headers) {
//         if (headers['Content-Type'] === 'application/x-www-form-urlencoded;charset=UTF-8') {
//           // 针对application/x-www-form-urlencoded对data进行序列化
//           return qs.stringify(data)
//         } else {
//           return data
//         }
//       }]
//     }
//     this.defaultConfig = {
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
//         ...defaultHeaders
//       }
//     }
//     this.$http = axios.create({ ...defaultOptions, ...options })
//   }

//   get (url, config = {}) {
//     console.log(111)
//     return new Promise((resolve) => {
//       resolve(this.$http.get(url, resolveConfig(
//         'get', this.defaultConfig, config)))
//     })
//   }

//   post (url, data = undefined, config = {}) {
//     return new Promise((resolve) => {
//       resolve(this.$http.post(url, data, resolveConfig(
//         'post', this.defaultConfig, config)))
//     })
//   }
// }
// // 导出工厂方法
// // export function createHttpClient (options, defaults) {
// //   return new HttpClientModule(options, defaults)
// // }

// export default HttpClientModule // import
