<template>
  <div class="sign">
    <Loader />

      <div class="sign-in-from">
        <router-view></router-view>

      </div>
  </div>
</template>
<script>
import Loader from '../../components/xray/loader/Loader'
import logo from '../../assets/images/logo-white.png'
import { xray } from '../../config/pluginInit'
import bgImage from '../../assets/images/login/2.png'
export default {
  name: 'AuthLayout1',
  components: {
    Loader
  },
  mounted () {
    xray.index()
  },
  data () {
    return {
      slickOptions: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      },
      logo: logo,
      bgImageURL: bgImage
    }
  }
}
</script>

<style scoped>
@import url("../../assets/css/custom.css");
.sign {
  margin-top: 10vh;
  display: flex !important;
  flex-direction: row !important;
  justify-content: center !important;
}
</style>