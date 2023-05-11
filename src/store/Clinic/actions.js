export default {
  setClinicState ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('setClinicState', payload)
      resolve()
    })
  },
  setClinicalUnitsState ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('setClinicalUnitsState', payload)
      resolve()
    })
  }
}
