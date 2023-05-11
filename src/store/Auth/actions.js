export default {
  setToken ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('setToken', payload)
      resolve()
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      commit('resetState')
      resolve()
    })
  }
}
