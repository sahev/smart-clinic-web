
<template v-slot:body>
  <iq-card body-class="iq-card-body">
    <div class="iq-card-header d-flex justify-content-between">
      <div class="iq-header-title">
        <h4 class="card-title">Photos</h4>
        <a>Feature is incomming!</a>
      </div>
    </div>
    <div class="iq-card-body">
      <ul class="profile-img-gallary d-flex flex-wrap p-0 m-0">
        <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../../assets/images/login/1.png"
              alt="gallary-image" class="img-fluid"></a></li>
        <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../../assets/images/login/2.png"
              alt="gallary-image" class="img-fluid"></a></li>
        <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../../assets/images/login/3.png"
              alt="gallary-image" class="img-fluid"></a></li>
        <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../../assets/images/login/2.png"
              alt="gallary-image" class="img-fluid"></a></li>
        <li class="col-md-4 col-6 pb-3"><a href="javascript:void(0);"><img src="../../../assets/images/login/3.png"
              alt="gallary-image" class="img-fluid"></a></li>
        <li class="col-md-4 col-6 pb-0"><a href="javascript:void(0);"><img src="../../../assets/images/login/3.png"
              alt="gallary-image" class="img-fluid"></a></li>
      </ul>
    </div>
  </iq-card>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Photos',
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
