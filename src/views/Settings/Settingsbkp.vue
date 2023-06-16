<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <iq-card>
          <tab-nav @change="onClick($event)" tabs class="nav-fill mb-3" id="pills-tab-1">
            <tab-nav-items :active="true" id="pills-clinics-tab-fill" href="#pills-clinics-fill"
              ariaControls="pills-clinics-fill" role="tab" :ariaSelected="true" :title="$t('settings.unitTab.name')" />
            <tab-nav-items :active="false" id="pills-services-tab-fill" href="#pills-services-fill"
              ariaControls="pills-services-fill" role="tab" :ariaSelected="false" :title="$t('settings.servicesTab.name')"  />
            <tab-nav-items :active="false" id="pills-categories-tab-fill" href="#pills-categories-fill"
              ariaControls="pills-categories-fill" role="tab" :ariaSelected="false" title="Categories" />
            <tab-nav-items :active="false" id="pills-staffs-tab-fill" href="#pills-staffs-fill"
              ariaControls="pills-staffs-fill" role="tab" :ariaSelected="false" title="Staffs" />
          </tab-nav>
          <tab-content id="pills-tabContent-1" class="mt-0">
            <tab-content-item :active="true" id="pills-clinics-fill" aria-labelled-by="pills-clinics-tab-fill">
              <Units />
            </tab-content-item>
            <tab-content-item :active="false" id="pills-services-fill" aria-labelled-by="pills-services-tab-fill">
              <Services :active="activePage"/>
            </tab-content-item>
            <tab-content-item :active="false" id="pills-categories-fill" aria-labelled-by="pills-categories-tab-fill">
              <Categories :active="activePage"/>
            </tab-content-item>
            <tab-content-item :active="false" id="pills-staffs-fill" aria-labelled-by="pills-staffs-tab-fill">
              <Staffs :active="activePage"/>
            </tab-content-item>
          </tab-content>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions } from 'vuex'
import Units from './components/Units.vue'
import Services from './components/Services.vue'
import Staffs from './components/Staffs.vue'
import Categories from './components/Categories.vue'
import servicesTypeService from '../../services/serviceTypes'
import categoryServices from '../../services/category'

export default {
  name: 'SettingsPage',
  data () {
    return {
      activePage: 'Unit',
      active: false,
      activeClinics: true,
      activeServices: false,
      activeCategories: false
    }
  },
  async mounted () {
    await this.init()
  },
  firestore () {
    return {
    }
  },
  components: {
    Units,
    Services,
    Staffs,
    Categories
  },
  beforeMount () {
  },
  methods: {
    ...mapActions({
      setCategoryState: 'Category/setCategoryState',
      setServiceState: 'Service/setServiceState'
    }),
    onClick (e) {
      this.activePage = e.target.innerHTML
    },
    async init () {
      await this.getAllCategories()
      await this.getAllServices()
    },
    async getAllCategories () {
      let { data } = await categoryServices.getAll()
      this.setCategoryState(data)
    },
    async getAllServices () {
      let { data } = await servicesTypeService.getAll()
      this.setServiceState(data)
    }
  },
  computed: {
  }
}
</script>
<style scoped>
.nav-tabs .nav-link.active {
  border-bottom: 2px solid #089bab;
  color: #089bab;
  border-top-left-radius: 50% !important;
  border-top-right-radius: 50% !important;
}
</style>
