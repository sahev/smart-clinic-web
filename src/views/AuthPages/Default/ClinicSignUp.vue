<template>
  <div>
    <h1 class="mb-0">Sign Up</h1>
    <p>Enter your email address and password to access admin panel.</p>
    <ClinicSignUpForm />
  </div>
</template>
<script>

import ClinicSignUpForm from './Forms/ClinicSignUpForm'
import auth0 from 'auth0-js'
import constant from '../../../config/constant'

export default {
  name: 'SignUp1',
  components: { ClinicSignUpForm },
  data: () => ({}),
  methods: {
    loginOAuth0 () {
      new auth0.WebAuth(constant.auth0Config).authorize()
    }
  }
}
</script>
