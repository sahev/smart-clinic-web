<template>
  <div>
    <div id="show-overlay"></div>
    <Loader />
    <div class="wrapper">
      <!-- Sidebar  -->
      <SideBarStyle1 :items="verticalMenu" :horizontal="horizontal" :logo="logo" @toggle="sidebarMini" />
      <div id="content-page" class="content-page" :class="horizontal ? 'ml-0' : ''">
        <!-- TOP Nav Bar -->
        <NavBarStyle1 title="Dashboard" :homeURL="{ name: 'dashboard1.home' }" @toggle="sidebarMini" :logo="logo"
          :horizontal="horizontal" :items="horizontalMenu">
          <template slot="responsiveRight">
            <ul class="navbar-nav ml-auto navbar-list">
              <li class="nav-item">
                <a class="search-toggle iq-waves-effect language-title" href="#"><img :src="selectedLang.image"
                    alt="img-flaf" class="img-fluid mr-1" style="height: 16px; width: 16px;" /> {{ selectedLang.title }}
                  <i class="ri-arrow-down-s-line"></i></a>
                <div class="iq-sub-dropdown">
                  <a class="iq-sub-card" href="javascript:void(0)" v-for="(lang, i) in langsOptions" :key="`Lang${i}`"
                    @click="langChange(lang)">
                    <img :src="lang.image" alt="img-flaf" class="img-fluid mr-2" />{{ lang.title }}
                  </a>
                </div>
              </li>
              <li>
                <b-form-input type="color" v-model="colorSelected">
                  asdsd
                </b-form-input>
              </li>

              <li class="nav-item" v-for="color in colors" :key="color.primary">
                <a href="#" @click="changeColor(color)" class="search-toggle iq-waves-effect"
                  :style="'background-color: ' + color.primary + ';'">

                </a>
              </li>
              <li class="nav-item">
                <a href="#" @click="toggleDarkMode" class="search-toggle iq-waves-effect">
                  <i :class="darkModeStore == 'dark' ? 'ri-contrast-2-line' : 'ri-sun-line'"></i>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="search-toggle iq-waves-effect">
                  <i class="ri-notification-3-fill"></i>
                  <span class="bg-danger dots"></span>
                </a>
                <div class="iq-sub-dropdown">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body p-0 ">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white">{{ $t('nav.allNotifications') }}<small
                            class="badge  badge-light float-right pt-1">4</small></h5>
                      </div>
                      <a href="#" class="iq-sub-card" v-for="(item, index) in notification" :key="index">
                        <div class="media align-items-center">
                          <div class="">
                            <img class="avatar-40 rounded" :src="item.image" alt="img">
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ item.name }}</h6>
                            <small class="float-right font-size-12">{{ item.date }}</small>
                            <p class="mb-0">{{ item.description.substring(0, 40) + '...' }}</p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <a href="#" class="search-toggle iq-waves-effect">
                  <i class="ri-mail-open-fill"></i>
                  <span class="bg-danger count-mail"></span>
                </a>
                <div class="iq-sub-dropdown">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body p-0 ">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white">{{ $t('nav.allMessages') }}<small
                            class="badge  badge-light float-right pt-1">5</small></h5>
                      </div>
                      <a href="#" class="iq-sub-card" v-for="(item, index) in message" :key="index">
                        <div class="media align-items-center">
                          <div class="">
                            <img class="avatar-40 rounded" :src="item.image" alt="img">
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ item.name }}</h6>
                            <small class="float-left font-size-12">{{ item.date }}</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </template>
          <template slot="right">
            <ul class="navbar-list">
              <li id="userlistoptions">
                <a href="#" class="search-toggle iq-waves-effect d-flex align-items-center">
                  <img :src="userState.profileImage ? userState.profileImage : defaultProfileImage()"
                    class="img-fluid rounded mr-3" alt="user">
                  <div class="caption">
                    <h6 class="mb-0 line-height">{{ userState.firstName }} {{ userState.lastName }}</h6>
                    <span class="font-size-12">{{ $t('nav.user.available') }}</span>
                  </div>
                </a>
                <div class="iq-sub-dropdown iq-dropdown" @click="log()">
                  <div class="iq-card shadow-none m-0">
                    <div class="iq-card-body p-0 ">
                      <div class="bg-primary p-3">
                        <h5 class="mb-0 text-white line-height">Hello {{ userState.firstName }}</h5>
                        <span class="text-white font-size-12">{{ $t('nav.user.available') }}</span>
                      </div>
                      <router-link
                        :to="userState.performService ? `/doctor/profile/${userState.id}` : `/user/profile/${userState.id}`"
                        class="iq-sub-card iq-bg-primary-hover">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-primary">
                            <i class="ri-file-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ $t('nav.user.profileTitle') }}</h6>
                            <p class="mb-0 font-size-12">{{ $t('nav.user.profileSub') }}</p>
                          </div>
                        </div>
                      </router-link>
                      <router-link
                        :to="userState.performService ? `/doctor/profile-edit/${userState.id}` : `/user/profile-edit/${userState.id}`"
                        class="iq-sub-card iq-bg-primary-success-hover">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-success">
                            <i class="ri-profile-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ $t('nav.user.profileEditTitle') }}</h6>
                            <p class="mb-0 font-size-12">{{ $t('nav.user.profileEditSub') }}</p>
                          </div>
                        </div>
                      </router-link>
                      <a href="#" class="iq-sub-card iq-bg-primary-danger-hover">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-danger">
                            <i class="ri-account-box-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ $t('nav.user.accountSettingTitle') }}</h6>
                            <p class="mb-0 font-size-12">{{ $t('nav.user.accountSettingSub') }}</p>
                          </div>
                        </div>
                      </a>
                      <a class="iq-sub-card iq-bg-primary-secondary-hover" @click="changeColor()">
                        <div class="media align-items-center">
                          <div class="rounded iq-card-icon iq-bg-secondary">
                            <i class="ri-lock-line"></i>
                          </div>
                          <div class="media-body ml-3">
                            <h6 class="mb-0 ">{{ $t('nav.user.privacySettingTitle') }}</h6>
                            <p class="mb-0 font-size-12">{{ $t('nav.user.privacySettingSub') }}</p>
                          </div>
                        </div>
                      </a>
                      <div class="d-inline-block w-100 text-center p-3">
                        <a class="iq-bg-danger iq-sign-btn" href="javascript:void(0)" @click="logout" role="button">{{
                          $t('nav.user.signout') }}<i class="ri-login-box-line ml-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </template>
        </NavBarStyle1>
        <!-- TOP Nav Bar END -->
        <template>

          <transition name="router-anim" :enter-active-class="`animated ${animated.enter}`" mode="out-in"
            :duration="animated.delay" :leave-active-class="`animated ${animated.exit}`">
            <router-view />
          </transition>
        </template>
        <FooterStyle1>
          <template v-slot:left>
            <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="#">Terms of Use</a></li>
            <li class="list-inline-item">v1.0.0</li>
          </template>
          <template v-slot:right>
            Copyright 2k2x <a href="#">sahev</a> All Rights Reserved.
          </template>
        </FooterStyle1>
      </div>
    </div>
  </div>
