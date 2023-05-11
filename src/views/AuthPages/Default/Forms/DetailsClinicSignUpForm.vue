<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="name" name="Full Name" rules="required|fullName" v-slot="{ errors }">
        <div class="form-group">
          <label for="name">Your Full Name</label>
          <input type="text" v-model="user.fullName" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            id="name" aria-describedby="emailHelp" placeholder="Your Full Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Email" v-slot="{ errors }">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-model="user.email" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            id="email" aria-describedby="emailHelp" placeholder="Enter email" disabled>
        </div>
      </ValidationProvider>
      <ValidationProvider rules="required|caracters" name="basepassword" v-slot="{ errors }">
        <div class="form-group">
          <label for="text">Password</label>
          <input type="password" v-model="basepassword"
            :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="email"
             placeholder="Enter password">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider name="confirm" rules="required|password:@basepassword" v-slot="{ errors }">
        <div class="form-group">
          <label for="text">Confirm Password</label>
          <input type="password" v-model="user.password"
            :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="password"
            placeholder="Enter password" data-vv-as="basepassword">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Clinic alias" rules="required" v-slot="{ errors }">
        <div class="form-group">
          <label for="text">Your Clinic Web Address</label>
          <input type="text" v-model="host" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            id="clinicalias" placeholder="Your Clinic Address" disabled>

        </div>
      </ValidationProvider>
      <div class="d-inline-block w-100">
        <button type="submit" class="btn btn-primary float-right">Next</button>
      </div>
      <div class="sign-info">
        <span class="dark-color d-inline-block line-height-2">
          Already Have Account ?
          <router-link to="/dark/auth/sign-in1" class="iq-waves-effect pr-4" v-if="$route.meta.dark">
            Sign in
          </router-link>
          <router-link to="/auth/sign-in1" class="iq-waves-effect pr-4" v-else>
            Sign in
          </router-link>
        </span>
        <social-login-form></social-login-form>
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
import auth from '../../../../services/auth'
import firebase from 'firebase'
import SocialLoginForm from './SocialLoginForm'
import { mapGetters } from 'vuex'
import UsersService from '../../../../services/user'
import ClinicsService from '../../../../services/clinic'

export default {
  name: 'SignUp1Form',
  components: { SocialLoginForm },
  props: ['formType'],
  computed: {
    ...mapGetters({
      users: 'Setting/usersState'
    })
  },
  data: () => ({
    host: window.location.hostname + (window.location.port !== '' ? ':' + window.location.port : ''),
    basepassword: '',
    user: {
      fullName: '',
      email: '',
      password: '',
      isFirstUser: true
    },
    clinic: {
      alias: ''
    }
  }),
  mounted () {
    this.setDefaultData()
  },
  methods: {
    setDefaultData () {
      let user = this.queryToJson()
      this.user.firstName = user.name
      this.user.email = user.email
      this.user.fullName = user.fullName
      this.clinic.alias = user.alias
    },
    queryToJson () {
      let search = location.search.substring(1)
      return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    },
    async onSubmit () {
      this.separateFullName()
      let clinic = await this.registerClinic(this.clinic)
      console.log(clinic, 'clinic')
      this.user.clinicId = clinic.data.id

      console.log(this.user, 'user')
      let user = await this.registerUser(this.user)
      let registerData = {
        user: user.data,
        clinic: clinic.data
      }

      this.$emit('initalData', { ...registerData })
      // if (this.formType === 'passport') {
      //   this.passportRegister()
      // } else if (this.formType === 'jwt') {
      //   this.jwtRegister()
      // } else if (this.formType === 'firebase') {
      //   this.firebaseRegister()
      // }
    },
    separateFullName () {
      let names = this.user.fullName.split(' ')
      this.user.firstName = names[0]
      names.map((name, idx) => {
        if (idx > 0) {
          this.user.lastName = name
        }
      })
      console.log(this.user.firstName, this.user.lastName, 'nome completo')
    },
    async registerUser (data) {
      delete data.fullName
      return UsersService.createCustomerUser(data)
    },
    registerClinic (data) {
      return ClinicsService.create(data)
    },
    jwtRegister () {
      this.$store.dispatch('Setting/addUserAction', this.user)
      this.$router.replace('/auth/sign-in1')
    },
    passportRegister () {
      auth.register(this.user).then(response => {
        if (response.status) {
          this.$router.push('/auth/sign-in1')
        } else if (response.data.errors.length > 0) {
          this.$refs.form.setErrors(response.data.errors)
        }
      }).finally(() => { this.loading = false })
    },
    firebaseRegister () {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((user) => {
        this.$router.replace('/auth/sign-in1')
        // eslint-disable-next-line handle-callback-err
      }).catch((err) => {
      })
    }
  }
}
</script>
