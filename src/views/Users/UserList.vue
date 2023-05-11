<template>
  <b-container fluid>
    <b-row>
      <b-col sm="12" md="3" v-for="doctor in doctors" :key="doctor.id">
        <iq-card body-class="text-center">
          <template v-slot:body>
            <div class="doc-profile">
              <img class="rounded-circle img-fluid avatar-80"
                :src="doctor.profileImage === '' || doctor.profileImage === null ? defaultProfileImage() : doctor.profileImage" alt="profile">
            </div>
            <div class="iq-doc-info mt-3">
              <h4> {{ doctor.firstName + ' ' + doctor.lastName}} </h4>
              <p class="mb-0">{{ doctor.speciality ? doctor.speciality : 'Doctor' }}</p>
              <a href="javascript:void(0);">{{ doctor.contact.siteUrl }}</a>

            </div><b-badge pill>{{ doctor.role }}</b-badge>
            <div class="iq-doc-description mt-2">
              <p class="mb-0">{{ doctor.description }}</p>
            </div>

            <div class="col-12 iq-doc-social-info mt-3 mb-3 text-center">
              <ul class="m-0 p-0 list-inline">
                <li id="facebookurl" v-if="hasAddress(doctor.contact.facebookUrl)">
                  <a :href="getAddress(doctor.contact.facebookUrl)" target="_blank">
                    <i class="ri-facebook-fill"></i>
                  </a>
                </li>
                <li id="twitterurl" v-if="hasAddress(doctor.contact.twitterUrl)">
                  <a :href="getAddress(doctor.contact.twitterUrl)" target="_blank">
                    <i class="ri-twitter-fill"></i>
                  </a>
                </li>
                <li id="instagramurl" v-if="hasAddress(doctor.contact.instagramUrl)">
                  <a :href="getAddress(doctor.contact.instagramUrl)" target="_blank">
                    <i class="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
                <router-link :to="`/doctor/profile/${doctor.id}`" class="btn btn-primary">View</router-link>
                <router-link v-if="checkUserRole()" style="margin-left: 10px" :to="`/doctor/profile-edit/${doctor.id}`" class="btn btn-primary">Edit</router-link>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import { xray } from '../../config/pluginInit'
import userServices from '../../services/user'

export default {
  name: 'UserList',
  data () {
    return {
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
      if (!staff.contact) {
        staff.contact = this.defaultContact
      }
    }
  },
  computed: {
    ...mapGetters({
      userState: 'User/userState'
    })
  }
}
</script>
