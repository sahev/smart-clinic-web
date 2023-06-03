<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">{{ $t('settings.unitTab.units.title') }}</h4>
          </template>
          <template v-slot:headerAction>
            <div>
              <input type="text" @keyup="filter" v-model="filteredText" class="form-control filter-field"
                placeholder="Filter Services" />
            </div>
            <b-button v-b-modal="'add-unit-modal'" variant="primary">{{ $t('settings.unitTab.units.addNew') }}</b-button>

          </template>

          <UnitForm @onCreate="onCreate" />

          <template v-slot:body>
            <b-row>
              <b-col v-show="units.length > 0" md="12" class="table-responsive">
                <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                  <form novalidate>

                    <b-table id="dev-table " :items="filteredText.length > 0 ? filteredData : units" :fields="columns"
                      foot-clone>
                      <template v-slot:cell(logo)="data">
                        <img v-if="!data.item.editable" :src="data.item.logo" alt="img-flaf" class="img-fluid mr-1"
                          style="height: 40px; width: 40px;" />
                        <b-form-file v-else type="input" @change="onFileChange($event, data.item)" id="logo"
                          :placeholder="$t('settings.unitTab.units.logoPlaceholder')"></b-form-file>
                      </template>
                      <template v-slot:cell(name)="data">
                        <span v-if="!data.item.editable">{{ data.item.name }}</span>
                        <input type="text" v-model="data.item.name" v-else class="form-control filter-field">
                      </template>
                      <template v-slot:cell(description)="data">
                        <span v-if="!data.item.editable">{{ data.item.description }}</span>
                        <input type="text" v-model="data.item.description" v-else class="form-control filter-field">
                      </template>
                      <template v-slot:cell(alias)="data">
                        <span v-if="!data.item.editable">{{ data.item.alias }}</span>
                        <input type="text" v-model="data.item.alias" v-else class="form-control filter-field">
                      </template>
                      <template v-slot:cell(currency)="data">
                        <ValidationProvider rules="required|min:1|max:3" name="currency" v-slot="{ errors }">
                          <span v-if="!data.item.editable">{{ data.item.currency }}</span>
                          <input type="text" id="currency" v-model="data.item.currency" v-else
                            :class="'form-control filter-field ' + (errors.length > 0 ? ' is-invalid' : '')">
                        </ValidationProvider>
                      </template>
                      <template v-slot:cell(action)="data">
                        <b-button v-if="!data.item.editable" variant=" iq-bg-success mr-1" size="sm"
                          @click="edit(data.item)">
                          <i class="ri-ball-pen-fill m-0"></i>
                        </b-button>
                        <b-button v-else variant=" iq-bg-success mr-1" size="sm" @click="handleSubmit(update(data.item))">
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

                  </form>
                </ValidationObserver>
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
import { xray } from '../../../config/pluginInit'
import clinicsService from '../../../services/clinic'
import UnitForm from './Forms/UnitForm.vue'

export default {
  name: 'UiDataTable',
  props: {
    active: String
  },
  async mounted () {
    xray.index()
    await this.getAllUnits()
  },
  async created () {
  },
  components: {
    UnitForm
  },
  computed: {
    ...mapGetters({
      userState: 'User/userState',
      clinicalUnitsState: 'Clinic/clinicalUnitsState'
    })
  },
  methods: {
    async onFileChange (event, item) {
      const file = event.target.files[0]

      if (!file) {
        this.url = null
        return
      }
      item.logo = await this.getBase64(file)
    },
    async getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
    ...mapActions({
      setClinicalUnitsState: 'Clinic/setClinicalUnitsState'
    }),
    onCreate (unit) {
      this.units.push(this.parseUnit(unit))
      this.setServiceState(this.cloneObject(this.units))
    },
    toggleStatus (id) {
      clinicsService.toggleStatus(id)
      this.setClinicalUnitsState(this.cloneObject(this.units))
    },
    filter () {
      this.filteredData = []

      this.units.map(unit => {
        if (unit.name.includes(this.filteredText) || unit.description.includes(this.filteredText)) {
          this.filteredData.push(unit)
        }
      })
    },
    async getAllUnits () {
      this.units = this.parseListUnits(this.cloneObject(this.clinicalUnitsState))
    },
    edit (item) {
      this.units.map(clinic => {
        clinic.editable = false
      })
      item.editable = true
    },
    async update (item) {
      item.editable = false
      await clinicsService.update(item)
      this.setClinicalUnitsState(this.cloneObject(this.units))
      this.makeSuccessToast("$t('settings.unitTab.messages.changes')")
    },
    async remove (item) {
      let isSuccess = await clinicsService.delete(item.id)
      if (isSuccess) {
        let indexFilteredData = this.filteredData.indexOf(item)
        this.filteredData.splice(indexFilteredData, 1)
        let indexClinics = this.units.indexOf(item)
        this.units.splice(indexClinics, 1)
        this.makeSuccessToast("$t('settings.unitTab.messages.unitDeleted')")
      } else {
        this.makeWarningToast("$t('settings.unitTab.messages.unitIsUse')")
      }
    },
    close (item) {
      item.editable = false
    },
    parseUnit (unit) {
      unit.editable = false
      return unit
    },
    parseListUnits (units) {
      return units.map(unit => this.parseUnit(unit))
    }
  },
  data () {
    return {
      filteredData: [],
      filteredText: '',
      unit: {
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
        { label: this.$t('settings.unitTab.units.logo'), key: 'logo', class: 'text-center' },
        { label: this.$t('settings.unitTab.units.nameClinic'), key: 'name', class: 'text-left', sortable: true },
        { label: this.$t('settings.unitTab.units.description'), key: 'description', class: 'text-left' },
        { label: this.$t('settings.unitTab.units.alias'), key: 'alias', class: 'text-left' },
        { label: this.$t('settings.unitTab.units.currency'), key: 'currency', class: 'text-left' },
        { label: this.$t('settings.unitTab.units.action'), key: 'action', class: 'text-center' },
        { label: this.$t('settings.unitTab.units.active'), key: 'active', class: 'text-center' }
      ],
      units: [],
      category: null
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
