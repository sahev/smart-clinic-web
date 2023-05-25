import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

/* Public Web */
const PublicHome = () => import('../WebSite/views/Home/Home.vue')

/* Layouts */
const Layout1 = () => import('../layouts/Layout1')
const Default = () => import( '../layouts/BlankLayout')
const AuthLayout1 = () => import( '../layouts/AuthLayouts/AuthLayout1')

/* Dashboards View */
const Dashboard2 = () => import('../views/Dashboards/Dashboard2.vue')
const Dashboard1 = () => import('../views/Dashboards/Dashboard1.vue')

/* UIElements View */
const Settings = () => import('../views/Settings/Settings.vue')
const SuperDashboard = () => import('../views/Super/Dashboard.vue')
const SuperUsers = () => import('../views/Super/Users.vue')
const SuperClinics = () => import('../views/Super/Clinics.vue')

/* Authentic View */
const SignIn1 = () => import('../views/AuthPages/Default/SignIn1')
const SignUp1 = () => import('../views/AuthPages/Default/SignUp1')
const ClinicSignUp = () => import('../views/AuthPages/Default/ClinicSignUp')
const DetailsClinicSignUp = () => import('../views/AuthPages/Default/DetailsClinicSignUp')
const RecoverPassword1 = () => import('../views/AuthPages/Default/RecoverPassword1')
const LockScreen1 = () => import('../views/AuthPages/Default/LockScreen1')
const ConfirmMail1 = () => import('../views/AuthPages/Default/ConfirmMail1')

/* Extra Pages */
const ErrorPage = () => import('../views/Pages/ErrorPage')
const ComingSoon = () => import('../views/Pages/ComingSoon')
const Maintenance = () => import('../views/Pages/Maintenance')
const TimeLine = () => import('../views/Pages/TimeLines')
const Pricing = () => import('../views/Pages/Pricing')
const Pricing1 = () => import('../views/Pages/Pricing1')
const BlankPage = () => import('../views/Pages/BlankPage')
const FAQ = () => import('../views/Pages/FAQ')
const Invoice = () => import('../views/Pages/Invoice')

/* Apps Views */
const EmailListing = () => import('../views/Apps/Email/EmailListing')
const EmailCompose = () => import('../views/Apps/Email/EmailCompose')
const Calendar = () => import('../views/Apps/Calendar/Calendar')
const ChatIndex = () => import('../views/Apps/Chat/Index')

/* Doctor CRUD */
const DoctorProfile = () => import('../views/Users/Doctors/DoctorProfile.vue')
const DoctorProfileEdit = () => import('../views/Users/Doctors/DoctorProfileEdit.vue')

/* Staff CRUD */
const StaffProfile = () => import('../views/Users/Staffs/StaffProfile.vue')
const StaffProfileEdit = () => import('../views/Users/Staffs/StaffProfileEdit.vue')

/* Patients CRUD */
const PatientProfile = () => import('../views/Users/Patients/PatientProfile.vue')
const PatientProfileEdit = () => import('../views/Users/Patients/PatientProfileEdit.vue')
const PatientList = () => import('../views/Users/Patients/PatientList.vue')

/* User View */
const AddUser = () => import('../views/Users/AddUser')
const UserList = () => import('../views/Users/UserList')
/* Todo */
const Callback = () => import('../views/AuthPages/Default/Callback')

Vue.use(VueRouter)

const childRoutes = (prop, mode) => [
  {
    path: '/',
    name: prop + '.home-1',
    meta: { dark: mode, auth: true, name: 'Home 1' },
    component: Dashboard1
  },
  {
    path: 'home-2',
    name: prop + '.home-2',
    meta: { dark: mode, auth: true, name: 'Home 2' },
    component: Dashboard2
  }
]

const appChildRoute = (prop, mode = false) => [
  {
    path: 'calendar',
    name: prop + '.calendar',
    meta: { dark: mode, auth: true, name: 'Calendar' },
    component: Calendar
  },
  {
    path: 'chat',
    name: prop + '.chat',
    meta: { dark: mode, auth: true, name: 'Chat' },
    component: ChatIndex
  },
  {
    path: 'email',
    name: prop + '.email',
    meta: { dark: mode, auth: true, name: 'Email' },
    component: EmailListing
  },
  {
    path: 'email-compose',
    name: prop + '.email.compose',
    meta: { dark: mode, auth: true, name: 'New Email' },
    component: EmailCompose
  }
]

