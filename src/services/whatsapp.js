import axios from './index'

const baseURL = process.env.VUE_APP_WHATSAPP_API_URL

export default {
  create (data) {
    return axios.post('/session/create', data, { baseURL })
  },
  getStatus (id) {
    return axios.get(`/chat/status/${id}`, { baseURL })
  },
  sessionExists (id) {
    return axios.get(`/chat/find/${id}`, { baseURL })
  },
  delete (id) {
    return axios.delete(`/session/${id}`, { baseURL })
  },
  sendMessage (data) {
    return axios.post('/chat/send/', data, { baseURL })
  }
}
