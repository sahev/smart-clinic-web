<template>
  <b-container fluid>
    <h5 class="mb-3">Basic Information</h5>

    <div class="new-clinic-info">
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

      <div class="checkbox-label">
        <label class="mr-5">
          Enable:
        </label>
        <b-form-checkbox v-model="unit.active" switch></b-form-checkbox>
      </div>
    </div>

    <hr>
    <h5 class="mb-3">Logo & Theme Colors</h5>

    <div class="float mb-3">
      <img v-if="!url" id="preview" :src="unit.logo != '' ? unit.logo : require('../../../assets/images/logo.png')"
        style="height: 256px; width: 256px; border-radius: 50px;" />
      <img v-else id="preview" :src="url" style="height: 256px; width: 256px; border-radius: 50px;" />
    </div>

    <div class="checkbox-label mb-3">

      <label class="mr-5" for="logo">Logo:</label>
      <b-form-file type="input" @change="onFileChange" id="logo" placeholder="Enter your clinic logo"
        style="width: 256px;"></b-form-file>
    </div>

    <b-row>
      <b-col sm="2">

        <div class="mb-3">
          <label class="mr-5">
            Primary:
          </label>
          <b-form-input type="color" v-model="primaryColor" style="width: 100px; height: 50px;"></b-form-input>
        </div>
      </b-col>

    <div class="mb-3">
      <label class="mr-5">
        Background:
      </label>
      <b-form-input type="color" v-model="bgColor" style="width: 100px; height: 50px;"></b-form-input>
    </div>
    </b-row>

    <div class="checkbox-label mb-3">
      <label class="mr-5">
        Default Pallet:
      </label>
      <b-button class="mr-2" v-for="(col, i) in colors" :key="i" @click="changeColor(col)"
        :style="`background: ${col.primary} !important; width: 30px;`"></b-button>
      <b-button class="mr-2" @click="resetColor()" variant="primary">Reset</b-button>
    </div>

    <br>

    <b-button class="mr-2" variant="primary" @click="onSave">Save</b-button>
    <b-button variant="secondary" type="submit" @click="onBack">Back</b-button>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import clinicServices from '../../../services/clinic'

export default {
  name: 'ServiceForm',
  async mounted () {
    console.log(this.colors, 'clinicp rops');
  },
  async created () {
    await this.getClinic()

    if (this.unit.logo != '')
      this.url = this.unit.logo
  },
  components: {
  },
  computed: {
    ...mapGetters({
      clinicState: 'Clinic/clinicState',

      colors: 'Setting/colorState',
      primaryColorState: 'Setting/primaryColor'
    })
  },
  watch: {
    primaryColor (newv) {
      this.color.primary = newv
      this.changeColor(this.color)
    },
    bgColor (newv) {
      this.color.bodyBgLight = newv
      this.changeColor(this.color)
    }
  },
  data () {
    return {
      url: '',
      unit: {},
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
      color: {
        primary: '#0db5c8',
        bodyBgLight: '#eff7f8'
      },
      primaryColor: '#0db5c8',
      bgColor: '#eff7f8'
    }
  },
  methods: {
    ...mapActions({
      setPrimaryColor: 'Setting/setPrimaryColor'
    }),
    async getClinic () {
      let id = this.$route.path.split('/')[3]
      let { data } = await clinicServices.getById(id)
      this.unit = data
    },
    onClick (e) {
      this.activePage = e.target.innerHTML
    },
    onSave () {
      console.log(this.color, 'save');
      this.setPrimaryColor(this.color)
    },
    onBack () {
      this.$router.back()
      console.log(this.primaryColorState, 'cback');
      this.changeColor(this.primaryColorState)
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
    changeColor (color) {
      document.documentElement.style.setProperty('--iq-primary', color.primary)
      document.documentElement.style.setProperty('--iq-bg-light-color', color.bodyBgLight)

      document.documentElement.style.setProperty('--iq-primary-dark', this.luminance(color.primary, -0.6))
      document.documentElement.style.setProperty('--iq-bg-dark-color', this.luminance(color.bodyBgLight, -0.6))

      this.color = color
    },
    resetColor () {
      this.changeColor(this.colors[0])
    },
    luminance (hex, luminosity = 0) {
      hex = hex.replace(/[^0-9a-f]/gi, '')
      const isValidHex = hex.length === 6 || hex.length === 3

      if (!isValidHex) throw new Error("Invalid HEX")

      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
      }

      const black = 0
      const white = 255
      const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi)
      let newHex = "#"

      for (let twoDigit of twoDigitGroup) {
        const numberFromHex = parseInt(twoDigit, 16)
        const calculateLuminosity = numberFromHex + (luminosity * 255)
        const blackOrLuminosity = Math.max(black, calculateLuminosity)
        const partialColor = Math.min(white, blackOrLuminosity)
        const newColor = Math.round(partialColor)
        const numberToHex = newColor.toString(16)
        const finalHex = `0${numberToHex}`.slice(-2)

        newHex = newHex + finalHex
      }

      return newHex
    },
  },

}
</script>
<style scoped>
.filter-field {
  height: 35px !important;
  margin-left: -10px !important;
  width: 100px;
}
</style>
