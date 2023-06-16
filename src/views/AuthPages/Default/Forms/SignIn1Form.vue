<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="email" name="E-mail" rules="required|email" v-slot="{ errors }">
        <div class="form-group ">
          <label for="emailInput">Email address</label>
          <input type="email" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="emailInput"
            aria-describedby="emailHelp" v-model="user.email" placeholder="Enter email" required>
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="password" name="Password" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <router-link to="/auth/password-reset1" class="float-right">
            Forgot password?
          </router-link>
          <input type="password" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="passwordInput"
            v-model="user.password" placeholder="Password" required>
          <div class="invalid-feedback">
            <span id="crederror">{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <div class="custom-control custom-checkbox d-inline-block mt-2 pt-1">
          <input type="checkbox" class="custom-control-input" :id="formType">
          <label class="custom-control-label" :for="formType">Remember Me</label>
        </div>

        <button type="submit" class="btn btn-primary float-right">
          {{ spinner ? '' : 'Sign in' }}
          <b-spinner v-if="spinner" small class="" label="loading"></b-spinner>
        </button>

      </div>
      <div class="sign-info">
        <span class="dark-color d-inline-block line-height-2">
          Don't have an account?
          <router-link to="/dark/auth/clinic-sign-up" class="iq-waves-effect pr-4" v-if="$route.meta.dark">
            Sign up
          </router-link>
          <router-link to="/auth/clinic-sign-up" class="iq-waves-effect pr-4" v-else>
            Sign up
          </router-link>
        </span>
        <!-- <social-login-form></social-login-form> -->
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
// import SocialLoginForm from './SocialLoginForm'
import { mapActions, mapGetters } from 'vuex'
import auth from '../../../../services/auth'
import users from '../../../../services/user'
import clinics from '../../../../services/clinic'
import parse from '../../../../Utils/parse'

export default {
  name: 'SignIn1Form',
  // components: { SocialLoginForm },
  props: ['formType', 'email', 'password'],
  data: () => ({
    user: {
      email: '',
      password: ''
    },
    host: window.location.hostname + (window.location.port !== '' ? ':' + window.location.port : ''),
    protocol: window.location.protocol,
    spinner: false
  }),
  mounted () {
  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState',
      userState: 'User/userState',
      accessToken: 'Auth/authToken'
    })
  },
  methods: {
    ...mapActions({
      setLoggedIn: 'Auth/setToken',
      setUserState: 'User/setUserState',
      setClinicState: 'Clinic/setClinicState',
      setClinicalUnitsState: 'Clinic/setClinicalUnitsState'
    }),
    async onSubmit () {
      await this.login()
    },
    async login () {
      this.spinner = true
      let token = await auth.login(this.user)
      console.log(token)
      if (token) {
        this.setLoggedIn(token.data.accessToken)
        let { id, clinicId } = parse.jwtToObject(token.data.accessToken)

        let user = await users.getById(id)
        let clinic = await clinics.getById(clinicId)

        this.setUserState(user.data)
        this.setClinicState(clinic.data)
        this.setClinicalUnitsState(clinic.data.clinicalUnits)
        // console.log(window.location.host, 'host', this.userState, clinic.data)
        // this.$cookies.set('token', token.data.accessToken, null, false, 'localhost', 'None')
        // let hostWithSubDomain = this.protocol + '//' + clinic.data.alias + '.' + this.host
        // window.location.href = hostWithSubDomain
        this.$router.push({ name: 'dashboard.home-1' })
      } else {
        document.getElementById('emailInput').className += ' is-invalid'
        document.getElementById('passwordInput').className += ' is-invalid'
        document.getElementById('crederror').innerHTML = ' Invalid Credentials'
        this.spinner = false
      }
    }
  }
}
</script>
