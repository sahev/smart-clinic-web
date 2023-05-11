<template v-slot:body>
  <iq-card>
    <template v-slot:headerTitle>
      <h4 class="card-title">Notifications</h4>
    </template>
    <template v-slot:body>
      <ul class="iq-timeline">
        <li>
          <div class="timeline-dots border-success"></div>
          <h6 class="">Dr. Joy Send you Photo</h6>
          <small class="mt-1">23 November 2019</small>
        </li>
        <li>
          <div class="timeline-dots border-danger"></div>
          <h6 class="">Reminder : Opertion Time!</h6>
          <small class="mt-1">20 November 2019</small>
        </li>
        <li>
          <div class="timeline-dots border-primary"></div>
          <h6 class="mb-1">Patient Call</h6>
          <small class="mt-1">19 November 2019</small>
        </li>
        <li>
          <div class="timeline-dots border-success"></div>
          <h6 class="">Dr. Joy Send you Photo</h6>
          <small class="mt-1">23 November 2019</small>
        </li>
        <li>
          <div class="timeline-dots border-danger"></div>
          <h6 class="">Reminder : Opertion Time!</h6>
          <small class="mt-1">20 November 2019</small>
        </li>
      </ul>
    </template>
  </iq-card>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Notifications',
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
