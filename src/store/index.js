import Vue from 'vue'
import Vuex from 'vuex'
import { forEach } from 'lodash'
import Setting from './Setting/index'
import Chat from './Chat/index'
import Auth from './Auth/index'
import User from './User/index'
import Clinic from './Clinic/index'
import Category from './ClinicServices/Category/index'
import Service from './ClinicServices/Service/index'
import Calendar from './Calendar/index'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const initialStoreModules = {
  Chat,
  Auth,
  User,
  Clinic,
  Category,
  Service,
  Calendar
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ],
  modules: {
    Setting,
    Chat,
    Auth,
    User,
    Clinic,
    Category,
    Service,
    Calendar
  },
  state: {
  },
  mutations: {
    resetState (state) {
      forEach(initialStoreModules, (value, key) => {
        state[key] = _.cloneDeep(value.state)
      })
    }
  },
  actions: {
  },
  getters: {
  },
  strict: debug
})
