<template>
  <b-container fluid>
    testeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
  </b-container>
</template>
<script>
export default {
  name: 'UserList',
  data () {
    return {
      doctors: [
        { name: 'Dr. Anna Mull', specialist: 'Cardiologists', image: require('../../assets/images/user/1.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Bunny Joy', specialist: 'Gynaecology', image: require('../../assets/images/user/01.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Shonda Leer', specialist: 'Orthopedics Special', image: require('../../assets/images/user/02.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Ira Membrit', specialist: 'MD', image: require('../../assets/images/user/03.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Paul Molive', specialist: 'Medicine Specialists', image: require('../../assets/images/user/04.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Dr. Terry Aki', specialist: 'Heart Surgeons', image: require('../../assets/images/user/05.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Poppa Cherry', specialist: 'Family Physicians', image: require('../../assets/images/user/06.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Dr. Saul T. Balls', specialist: 'Gynaecology', image: require('../../assets/images/user/07.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Hal Appeno', specialist: 'MD', image: require('../../assets/images/user/08.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Polly Tech', specialist: 'Eye Special', image: require('../../assets/images/user/09.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Pat Agonia', specialist: 'Therapy Special', image: require('../../assets/images/user/10.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Barry Cade', specialist: 'Heart Surgeons', image: require('../../assets/images/user/12.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr.Jimmy Changa', specialist: 'Cardiologists', image: require('../../assets/images/user/12.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Sue Vaneer', specialist: 'Orthopedics Special', image: require('../../assets/images/user/13.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Monty Carlo', specialist: 'Anesthesiologists', image: require('../../assets/images/user/14.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' },
        { name: 'Dr. Rick O\'Shea', specialist: 'General', image: require('../../assets/images/user/15.jpg'), website: 'www.demo.com', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam auctor non erat non gravida. In id ipsum consequat' }

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
  method: {
  },
  computed: {
  }
}
</script>
