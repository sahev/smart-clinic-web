<template>
  <iq-card>
    <template v-slot:headerTitle>
      <h4 class="card-title">New Clinical Unit</h4>
    </template>
    <template v-slot:body>
      <div class="new-clinic-info">
        <b-row style="justify-content: center;display: flex ">

          <div>
            <img  v-if="!url" id="preview" :src="clinic.logo != '' ? clinic.logo : require('../../assets/images/logo.png')"
              style="height: 256px; width: 256px; border-radius: 50px;" />
              <img v-else id="preview" :src="url"
              style="height: 256px; width: 256px; border-radius: 50px;" />
          </div>

        </b-row>
        <b-row style="justify-content: center;display: flex ">
          <div class="form-group">

            <label for="logo">Logo</label>
            <b-form-file type="input" @change="onFileChange" id="logo" placeholder="Enter your clinic logo"></b-form-file>
          </div>
        </b-row>
        <b-row>
          <b-form-group class="col-md-6" label="Unit name:" label-for="name">
            <ValidationProvider name="Unit name" rules="required" v-slot="{ errors }">
              <b-form-input v-model="unit.name" type="text" placeholder="Unit Name"
                :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>
          <b-form-group class="col-md-6" label="Alias:" label-for="alias">
            <ValidationProvider name="Unit Alias" rules="required" v-slot="{ errors }">
              <b-form-input v-model="unit.alias" type="text" placeholder="Unit Alias"
                :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>
          <b-form-group class="col-md-6" label="Unit Address:" label-for="add1">
            <b-form-input v-model="unit.address" type="text" name="add1" id="add1"
              placeholder="Unit Address"></b-form-input>
          </b-form-group>
          <b-form-group class="col-md-6" label="City:" label-for="city">
            <b-form-input v-model="unit.city" type="text" name="city" id="city" placeholder="City"></b-form-input>
          </b-form-group>

        </b-row>
        <div>
          <label for="description">Description</label>
          <input type="text" v-model="unit.description" class="form-control mb-0" id="description"
            placeholder="Enter unit description">
        </div>
        <hr>
        <h5 class="mb-3">Contact</h5>
        <b-row>
          <b-form-group class="col-md-6" label="Email:" label-for="uname">
            <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
              <b-form-input v-model="unit.email" type="text" placeholder="Email"
                :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>
          <b-form-group class="col-md-6" label="Mobile Number:" label-for="mobno">
            <ValidationProvider name="Mobile Number" rules="required" v-slot="{ errors }">
              <b-form-input v-model="unit.phone1" type="text" placeholder="Mobile Number"
                :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>
          <b-form-group class="col-md-6" label="Mobile Number:" label-for="mobno">
            <ValidationProvider name="Mobile Number" rules="required" v-slot="{ errors }">
              <b-form-input v-model="unit.phone2" type="text" placeholder="Mobile Number"
                :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
          </b-form-group>
        </b-row>

        <div class="switch-option">
          <label class="mr-5">
            Enable:
          </label>
          <b-form-checkbox v-model="unit.active" switch></b-form-checkbox>
        </div>

        <br>

        <b-button class="mr-2" variant="primary" type="submit">Save</b-button>
        <b-button variant="secondary" type="submit" @click="onBack">Back</b-button>

      </div>
    </template>
  </iq-card>
</template>

<script>
export default {
  name: 'AddUser',
  props: ['clinic'],
  mounted () {
    console.log(this.clinic, 'clinicp rops');
    this.unit = this.cloneObject(this.clinic)
    if (this.unit.logo != '')
      this.url = this.unit.logo
  },
  data () {
    return {
      url: '',
      unit: {},
      defaultUnit: {
        name: '',
        alias: '',
        logo: '',
        currency: '',
        description: ''
      },
      roles: [
        { text: 'Web Designer', value: 'Web Designer' },
        { text: 'Web Developer', value: 'Web Developer' },
        { text: 'Tester', value: 'Tester' },
        { text: 'Php Developer', value: 'Php Developer' },
        { text: 'Ios Developer', value: 'Ios Developer' }
      ],
      countries: [
        { value: 'Canada', text: 'Canada' },
        { value: 'Niada', text: 'Niada' },
        { value: 'USA', text: 'USA' },
        { value: 'India', text: 'India' },
        { value: 'Africa', text: 'Africa' }
      ],
      users: []
    }
  },
  computed: {
    fullName: function () {
      return this.user.fname + ' ' + this.user.lname
    }
  },
  methods: {
    onBack() {
      this.$emit('onBack', false)
    },
    async onFileChange (e) {
      let file = e.target.files[0]

      if (!file) {
        this.url = null
        return
      }

      let fileType = file.type.split('/')[0]
      if (file.size > 2048000) {
        this.makeWarningToast('Insert file with size less than 2mb')
        file = null
        return
      }

      if (fileType !== 'image') {
        this.makeWarningToast('Insert an image')
        file = null
        return
      }

      this.url = URL.createObjectURL(file)
      this.unit.logo = await this.getBase64(file)
    },
    async getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
  }
}
</script>
