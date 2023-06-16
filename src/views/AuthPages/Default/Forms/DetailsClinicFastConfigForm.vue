<template>
  <ValidationObserver ref="form" v-slot="{ handleSubmit }">
    <form class="mt-4" novalidate @submit.prevent="handleSubmit(onSubmit)">
      <div class="form-group">
        <div id="preview">
          <img v-if="url" :src="url" />
        </div>
        <label for="name">Logo</label>
        <b-form-file type="input" @change="onFileChange" id="name" placeholder="Enter your clinic logo"></b-form-file>

      </div>
      <ValidationProvider rules="required" vid="name" name="Email" v-slot="{ errors }">
        <div class="form-group">
          <label for="clinicname">Clinic Name</label>
          <input type="text" v-model="clinic.name" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')"
            id="clinicname" placeholder="Enter clinic name">
        </div>
      </ValidationProvider>
      <ValidationProvider rules="required" name="currency" v-slot="{ errors }">
        <div class="form-group">
          <label for="currency">Currency</label>
          <input type="text" v-model="clinic.currency"
            :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="currency"
            placeholder="Enter currency">
          <div class="invalid-feedback">
            <span>{{ errors[0] }}</span>
          </div>
        </div>
      </ValidationProvider>
      <div class="form-group">
        <label for="text">Your Clinic Alias</label>
        <input type="text" v-model="clinic.alias" class="form-control mb-0" id="clinicalias" placeholder="Enter Your Clinic Alias">
      </div>
      <div class="d-inline-block w-100">
        <button type="submit" class="btn btn-primary float-right">Start</button>
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
import SocialLoginForm from './SocialLoginForm'
import { mapGetters } from 'vuex'
import ClinicsService from '../../../../services/clinic'

export default {
  name: 'SignUp1Form',
  components: { SocialLoginForm },
  props: ['initalData'],
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
      email: ''
    },
    clinic: {
      name: '',
      alias: '',
      logo: '',
      currency: ''
    },
    url: null
  }),
  mounted () {
    console.log(this.initalData, 'initalData')
    this.setDefaultData()
  },
  methods: {
    async onFileChange (e) {
      const file = e.target.files[0]

      if (!file) {
        this.url = null
        return
      }
      this.url = URL.createObjectURL(file)
      this.clinic.logo = await this.getBase64(file)
    },
    async getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
    setImage (img) {
      if (img) {
        this.clinic.logo = img
      }
    },
    setDefaultData () {
      let subdomain = location.hostname.split('.')[0]
      this.clinic.alias = subdomain
      this.clinic.id = this.initalData.clinic.id
    },
    queryToJson () {
      let search = location.search.substring(1)
      return JSON.parse('{"' + decodeURIComponent(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    },
    async onSubmit () {
      console.log(this.clinic, 'save')
      await this.updateClinic(this.clinic)
      this.$router.push('sign-in1')
    },
    async updateClinic (data) {
      let clinic = await ClinicsService.update(data)
      console.log(clinic, 'atualizado')
    }
  }
}
</script>
<style scoped>
#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  max-width: 100%;
  max-height: 200px;
}
</style>
