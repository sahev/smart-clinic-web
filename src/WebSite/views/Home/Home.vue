<template>
  <b-container fluid>
    <h1>
      public homepage
    <b-button @click="redirectToApp">login</b-button>
    </h1>
  </b-container>
</template>
<script>
export default {
  name: 'homepage',
  data () {
    return {
      doctors: [

      ]
    }
  },
  mounted () {
  },
  firestore () {
    return {
    }
  },
  components: {
  },
  beforeMount () {
  },
  methods: {
    redirectToApp () {
      let protocol = window.location.protocol
      let newUrl = protocol + '//app.' + window.location.host
      window.location.href = newUrl
    }
  },
  computed: {
  }
}
</script>
