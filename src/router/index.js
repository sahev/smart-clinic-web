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
const Dashboard3 = () => import('../views/Dashboards/Dashboard3')
const Dashboard4 = () => import('../views/Dashboards/Dashboard4')
const Dashboard5 = () => import('../views/Dashboards/Dashboard5')
/* UIElements View */
const Settings = () => import('../views/Settings/Settings.vue')
const SuperDashboard = () => import('../views/Super/Dashboard.vue')
const SuperUsers = () => import('../views/Super/Users.vue')
const SuperClinics = () => import('../views/Super/Clinics.vue')
const UiAlerts = () => import('../views/core/UiAlerts.vue')
const UiButtons = () => import('../views/core/UiButtons.vue')
const UiBadges = () => import('../views/core/UiBadges.vue')
const UiBreadcrumb = () => import('../views/core/UiBreadcrumb.vue')
const UiColors = () => import('../views/core/UiColors.vue')
const UiTypography = () => import('../views/core/UiTypography.vue')
const UiCards = () => import('../views/core/UiCards.vue')
const UiCarousel = () => import('../views/core/UiCarousel.vue')
const UiEmbedVideo = () => import('../views/core/UiEmbedVideo.vue')
const UiGrid = () => import('../views/core/UiGrid.vue')
const UiModal = () => import('../views/core/UiModal.vue')
const UiListGroup = () => import('../views/core/UiListGroup.vue')
const UiImages = () => import('../views/core/UiImages.vue')
const UiMediaObject = () => import('../views/core/UiMediaObject.vue')
const UiTooltips = () => import('../views/core/UiTooltips.vue')
const UiPopovers = () => import('../views/core/UiPopovers.vue')
const UiNotifications = () => import('../views/core/UiNotifications.vue')
const UiTabs = () => import('../views/core/UiTabs.vue')
const UiPagination = () => import('../views/core/UiPagination.vue')
const UiProgressBars = () => import('../views/core/UiProgressBars.vue')
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
/* Icon Views */
const IconDripicons = () => import('../views/Icons/IconDripicons')
const IconFontawesome5 = () => import('../views/Icons/IconFontawesome5')
const IconLineAwesome = () => import('../views/Icons/IconLineAwesome')
const IconRemixicon = () => import('../views/Icons/IconRemixicon')
const IconUnicons = () => import('../views/Icons/IconUnicons')
/* Tables Views */
const DataTable = () => import('../views/Tables/DataTable')
const TablesBasic = () => import('../views/Tables/TablesBasic')
const EditableTable = () => import('../views/Tables/EditableTable')
const ApexCharts = () => import('../views/Charts/ApexCharts')
const AmCharts = () => import('../views/Charts/AmCharts')
const MorrisCharts = () => import('../views/Charts/MorrisCharts')
const HighCharts = () => import('../views/Charts/HighCharts')
const GoogleMaps = () => import('../views/Maps/GoogleMaps')
const VectorMaps = () => import('../views/Maps/VectorMaps')
/* Form View */
const FormLayout = () => import('../views/Forms/FormLayout')
const FormValidates = () => import('../views/Forms/FormValidates')
const FormSwitches = () => import('../views/Forms/FormSwitches')
const FormRadios = () => import('../views/Forms/FormRadios')
const FormCheckboxes = () => import('../views/Forms/FormCheckboxes')

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
/* Plugins Views */
const DatepickerDemo = () => import('../views/Plugins/DatepickerDemo')
const SelectDemo = () => import('../views/Plugins/SelectDemo')
const DragDropDemo = () => import('../views/Plugins/DragDropDemo')
const AppTreeView = () => import('../views/Plugins/AppTreeView')

Vue.use(VueRouter)

const childRoutes = (prop, mode) => [
  {
    path: 'home-1',
    name: prop + '.home-1',
    meta: { dark: mode, auth: true, name: 'Home 1' },
    component: Dashboard1
  },
  {
    path: 'drag',
    name: prop + '.home-1',
    meta: { dark: mode, name: 'Home 1' },
    component: DragDropDemo
  },
  {
    path: 'home-2',
    name: prop + '.home-2',
    meta: { dark: mode, auth: true, name: 'Home 2' },
    component: Dashboard2
  },
  {
    path: 'home-3',
    name: prop + '.home-3',
    meta: { dark: mode, auth: true, name: 'Home 3' },
    component: Dashboard3
  },
  {
    path: 'home-5',
    name: prop + '.home-5',
    meta: { dark: mode, auth: true, name: 'Home 5' },
    component: Dashboard5
  },
  {
    path: '/',
    name: prop + '.home-4',
    meta: { dark: mode, auth: true, name: 'Home 4' },
    component: Dashboard4
  }
]

