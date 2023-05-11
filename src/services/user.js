import axios from './index'
import parse from '../Utils/parse'

export default {
  emailExists (email) {
    return axios.get(`/users/email/${email}`)
  },

  createCustomerUser (data) {
    return axios.post('/users', data)
  },
  getById (id) {
    return axios.get(`/users/${id}`)
  },
  createUser (data) {
    return axios.post('/users/admin', data)
  },
  getAll () {
    return axios.get(`/users/`)
  },
  getAllByHeadQuarterId (id) {
    return axios.get(`/users/headquarter/${id}`)
  },
  deleteById (id) {
    return axios.delete(`/users/${id}`)
  },
  update (data) {
    let item = parse.deleteUnusedProps(parse.cloneObject(data))
    return axios.patch(`/users/${data.id}`, item)
  },
  toggleActiveStatus (id) {
    return axios.patch(`/users/toggleStatus/${id}`)
  },
  togglePerformServiceStatus (id) {
    return axios.patch(`/users/togglePerformServiceStatus/${id}`)
  },
  getAllByName (name) {
    return axios.get(`/users/name/${name}`)
  }
}
