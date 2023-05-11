<template>
  <iq-card>
    <template v-slot:headerTitle>
      <h4 class="card-title">Speciality</h4>
    </template>
    <template v-slot:body>
      <ul class="speciality-list m-0 p-0">
        <li class="d-flex mb-4 align-items-center">
          <div class="user-img img-fluid"><a href="#" class="iq-bg-primary"><i class="ri-award-fill"></i></a></div>
          <div class="media-support-info ml-3">
            <h6>professional</h6>
            <p class="mb-0">Certified Skin Treatment</p>
          </div>
        </li>
        <li class="d-flex mb-4 align-items-center">
          <div class="user-img img-fluid"><a href="#" class="iq-bg-warning"><i class="ri-award-fill"></i></a></div>
          <div class="media-support-info ml-3">
            <h6>Certified</h6>
            <p class="mb-0">Cold Laser Operation</p>
          </div>
        </li>
        <li class="d-flex mb-4 align-items-center">
          <div class="user-img img-fluid"><a href="#" class="iq-bg-info"><i class="ri-award-fill"></i></a></div>
          <div class="media-support-info ml-3">
            <h6>Medication Laser</h6>
            <p class="mb-0">Hair Lose Product</p>
          </div>
        </li>
      </ul>
    </template>
  </iq-card>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Speciality',
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
