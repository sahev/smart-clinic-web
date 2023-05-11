import axios from 'axios'
import authState from '../store/index'

let instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

instance.interceptors.request.use(
  (config) => {
    const token = authState.getters['Auth/authToken']

    if (token) {
      let parsedToken = JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())
      config.headers['Authorization'] = `Bearer ${token}`
      config.headers['ClinicId'] = parsedToken.clinicId
    }

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

export default instance
