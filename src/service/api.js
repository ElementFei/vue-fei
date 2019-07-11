import axios from 'axios'
import qs from 'qs'

// 创建axios实例
const service = axios.create({
	baseURL: '',
  timeout: 15000,
  headers: {
    'content-Type': 'application/x-www-form-urlencoded',
    'platform': '3',
    'channelId': 'web',
    'apiVersion': '2.0.2'
  }
})

service.interceptors.request.use(config => {
	var storeInfo = window.sessionStorage.getItem('storeInfo') || ''
  var storeId = window.sessionStorage.getItem('storeId') || ''
  var vendorId = window.sessionStorage.getItem('vendorId') || '10'
  var userCode = window.sessionStorage.getItem('userCode') + ''
  config.headers['storeId'] = storeInfo && storeInfo !== undefined ? JSON.parse(storeInfo).shopId : storeId
  config.headers['vendorId'] = vendorId
  config.headers['userCode'] = userCode && userCode === 'null' ? '' : userCode === 'undefined' ? '' : userCode
  config.headers['token'] = window.sessionStorage.getItem('token')
  config.headers['currentTime'] = new Date().getTime()
  return config
}, error => {
  console.log(error) // for debug
  Promise.reject(error)
})

const API = class Api {
  constructor (url, params, cb) {
    this.url = url
    this.params = params
    this.cb = cb
  }
  get (url, params, cb) {
    return service.get(url, {params: params}).then(function (res) {
      cb(res.data)
    }).catch(function (err) {
      console.log(err)
    })
  }
  post (url, params, cb) {
    return service.post(url, qs.stringify(params)).then(function (res) {
      cb(res.data)
    }).catch(function (err) {
      console.log(err)
    })
  }
}

export default API