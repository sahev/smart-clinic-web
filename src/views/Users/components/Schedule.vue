<template v-slot:body>
  <iq-card>
    <template v-slot:headerTitle>
      <h4 class="card-title">Schedule</h4>
    </template>
    <div class="iq-card-body">
      <ul class="list-inline m-0 p-0">
        <li>
          <h6 class="float-left mb-1">Ruby saul (Blood Check)</h6>
          <small class="float-right mt-1">Today</small>
          <div class="d-inline-block w-100">
            <p class="badge badge-primary">09:00 AM </p>
          </div>
        </li>
        <li>
          <h6 class="float-left mb-1"> Anna Mull (Fever)</h6>
          <small class="float-right mt-1">Today</small>
          <div class="d-inline-block w-100">
            <p class="badge badge-danger">09:15 AM </p>
          </div>
        </li>
        <li>
          <h6 class="float-left mb-1">Petey Cruiser (X-ray)</h6>
          <small class="float-right mt-1">Today</small>
          <div class="d-inline-block w-100">
            <p class="badge badge-warning">10:00 AM </p>
          </div>
        </li>
        <li>
          <h6 class="float-left mb-1">Anna Sthesia (Full body Check up)</h6>
          <small class="float-right mt-1">Today</small>
          <div class="d-inline-block w-100">
            <p class="badge badge-info">01:00 PM </p>
          </div>
        </li>
        <li>
          <h6 class="float-left mb-1">Paul Molive (Operation)</h6>
          <small class="float-right mt-1">Tomorrow</small>
          <div class="d-inline-block w-100">
            <p class="badge badge-success">09:00 AM </p>
          </div>
        </li>
      </ul>
    </div>
  </iq-card>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Schedules',
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