const authChildRoutes = (prop, mode = false) => [
  {
    path: 'sign-in1',
    name: prop + '.sign-in1',
    meta: { dark: mode, auth: false },
    component: SignIn1
  },
  {
    path: 'sign-up1',
    name: prop + '.sign-up1',
    meta: { dark: mode, auth: false },
    component: SignUp1
  },
  {
    path: 'clinic-sign-up',
    name: prop + '.clinic-sign-up',
    meta: { dark: mode, auth: false },
    component: ClinicSignUp
  },
  {
    path: 'details-clinic-sign-up',
    name: prop + '.details-clinic-sign-up',
    meta: { dark: mode, auth: false },
    component: DetailsClinicSignUp
  },
  {
    path: 'password-reset1',
    name: prop + '.password-reset1',
    meta: { dark: mode, auth: false },
    component: RecoverPassword1
  },
  {
    path: 'lock-screen1',
    name: prop + '.lock-screen1',
    meta: { dark: mode, auth: false },
    component: LockScreen1
  },
  {
    path: 'confirm-mail1',
    name: prop + '.confirm-mail1',
    meta: { dark: mode, auth: false },
    component: ConfirmMail1
  }
]

const defaultlayout = (prop, mode = false) => [
  {
    path: 'timeline',
    name: prop + '.timeline',
    meta: { dark: mode, auth: true, name: 'Timeline' },
    component: TimeLine
  },
  {
    path: 'invoice',
    name: prop + '.invoice',
    meta: { dark: mode, auth: true, name: 'Invoice' },
    component: Invoice
  },
  {
    path: 'blank-page',
    name: prop + '.blank-page',
    meta: { dark: mode, auth: true, name: 'Blank Page' },
    component: BlankPage
  },
  {
    path: 'pricing',
    name: prop + '.pricing',
    meta: { dark: mode, auth: true, name: 'Pricing' },
    component: Pricing
  },
  {
    path: 'pricing-1',
    name: prop + '.pricing1',
    meta: { dark: mode, auth: true, name: 'Pricing 1' },
    component: Pricing1
  },
  {
    path: 'faq',
    name: prop + '.faq',
    meta: { dark: mode, auth: true, name: 'Faq' },
    component: FAQ
  }
]

const pagesChildRoutes = (prop, mode = false) => [
  {
    path: 'error/:code',
    name: prop + '.error',
    meta: { dark: mode, auth: true },
    component: ErrorPage
  },
  {
    path: 'coming-soon',
    name: prop + '.coming-soon',
    meta: { dark: mode, auth: true },
    component: ComingSoon
  },
  {
    path: 'maintenance',
    name: prop + '.maintenance',
    meta: { dark: mode, auth: true },
    component: Maintenance
  }
]
const doctorChildRoute = (prop, mode = false) => [
  {
    path: 'profile/:id',
    name: prop + '.profile',
    meta: { dark: mode, auth: true, name: 'Profile' },
    component: DoctorProfile
  },
  {
    path: 'profile-edit/:id',
    name: prop + '.edit',
    meta: { dark: mode, auth: true, name: 'Edit Profile' },
    component: DoctorProfileEdit
  },
  {
    path: 'add-user',
    name: prop + '.add',
    meta: { dark: mode, auth: true, name: 'Add Profile' },
    component: AddUser
  },
  {
    path: 'user-list',
    name: prop + '.list',
    meta: { dark: mode, auth: true, name: 'User List' },
    component: UserList
  }
]

const staffChildRoute = (prop, mode = false) => [
  {
    path: 'profile/:id',
    name: prop + '.profile',
    meta: { dark: mode, auth: true, name: 'Profile' },
    component: StaffProfile
  },
  {
    path: 'profile-edit/:id',
    name: prop + '.edit',
    meta: { dark: mode, auth: true, name: 'Edit Profile' },
    component: StaffProfileEdit
  },
  {
    path: 'add-user',
    name: prop + '.add',
    meta: { dark: mode, auth: true, name: 'Add Profile' },
    component: AddUser
  },
  {
    path: 'user-list',
    name: prop + '.list',
    meta: { dark: mode, auth: true, name: 'User List' },
    component: UserList
  }
]

const patientChildRoute = (prop, mode = false) => [
  {
    path: 'profile/:id',
    name: prop + '.profile',
    meta: { dark: mode, auth: true, name: 'Profile' },
    component: PatientProfile
  },
  {
    path: 'profile-edit/:id',
    name: prop + '.edit',
    meta: { dark: mode, auth: true, name: 'Edit Profile' },
    component: PatientProfileEdit
  },
  {
    path: 'add-user',
    name: prop + '.add',
    meta: { dark: mode, auth: true, name: 'Add Profile' },
    component: AddUser
  },
  {
    path: 'user-list',
    name: prop + '.list',
    meta: { dark: mode, auth: true, name: 'User List' },
    component: PatientList
  }
]

