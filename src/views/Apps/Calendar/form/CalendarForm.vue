<template>
  <div>
    <b-modal hide-footer title="Appointment" id="form-calendar-modal">
      <div>
        <b-row lg="2">
          <b-col>
            <span>day</span>
            <b-form-datepicker id="example-datepicker" v-model="event.startStr"
              :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"></b-form-datepicker>

          </b-col>

        </b-row>


        <b-row lg="2">
          <!-- <b-col>
            <span>end</span>
            <b-form-datepicker  id="example-datepickere" v-model="event.endStr" :disabled="event.allDay"
              :date-format-options="{ day: 'numeric', month: 'numeric', year: 'numeric' }"></b-form-datepicker>
          </b-col> -->


          <b-col>

            <span>start</span>
            <b-form-timepicker id="hourpicker-start" v-model="event.start" :disabled="event.allDay"></b-form-timepicker>
          </b-col>

          <b-col>
            <span>end</span>
            <b-form-timepicker id="hourpicker-end" v-model="event.end" :disabled="event.allDay"></b-form-timepicker>

          </b-col>

        </b-row>
        <b-form-checkbox v-model="event.allDay" switch>
          All Day
        </b-form-checkbox>

        <span>groupId</span>
        <b-form-input v-model="event.groupId" placeholder="groupId"></b-form-input>

        <span>title</span>
        <b-form-input v-model="event.title" placeholder="title"></b-form-input>

        <span>url</span>
        <b-form-input v-model="event.url" placeholder="url"></b-form-input>

        <span>classNames</span>
        <b-form-input v-model="event.classNames" placeholder="classNames"></b-form-input>

        <span>backgroundColor</span>
        <b-form-input v-model="event.backgroundColor" placeholder="backgroundColor"></b-form-input>

        <span>borderColor</span>
        <b-form-input v-model="event.borderColor" placeholder="borderColor"></b-form-input>

        <span>textColor</span>
        <b-form-input v-model="event.textColor" placeholder="textColor"></b-form-input>

        <b-form-checkbox v-model="outTime" switch>
          out time
        </b-form-checkbox>

        <b-form-checkbox v-model="event.resourceEditable" switch>
          resourceEditable
        </b-form-checkbox>

        <b-form-checkbox v-model="event.startEditable" switch>
          startEditable
        </b-form-checkbox>

        <b-form-checkbox v-model="event.durationEditable" switch>
          durationEditable
        </b-form-checkbox>

      </div>
      <b-row class="text-center float-right">
        <b-button class="mt-2" variant="outline-warning" @click="hideModal">Close</b-button>
        <b-button class="mt-2" variant="outline-danger" @click="remove">Remove</b-button>
        <b-button class="mt-2" variant="success " @click="save">Save</b-button>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: ['onDateClick'],
  data () {
    return {
      event: {
        groupId: null,
        allDay: false,
        start: null,
        end: null,
        title: null,
        url: null,
        classNames: null,
        display: null,
        backgroundColor: null,
        borderColor: null,
        overlap: false,
        startEditable: true,
        durationEditable: true,
        resourceEditable: true,
        textColor: null,
      },
      outTime: false
    }
  },
  watch: {
    onDateClick (newEvent) {
      console.log('event form', newEvent)
      if (newEvent.id) {
        let eventFind = this.events.filter(event => event.id == newEvent.id)[0]
        this.event = this.cloneObject(eventFind)
        console.log('exist', this.event);
      } else {
        this.event = this.cloneObject(newEvent)
        this.event.allDay = false;
        console.log('new', this.event);
      }

      let startDate = newEvent.startStr ? new Date(newEvent.startStr).toISOString().split('T')[0] : this.event.dateStr
      this.event.startStr = startDate

      if (!newEvent.allDay) {
        console.log(this.event.end, 'ned');
        let start = new Date(this.event.start ? this.event.start : this.event.startStr)
        let end = new Date(this.event.end ? this.event.end : new Date(this.event.startStr).setMinutes( start.getMinutes() + 30))

        console.log(start, end, 'aqui')

        this.event.start = start.toLocaleTimeString()
        this.event.end = end.toLocaleTimeString()
      }
    }
  },
  methods: {
    ...mapActions({
      deleteEvent: 'Calendar/deleteEvent',
      createEvent: 'Calendar/createEvent',
      updateEvent: 'Calendar/updateEvent'
    }),
    save () {
      console.log('save evevent', this.event);

      if (!this.event.allDay) {
        this.event.start = this.event.start ? new Date(this.event.startStr.split('T', 1) + 'T' + this.event.start).toISOString() : this.event.dateStr
        this.event.end = this.event.start  ? new Date(this.event.startStr.split('T', 1) + 'T' + this.event.end).toISOString() : this.event.dateStr
      }

      if (this.outTime) {
        this.event.overlap = false
        this.event.display = 'background'
      }

      if (this.event.id) {
        this.updateEvent(this.event)
      } else {
        this.event.id = Math.random() * 2
        this.createEvent(this.event)
      }

      this.hideModal()
    },
    remove () {
      this.hideModal()
      this.deleteEvent(this.onDateClick.id)
    },
    hideModal () {
      this.$bvModal.hide('form-calendar-modal')
    }
  },
  computed: {
    ...mapGetters({
      events: 'Calendar/events'
    })
  }
}
</script>
<style scoped>
.b-form-spinbutton output>div,
.b-form-spinbutton output>bdi {
  min-width: 2.25em;
}
</style>