<template>
  <iq-card class="iq-card-body">
    <div class="iq-card-header d-flex justify-content-between">
      <div class="iq-header-title">
        <h4 class="card-title">Personal Information</h4>
      </div>
    </div>
    <div class="iq-card-body">
      <div class="about-info m-0 p-0">
        <div class="row">
          <div class="col-4">First Name:</div>
          <div class="col-8">{{ staff.firstName }}</div>
          <div class="col-4">Last Name:</div>
          <div class="col-8">{{ staff.lastName }}</div>
          <div class="col-4">Age:</div>
          <div class="col-8">{{ getAge(staff.birthDate) ? getAge(staff.birthDate) : 'No data available' }}</div>
          <div class="col-4">Position:</div>
          <div class="col-8">{{ staff.position ? staff.position : 'No data available' }}</div>
          <div class="col-4">Email:</div>
          <div class="col-8"><a :href="'mailto:' + staff.email">{{ staff.email }}</a></div>
          <div class="col-4">Phone:</div>
          <div v-if="staff.contact" class="col-8">
            <a :href="'tel:' + staff.contact.phone !== '' ? staff.contact.phone : 'No data available'">
              {{ staff.contact.phone !== '' ? staff.contact.phone : 'No data available' }}
            </a>
          </div>
          <div v-else class="col-8">No data available</div>
          <div class="col-4">Role:</div>
          <div class="col-8"><b-badge variant="primary" pill>{{ staff.role }}</b-badge></div>
          <div class="col-12 iq-doc-social-info mt-3 mb-3 text-center">
            <ul v-if="staff.contact" class="m-0 p-0 list-inline">
              <li v-if="hasAddress(staff.contact.facebookUrl)" id="facebookurl">
                <a :href="getAddress(staff.contact.facebookUrl)" target="_blank">
                  <i class="ri-facebook-fill"></i>
                </a>
              </li>
              <li v-if="hasAddress(staff.contact.twitterUrl)" id="twitterurl">
                <a :href="getAddress(staff.contact.twitterUrl)" target="_blank">
                  <i class="ri-twitter-fill"></i>
                </a>
              </li>
              <li v-if="hasAddress(staff.contact.instagramUrl)" id="instagramurl">
                <a :href="getAddress(staff.contact.instagramUrl)" target="_blank">
                  <i class="ri-instagram-fill"></i>
                </a>
              </li>
              <li v-if="hasAddress(staff.contact.siteUrl)" id="siteurl">
                <a :href="getAddress(staff.contact.siteUrl)" target="_blank">
                  <i class="ri-global-fill"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </iq-card>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PersonalInformation',
  props: {
    staff: Object
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      userState: 'User/userState'
    })
  },
  mounted () {
    // this.initIconsUrl()
  },
  components: {
  },
  beforeMount () {
  },
  methods: {
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
    getAge () {
      var today = new Date()
      var birthDate = new Date(this.staff.birthDate)
      var age = today.getFullYear() - birthDate.getFullYear()
      var m = today.getMonth() - birthDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--
      }
      return age
    }
  }
}
</script>
<style>
a.disabled {
  pointer-events: none;
  cursor: default;
}
</style>
