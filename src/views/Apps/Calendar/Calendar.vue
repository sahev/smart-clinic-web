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
            <h4 class="card-title ">Classification</h4>
          </template>
          <template v-slot:headerAction>
            <a href="#"><i class="fa fa-plus  mr-0" aria-hidden="true" /></a>
          </template>
          <template v-slot:body>
            <ul class="m-0 p-0 job-classification">
              <li class=""><i class="ri-check-line bg-danger" />Meeting</li>
              <li class=""><i class="ri-check-line bg-success" />Business travel</li>
              <li class=""><i class="ri-check-line bg-warning" />Personal Work</li>
              <li class=""><i class="ri-check-line bg-info" />Team Project</li>
            </ul>
          </template>
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
            <FullCalendar @onDateClickEvent="onDateClickEvent($event)"/>
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
      date: null
    }
  },
  created () {

  },
  mounted () {
    xray.index()
  },
  computed: {
    ...mapGetters({
      events: 'Calendar/events'
    }),

  },
  methods: {
    ...mapActions({
      goToDate: 'Calendar/goToDate'
    }),
    onDateClickEvent(event) {
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

        console.log(day === today , day, today, event.start, event.date, event)

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
