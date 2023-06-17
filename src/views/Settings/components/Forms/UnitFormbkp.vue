<template>
  <b-container fluid>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <b-modal id="add-unit-modal" title="Add Unit" hide-footer>
        <form class="mt-4" novalidate>
          <div class="form-group">
            <div id="preview">
              <img v-if="url" :src="url" />
            </div>
            <label for="name">Logo</label>
            <b-form-file type="input" @change="onFileChange" id="name" placeholder="Enter your unit logo"></b-form-file>
          </div>
          <ValidationProvider rules="required|min:5|max:20" vid="unitname" name="Alias" v-slot="{ errors }">
            <div class="form-group">
              <label for="unitname">Unit Name</label>
              <input type="text" v-model="unit.name"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="unitname"
                placeholder="Enter unit name">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider vid="unitalias" name="unit alias" rules="required|min:2|max:10" v-slot="{ errors }">
            <div class="form-group">
              <label for="text">Unit Alias
              </label>
              <input type="text" v-model="unit.alias"
                :class="'controllllll form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="unitalias"
                placeholder="Your Unit Alias">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>

          <ValidationProvider rules="required|min:1|max:3" name="currency" v-slot="{ errors }">
            <div class="form-group">
              <label for="currency">Currency</label>
              <input type="text" v-model="unit.currency"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="currency"
                placeholder="Enter currency (R$, $)">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>

            <div class="form-group">
              <label for="description">Description</label>
              <input type="text" v-model="unit.description"
                class="form-control mb-0" id="description"
                placeholder="Enter unit description">
            </div>
          <hr class="solid">
          <b-button class="float-right" variant="primary" @click="handleSubmit(register)">Register</b-button>
        </form>
      </b-modal>
    </ValidationObserver>

  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import clinicsService from '../../../../services/clinic'

export default {
  name: 'ServiceForm',
  props: {
    categories: []
  },
  async mounted () {
  },
  async created () {
  },
  components: {
  },
  computed: {
    ...mapGetters({
      clinicState: 'Clinic/clinicState'
    })
  },
  methods: {
    async register () {
      try {
        this.unit.headQuarterId = this.clinicState.id
        let { data } = await clinicsService.create(this.unit)
        this.$emit('onCreate', data)
        this.unit = this.defaultUnit
        this.makeSuccessToast('Service registered')
        this.closeModal('add-unit-modal')
      } catch (ex) {
        console.log(ex, 'err')
        this.makeErrorToast('Service already exists')
      }
    },
    async onFileChange (e) {
      const file = e.target.files[0]

      if (!file) {
        this.url = null
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
    setImage (img) {
      if (img) {
        this.unit.logo = img
      }
    }
  },
  data () {
    return {
      url: '',
      unit: {
        name: '',
        alias: '',
        logo: '',
        currency: '',
        description: ''
      },
      defaultUnit: {
        name: '',
        alias: '',
        logo: '',
        currency: '',
        description: ''
      }
    }
  }
}
</script>
<style scoped>
.filter-field {
  height: 35px !important;
  margin-left: -10px !important;
  width: 100px;
}
</style>
