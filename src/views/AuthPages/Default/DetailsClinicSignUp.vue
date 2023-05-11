<template>
  <div>
    <h1 class="mb-0">Sign Up</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <DetailsClinicSignUpForm v-if="firstPage" @initalData="onNext($event)"></DetailsClinicSignUpForm>
    <DetailsClinicFastConfigForm v-else :initalData="initalData"></DetailsClinicFastConfigForm>
  </div>
</template>
<script>
import DetailsClinicSignUpForm from './Forms/DetailsClinicSignUpForm'
import DetailsClinicFastConfigForm from './Forms/DetailsClinicFastConfigForm'
import auth0 from 'auth0-js'
import constant from '../../../config/constant'

export default {
  name: 'SignUp1',
  components: {
    DetailsClinicSignUpForm,
    DetailsClinicFastConfigForm
  },
  data: () => ({
    initalData: null,
    firstPage: true
  }),
  methods: {
    loginOAuth0 () {
      new auth0.WebAuth(constant.auth0Config).authorize()
    },
    onNext (data) {
      this.initalData = data
      this.firstPage = false
    }
  }
}
</script>
