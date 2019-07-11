import Api from '@/service/api'
let api = new Api()

export default {
  signIn (params, cb) {
    return api.post('/api/login', params, cb)
  }
}
