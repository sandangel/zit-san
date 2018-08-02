<template>
  <section>
    <transition
      mode="out-in"
      name="fade"
    >
      <BouncingLoader v-if="loading"></BouncingLoader>
      <form v-else>
        <StripeElement
          :card="card"
          :error="error"
          @change="changeHandler"
        ></StripeElement>
          <MatButton
            class="invoice-submit"
            @click="submitHandler"
          >Submit Payment</MatButton>
      </form>

      </transition>
  </section>
</template>

<script lang="ts">
/// <reference types="stripe-v3" />

import Vue from 'vue';
import StripeElement from './StripeElement.vue';
import BouncingLoader from './BouncingLoader.vue';
import MatButton from './MatButton.vue';

// Create a Stripe client.
const stripe = Stripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY as string);
// Create an instance of the card Element.
const card = stripe.elements().create('card', {
  // Custom styling can be passed to options when creating an Element.
  // (Note that this demo uses a wider set of styles than the guide below.)
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      lineHeight: '18px',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
});

export default Vue.extend({
  name: 'InvoicePay',
  components: { StripeElement, BouncingLoader, MatButton },
  data() {
    return {
      loading: false,
      error: '',
      card,
    };
  },
  methods: {
    submitHandler(event: Event) {
      event.preventDefault();
      this.loading = true;
      stripe.createToken(card).then(result => {
        this.loading = false;
        if (result.error != null) {
          // Inform the user if there was an error.
          this.error = result.error.message as string;
        } else {
          // Send the token to your server.
          console.log(result.token);
        }
      });
    },
    changeHandler(event: stripe.elements.ElementChangeResponse) {
      if (event.error != null) {
        this.error = event.error.message as string;
      } else {
        this.error = '';
      }
    },
  },
});
</script>

<style lang="scss" scoped>
section {
  background-color: #f7f8fa;
  margin-top: 20px;
  padding: 10px;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100%;
}

@media only screen and (min-width: 600px) {
  form {
    flex-flow: row;
  }

  section {
    height: 120px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
