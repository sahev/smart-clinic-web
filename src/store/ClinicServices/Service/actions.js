export default {
  setServiceState ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('setServiceState', payload)
      resolve()
    })
  }
}
