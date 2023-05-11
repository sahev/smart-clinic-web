<template>
  <iq-card body-class="iq-card-body pl-0 pr-0 pt-0">
    <template v-slot:body>
      <div class="docter-details-block">
        <div class="doc-profile-bg bg-primary" style="height:150px;">

          <div class="docter-profile text-center">
            <b-img :src="staff.profileImage ? staff.profileImage : defaultProfileImage()" rounded="circle"
              alt="profile-img" class="avatar-130" style="margin-top: 10px;" />
          </div>
        </div>
        <div class="text-center mt-3 pl-3 pr-3">
          <h4>
            <b>{{ staff.firstName + ' ' + staff.lastName }}</b>
            <router-link :to="`/doctor/profile-edit/${staff.id}`">
              <i class="ri-pencil-line float-right"></i>

            </router-link>
          </h4>
          <p>{{ staff.speciality ? staff.speciality : 'Doctor' }}</p>
          <p class="mb-0">{{ staff.description }}</p>
        </div>
        <hr>
        <ul class="doctoe-sedual d-flex align-items-center justify-content-between p-0 m-0">
          <li class="text-center">
            <h3 class="counter">4500</h3>
            <span>Operations</span>
          </li>
          <li class="text-center">
            <h3 class="counter">100</h3>
            <span>Hospital</span>
          </li>
          <li class="text-center">
            <h3 class="counter">10000</h3>
            <span>Patients</span>
          </li>
        </ul>
      </div>
    </template>
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
  },
  components: {
  },
  beforeMount () {
  },
  method: {
  }
}
</script>
