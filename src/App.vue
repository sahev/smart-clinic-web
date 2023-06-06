<template>
  <router-view/>
</template>
<script src="https://accounts.google.com/gsi/client" async defer> </script>
<script>
import { xray } from './config/pluginInit'

export default {
  name: 'App',
  components: {
  },
  mounted () {
    xray.mainIndex()
  }
}
</script>
<style lang="scss">
  @import "assets/scss/style.scss";
</style>