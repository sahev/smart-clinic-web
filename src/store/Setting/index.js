import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import SideBarItems from '../../MenusOptions/json/SideBar'

const state = {
  horizontalMenu: false,
  miniSidebarMenu: false,
  lang: { title: 'English', value: 'en', image: require('../../assets/images/small/flag-01.png') },
  langOption: [
    { title: 'English', value: 'en', image: require('../../assets/images/small/flag-01.png') },
    { title: 'Portuguese', value: 'pt', image: require('../../assets/images/small/br.png') },
    { title: 'Spanish', value: 'es', image: require('../../assets/images/small/flag-600.png') }
  ],
  primaryColor: '',
  darkMode: 'light',
  colors: [
    { primary: '#0db5c8', primaryLight: '#b47af3', bodyBgLight: '#eff7f8', bodyBgDark: '#2c2c2c' },
    { primary: '#827af3', primaryLight: '#b47af3', bodyBgLight: '#efeefd', bodyBgDark: '#2c2c2c' },
    { primary: '#e07af3', primaryLight: '#f37ab7', bodyBgLight: '#f7eefd', bodyBgDark: '#2c2c2c' },
    { primary: '#6475c7', primaryLight: '#7abbf3', bodyBgLight: '#eaf5ff', bodyBgDark: '#2c2c2c' },
    { primary: '#c76464', primaryLight: '#f3c37a', bodyBgLight: '#fff8ea', bodyBgDark: '#2c2c2c' },
    { primary: '#c764ad', primaryLight: '#de8ba9', bodyBgLight: '#ffeaf5', bodyBgDark: '#2c2c2c' },
    { primary: '#64c7ac', primaryLight: '#a3f37a', bodyBgLight: '#f0ffea', bodyBgDark: '#2c2c2c' },
    { primary: '#8ac764', primaryLight: '#dbf37a', bodyBgLight: '#f7ffea', bodyBgDark: '#2c2c2c' }
  ],
  authUser: {
    auth: false,
    authType: false,
    user: {}
  },
  users: [
    {
      id: 'sh46s546sdg564sdffs4hsd6fh',
      name: 'Admin Xray',
      mobileNo: null,
      email: 'admin@xray.com',
      profileImage: null,
      password: 'admin123'
    }
  ],
  globalSearch: SideBarItems,
  bookmark: [
    {
      title: 'Video Chat',
      link: { 'name': 'app.chat' },
      is_icon_class: true,
      icon: 'ri-message-line'
    },
    {
      title: 'Product Listing',
      link: { 'name': 'app.e-commerce.index' },
      is_icon_class: true,
      icon: 'ri-file-list-line'
    },
    {
      title: 'Social App',
      link: { 'name': 'social.list' },
      is_icon_class: true,
      icon: 'ri-question-answer-line'
    },
    {
      title: 'Todo',
      link: { name: 'app.todo' },
      is_icon_class: true,
      icon: 'ri-chat-check-line'
    },
    {
      title: 'Inbox',
      link: { 'name': 'app.email' },
      is_icon_class: true,
      icon: 'ri-inbox-line'
    }

  ],
  activePage: {
    name: 'Dashboard',
    breadCrumb: [
      {
        html: '<i class="ri-home-4-line mr-1 float-left"></i>Home',
        to: { name: 'mini.dashboard.home-1' }
      },
      {
        text: '',
        href: '#'
      }
    ]
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
