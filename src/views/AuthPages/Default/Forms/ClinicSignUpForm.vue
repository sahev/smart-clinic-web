<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" @submit.prevent="handleSubmit(onSubmit)">
      <ValidationProvider vid="name" name="Full Name" rules="required|fullName" v-slot="{ errors }">
        <div class="form-group">
          <label for="name">Your Full Name</label>
          <input type="text" v-model="user.name" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            id="name" aria-describedby="emailHelp" placeholder="Your Full Name">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="Email" rules="required|email|userEmailAvailable" v-slot="{ errors }">
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" v-model="user.email" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            id="email" aria-describedby="emailHelp" placeholder="Enter email">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <ValidationProvider vid="name" name="clinic alias" rules="required|maxcaracters" v-slot="{ errors }">
        <div class="form-group">
          <label for="text">Alias to Access Clinic
          </label>

          <input type="text" v-model="clinicAlias"
            :class="'controllllll form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="clinicalias"
            placeholder="Your Clinic Alias">
          <!-- <span for="clinicalias" v-show="host">{{ host }}

          </span> -->

          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
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
        <!-- <social-login-form></social-login-form> -->
      </div>
    </form>
  </ValidationObserver>
</template>

<script>
// import SocialLoginForm from './SocialLoginForm'
import { mapGetters } from 'vuex'
import clinicsService from '../../../../services/clinic'

export default {
  name: 'SignUp1Form',
  // components: { SocialLoginForm },
  computed: {
    ...mapGetters({
      users: 'Setting/usersState'
    })
  },
  data: () => ({
    host: window.location.hostname + (window.location.port !== '' ? ':' + window.location.port : ''),
    protocol: window.location.protocol,
    clinicAlias: '',
    user: {
      name: '',
      email: ''
    },
    isValid: null
  }),
  mounted () {
    console.log(window.location)
  },
  methods: {
    onSubmit () {
      let path = '/auth/details-clinic-sign-up'
      let query = `?fullName=${this.user.name}&email=${this.user.email}&alias=${this.clinicAlias}`
      let hostWithSubDomain = this.protocol + '//' + this.host + path + query
      window.location.href = hostWithSubDomain
    },
    async find () {
      let e = await clinicsService.findByAlias(this.clinicAlias)
      if (e.status === 200) {
        this.isValid = true
      } else {
        this.isValid = false
      }
    }
  }
}
</script>
<style></style>
