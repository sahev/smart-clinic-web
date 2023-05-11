import axios from './index'
import parse from '../Utils/parse'

export default {
  create (data) {
    return axios.post(`/categories`, data)
  },
  update (data) {
    let item = parse.deleteUnusedProps(parse.cloneObject(data))
    return axios.patch(`/categories/${data.id}`, item)
  },
  getById (id) {
    return axios.get(`/categories/id/${id}`)
  },
  deleteById (id) {
    return axios.delete(`/categories/${id}`)
  },
  getAll () {
    return axios.get(`/categories/`)
  },
  toggleStatus (id) {
    return axios.patch(`/categories/toggleStatus/${id}`)
  }
}
