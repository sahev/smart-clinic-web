<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Categories</h4>
          </template>
          <template v-slot:headerAction>
            <div>
              <input type="text" @keyup="filter" v-model="filteredText" class="form-control filter-field"
                placeholder="Filter Categories" />
            </div>
            <b-button v-b-modal="'add-category-modal'" variant="primary">Add New</b-button>

          </template>

          <CategoryForm @onCreate="onCreate" />

          <template v-slot:body>
            <b-row>
              <b-col v-show="categories.length > 0" md="12" class="table-responsive">
                <b-table id="dev-table " :items="filteredText.length > 0 ? filteredData : categories" :fields="columns"
                  foot-clone>
                  <template v-slot:cell(name)="data">
                    <span v-if="!data.item.editable">{{ data.item.name }}</span>
                    <input type="text" v-model="data.item.name" v-else class="form-control filter-field">
                  </template>
                  <template v-slot:cell(description)="data">
                    <span v-if="!data.item.editable">{{ data.item.description }}</span>
                    <input type="text" v-model="data.item.description" v-else class="form-control filter-field">
                  </template>
                  <template v-slot:cell(action)="data">
                    <b-button v-if="!data.item.editable" variant=" iq-bg-success mr-1" size="sm" @click="edit(data.item)">
                      <i class="ri-ball-pen-fill m-0"></i>
                    </b-button>
                    <b-button v-else variant=" iq-bg-success mr-1" size="sm" @click="update(data.item)">
                      <i class="ri-save-line m-0"></i>
                    </b-button>
                    <b-button v-if="!data.item.editable" size="sm" variant=" iq-bg-danger" @click="remove(data.item)">
                      <i class="ri-delete-bin-line m-0"></i>
                    </b-button>
                    <b-button v-else variant=" iq-bg-danger mr-1" size="sm" @click="close(data.item)">
                      <i class="ri-close-line m-0"></i>
                    </b-button>
                  </template>

                  <template v-slot:cell(active)="data">

                    <b-form-checkbox v-model="data.item.active" name="check-button" switch @input="toggleStatus(data.item.id)">

                    </b-form-checkbox>
                  </template>
                </b-table>
              </b-col>
            </b-row>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import categoriesService from '../../../services/category'
import CategoryForm from './Forms/CategoryForm.vue'

export default {
  name: 'Categories',
  props: {
    active: String
  },
  watch: {
    active (newVal) {
      if (newVal === 'Categories') {
        this.init()
      }
    }
  },
  async mounted () {
  },
  async created () {
  },
  components: {
    CategoryForm
  },
  computed: {
    ...mapGetters({
      clinicState: 'Clinic/clinicState',
      userState: 'User/userState',
      categoryState: 'Category/categoryState',
      serviceState: 'Service/serviceState'
    })
  },
  methods: {
    ...mapActions({
      setCategoryState: 'Category/setCategoryState'
    }),
    init () {
      this.getAllCategories()
    },
    toggleStatus (id) {
      categoriesService.toggleStatus(id)
    },
    filter () {
      this.filteredData = []

      this.categories.map(category => {
        if (category.name.includes(this.filteredText) || category.description.includes(this.filteredText)) {
          this.filteredData.push(category)
        }
      })
    },
    onCreate (category) {
      this.categories.push(this.parseCategory(category))
      this.setCategoryState(this.cloneObject(this.categories))
    },
    getAllCategories () {
      let categories = this.cloneObject(this.categoryState)
      this.categories = this.parseListCategories(categories)
      console.log(this.categories, 'catego')
    },
    edit (item) {
      this.categories.map(categorie => {
        categorie.editable = false
      })
      item.editable = true
    },
    async update (item) {
      item.editable = false
      console.log(item)
      await categoriesService.update(item)
      this.setCategoryState(this.cloneObject(this.categories))
      this.getAllCategories()
      this.makeSuccessToast('Changes made')
    },
    async remove (item) {
      let { data } = await categoriesService.deleteById(item.id)
      if (data) {
        let indexFilteredData = this.filteredData.indexOf(item)
        this.filteredData.splice(indexFilteredData, 1)

        let indexCategories = this.categories.indexOf(item)
        this.categories.splice(indexCategories, 1)
        this.setCategoryState(this.cloneObject(this.categories))
        this.makeSuccessToast('Category deleted')
        return
      }
      this.makeWarningToast('This category is in use')
    },
    close (item) {
      item.editable = false
    },
    parseCategory (category) {
      category.editable = false
      return category
    },
    parseListCategories (categories) {
      if (!categories) {
        return
      }

      return categories.map(category => this.parseCategory(category))
    }
  },
  data () {
    return {
      filteredData: [],
      filteredText: '',
      category: {
        name: '',
        description: '',
        clinicId: null
      },
      defaultCategory: {
        name: '',
        description: ''
      },
      columns: [
        { label: 'Name', key: 'name', class: 'text-left', sortable: true },
        { label: 'Description', key: 'description', class: 'text-left' },
        { label: 'Action', key: 'action', class: 'text-center' },
        { label: 'Active', key: 'active', class: 'text-center' }
      ],
      categories: []
    }
  }
}
</script>
<style>
.filter-field {
  height: 35px !important;
  margin-left: -10px !important;
  width: 100px;
}
</style>
