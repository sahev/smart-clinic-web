<template>
  <b-container fluid>
    <b-row>
      <b-col lg="4">

        <PersonalInformation :staff="staff"/>

        <PersonalInformationDetails :staff="staff"/>
      </b-col>
      <b-col lg="8">
        <b-row>
          <b-col md="6">

            <Schedule :staff="staff"/>
          </b-col>
          <b-col md="6">

            <Photos :staff="staff"/>

          </b-col>
          <b-col md="6">

            <!-- <Speciality :staff="staff"/> -->

          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { xray } from '../../../config/pluginInit'
import PersonalInformationDetails from './components/PersonalInformationDetails.vue'
// import Speciality from './components/Speciality.vue'
import Photos from '../components/Photos.vue'
import Schedule from '../components/Schedule.vue'
import PersonalInformation from './components/PersonalInformation.vue'
import user from '../../../services/user'

export default {
  name: 'Profile',
  async mounted () {
    xray.index()
    await this.getStaff()
  },
  components: {
    PersonalInformationDetails,
    // Speciality,
    Photos,
    Schedule,
    PersonalInformation
  },
  data () {
    return {
      staff: {}
    }
  },
  methods: {
    async getStaff () {
      const staffId = this.$route.params.id
      let { data } = await user.getById(staffId)
      this.staff = data
    }
  }
}
</script>