const coreChildRoute = (prop, mode) => [
  {
    path: 'ui-colors',
    name: prop + '.color',
    meta: { dark: mode, auth: true, name: 'Colors' },
    component: UiColors
  },
  {
    path: 'ui-typography',
    name: prop + '.typography',
    meta: { dark: mode, auth: true, name: 'Typography' },
    component: UiTypography
  },
  {
    path: 'ui-alerts',
    name: prop + '.alert',
    meta: { dark: mode, auth: true, name: 'Alert' },
    component: UiAlerts
  },
  {
    path: 'ui-buttons',
    name: prop + '.button',
    meta: { dark: mode, auth: true, name: 'Button' },
    component: UiButtons
  },
  {
    path: 'ui-breadcrumb',
    name: prop + '.breadcrumb',
    meta: { dark: mode, auth: true, name: 'Breadcrumb' },
    component: UiBreadcrumb
  },
  {
    path: 'ui-badges',
    name: prop + '.badges',
    meta: { dark: mode, auth: true, name: 'Badges' },
    component: UiBadges
  },
  {
    path: 'ui-cards',
    name: prop + '.cards',
    meta: { dark: mode, auth: true, name: 'Card' },
    component: UiCards
  },
  {
    path: 'ui-carousel',
    name: prop + '.carousel',
    meta: { dark: mode, auth: true, name: 'Carousel' },
    component: UiCarousel
  },
  {
    path: 'ui-grid',
    name: prop + '.grid',
    meta: { dark: mode, auth: true, name: 'Grid' },
    component: UiGrid
  },
  {
    path: 'ui-embed-video',
    name: prop + '.embed-video',
    meta: { dark: mode, auth: true, name: 'Embed Video' },
    component: UiEmbedVideo
  },
  {
    path: 'ui-modal',
    name: prop + '.modal',
    meta: { dark: mode, auth: true, name: 'Model' },
    component: UiModal
  },
  {
    path: 'ui-listgroup',
    name: prop + '.listgroup',
    meta: { dark: mode, auth: true, name: 'List Group' },
    component: UiListGroup
  },
  {
    path: 'ui-images',
    name: prop + '.images',
    meta: { dark: mode, auth: true, name: 'Image' },
    component: UiImages
  },
  {
    path: 'ui-media-object',
    name: prop + '.media-object',
    meta: { dark: mode, auth: true, name: 'Media Object' },
    component: UiMediaObject
  },
  {
    path: 'ui-pagination',
    name: prop + '.pagination',
    meta: { dark: mode, auth: true, name: 'Paginations' },
    component: UiPagination
  },
  {
    path: 'ui-progressbars',
    name: prop + '.progressbars',
    meta: { dark: mode, auth: true, name: 'Progressbar' },
    component: UiProgressBars
  },
  {
    path: 'ui-tooltips',
    name: prop + '.tooltips',
    meta: { dark: mode, auth: true, name: 'Tooltip' },
    component: UiTooltips
  },
  {
    path: 'ui-popovers',
    name: prop + '.popovers',
    meta: { dark: mode, auth: true, name: 'Popover' },
    component: UiPopovers
  },
  {
    path: 'ui-notifications',
    name: prop + '.notifications',
    meta: { dark: mode, auth: true, name: 'Notification' },
    component: UiNotifications
  },
  {
    path: 'ui-tabs',
    name: prop + '.tabs',
    meta: { dark: mode, auth: true, name: 'Tabs' },
    component: UiTabs
  }
]
const formChildRoute = (prop, mode = false) => [
  {
    path: 'form-layout',
    name: prop + '.layout',
    meta: { dark: mode, auth: true, name: 'Layout' },
    component: FormLayout
  },
  {
    path: 'form-validate',
    name: prop + '.validate',
    meta: { dark: mode, auth: true, name: 'Validate' },
    component: FormValidates
  },
  {
    path: 'form-switches',
    name: prop + '.switch',
    meta: { dark: mode, auth: true, name: 'Switch' },
    component: FormSwitches
  },
  {
    path: 'form-radios',
    name: prop + '.radio',
    meta: { dark: mode, auth: true, name: 'Radio' },
    component: FormRadios
  },
  {
    path: 'form-checkboxes',
    name: prop + '.checkbox',
    meta: { dark: mode, auth: true, name: 'Checkbox' },
    component: FormCheckboxes
  }
]

