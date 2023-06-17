<template>
  <b-container fluid>
    <iq-card>
      <template v-slot:headerTitle>
        <h4 class="card-title ">Clinic Settings</h4>
      </template>

      <template v-slot:headerAction>
        <div>
          <input type="text" @keyup="filter" class="form-control filter-field" v-model="filteredText"
            placeholder="Filter Clinics" />
        </div>
        <b-button v-b-modal="'add-unit-modal'" variant="primary" v-b-tooltip.hover
          title="User logged must be headquarter clinic" :disabled="isHeadQuarterClinic">Add New</b-button>
      </template>

      <template v-slot:body>
        <iq-card>
          <b-card v-for="clinic in (filteredText.length > 0 ? filteredData : units)" :key="clinic.id"
            :class="`card-list mb-2 shadow-sm border-5 border-left border-status-${clinic.active ? 'active' : 'disabled'}`"
            @click="onClick(clinic.id)">
            <b-card-title class="float">
              {{ clinic.alias }} <small class="text-muted">| {{ clinic.name }}</small>
            </b-card-title>

            <b-card-text>
              {{ clinic.description }}
            </b-card-text>
          </b-card>

        </iq-card>
        <b-card-text class="text-center" v-if="notFound">
          Clinic not found
        </b-card-text>
      </template>


    </iq-card>
    <!-- <ClinicSettings v-if="clinicSettingsActive" @onBack="clinicSettingsActive = !clinicSettingsActive" :clinic="selectedClinic" /> -->
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
// import Units from './components/Units.vue'
import UnitForm from './components/Forms/UnitForm.vue'
import Services from './components/Services.vue'
import Staffs from './components/Staffs.vue'
import Categories from './components/Categories.vue'
import servicesTypeService from '../../services/serviceTypes'
import categoryServices from '../../services/category'
import clinicServices from '../../services/clinic'
import ClinicSettings from './ClinicSettings.vue'

export default {
  name: 'SettingsPage',
  components: {
    UnitForm,
    ClinicSettings
  },
  data () {
    return {
      activePage: 'Unit',
      active: false,
      activeClinics: true,
      activeServices: false,
      activeCategories: false,
      units: [],
      filteredText: '',
      filteredData: [],
      notFound: false,
      selectedClinic: {},
      clinicSettingsActive: false
    }
  },
  async mounted () {
    await this.init()
  },
  firestore () {
    return {
    }
  },
  computed: {
    isHeadQuarterClinic () {
      return this.clinicState.headQuarterId > 0
    },
    ...mapGetters({
      clinicState: 'Clinic/clinicState'
    })
  },
  methods: {
    ...mapActions({
      setCategoryState: 'Category/setCategoryState',
      setServiceState: 'Service/setServiceState'
    }),
    onClick (id) {
      // this.clinicSettingsActive = true
      // this.selectedClinic = clinic
      this.$router.push(`clinic/${id}`)
    },
    async init () {
      await this.getAllClinics()
      await this.getAllCategories()
      await this.getAllServices()
    },
    onCreate (unit) {
      this.units.push(unit)
    },
    async getAllCategories () {
      let { data } = await categoryServices.getAll()
      this.setCategoryState(data)
    },
    async getAllServices () {
      let { data } = await servicesTypeService.getAll()
      this.setServiceState(data)
    },
    async getAllClinics () {
      let { data } = await clinicServices.getAll()
      this.units = data;
    },
    filter () {
      this.filteredData = []

      this.units.map(unit => {
        if (unit.name.includes(this.filteredText) || unit.alias.includes(this.filteredText)) {
          this.filteredData.push(unit)
          this.notFound = false
        } else {
          this.notFound = true
        }
      })
    },
  }
}
</script>
<style scoped></style>
