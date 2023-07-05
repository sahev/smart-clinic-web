<template>
  <b-container fluid>
    <b-row>
      <b-col md="12">
        <iq-card>
          <template v-slot:headerTitle>
            <h4 class="card-title">Communication</h4>
          </template>

          <template v-slot:body>

            <iq-card style="display: flex;">
              <div class="checkbox-label">
                <label class="mr-5">
                  Send appointment confirmation via WhatsApp:
                </label>
                <b-form-checkbox v-model="whatsappAutoConfirmation" switch></b-form-checkbox>
              </div>
              <div v-if="whatsappAutoConfirmation">
                <label class="ml-5">
                  Status: <b-badge :variant="colorStatus" pill>{{ statusConnection }}</b-badge>
                </label>
                <b-button v-if="statusConnection !== 'connected'" class="ml-5" size="sm" v-b-modal.modal-status-connection
                  variant="primary" @click="connectWhatsappInstance">connect it</b-button>
                <b-button v-if="statusConnection === 'connected'" class="ml-5" size="sm" variant="outline-danger"
                  @click="deleteSession">logout</b-button>
              </div>
            </iq-card>
          </template>

          <b-modal v-if="statusConnection !== 'connected'" id="modal-status-connection" size="sm"
            title="Scan WhatsApp Qr Code: " hide-footer style="width: 341px;">
            <div class="modal-qrcode">
              <b-spinner v-if="!b64img" label="Spinning"></b-spinner>
              <b-img v-else :src="b64img"></b-img>
              <label>
                <b-badge v-if="b64img" :variant="colorStatus" pill>{{ statusConnection }}</b-badge>
              </label>
            </div>
          </b-modal>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import whatsappService from '../../../services/whatsapp'

export default {
  name: 'Communication',
  props: {
    active: String
  },
  watch: {
    async active (newVal) {
      if (newVal === 'Communication') {
        await this.getStatus()
        this.socketInit()
      }
    },
    whatsappAutoConfirmation (newVal) {
      if (!newVal) {
        this.deleteSession(this.clinicId)
      }
    },
    statusConnection (newv) {
      this.setStatusColor()
      if (newv === 'try again') {
        this.b64img = ''
        this.closeModal('modal-status-connection')
      }
    }
  },
  async mounted () {

  },
  async created () {
    this.clinicId = this.$router.currentRoute.params.id
  },
  components: {

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
    async connectWhatsappInstance () {
      let data = {
        sessionId: this.clinicId
      }

      await whatsappService.create(data)
    },
    async deleteSession () {
      await whatsappService.delete(this.clinicId)

      this.statusConnection = 'disconnected'

      this.setStatusColor()
    },
    async getStatus () {
      let { data } = await whatsappService.getStatus(this.clinicId)
      this.statusConnection = data.data.status
      this.setStatusColor()
    },
    setStatusColor () {
      switch (this.statusConnection) {
        case 'disconnected':
          this.colorStatus = 'warning'
          break;
        case 'connected':
          this.colorStatus = 'success'
          break;
        default:
          this.colorStatus = 'primary'
          break;
      }
    },
    socketInit () {
      var socket = io.connect(process.env.VUE_APP_WHATSAPP_API_URL);
      let self = this

      socket.on(`session.status.${this.clinicId}`, function (status) {
        self.statusConnection = status.connection
      })

      socket.on(`session.qrcode.${this.clinicId}`, function (b64QrCode) {
        self.b64img = b64QrCode
      })

      if (this.statusConnection === 'connected') {
        socket.disconnect();
      }
    }
  },
  data () {
    return {
      whatsappAutoConfirmation: true,
      statusConnection: 'disconnected',
      b64img: null,
      colorStatus: 'none',
      clinicId: null,
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

.modal-qrcode {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
}
</style>
