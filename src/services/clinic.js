import axios from './index'
import parse from '../Utils/parse'

export default {
  findByAlias (alias) {
    return axios.get(`/clinics/alias/${alias}`)
  },
  create (data) {
    return axios.post(`/clinics`, data)
  },
  delete (id) {
    return axios.delete(`/clinics/${id}`).then(() => true).catch(() => false)
  },
  update (data) {
    let item = parse.deleteUnusedProps(parse.cloneObject(data))
    return axios.patch(`/clinics/${data.id}`, item)
  },
  getById (id) {
    return axios.get(`/clinics/id/${id}`)
  },
  getAll () {
    return axios.get(`/clinics/`)
  },
  toggleStatus (id) {
    return axios.patch(`/clinics/toggleStatus/${id}`)
  }
}
