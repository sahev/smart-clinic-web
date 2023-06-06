<template>
  <ul class="iq-social-media">
    <li v-for="(socialProvider, index) in socialProviders" :key="index">
      <a href="javascript:void(0)" @click="socialLogin(socialProvider.type)">
        <i :class="socialProvider.icon"></i>
      </a>
    </li>
  </ul>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import auth from '../../../../services/auth'
import users from '../../../../services/user'
import clinics from '../../../../services/clinic'
import parse from '../../../../Utils/parse'

export default {
  name: 'SocialLoginForm',
  data: () => ({
    socialProviders: [
      {
        type: 'google',
        icon: 'ri-google-line'
      },
      {
        type: 'facebook',
        icon: 'ri-facebook-box-line'
      },
      // {
      //   type: 'twitter',
      //   icon: 'ri-twitter-line'
      // }
    ]
  }),
  async created () {

  },
  computed: {
    ...mapGetters({
      stateUsers: 'Setting/usersState',
      userState: 'User/userState',
      accessToken: 'Auth/authToken'
    })
  },
  methods: {
    ...mapActions({
      setLoggedIn: 'Auth/setToken',
      setUserState: 'User/setUserState',
      setClinicState: 'Clinic/setClinicState',
      setClinicalUnitsState: 'Clinic/setClinicalUnitsState'
    }),
    handleCallback (event) {
      console.log("resp jwt ", event);
    },
    async handleClickUpdateScope () {
      const option = new window.gapi.auth2.SigninOptionsBuilder();
      option.setScope("email https://www.googleapis.com/auth/drive.file");
      const googleUser = this.$gAuth.GoogleAuth.currentUser.get();
      try {
        await googleUser.grant(option);
        console.log("success");
      } catch (error) {
        console.error(error);
      }
    },

    handleClickLogin () {
      this.$gAuth
        .getAuthCode()
        .then((authCode) => {
          //on success
          console.log("authCode", authCode);
        })
        .catch((error) => {
          //on fail do something
        });
    },

    async handleClickSignIn () {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }

        let userEmail = googleUser.getBasicProfile().mw

        console.log("getBasicProfile", googleUser.getBasicProfile());
        console.log("getAuthResponse", googleUser.getAuthResponse());
        let token = googleUser.getAuthResponse().id_token
        let { data } = await users.emailExists(userEmail)

        console.log(userEmail, 'mail', data);
        if (data) {
          console.log('email existe');
          this.setGoogleLogin(userId, token)
        }  else {
        window.document.getElementById('emailInput').className += ' is-invalid'
        window.document.getElementById('passwordInput').className += ' is-invalid'
        window.document.getElementById('crederror').innerHTML = ' Invalid Credentials'
      }

      } catch (error) {
        //on fail do something
        console.error(error);
        return null;
      }
    },
    async setGoogleLogin (userId, token) {
        this.setLoggedIn(token)


        let user = await users.getById(userId)
        let clinic = await clinics.getById(user.clinicId)

        this.setUserState(user.data)
        this.setClinicState(clinic.data)
        this.setClinicalUnitsState(clinic.data.clinicalUnits)

        this.$router.push({ name: 'dashboard.home-1' })
    },
    async handleClickSignOut () {
      try {
        await this.$gAuth.signOut();
        this.isSignIn = this.$gAuth.isAuthorized;
        console.log("isSignIn", this.$gAuth.isAuthorized);
      } catch (error) {
        console.error(error);
      }
    },

    handleClickDisconnect () {
      window.location.href = `https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=${window.location.href}`;
    },
    async socialLogin (type) {
      this.handleClickSignIn()
    }
  }
}
</script>
