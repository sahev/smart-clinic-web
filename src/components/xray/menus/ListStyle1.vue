<template>
  <b-collapse tag="ul" :class="className" :visible="open" :id="idName" :accordion="accordianName">
    <li v-for="(item, index) in items" v-show="checkRoles(item)" :key="index"
      :class="item.is_heading ? 'iq-menu-title' : activeLink(item) && item.children ? 'active' : activeLink(item) ? 'active' : ''">
      <i v-if="item.is_heading" class="ri-subtract-line" />
      <span v-if="item.is_heading">{{ $t(item.name) }}</span>
      <router-link :to="item.link" v-if="!item.is_heading"
        :class="`iq-waves-effect ${activeLink(item) && item.children ? 'active' : activeLink(item) ? 'active' : ''}`"
        v-b-toggle="item.name">
        <i :class="item.icon" v-if="item.is_icon_class" />
        <template v-else v-html="item.icon">
        </template>
        <span>{{ $t(item.name) }}</span>
        <i v-if="item.children" class="ri-arrow-right-s-line iq-arrow-right" />
        <small v-html="item.append" :class="item.append_class" />
      </router-link>
      <List v-if="item.children" :items="item.children"
        :open="item.link.name !== '' && activeLink(item) && item.children ? true : !!(item.link.name !== '' && activeLink(item))"
        :idName="item.name" :accordianName="`sidebar-accordion-${item.class_name}`"
        :className="`iq-submenu ${item.class_name}`" />
    </li>
  </b-collapse>
</template>
<script>
import List from './ListStyle1'
import { xray } from '../../../config/pluginInit'
import { Role } from '../../../Model/Roles'
import { mapGetters } from 'vuex'

export default {
  name: 'List',
  props: {
    items: Array,
    className: { type: String, default: 'iq-menu' },
    horizontal: Boolean,
    open: { type: Boolean, default: false },
    idName: { type: String, default: 'sidebar' },
    accordianName: { type: String, default: 'sidebar' }
  },
  components: {
    List
  },
  mounted () {

  },
  data () {
    return {
      userList: []
    }
  },
  computed: {
    ...mapGetters({
      authToken: 'Auth/authToken',
      userState: 'User/userState'
    })
  },
  methods: {
    activeLink (item) {
      return xray.getActiveLink(item, this.$route.name)
    },
    checkRoles (item) {
      if (this.userState.role === Role.SUPER) {
        return true
      }

      if (!item.roles && !item.children) {
        return false
      }

      if (item.roles) {
        let lowerItemRoles = item.roles.map(role => role.toLowerCase())
        let IsValid = lowerItemRoles.includes(this.userState.role)

        if (IsValid) {
          return true
        }
      }
    }
  }
}
</script>
