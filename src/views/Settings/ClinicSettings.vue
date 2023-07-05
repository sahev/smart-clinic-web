<template>
  <iq-card>
    <template v-slot:body>

      <tab-nav @change="onClick($event)" tabs class="nav-fill mb-3" id="pills-tab-1">
        <tab-nav-items :active="true" id="pills-clinics-tab-fill" href="#pills-clinics-fill"
          ariaControls="pills-clinics-fill" role="tab" :ariaSelected="true" :title="$t('settings.unitTab.name')" />
        <tab-nav-items :active="false" id="pills-services-tab-fill" href="#pills-services-fill"
          ariaControls="pills-services-fill" role="tab" :ariaSelected="false" :title="$t('settings.servicesTab.name')" />
        <tab-nav-items :active="false" id="pills-categories-tab-fill" href="#pills-categories-fill"
          ariaControls="pills-categories-fill" role="tab" :ariaSelected="false" title="Categories" />
        <tab-nav-items :active="false" id="pills-staffs-tab-fill" href="#pills-staffs-fill"
          ariaControls="pills-staffs-fill" role="tab" :ariaSelected="false" title="Staffs" />
        <tab-nav-items :active="false" id="pills-communication-tab-fill" href="#pills-communication-fill"
          ariaControls="pills-communication-fill" role="tab" :ariaSelected="false" title="Communication" />
      </tab-nav>
      <tab-content id="pills-tabContent-1" class="mt-0">
        <tab-content-item :active="true" id="pills-clinics-fill" aria-labelled-by="pills-clinics-tab-fill">
          <Units :active="activePage"/>
        </tab-content-item>
        <tab-content-item :active="false" id="pills-services-fill" aria-labelled-by="pills-services-tab-fill">
          <Services :active="activePage" />
        </tab-content-item>
        <tab-content-item :active="false" id="pills-categories-fill" aria-labelled-by="pills-categories-tab-fill">
          <Categories :active="activePage" />
        </tab-content-item>
        <tab-content-item :active="false" id="pills-staffs-fill" aria-labelled-by="pills-staffs-tab-fill">
          <Staffs :active="activePage" />
        </tab-content-item>
        <tab-content-item :active="false" id="pills-communication-fill" aria-labelled-by="pills-communication-tab-fill">
          <Communication :active="activePage" />
        </tab-content-item>
      </tab-content>
    </template>
  </iq-card>
</template>

<script>
import Units from './components/Units.vue'
import Services from './components/Services.vue'
import Staffs from './components/Staffs.vue'
import Categories from './components/Categories.vue'
import Communication from './components/Communication.vue'

export default {
  name: 'AddUser',
  components: {
    Units,
    Services,
    Staffs,
    Categories,
    Communication
  },
  async created () {

  },
  data () {
    return {
      activePage: 'Unit',
      active: false,
      activeClinics: true,
      activeServices: false,
      activeCategories: false
    }
  },
  computed: {

  },
  methods: {
    onClick (e) {
      this.activePage = e.target.innerHTML
    }
  }
}
</script>
