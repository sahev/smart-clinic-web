export default {
  setToken (state, data) {
    state.accessToken = data
    state.isLoggedIn = true
  },
  logout (state) {
    state.accessToken = null
    state.isLoggedIn = false
  }
}
