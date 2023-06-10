<template>
  <b-container fluid>
    <b-row>
      <b-col md="3">
        <iq-card class="calender-small">
          <template v-slot:body>
            <flat-pickr :config="config" :value="Date.now()" v-model="date" @on-change="goToDate(date)" class="d-none" />
          </template>
        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title ">Doctors</h4>
          </template>
          <template v-slot:headerAction>
            <div class="iq-search-bar">
              <form action="#">
                <input id="search" v-model="searchText" type="text" class="search-input" placeholder="Type here to search...">
              </form>
            </div>
          </template>

          <b-form-group>
            <template #label v-slot:body>
              <ul>
                <b-form-checkbox class="m-0 p-0 job-classification" v-model="allSelected" :indeterminate="indeterminate"
                  aria-describedby="name" aria-controls="name" @change="toggleAll">
                  {{ allSelected ? 'Un-select All' : 'Select All' }}
                </b-form-checkbox>
                <b-form-group v-slot="{ ariaDescribedby }">
                  <b-checkbox v-for="option in filteredList" v-model="selected" class="custom-checkbox-color-check"
                    :color="option.color" :key="option.name" :value="option" :aria-describedby="ariaDescribedby" stacked>
                    {{ option.name }}
                  </b-checkbox>
                </b-form-group>
              </ul>

            </template>
          </b-form-group>

          <div>
            Selected: <strong>{{ selected }}</strong><br>
          </div>

        </iq-card>
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Today's Schedule</h4>
          </template>
          <template v-slot:body>
            <ul class="m-0 p-0 today-schedule">
              <li class="d-flex" v-for="event in getDayEvents()" :key="event.id">
                <div class="schedule-icon"><i class="ri-checkbox-blank-circle-fill text-primary" /></div>
                <div class="schedule-text"> <span>{{ event.title }}</span>
                  <span>{{ getPeriodConsult(event) }}</span>
                </div>
              </li>
            </ul>
          </template>
        </iq-card>
      </b-col>
      <b-col md="9">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Calendar</h4>
          </template>
          <template v-slot:headerAction>
            <b-button @click="showModal()" variant="primary"><i class="ri-add-line mr-2"></i>Book Appointment</b-button>
            <CalendarForm :onDateClick="onDateClick" />
          </template>
          <template v-slot:body>
            <FullCalendar @onDateClickEvent="onDateClickEvent($event)" />
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { xray } from '../../../config/pluginInit'
import CalendarForm from './form/CalendarForm.vue'

export default {
  name: 'GoogleCalendar',
  components: {
    CalendarForm
  },
  data () {
    return {
      config: {
        inline: true,
      },
      showForm: false,
      onDateClick: null,
      date: null,
      selected: [],
      doctorOptions: [
        { id: 1, name: 'João Araújo', color: 'primary' },
        { id: 2, name: 'Alan Araújo', color: 'info' },
        { id: 3, name: 'Sara Araújo', color: 'warning' },
        { id: 4, name: 'maria Araújo', color: 'primary' },
        { id: 5, name: 'teste Araújo', color: 'info' },
        { id: 6, name: 'function Araújo', color: 'warning' },
        { id: 7, name: 'fulano Araújo', color: 'primary' },
        { id: 8, name: 'sico Araújo', color: 'info' },
        { id: 9, name: 'pelé Araújo', color: 'warning' },
      ],
      allSelected: false,
      indeterminate: false,
      searchText: ''
    }
  },
  created () {

  },
  mounted () {
    xray.index()
  },
  watch: {
    selected (newValue, oldValue) {
      // Handle changes in individual flavour checkboxes
      if (newValue.length === 0) {
        this.indeterminate = false
        this.allSelected = false
      } else if (newValue.length === this.filteredList.length) {
        this.indeterminate = false
        this.allSelected = true
      } else {
        this.indeterminate = true
        this.allSelected = false
      }
    }
  },
  computed: {
    ...mapGetters({
      events: 'Calendar/events'
    }),
    filteredList () {
      console.log('filtrado');
      return this.doctorOptions.filter(item => {
        return item.name.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(this.searchText.toLowerCase())
      })
    }
  },
  methods: {
    toggleAll (checked) {
      this.selected = checked ? this.filteredList.slice() : []
    },
    ...mapActions({
      goToDate: 'Calendar/goToDate'
    }),
    selectDoctor () {
      console.log('aqu', this.selected);
    },
    onDateClickEvent (event) {
      this.onDateClick = event
    },
    showModal () {
      this.$bvModal.show('form-calendar-modal')
      console.log('show form');
    },
    getDayEvents () {
      let dayEvents = this.events.filter(event => {
        let today = new Date().getDate()
        let day = new Date(event.start || event.date).getDate()

        return day === today
      })

      return dayEvents
    },
    getPeriodConsult (event) {
      if (event.allDay) return 'all day'

      let startDate = new Date(event.start)
      let endDate = new Date(event.end)

      let startTime = this.getTime(startDate);

      let endTime = this.getTime(endDate);

      return `${startTime} to ${endTime}`
    },
    getTime (dt) {
      var date = new Date(dt);
      var h = date.getHours();
      var m = date.getMinutes();
      h = this.checkTime(h);
      m = this.checkTime(m);

      return h + ':' + m
    },

    checkTime (i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    },
  }
}
</script>
<style scoped>
.doctor-list {
  display: flex;
  flex-direction: column;
}
</style>