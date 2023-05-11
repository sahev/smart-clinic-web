<template>
  <b-container fluid>
    <form>
      <b-row>
        <b-col lg="12">
          <iq-card body-class="p-0">
            <template v-slot:body>
              <div class="iq-edit-list">
                <tab-nav :pills="true" class="iq-edit-profile d-flex">
                  <tab-nav-items :class="isMe() ? 'col-md-6 p-0' : 'col-md-12 p-0'" :active="true" href="#personal-information"
                    title="Personal Information" />
                  <tab-nav-items v-if="isMe()" class="col-md-6 p-0" :active="false" href="#chang-pwd" title=" Change Password" />
                </tab-nav>
              </div>
            </template>
          </iq-card>
        </b-col>
        <b-col lg="12">
          <div class="iq-edit-list-data">
            <tab-content id="pills-tabContent-2">
              <tab-content-item :active="true" id="personal-information">

                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Personal Information</h4>
                  </template>

                  <template v-slot:body>
                    <b-form-group class="row align-items-center">
                      <b-col md="12">
                        <div class="profile-img-edit">
                          <b-img :src="staffUser.profileImage ? staffUser.profileImage : defaultProfileImage()"
                            class="profile-pic height-150 width-150" alt="profile-pic" />
                          <input type="hidden" v-model="staffUser.profileImage">
                          <div class="p-image">
                            <div class="position-relative">
                              <b-form-file class="h-100 position-absolute" accept="image/*" style="opacity: 0;"
                                @change="previewImage"></b-form-file>
                              <i class="ri-pencil-line upload-button"></i>
                            </div>
                          </div>
                        </div>
                      </b-col>
                    </b-form-group>
                    <b-row align-v="center">
                      <b-form-group class="col-md-6" label="First Name" label-for="fname">
                        <ValidationProvider name="First name" rules="required" v-slot="{ errors }">
                          <b-form-input v-model="staffUser.firstName" type="text" placeholder="First Name"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>
                      <b-form-group class="col-md-6" label="Last Name" label-for="lname">
                        <ValidationProvider name="Last name" rules="required" v-slot="{ errors }">
                          <b-form-input v-model="staffUser.lastName" type="text" placeholder="Last Name"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>

                      <b-form-group class="col-md-6" label="E-mail" label-for="email">
                        <ValidationProvider name="E-mail" rules="required" v-slot="{ errors }">
                          <b-form-input v-model="staffUser.email" type="text" placeholder="Your E-mail"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>
                      <b-form-group class="col-sm-6" label="Date Of Birth:" label-for="dob">
                        <b-form-input type="date" v-model="staffUser.birthDate" id="dob"></b-form-input>
                      </b-form-group>

                      <b-form-group class="col-md-6" label="Speciality" label-for="speciality">
                      <ValidationProvider name="speciality" rules="required" v-slot="{ errors }">
                        <b-form-input v-model="staffUser.speciality" type="text"
                          placeholder="Your Speciality"></b-form-input>
                        <div class="invalid-feedback">
                          <span>{{ errors[0] }}</span>
                        </div>
                      </ValidationProvider>
                    </b-form-group>
                    </b-row>

                    <b-form-group label="Resume"  label-for="resume">
                      <b-textarea v-model="staffUser.description" type="text" placeholder="Your resume">
                      </b-textarea>
                    </b-form-group>

                    <hr class="solid">

                    <h4 class="card-title">Contacts</h4>

                    <b-row align-v="center">
                      <b-form-group class="col-md-6" label="Phone" label-for="phone">
                        <b-form-input v-model="staffUser.contact.phone" type="text" placeholder="Phone"></b-form-input>
                      </b-form-group>

                      <b-form-group class="col-sm-6" label="Address" label-for="address">
                        <b-form-input v-model="staffUser.contact.address" type="text"
                          placeholder="Address"></b-form-input>
                      </b-form-group>
                    </b-row>

                    <b-row align-v="center">
                      <b-form-group class="col-md-6" label="Twitter Url" label-for="phone">
                        <b-form-input v-model="staffUser.contact.twitterUrl" type="text"
                          placeholder="Twitter Url"></b-form-input>
                      </b-form-group>

                      <b-form-group class="col-sm-6" label="Facebook Url" label-for="address">
                        <b-form-input v-model="staffUser.contact.facebookUrl" type="text"
                          placeholder="Facebook Url"></b-form-input>
                      </b-form-group>

                      <b-form-group class="col-sm-6" label="Instagram Url" label-for="address">
                        <b-form-input v-model="staffUser.contact.instagramUrl" type="text"
                          placeholder="Instagram Url"></b-form-input>
                      </b-form-group>

                      <b-form-group class="col-sm-6" label="Site Url" label-for="address">
                        <b-form-input v-model="staffUser.contact.siteUrl" type="text"
                          placeholder="Site Url"></b-form-input>
                      </b-form-group>
                    </b-row>

                    <hr class="solid">

                    <div>
                      <b-button variant="primary" @click="save()" class="mr-2">Submit</b-button>
                      <b-button @click="cancel()" variant="none" class="iq-bg-primary">Back</b-button>
                    </div>
                  </template>

                </iq-card>
              </tab-content-item>
              <tab-content-item  :active="false" id="chang-pwd">
                <iq-card>
                  <template v-slot:headerTitle>
                    <h4 class="card-title">Change Password</h4>
                  </template>
                  <template v-slot:body>
                    <ValidationObserver ref="b-form-group" v-slot="{ handleSubmit }">
                      <b-form-group label="Current Password:" label-for="pass">
                        <ValidationProvider name="fn" v-slot="{ errors }" rules="required">
                          <b-form-input v-model="currentPassword" type="password" placeholder="Password"
                            @focusout="validateCurrentPassword()"
                            :class="isInvalid || errors.length > 0 ? 'is-invalid' : ''"></b-form-input>
                          <div class="invalid-feedback">
                            <span>Invalid password</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>
                      <b-form-group class="col-md-6" label="New Password:" label-for="pass">
                        <ValidationProvider name="Password" v-slot="{ errors }" rules="required" vid="password">
                          <b-form-input v-model="newPassword" type="password" placeholder="Password"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>
                      <b-form-group class="col-md-6" label="Repeat Password:" label-for="rpass">
                        <ValidationProvider name="Repeat Password" rules="required|confirmed:password"
                          v-slot="{ errors }">
                          <b-form-input v-model="repeatPassword" type="password" placeholder="Repeat Password"
                            :class="(errors.length > 0 ? ' is-invalid' : '')"></b-form-input>
                          <div class="invalid-feedback">
                            <span>{{ errors[0] }}</span>
                          </div>
                        </ValidationProvider>
                      </b-form-group>

                      <b-button @click="handleSubmit(changePassword)" variant="primary" class="mr-2">Submit</b-button>
                      <b-button @click="cancel()" variant="none" class="iq-bg-danger">Cancel</b-button>

                    </ValidationObserver>
                  </template>
                </iq-card>
              </tab-content-item>
            </tab-content>
          </div>
        </b-col>
      </b-row>
    </form>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { xray } from '../../../config/pluginInit'
