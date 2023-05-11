export default {
  setCategoryState ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('setCategoryState', payload)
      resolve()
    })
  }
}
