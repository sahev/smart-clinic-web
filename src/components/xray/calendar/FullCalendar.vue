<template>
  <!-- <VueFullCalendar time-zone="UTC-03:00" :plugins="calendarPlugins" :header="header" :editable="true" :events="calendarEvents"/> -->

  <VueFullCalendar ref="fullCalendar" :options="config">
  </VueFullCalendar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import VueFullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list'
export default {
  name: 'FullCalendar',
  props: {
    // eslint-disable-next-line vue/require-valid-default-prop
    // calendarEvents: { type: Array, default: [] },
  },
  data () {
    return {
      calendarPlugins: [
        dayGridPlugin,
        timeGridPlugin,
        interactionPlugin,
        listPlugin
      ],
    }
  },
  components: {
    VueFullCalendar // make the <VueFullCalendar> tag available
  },
  mounted () {

  },
  watch: {
    date (date) {
      this.goToDate(date)
    }
  },
  computed: {
    ...mapGetters({
      events: 'Calendar/events',
      weekendsVisible: 'Calendar/weekendsVisible',
      date: 'Calendar/date'
    }
    ),
    config () {
      return {
        ... this.configOptions,
        ...this.eventHandlers
      }
    },

    configOptions () {
      return {
        dayMaxEvents: true,
        events: this.events,
        plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
        dragRevertDuration: 0,
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek,listMonth'
        },
        initialView: 'dayGridMonth',
        buttonText: {
          today: 'Today',
          month: 'Month',
          week: 'Week',
          day: 'Day',
          listWeek: 'List Week',
          listMonth: 'List Month'
        },
        eventTimeFormat: {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        },
      }
    },

    eventHandlers () {
      return {
        dateClick: this.handleClick,
        eventClick: this.handleClick,
        eventDrop: this.handleClick,
        // select: this.onDateSelect, // select multiple days
      }
    }
  },
  methods: {
    handleClick (event) {
      // not allow dateClick in dayGridMonth
      if (event.view.type === 'dayGridMonth')
        return

      // block if background event
      if (event.event && event.event.display === 'background') {
        return
      }

      // eventDrop
      if (event.oldEvent) {
        this.updateEvent(event.event)
        return
      }

      // eventClick dateClick
      if (event.event) {
        this.$emit('onDateClickEvent', event.event)
        this.showForm()
        return
      }

      // block if background event
      if (event.jsEvent.toElement.offsetParent.fcSeg) {
        let display = event.jsEvent.toElement.offsetParent.fcSeg.eventRange.def.ui.display
        if (display === 'background')
          return
      }

      //dateclick
        this.$emit('onDateClickEvent', event)
        this.showForm()
    },
    ...mapActions({
      createEvent: 'Calendar/createEvent',
      updateEvent: 'Calendar/updateEvent',
      setweekendsVisible: 'Calendar/setweekendsVisible'
    }),
    showForm () {
      this.$bvModal.show('form-calendar-modal')
    },
    goToDate (date) {
      let calendarApi = this.$refs.fullCalendar.getApi()
      calendarApi.gotoDate(date)
    },
  }
}
</script>

<style lang='scss'>
.fc-event,
.fc-event:hover {
  -webkit-transition: 0s !important;
  transition: 0s !important;
}

.fc {

  .fc-col-header,
  .fc-daygrid-body,
  .fc-scrollgrid-sync-table {
    inline-size: 100% !important;
    height: 100% !important;
  }

  .fc-timegrid-body,
  .fc-timegrid-body table {
    inline-size: 100% !important;
  }
}
</style>
