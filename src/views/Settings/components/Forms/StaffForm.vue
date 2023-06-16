<template>
  <b-container fluid>
    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <b-modal id="add-staff-modal" title="Add Staff" hide-footer>
        <form class="mt-4" novalidate>
          <ValidationProvider vid="name" name="Full Name" rules="required|fullName" v-slot="{ errors }">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" v-model="staff.fullName"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="name" aria-describedby="name"
                placeholder="Staff Full Name">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider vid="email" name="E-mail" rules="required|email|userEmailAvailable" v-slot="{ errors }">
            <div class="form-group ">
              <label for="emailInput">Email address</label>
              <input type="email" :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="emailInput"
                aria-describedby="emailHelp" v-model="staff.email" placeholder="Enter email" required>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider rules="required|caracters" name="basepassword" v-slot="{ errors }">
            <div class="form-group">
              <label for="text">Password</label>
              <input type="password" v-model="basepassword"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="email"
                placeholder="Enter password">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider name="confirm" rules="required|password:@basepassword" v-slot="{ errors }">
            <div class="form-group">
              <label for="text">Confirm Password</label>
              <input type="password" v-model="staff.password"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="password"
                placeholder="Enter password" data-vv-as="basepassword">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider name="role" rules="required|role" v-slot="{ errors }">
            <div class="form-group">
              <label for="text">Role</label>
              <b-form-select plain v-model="staff.role" :options="roleOptions" class="mb-3">
                <template v-slot:first>
                  <b-form-select-option :value="null" disabled>Select staff role</b-form-select-option>
                </template>
              </b-form-select>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <ValidationProvider name="unit" rules="required" v-slot="{ errors }">
            <div class="form-group">
              <label for="text">Staff Unit</label>
              <b-form-select plain v-model="clinicalUnitsSelected" :options="getClinicOptions()" class="mb-3">
                <template v-slot:first>
                  <b-form-select-option :value="null" disabled>Select staff unit</b-form-select-option>
                </template>
              </b-form-select>
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
          <div v-if="isDoctor()">
            <b-form-checkbox id="perform-service" v-model="performService" name="check-button" switch>
              <a>Performs Service?</a>
            </b-form-checkbox>
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
import { Role, Roles } from '../../../../Model/Roles'
import usersService from '../../../../services/user'

export default {
  name: 'StaffForm',
  props: {
  },
  watch: {
    performService (newv) {
      console.log(newv)
    }
  },
  async mounted () {
    this.setAppRoles()
  },
  async created () {
  },
  components: {
  },
  computed: {
    ...mapGetters({
      clinicState: 'Clinic/clinicState',
      clinicalUnitsState: 'Clinic/clinicalUnitsState',
      userState: 'User/userState'
    })
  },
  methods: {
    isDoctor () {
      if (this.staff.role === Role.ADMIN || this.staff.role === Role.DOCTOR || this.staff.role === Role.SUPER) {
        return true
      } else {
        return false
      }
    },
    getClinicOptions () {
      let opt = this.clinicalUnitsState.map(clinic => clinic.name)
      opt.push(this.clinicState.name)
      return opt
    },
    randomColor () {
      var o = Math.round, r = Math.random, s = 255;
      return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ')';
    },
    async register () {
      try {
        this.parseFullName(this.staff)
        delete this.staff.fullName
        this.staff.performService = this.performService
        this.staff.clinicId = this.clinicState.id
        this.staff.color = this.randomColor()
        this.setStaffClinicalUnitId(this.staff)
        let { data } = await usersService.createUser(this.staff)
        this.$emit('onCreate', data)
        this.staff = this.cloneObject(this.defaultStaff)
        this.performService = true
        this.basepassword = ''
        this.makeSuccessToast('Staff registered')
        this.closeModal('add-staff-modal')
      } catch (ex) {
        console.log('error: ', ex)
        this.makeErrorToast('Staff already exists')
      }
    },
    setAppRoles () {
      if (!this.userState.role.includes('super')) {
        this.roleOptions = Roles.slice(1)
      } else {
        this.roleOptions = Roles
      }
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
    setStaffClinicalUnitId (item) {
      let unit = this.clinicalUnitsState.filter(clinic => clinic.name === this.clinicalUnitsSelected)

      if (unit.length > 0) {
        item.clinicId = unit[0].id
        item.headQuarterId = this.clinicState.id
      } else {
        item.clinicId = this.clinicState.id
        item.headQuarterId = this.clinicState.id
      }
    }
  },
  data () {
    return {
      performService: true,
      clinicalUnitsSelected: null,
      roleOptions: null,
      clinicOptions: [],
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
