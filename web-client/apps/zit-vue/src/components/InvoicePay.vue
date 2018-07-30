<template>
  <section>
    <form>
      <div class="form-row">
        <label for="card-element">
          Credit or debit card
        </label>
        <div id="card-element"
             @change="changeHandler"
             ref="card-element">
          <!-- A Stripe Element will be inserted here. -->
        </div>

        <!-- Used to display form errors. -->
        <div ref="card-errors"
             role="alert"></div>
      </div>

      <button class="invoice-submit"
              type="button"
              @click="submitHandler">
        <span>Submit Payment</span>
      </button>
    </form>
  </section>
</template>

<script lang="ts">
/// <reference types="stripe-v3" />
/// <reference types="node" />

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

import Vue from 'vue';

export default Vue.extend({
  name: 'InvoicePay',
  mounted() {
    // Create an instance of Elements.
    const elements = stripe.elements();

    // Create an instance of the card Element.
    card.mount(this.$refs['card-element']);
  },
  methods: {
    changeHandler(event: stripe.elements.ElementChangeResponse) {
      const displayError = this.$refs['card-errors'] as HTMLDivElement;
      if (event.error != null) {
        displayError.textContent = event.error.message as string;
      } else {
        displayError.textContent = '';
      }
    },
    submitHandler(event: Event) {
      event.preventDefault();

      stripe.createToken(card).then(result => {
        const errorElement = this.$refs['card-errors'] as HTMLDivElement;
        if (result.error != null) {
          // Inform the user if there was an error.
          errorElement.textContent = result.error.message as string;
        } else {
          errorElement.textContent = '';
          console.log(result);
          // Send the token to your server.
        }
      });
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

  .form-row {
    text-align: start;
    padding: 0 20px;
    width: 100%;
  }

  .invoice-submit {
    height: 40px;
    margin: 20px 20px 0;
    padding: 0 10px;
    border-radius: 5px;
    background-color: $zehitomo-primary;
    color: white;
    border: 0px solid transparent;
    box-shadow: 0 1px 3px #e6ebf1;
    transition: box-shadow 300ms ease, background-color 0.3s ease;
    overflow: hidden;
    position: relative;

    &:before {
      content: '';

      position: absolute;
      top: 50%;
      left: 50%;

      display: block;
      width: 0;
      padding-top: 0;

      border-radius: 100%;

      background-color: rgba(236, 240, 241, 0.3);
      transform: translate(-50%, -50%);
    }

    &:active:before {
      width: 120%;
      padding-top: 120%;

      transition: width 0.3s ease-out, padding-top 0.3s ease-out;
    }

    &:focus {
      outline: none;
    }
  }
}

@media only screen and (min-width: 600px) {
  form {
    flex-flow: row;
    .form-row {
      width: 60%;
    }

    .invoice-submit {
      align-self: flex-end;
    }
  }
}

.StripeElement {
  background-color: white;
  height: 40px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  transition: box-shadow 300ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