const tableChildRoute = (prop, mode = false) => [
  {
    path: 'tables-basic',
    name: prop + '.basic',
    meta: { dark: mode, auth: true, name: 'Basic' },
    component: TablesBasic
  },
  {
    path: 'data-table',
    name: prop + '.dataTable',
    meta: { dark: mode, auth: true, name: 'Datatable' },
    component: DataTable
  },
  {
    path: 'editable',
    name: prop + '.editable',
    meta: { dark: mode, auth: true, name: 'Editable' },
    component: EditableTable
  }
]

const iconChildRoute = (prop, mode = false) => [
  {
    path: 'dripicons',
    name: prop + '.dripicons',
    meta: { dark: mode, auth: true, name: 'Dripicons' },
    component: IconDripicons
  },
  {
    path: 'fontawesome-5',
    name: prop + '.fontawesome-5',
    meta: { dark: mode, auth: true, name: 'Font Awsome' },
    component: IconFontawesome5
  },
  {
    path: 'lineawesome',
    name: prop + '.lineawesome',
    meta: { dark: mode, auth: true, name: 'Line Awsome' },
    component: IconLineAwesome
  },
  {
    path: 'remixicon',
    name: prop + '.remixicon',
    meta: { dark: mode, auth: true, name: 'Remixicon' },
    component: IconRemixicon
  },
  {
    path: 'unicons',
    name: prop + '.unicons',
    meta: { dark: mode, auth: true, name: 'Unicon' },
    component: IconUnicons
  }
]

const chartChildRoutes = (prop, mode = false) => [
  {
    path: 'apex-charts',
    name: prop + '.apex',
    meta: { dark: mode, auth: true, name: 'Apex Chat' },
    component: ApexCharts
  },
  {
    path: 'am-charts',
    name: prop + '.am',
    meta: { dark: mode, auth: true, name: 'Am Chart' },
    component: AmCharts
  },
  {
    path: 'high-charts',
    name: prop + '.high',
    meta: { dark: mode, auth: true, name: 'High Chart' },
    component: HighCharts
  },
  {
    path: 'morris-charts',
    name: prop + '.morris',
    meta: { dark: mode, auth: true, name: 'Mirris Chart' },
    component: MorrisCharts
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

const mapChildRoute = (prop, mode = false) => [
  {
    path: 'google-maps',
    name: prop + '.google',
    meta: { dark: mode, auth: true, name: 'Google map' },
    component: GoogleMaps
  },
  {
    path: 'vector-maps',
    name: prop + '.vector',
    meta: { dark: mode, auth: true, name: 'Vector Detail' },
    component: VectorMaps
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

const pluginsChildRoute = (prop, mode = false) => [
  {
    path: 'datepicker',
    name: prop + '.datepicker',
    meta: { dark: mode, auth: false, name: 'Datepicker' },
    component: DatepickerDemo
  },
  {
    path: 'select',
    name: prop + '.select',
    meta: { dark: mode, auth: false, name: 'Select' },
    component: SelectDemo
  },
  {
    path: 'draggable',
    name: prop + '.draggable',
    meta: { dark: mode, auth: false, name: 'Draggable' },
    component: DragDropDemo
  },
  {
    path: 'treeview',
    name: prop + '.treeview',
    meta: { dark: mode, auth: false, name: 'Tree View' },
    component: AppTreeView
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
    path: '/core',
    name: 'core',
    component: Layout1,
    meta: { auth: true },
    children: coreChildRoute('core')
  },
  {
    path: '/table',
    name: 'table',
    component: Layout1,
    meta: { auth: true },
    children: tableChildRoute('table')
  },
  {
    path: '/chart',
    name: 'chart',
    component: Layout1,
    meta: { auth: true },
    children: chartChildRoutes('chart')
  },
  {
    path: '/icon',
    name: 'icon',
    component: Layout1,
    meta: { auth: true },
    children: iconChildRoute('icon')
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
    path: '/map',
    name: 'map',
    component: Layout1,
    meta: { auth: true },
    children: mapChildRoute('map')
  },
  {
    path: '/form',
    name: 'form',
    component: Layout1,
    meta: { auth: true },
    children: formChildRoute('form')
  },
  {
    path: '/plugins',
    name: 'plugins',
    component: Layout1,
    meta: { auth: false },
    children: pluginsChildRoute('plugins')
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
