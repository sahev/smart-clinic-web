<template>
  <div v-if="loaderState" class="loader-line">
    <div class="loaderBar"></div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'LoaderLine',
  computed: {
    ...mapGetters({
      loaderState: 'Setting/loaderState'
    })
  }
}
</script>
