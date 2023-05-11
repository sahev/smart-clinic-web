export default {
  setUserState ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('setUserState', payload)
      resolve()
    })
  }
}
