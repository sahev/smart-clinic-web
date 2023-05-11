<template>
  <div class="iq-global-search" v-if="show && search && !closeSearch">
    <ul class="pl-1">
      <template v-if="filteredList.length > 0">
        <li v-for="(item,index) in filteredList" :key="index" class="iq-bg-primary-hover" @click="closeGlobalSearch">
          <template v-if="!item.is_heading && !item.children" >
            <router-link :to="item.link" v-if="!item.is_heading" class="iq-waves-effect pr-4 list-group-item bg-transparent border-0 iq-bg-primary-hover">
              <i style="margin-right: 5px;" :class="item.icon" v-if="item.is_icon_class"/>
              <template v-else v-html="item.icon">
              </template>
              <span>{{ item.title }}</span>
              <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
            </router-link>
          </template>
        </li>
      </template>
      <template v-else-if="usersList.length > 0" >
        <li v-for="(item) in usersList" :key="item.id" class="iq-bg-primary-hover" @click="closeGlobalSearch">
          <template>
            <router-link :to="`/doctor/profile/${item.id}`" class="iq-waves-effect pr-4 list-group-item bg-transparent border-0 iq-bg-primary-hover">
              <i style="margin-right: 5px;" class="ri-file-user-fill" />
              <span>{{ item.firstName + ' ' + item.lastName }}</span>
              <i  class="ri-arrow-right-s-line iq-arrow-right" />
            </router-link>
          </template>
        </li>
      </template>
      <template v-else>
        <li class="nav-link">Search Not Found</li>
      </template>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import userServices from '../../../services/user'

export default {
  name: 'GlobalSearch',
  props: {
    search: { type: String, default: '' },
    show: { type: Boolean, default: false },
    closeSearch: { type: Boolean, default: false }
  },
  computed: {
    ...mapGetters({
      sidebar: 'Setting/globalSearchState'
    }),
    filteredList () {
      return this.sidebar.filter(item => {
        return item.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  watch: {
    async search (newv) {
      let { data } = await userServices.getAllByName(newv)
      this.usersList = data
      console.log(newv, this.usersList)
    }
  },
  mounted () {
  },
  data () {
    return {
      globalSearch: '',
      usersList: []
    }
  },
  methods: {
    closeGlobalSearch () {
      this.$emit('closeSearch', true)
    }
  }
}
</script>
