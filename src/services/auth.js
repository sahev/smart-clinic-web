import axios from './index'
// import store from '../store/index'

export default {
  login (userData) {
    return axios.post('/auth/login', userData)// .then(res => store.dispatch('Auth/setToken', res.data.accessToken))
      .catch(() => false)
  },
  register (userData) {
    return axios.post('/auth/register', userData)
  }
}