const superChildRoute = (prop, mode = false) => [
  {
    path: 'dashboard',
    name: prop + '.dashboard',
    meta: { dark: mode, auth: true, name: 'SuperDashboard' },
    component: SuperDashboard
  },
  {
    path: 'users',
    name: prop + '.users',
    meta: { dark: mode, auth: true, name: 'SuperUsers' },
    component: SuperUsers
  },
  {
    path: 'clinics',
    name: prop + '.clinics',
    meta: { dark: mode, auth: true, name: 'SuperClinics' },
    component: SuperClinics
  }
]

const adminChildRoute = (prop, mode = false) => [
  {
    path: '/',
    name: prop + '.clinic',
    meta: { dark: mode, auth: true, name: 'clinic' },
    component: Settings
  }
  // {
  //   path: 'staffs',
  //   name: prop + '.staffs',
  //   meta: { dark: mode, auth: true, name: 'staffs' },
  //   component: Staffs
  // },
  // {
  //   path: 'clinics',
  //   name: prop + '.clinics',
  //   meta: { dark: mode, auth: true, name: 'clinics' },
  //   component: Clinics
  // },
  // {
  //   path: 'services',
  //   name: prop + '.services',
  //   meta: { dark: mode, auth: true, name: 'services' },
  //   component: Services
  // }
]

const routes = [
  {
    path: '/home',
    name: 'publichome',
    component: PublicHome,
    meta: { auth: false }
  },
  {
    path: '/super',
    name: 'super',
    component: Layout1,
    meta: { auth: true },
    children: superChildRoute('super')
  },
  {
    path: '/settings',
    name: 'settings',
    component: Layout1,
    meta: { auth: true },
    children: adminChildRoute('settings')
  },
  {
    path: '/',
    name: 'dashboard',
    component: Layout1,
    meta: { auth: true },
    children: childRoutes('dashboard')
  },
  {
    path: '/auth',
    name: 'auth1',
    component: AuthLayout1,
    meta: { auth: false },
    children: authChildRoutes('auth1')
  },
  {
    path: '/pages',
    name: 'pages',
    component: Default,
    meta: { auth: true },
    children: pagesChildRoutes('default')
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: Layout1,
    meta: { auth: true },
    children: defaultlayout('extra-pages')
  },
  {
    path: '/app',
    name: 'app',
    component: Layout1,
    meta: { auth: true },
    children: appChildRoute('app')
  },
  {
    path: '/doctor',
    name: 'doctor',
    component: Layout1,
    meta: { auth: true },
    children: doctorChildRoute('doctor')
  },
  {
    path: '/user',
    name: 'user',
    component: Layout1,
    meta: { auth: true },
    children: staffChildRoute('user')
  },
  {
    path: '/patients',
    name: 'patients',
    component: Layout1,
    meta: { auth: true },
    children: patientChildRoute('patients')
  },
  {
    path: '/callback',
    name: 'callback',
    meta: { auth: false },
    component: Callback
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isLoggedIn = store.getters['Auth/isLoggedIn']
  let pageMustBeAuth = to.meta.auth
  // var domains = window.location.hostname.split('.')
  // let isSubdomainApp = domains[0] === 'app'

  if (isLoggedIn && pageMustBeAuth) {
    next()
  } else if (to.path === '/auth/sign-in1' && !pageMustBeAuth) {
    next()
  } else if (!pageMustBeAuth) {
    next()
  } else {
    next('/auth/sign-in1')
  }

  // PROTECT WITH SUBDOMAIN

  // if (domains.length === 1) {
  //   // with subdomain
  //   if (!isLoggedIn && to.path === '/home') {
  //     next()
  //   } else if (to.path === '/auth/sign-in1') {
  //     next('/home')
  //   }
  // } else if (to.path === '/home' && isSubdomainApp) {
  //   next('/auth/sign-in1')
  // } else if (domains[0] !== 'app') {
  //   next()
  // }

  // if (isSubdomainApp) {
  //   if (isLoggedIn && pageMustBeAuth) {
  //     next()
  //   } else if (to.path === '/auth/sign-in1' && !pageMustBeAuth) {
  //     next()
  //   } else if (!pageMustBeAuth) {
  //     next()
  //   } else {
  //     next('/auth/sign-in1')
  //   }
  // } else if (to.path !== '/home' && !isSubdomainApp) {
  //   next('/home')
  // } else {
  //   next()
  // }
})

export default router
