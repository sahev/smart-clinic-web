<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Staffs</h4>
          </template>
          <template v-slot:headerAction>
            <div>
              <input type="text" @keyup="filter" v-model="filteredText" class="form-control filter-field"
                placeholder="Filter Staffs" />
            </div>
            <b-button v-b-modal="'add-staff-modal'" variant="primary">Add New</b-button>
          </template>

          <StaffForm @onCreate="onCreate" />

          <template v-slot:body>
            <b-row>
              <b-col v-show="staffs.length > 0" md="12" class="table-responsive">
                <b-table id="dev-table " :items="filteredText.length > 0 ? filteredData : staffs" :fields="columns"
                  foot-clone>
                  <template v-slot:cell(fullName)="data">
                    <span v-if="!data.item.editable">{{ data.item.fullName }}</span>
                    <input type="text" v-model="data.item.fullName" v-else class="form-control filter-field">
                  </template>
                  <template v-slot:cell(email)="data">
                    <span>{{ data.item.email }}</span>
                  </template>
                  <template v-slot:cell(createdAt)="data">
                    <span>{{ data.item.createdAt }}</span>
                  </template>
                  <template v-slot:cell(role)="data">
                    <b-select v-if="data.item.editable && data.item.role !== 'admin'" plain v-model="data.item.role"
                      :options="roleOptions">
                    </b-select>
                    <span v-else>{{ data.item.role }}</span>
                  </template>
                  <template v-slot:cell(headQuarterName)="data">
                    <b-select v-if="data.item.editable" plain v-model="data.item.headQuarterName"
                      :options="getClinicOptions()">
                    </b-select>
                    <span v-else>{{ data.item.headQuarterName }}</span>
                  </template>
                  <template v-slot:cell(performService)="data">
                    <b-form-checkbox v-if="!(data.item.role === 'receptionist' || data.item.role === 'customer')" v-model="data.item.performService" name="check-button" switch
                      @input="togglePerformServiceStatus(data.item.id)">
                    </b-form-checkbox>
                  </template>
                  <template v-slot:cell(active)="data">
                    <b-form-checkbox v-model="data.item.active" name="check-button" switch
                      @input="toggleActiveStatus(data.item.id)">
                    </b-form-checkbox>
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button variant=" iq-bg-success mr-1" size="sm" @click="edit(data.item)" v-if="!data.item.editable">
                      <i class="ri-ball-pen-fill m-0"></i>
                    </b-button>
                    <b-button variant=" iq-bg-success mr-1" size="sm" @click="update(data.item)" v-else>
                      <i class="ri-save-line m-0"></i>
                    </b-button>
                    <b-button v-if="!data.item.editable && data.item.role !== 'admin'" size="sm" variant=" iq-bg-danger"
                      @click="remove(data.item)">
                      <i class="ri-delete-bin-line m-0"></i>
                    </b-button>
                    <b-button v-else-if="data.item.editable" variant=" iq-bg-danger mr-1" size="sm"
                      @click="close(data.item)">
                      <i class="ri-close-line m-0"></i>
                    </b-button>
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
import { xray } from '../../../config/pluginInit'
import { Roles } from '../../../Model/Roles'
import usersService from '../../../services/user'
import StaffForm from './Forms/StaffForm.vue'

