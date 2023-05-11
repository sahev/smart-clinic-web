<template>
  <b-container fluid>
    <iq-card>
      <template v-slot:headerTitle>
        <h4 class="card-title">Patients</h4>
      </template>
      <template v-slot:headerAction style="display: flex;align-items: center;">
        <div class="p-0 iq-search-bar">
          <form action="#" class="searchbox">
            <div class="iq-search-bar">
              <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to search patient" style="height: 35px;"
                class="search-box"></b-form-input>
            </div>
          </form>
        </div>
        <div>
          <b-button variant="primary" class="mr-2">Add Patient</b-button>
        </div>
      </template>
      <template>
        <b-row>
          <b-col>
            <div>
              <b-table striped hover :items="doctors" :fields="fields" :filter="filter" @row-clicked="handle"
                :per-page="perPage" :current-page="currentPage">
              </b-table>
            </div>
          </b-col>
        </b-row>
        <b-row>
          <b-col style="text-align: center; display: flex; align-items: center; justify-content: center;">
            <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
          </b-col>
        </b-row>
      </template>
    </iq-card>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import { xray } from '../../../config/pluginInit'
import userServices from '../../../services/user'

export default {
  name: 'UserList',
  data () {
    return {
      currentPage: 1,
      perPage: 10,
      filter: null,
      fields: [
        { key: 'id', label: 'Id', sortable: true },
        { key: 'fullName', label: 'Name', sortable: true },
        { key: 'email', label: 'E-mail' }
      ],
      doctors: [],
      defaultContact: {
        facebookUrl: null,
        instagramUrl: null,
        siteUrl: null,
        twitterUrl: null
      }
    }
  },
  async mounted () {
    xray.index()
    await this.init()
  },
  firestore () {
    return {
    }
  },
  components: {
  },
  beforeMount () {
  },
  methods: {
    handle (rec) {
      this.$router.push(`/patients/profile/${rec.id}`)
    },
    checkUserRole () {
      const roles = ['admin', 'receptionist', 'super']
      return roles.includes(this.userState.role)
    },
    hasAddress (url) {
      if (url === '' || !url) {
        return false
      } else {
        return true
      }
    },
    getAddress (url) {
      return 'http://' + url.replace(/^https?:\/\//, '')
    },
    async init () {
      await this.getAllStaffs()
    },
    async getAllStaffs () {
      let { data } = await userServices.getAll()
      data.map(staff => this.parseStaff(staff))
      this.doctors = data
      console.log(this.doctors)
    },
    parseStaff (staff) {
      delete staff.profileImage
      staff.fullName = staff.firstName + ' ' + staff.lastName
      if (!staff.contact) {
        staff.contact = this.defaultContact
      }
    }
  },
  computed: {
    ...mapGetters({
      userState: 'User/userState'
    }),
    rows () {
      return this.doctors.length
    }
  }
}
</script>
