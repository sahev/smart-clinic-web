import axios from './index'
import parse from '../Utils/parse'

export default {
  create (data) {
    let item = parse.deleteUnusedProps(parse.cloneObject(data))
    return axios.post(`/services`, item)
  },
  update (data) {
    let item = parse.deleteUnusedProps(parse.cloneObject(data))
    return axios.patch(`/services/${data.id}`, item)
  },
  getById (id) {
    return axios.get(`/services/id/${id}`)
  },
  deleteById (id) {
    return axios.delete(`/services/${id}`)
  },
  getAll () {
    return axios.get(`/services/`)
  },
  toggleStatus (id) {
    return axios.patch(`/services/toggleStatus/${id}`)
  }
}