export default {
  name: 'UiDataTable',
  props: {
    active: String
  },
  watch: {
    active (newVal) {
      if (newVal === 'Staffs') {
        this.init()
      }
    }
  },
  async mounted () {
    xray.index()
    this.setAppRoles()
    await this.init()
  },
  async created () {
  },
  components: {
    StaffForm
  },
  computed: {
    ...mapGetters({
      clinicState: 'Clinic/clinicState',
      clinicalUnitsState: 'Clinic/clinicalUnitsState',
      userState: 'User/userState'
    })
  },
  methods: {
    ...mapActions({
      setUserState: 'User/setUserState'
    }),
    async init () {
      await this.getAllStaffs()
    },
    getClinicOptions () {
      let actives = this.clinicalUnitsState.filter(clinic => clinic.active)
      let opt = actives.map(clinic => clinic.name)
      opt.push(this.clinicState.name)
      return opt
    },
    toggleActiveStatus (id) {
      usersService.toggleActiveStatus(id)
    },
    togglePerformServiceStatus (id) {
      usersService.togglePerformServiceStatus(id)
    },
    filter () {
      this.filteredData = []

      this.staffs.map(staff => {
        if (staff.fullName.includes(this.filteredText) || staff.email.includes(this.filteredText)) {
          this.filteredData.push(staff)
        }
      })
    },
    onCreate (staff) {
      this.staffs.push(this.parseStaff(staff))
    },
    setAppRoles () {
      if (!this.userState.role.includes('super')) {
        this.roleOptions = Roles.slice(1)
      } else {
        this.roleOptions = Roles
      }
    },
    closeModal (id) {
      this.$root.$emit('bv::hide::modal', id)
    },
    async getAllStaffs () {
      let { data } = await usersService.getAllByHeadQuarterId(this.clinicState.id)
      this.staffs = this.parseListStaffs(data)
    },
    edit (item) {
      this.staffs.map(staff => {
        staff.editable = false
      })
      item.editable = true
    },
    setStaffClinicalUnitId (item) {
      let clinicalUnits = this.cloneObject(this.clinicalUnitsState)
      clinicalUnits.push(this.clinicState)

      clinicalUnits.map(unit => {
        if (unit.name === item.headQuarterName) {
          item.clinicId = unit.id
          item.headQuarterId = this.clinicState.id
        }
      })
    },
    async update (item) {
      item.editable = false
      this.parseFullName(item)
      this.setStaffClinicalUnitId(item)
      console.log(item)
      await usersService.update(item)
      this.makeSuccessToast('Staff updated')
    },
    remove (item) {
      let indexFilteredData = this.filteredData.indexOf(item)
      this.filteredData.splice(indexFilteredData, 1)

      let indexStaffs = this.staffs.indexOf(item)
      this.staffs.splice(indexStaffs, 1)
      usersService.deleteById(item.id)
      this.makeSuccessToast('Staff deleted')
    },
    close (item) {
      item.editable = false
    },
    parseFullName (item) {
      if (item.fullName) {
        let names = item.fullName.split(' ')
        item.firstName = names[0]
        names.shift()
        item.lastName = names.join(' ')
      } else {
        item.fullName = item.firstName + ' ' + item.lastName
      }
    },
    parseStaff (staff) {
      staff.fullName = staff.firstName + ' ' + staff.lastName
      staff.editable = false
      let clinicalUnits = this.cloneObject(this.clinicalUnitsState)
      clinicalUnits.push(this.clinicState)

      let headQuarter = clinicalUnits.filter(unit => unit.id === staff.clinicId)

      staff.headQuarterName = headQuarter[0].name

      return staff
    },
    parseListStaffs (staffs) {
      return staffs.map(staff => this.parseStaff(staff))
    }
  },
  data () {
    return {
      clinicalUnitsSelected: null,
      filteredData: [],
      filteredText: '',
      roleOptions: null,
      basepassword: '',
      staff: {
        fullName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        clinicId: null,
        isFirstUser: false
      },
      defaultStaff: {
        fullName: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
        clinicId: null,
        isFirstUser: false
      },
      columns: [
        { label: 'Name', key: 'fullName', class: 'text-left', sortable: true },
        { label: 'Email', key: 'email', class: 'text-left' },
        { label: 'CreatedAt', key: 'createdAt', class: 'text-left' },
        { label: 'Role', key: 'role', class: 'text-left' },
        { label: 'Clinial Unit', key: 'headQuarterName', class: 'text-center' },
        { label: 'Performs Service', key: 'performService', class: 'text-center' },
        { label: 'Active', key: 'active', class: 'text-center' },
        { label: 'Action', key: 'action', class: 'text-center' }
      ],
      staffs: []
    }
  }
}
</script>
<style scoped>
</style>
