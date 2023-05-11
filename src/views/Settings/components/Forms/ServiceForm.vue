<template>
  <b-container fluid>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <b-modal id="add-service-modal" title="Add Service" hide-footer>

        <form class="mt-4" novalidate>
          <ValidationProvider vid="name" name="Service name" rules="required" v-slot="{ errors }">
            <div class="form-group">
              <label for="service">Service</label>
              <input type="text" v-model="service.name"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="service"
                aria-describedby="service" placeholder="Service name">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider vid="service-category" name="Service category" rules="required" v-slot="{ errors }">
            <div class="form-group ">
              <label for="service-category">Service category</label>

              <b-form-select plain v-model="service.categoryName" :options="getCategoriesOptions()" class="mb-3">
              </b-form-select>

              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider vid="service-price" name="Service price" rules="required|amount" v-slot="{ errors }">
            <div class="form-group ">
              <label for="service-price">Service price</label>
              <input type="text" v-model="service.price"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="service-price"
                aria-describedby="service" placeholder="Service price">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <div class="form-group ">
            <label for="service-description">Service Description</label>
            <b-form-textarea type="service" v-model="service.description" placeholder="Enter service description"
              rows="5"></b-form-textarea>
          </div>
        </form>
        <hr class="solid">
        <b-button class="float-right" variant="primary" @click="handleSubmit(register)">Register</b-button>
      </b-modal>
    </ValidationObserver>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import servicesTypeService from '../../../../services/serviceTypes'

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
        this.service.clinicId = this.clinicState.id
        this.getCategoryId(this.service)
        let { data } = await servicesTypeService.create(this.service)
        this.$emit('onCreate', this.parseServiceType(data))
        this.service = this.defaultService
        this.makeSuccessToast('Service registered')
        this.closeModal('add-service-modal')
      } catch {
        this.makeErrorToast('Service already exists')
      }
    },
    getCategoriesOptions () {
      let options = this.categories.map(categ => categ.name)
      return options
    },
    parseServiceType (service) {
      service.editable = false
      service.categoryName = service.category.name
      return service
    },
    getCategoryId (item) {
      this.categories.map(categ => {
        if (categ.name === item.categoryName) {
          item.categoryId = categ.id
        }
      })
    }
  },
  data () {
    return {
      service: {
        name: '',
        description: '',
        clinicId: null
      },
      defaultService: {
        name: '',
        description: ''
      }
    }
  }
}
</script>
<style>
.filter-field {
  height: 35px !important;
  margin-left: -10px !important;
  width: 100px;
}
</style>