import userServices from '../../../services/user'
import authServices from '../../../services/auth'

export default {
  name: 'ProfileEdit',
  async mounted () {
    xray.index()
    await this.init()
  },
  computed: {
    ...mapGetters({
      userState: 'User/userState'
    })
  },
  data () {
    return {
      defaultContact: {
        phone: '',
        twitterUrl: '',
        facebookUrl: '',
        instagramUrl: '',
        siteUrl: ''
      },
      staffUser: {
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        profileImage: '',
        contact: {
          phone: '',
          twitterUrl: '',
          facebookUrl: '',
          instagramUrl: '',
          siteUrl: ''
        }
      },
      currentPassword: '',
      newPassword: '',
      repeatPassword: '',
      isInvalid: false
    }
  },
  methods: {
    isMe () {
      return parseInt(this.$route.params.id) === this.userState.id
    },
    getDate (date) {
      let today = new Date(date)
      const yyyy = today.getFullYear()
      let mm = today.getMonth() + 1 // Months start at 0!
      let dd = today.getDate()
      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm
      return yyyy + '-' + mm + '-' + dd
    },
    ...mapActions({
      setUserState: 'User/setUserState'
    }),
    cancel () {
      this.$router.push(`/doctor/profile/${this.staffUser.id}`)
    },
    async init () {
      const userId = this.$route.params.id
      let { data } = await userServices.getById(userId)
      this.staffUser = this.cloneObject(data)
      this.staffUser.birthDate = this.getDate(this.userState.birthDate)
      if (!this.staffUser.contact) {
        this.staffUser.contact = this.defaultContact
      }
    },
    async save () {
      try {
        await userServices.update(this.staffUser)

        if (this.userState.id === this.staffUser.id) {
          this.setUserState(this.cloneObject(this.staffUser))
        }

        this.makeSuccessToast('Saved')
      } catch {
        this.makeErrorToast('Error on save')
      }
    },
    previewImage: async function (event) {
      const input = event.target

      if (input.files && input.files[0]) {
        const reader = new FileReader()

        this.staffUser.profileImage = await this.getBase64(input.files[0])
        reader.readAsDataURL(input.files[0])
      }
    },
    async getBase64 (file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result)
        reader.onerror = (error) => reject(error)
      })
    },
    async validateCurrentPassword () {
      let userData = {
        email: this.staffUser.email,
        password: this.currentPassword
      }
      let isValid = await authServices.login(userData)

      if (!isValid) {
        this.isInvalid = true
      } else {
        this.isInvalid = false
      }
    },
    async changePassword () {
      let userData = {
        id: this.staffUser.id,
        password: this.newPassword
      }
      if (this.currentPassword === '') {
        this.isInvalid = true
        this.makeErrorToast('Enter your current password')
        return
      }
      if (this.isInvalid) {
        return
      }

      try {
        await userServices.update(userData)
        this.makeSuccessToast('Password changed!')
      } catch {
        this.makeErrorToast('Error on change password')
      }
    }
  }
}
</script>
