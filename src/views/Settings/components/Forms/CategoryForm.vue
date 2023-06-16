<template>
  <b-container fluid>

    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
      <b-modal id="add-category-modal" title="Add Category" hide-footer>

        <form class="mt-4" novalidate>
          <ValidationProvider vid="name" name="Category name" rules="required" v-slot="{ errors }">
            <div class="form-group">
              <label for="category">Category</label>
              <input type="text" v-model="category.name"
                :class="'form-control mb-0' + (errors.length > 0 ? ' is-invalid' : '')" id="category"
                aria-describedby="category" placeholder="Category name">
              <div class="invalid-feedback">
                <span>{{ errors[0] }}</span>
              </div>
            </div>
          </ValidationProvider>
            <div class="form-group ">
              <label for="category-description">Category Description</label>
              <b-form-textarea type="category" v-model="category.description" place holder="Enter category description"
                rows="5"></b-form-textarea>
            </div>
        </form>
        <hr class="solid">
        <b-button class="float-right" variant="primary" @click="handleSubmit(register)">Register</b-button>
      </b-modal>
    </ValidationObserver>

  </b-container>
</template>
<script>
import { mapGetters } from 'vuex'
import categoriesService from '../../../../services/category'

export default {
  name: 'CategoryForm',
  props: {
  },
  async mounted () {
  },
  async created () {
  },
  components: {
  },
  computed: {
    ...mapGetters({
      clinicState: 'Clinic/clinicState'
    })
  },
  methods: {
    async register () {
      try {
        this.category.clinicId = this.clinicState.id
        let { data } = await categoriesService.create(this.category)
        this.closeModal('add-category-modal')
        this.$emit('onCreate', data)
        this.category = this.defaultCategory
        this.makeSuccessToast('Category registered')
      } catch {
        this.makeErrorToast('Category already exists')
      }
    }
  },
  data () {
    return {
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
      ]
    }
  }
}
</script>
<style scoped>
.filter-field {
  height: 35px !important;
  margin-left: -10px !important;
  width: 100px;
}
</style>
