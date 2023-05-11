import * as rules from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import Vue from 'vue'
import usersServices from '../services/user'
import clinicsService from '../services/clinic'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

extend('userEmailAvailable', {
  params: ['target'],
  async validate (value) {
    let res = await usersServices.emailExists(value)
    return !res.data
  },

  message: (field, data) => `Email ${data._value_} is unavailable`
})

extend('maxcaracters', {
  params: ['target'],
  validate (value) {
    return value.length >= 3
  },

  message: 'Password must be more than 3 digits'
})

extend('clinicAliasAvailable', {
  params: ['target'],
  async validate (value) {
    let res = await clinicsService.findByAlias(value)
    if (res.data.length > 0) {
      return false
    } else {
      return true
    }
  },

  message: (field, data) => `Clinic alias ${data._value_} is unavailable`
})

extend('fullName', {
  params: ['target'],
  validate (value) {
    let names = value.split(' ')
    let isValid = names[1] !== '' && names.length > 1
    return isValid
  },
  message: 'Name must be fullname'
})

extend('caracters', {
  params: ['target'],
  validate (value) {
    return value.length >= 8
  },
  message: 'Password must be more than 8 digits'
})

extend('password', {
  params: ['target'],
  validate (value, { target }) {
    return value === target
  },
  message: 'Password confirmation does not match'
})

extend('role', {
  params: ['target'],
  validate (value) {
    if (Object.keys(value).length > 0) {
      return true
    }
    return false
  },
  message: 'Role not selected'
})

extend('amount', {
  params: ['target'],
  validate (value) {
    let isAmount = /^\d+(\.|.\d{1,2})?$/
    return isAmount.test(value)
  },
  message: 'Amount not valid'
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
