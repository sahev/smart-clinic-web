<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Services</h4>
          </template>
          <template v-slot:headerAction>
            <div>
              <input type="text" @keyup="filter" v-model="filteredText" class="form-control filter-field"
                placeholder="Filter Services" />
            </div>
            <b-button v-b-modal="'add-service-modal'" variant="primary">Add New</b-button>

          </template>

          <ServiceForm :categories="categories" @onCreate="onCreate" />

          <template v-slot:body>
            <b-row>
              <b-col v-show="services.length > 0" md="12" class="table-responsive">
                <b-table id="dev-table " :items="filteredText.length > 0 ? filteredData : services" :fields="columns"
                  foot-clone>
                  <template v-slot:cell(name)="data">
                    <span v-if="!data.item.editable">{{ data.item.name }}</span>
                    <input type="text" v-model="data.item.name" v-else class="form-control filter-field">
                  </template>
                  <template v-slot:cell(description)="data">
                    <span v-if="!data.item.editable">{{ data.item.description }}</span>
                    <input type="text" v-model="data.item.description" v-else class="form-control filter-field">
                  </template>
                  <template v-slot:cell(category)="data">
                    <b-select v-if="data.item.editable" plain v-model="data.item.category.name"
                      :options="getCategoriesOptions()">
                    </b-select>
                    <span v-else :value="null" disabled>{{ getCategoryName(data.item) }}</span>
                  </template>
                  <template v-slot:cell(price)="data">
                    <input v-if="data.item.editable" type="text" v-model="data.item.price"
                      class="form-control filter-field">
                    <span v-else :value="null" disabled>{{ data.item.price }}</span>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button v-if="!data.item.editable" variant=" iq-bg-success mr-1" size="sm" @click="edit(data.item)">
                      <i class="ri-ball-pen-fill m-0"></i>
                    </b-button>
                    <b-button v-else variant=" iq-bg-success mr-1" size="sm" @click="update(data.item)">
                      <i class="ri-save-line m-0"></i>
                    </b-button>
                    <b-button v-if="!data.item.editable" size="sm" variant=" iq-bg-danger" @click="remove(data.item)">
                      <i class="ri-delete-bin-line m-0"></i>
                    </b-button>
                    <b-button v-else variant=" iq-bg-danger mr-1" size="sm" @click="close(data.item)">
                      <i class="ri-close-line m-0"></i>
                    </b-button>
                  </template>
                  <template v-slot:cell(active)="data">

                    <b-form-checkbox v-model="data.item.active" name="check-button" switch
                      @input="toggleStatus(data.item.id)">

                    </b-form-checkbox>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import servicesTypeService from '../../../services/serviceTypes'
import ServiceForm from './Forms/ServiceForm.vue'

export default {
  name: 'UiDataTable',
  props: {
    active: String
  },
  watch: {
    active (newVal) {
      if (newVal === 'Services') {
        this.init()
      }
    }
  },
  async mounted () {
  },
  async created () {
  },
  components: {
    ServiceForm
  },
  computed: {
    ...mapGetters({
      clinicState: 'Clinic/clinicState',
      categoryState: 'Category/categoryState',
      serviceState: 'Service/serviceState'
    })
  },
  methods: {
    getCategoryName (data) {
      let category = this.categories.filter(categ => categ.id === data.categoryId)
      return category[0].name
    },
    ...mapActions({
      setServiceState: 'Service/setServiceState'
    }),
    init () {
      this.getAllServices()
      this.getAllCategories()
    },
    toggleStatus (id) {
      servicesTypeService.toggleStatus(id)
      this.setServiceState(this.cloneObject(this.services))
    },
    getCategoriesOptions () {
      let options = this.categories.map(categ => categ.name)
      return options
    },
    filter () {
      this.filteredData = []

      this.services.map(service => {
        if (service.name.includes(this.filteredText) || service.description.includes(this.filteredText)) {
          this.filteredData.push(service)
        }
      })
    },
    onCreate (service) {
      this.services.push(this.parseServiceType(service))
      this.setServiceState(this.cloneObject(this.services))
    },
    async getAllServices () {
      let services = this.cloneObject(this.serviceState)
      this.services = this.parseListServicesType(services)
    },
    async getAllCategories () {
      this.categories = this.cloneObject(this.categoryState)
    },
    edit (item) {
      this.services.map(service => {
        service.editable = false
      })
      item.editable = true
      let categname = this.categoryState.filter(categ => categ.id === item.category.id)
      item.category.name = categname[0].name
    },
    async update (item) {
      item.editable = false
      this.getCategoryId(item)
      await servicesTypeService.update(item)
      this.setServiceState(this.services)
      this.init()
      this.makeSuccessToast('Changes made')
    },
    getCategoryId (item) {
      this.categories.map(categ => {
        if (categ.name === item.category.name) {
          item.categoryId = categ.id
        }
      })
    },
    async remove (item) {
      let { data } = await servicesTypeService.deleteById(item.id)
      if (data) {
        let indexFilteredData = this.filteredData.indexOf(item)
        this.filteredData.splice(indexFilteredData, 1)

        let indexCategories = this.services.indexOf(item)
        this.services.splice(indexCategories, 1)
        this.setServiceState(this.services)
        this.makeSuccessToast('Service deleted')
        return
      }
      this.makeWarningToast('This service is in use')
    },
    close (item) {
      item.editable = false
    },
    parseServiceType (service) {
      service.editable = false
      console.log(service)
      return service
    },
    parseListServicesType (services) {
      return services.map(service => this.parseServiceType(service))
    }
  },
  data () {
    return {
      filteredData: [],
      filteredText: '',
      service: {
        name: '',
        description: '',
        category: {},
        price: ''
      },
      defaultService: {
        name: '',
        description: '',
        category: '',
        price: ''
      },
      columns: [
        { label: 'Name', key: 'name', class: 'text-left', sortable: true },
        { label: 'Description', key: 'description', class: 'text-left' },
        { label: 'Category', key: 'category', class: 'text-left' },
        { label: 'Price', key: 'price', class: 'text-left' },
        { label: 'Action', key: 'action', class: 'text-center' },
        { label: 'Active', key: 'active', class: 'text-center' }
      ],
      categories: [],
      category: null,
      services: []
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
