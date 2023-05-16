<template>
  <b-container fluid>
    <stripe-checkout ref="checkoutRef" mode="subscription" :pk="publishableKey" :line-items="lineItems"
      :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" />

    <b-row align-h="center">
      <b-col lg="4"  v-for="(item, index) in cards" :key="index">

        <iq-card body-class="text-center" :class="item.active ? 'bg-primary text-white' : ''">
          <template v-slot:body>
            <span class="font-size-16 text-uppercase" v-if="item.plan !== ''">{{ item.plan }}</span>
            <h2 class="mb-4 display-3 font-weight-bolder" :class="item.active ? 'text-white' : ''">
              {{ item.amount }}
              <small class="font-size-14 " :class="item.active ? 'text-white' : 'text-muted'">{{ item.duration }}</small>
            </h2>
            <ul class="list-unstyled line-height-4 mb-0">
              <li>{{ item.description }}</li>
            </ul>
            <b-button @click="submit(item)" :variant="item.active ? 'light' : 'primary'" class="mt-5 "
              :class="item.buttonClass">{{ item.button }}</b-button>
          </template>
        </iq-card>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { xray } from '../../config/pluginInit'
import { StripeCheckout } from '@vue-stripe/vue-stripe'

export default {
  name: 'Pricing1',
  components: {
    StripeCheckout
  },
  mounted () {
    xray.index()
  },
  data () {
    this.publishableKey = 'pk_test_51N81J4BAI350XJIzIYEqCpIS85qXYKPRtTvJP9Lfhd4tDBx2J3NLbq8M0TGo667FtWVQMOiWkvTG5vNJ6bmhvxvU009dOdVZZ8'
    return {
      loading: false,
      lineItems: [
        {
          price: 'price_1N81R9BAI350XJIzk3GPt9TB', // The id of the recurring price you created in your Stripe dashboard
          quantity: 1
        }
      ],
      successURL: 'https://google.com',
      cancelURL: 'http://app.localhost:8080/extra-pages/pricing-1',
      cards: [
        {
          plan: 'Starter',
          amount: 'R$29',
          duration: '/ Month',
          active: true,
          description: '- per login',
          button: 'Start Starter',
          buttonClass: 'btn-block',
          bgImage: false,
          priceId: 'price_1N81R9BAI350XJIzk3GPt9TB'
        },
        {
          plan: 'Premium',
          amount: 'R$129',
          duration: '/ Month',
          active: false,
          description: 'unlimited logins',
          button: 'Start Premium',
          buttonClass: 'btn-block',
          bgImage: false,
          priceId: 'price_1N81SRBAI350XJIzDJumKtyN'
        }
      ]
    }
  },
  methods: {
    submit (product) {
      this.lineItems = []
      let subProduct = {
        price: product.priceId,
        quantity: 1
      }

      this.lineItems.push(subProduct)
      // You will be redirected to Stripe's secure checkout page
      this.$refs.checkoutRef.redirectToCheckout()
    }
  }
}
</script>
