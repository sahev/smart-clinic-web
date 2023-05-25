import Vue from 'vue'

Vue.mixin({
  methods: {
    makeSuccessToast (message) {
      this.$bvToast.toast(message, {
        title: 'Success',
        autoHideDelay: 3000,
        variant: 'success'
      })
    },
    makeErrorToast (message) {
      this.$bvToast.toast(message, {
        title: 'Error',
        autoHideDelay: 3000,
        variant: 'danger'
      })
    },
    makeWarningToast (message) {
      this.$bvToast.toast(message, {
        title: 'Warning',
        autoHideDelay: 3000,
        variant: 'warning'
      })
    },
    makeInfoToast (message) {
      this.$bvToast.toast(message, {
        title: 'Info',
        autoHideDelay: 3000,
        variant: 'info'
      })
    },
    isSuccess (data) {
      if (data.statusCode) {
        return false
      }
      return true
    },
    closeModal (id) {
      this.$root.$emit('bv::hide::modal', id)
    },
    cloneObject (data) {
      return JSON.parse(JSON.stringify(data))
    },
    defaultProfileImage () {
      return require('../assets/images/user/no-image.png')
    },
    queryToJson () {
      let search = location.search.substring(1)
      return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }
  }
})