</template>
<script>
import Loader from '../components/xray/loader/Loader'
import SideBarStyle1 from '../components/xray/sidebars/SideBarStyle1'
import NavBarStyle1 from '../components/xray/navbars/NavBarStyle1'
import SideBarItems from '../MenusOptions/json/SideBar'
import HorizontalItems from '../MenusOptions/json/HorizontalMenu'
import profile from '../assets/images/user/1.jpg'
import loader from '../assets/images/logo.png'
import { xray } from '../config/pluginInit'
import { Users } from '../MenusOptions/api/chat'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Layout1',
  components: {
    Loader,
    SideBarStyle1,
    NavBarStyle1
  },
  mounted () {
    this.setInitialTheme()
    this.updateRadio()
    xray.loaderInit()
  },
  computed: {
    ...mapGetters({
      selectedLang: 'Setting/langState',
      langsOptions: 'Setting/langOptionState',
      colors: 'Setting/colorState',
      userState: 'User/userState',
      primaryColor: 'Setting/primaryColor',
      darkModeStore: 'Setting/darkMode',
    })
  },
  watch: {
    colorSelected (newv) {
      this.changeColor(newv)
    }
  },
  // sidebarTicket
  data () {
    return {
      colorSelected: '',
      showUserOptions: true,
      horizontal: false,
      mini: false,
      animated: { enter: 'fadeIn', exit: 'zoomOut', delay: 400 },
      animateClass: [
        { value: { enter: 'zoomIn', exit: 'zoomOut' }, text: 'Zoom' },
        { value: { enter: 'fadeIn', exit: 'fadeOut' }, text: 'Fade' },
        { value: { enter: 'slideInLeft', exit: 'slideOutRight' }, text: 'Slide' },
        { value: { enter: 'rotateInDownLeft', exit: 'rotateOutDownLeft' }, text: 'Roll' }
      ],
      horizontalMenu: HorizontalItems,
      verticalMenu: SideBarItems,
      userProfile: profile,
      logo: loader,
      usersList: Users,
      rtl: false,
      message: [
        { image: require('../assets/images/user/01.jpg'), name: 'Nik Emma Watson', date: '13 jan' },
        { image: require('../assets/images/user/02.jpg'), name: 'Greta Life', date: '14 Jun' },
        { image: require('../assets/images/user/03.jpg'), name: 'Barb Ackue', date: '16 Aug' },
        { image: require('../assets/images/user/04.jpg'), name: 'Anna Sthesia', date: '21 Sept' },
        { image: require('../assets/images/user/05.jpg'), name: 'Bob Frapples', date: '29 Sept' }
      ],
      notification: [
        { image: require('../assets/images/user/01.jpg'), name: 'Nik Emma Watson', date: '23 hour ago', description: 'Enjoy smart access to videos, games' },
        { image: require('../assets/images/user/02.jpg'), name: 'Greta Life', date: '14 hour ago', description: 'Google Chromecast: Enjoy a world of entertainment' },
        { image: require('../assets/images/user/03.jpg'), name: 'Barb Ackue', date: '16 hour ago', description: 'Dell Inspiron Laptop: Get speed and performance from' },
        { image: require('../assets/images/user/04.jpg'), name: 'Anna Sthesia', date: '21 hour ago', description: 'Deliver your favorite playlist anywhere in your home ' },
        { image: require('../assets/images/user/05.jpg'), name: 'Bob Frapples', date: '11 hour ago', description: 'MacBook Air features up to 8GB of memory, a fifth-generation' }
      ]
    }
  },
  methods: {
    ...mapActions({
      setPrimaryColor: 'Setting/setPrimaryColor',
      setDarkMode: 'Setting/setDarkMode',
    }),
    log () {
      document.getElementById('userlistoptions').removeAttribute('class')
    },
    updateRadio () {
      this.horizontal = this.$store.getters['Setting/horizontalMenuState']
      this.mini = this.$store.getters['Setting/miniSidebarState']
    },
    sidebarHorizontal () {
      this.$store.dispatch('Setting/horizontalMenuAction')
      this.updateRadio()
    },
    sidebarMini () {
      xray.triggerSet()
      this.$store.dispatch('Setting/miniSidebarAction')
      this.updateRadio()
    },
    setInitialTheme () {
      document.documentElement.setAttribute('theme-mode', this.darkModeStore)

      if (!this.primaryColor) {
        this.reset()
        return
      }

      this.changeColor(this.primaryColor)
    },
    toggleDarkMode () {
      if (document.documentElement.getAttribute('theme-mode') == 'dark') {
        document.documentElement.setAttribute('theme-mode', 'light')
        this.setDarkMode('light')
      }
      else {
        document.documentElement.setAttribute('theme-mode', 'dark')
        this.setDarkMode('dark')
      }
    },
    changeColor (color) {
      if (this.darkModeStore == 'dark') {
        document.documentElement.style.setProperty('--iq-primary-dark', color.primary)
        document.documentElement.style.setProperty('--iq-bg-dark-color', color.bodyBgDark)
      } else {
        // document.documentElement.style.setProperty('--iq-primary', color.bodyBgLight)
        document.documentElement.style.setProperty('--iq-bg-light-color', color.bodyBgLight)
        document.documentElement.style.setProperty('--iq-primary', color.primary)
        document.documentElement.style.setProperty('--iq-primary-light', color.primaryLight)
      }

      this.setPrimaryColor(color)
    },
    reset () {
      this.changeColor({ primary: '#0db5c8', primaryLight: '#b47af3', bodyBgLight: '#efeefd', bodyBgDark: '#1d203f' })
      this.animated = { enter: 'zoomIn', exit: 'zoomOut' }
    },
    logout () {
      // this.logoutState()
      this.$store.commit('resetState')
      localStorage.removeItem('user')
      localStorage.removeItem('access_token')
      this.$router.replace({ name: 'auth1.sign-in1' })
    },
    langChange (lang) {
      this.langChangeState(lang)
      this.$i18n.locale = lang.value
      document.getElementsByClassName('iq-show')[0].classList.remove('iq-show')
      if (lang.value === 'ar') {
        this.rtlAdd(lang)
      } else {
        this.rtlRemove(lang)
      }
    },
    ...mapActions({
      langChangeState: 'Setting/setLangAction',
      rtlAdd: 'Setting/setRtlAction',
      rtlRemove: 'Setting/removeRtlAction',
      logoutState: 'Auth/resetState'
    })
  }
}
</script>
<style>
@import url("../assets/css/custom.css");
</style>
<style scoped></style>
