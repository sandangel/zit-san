<template>
    <div class="form-row">
        <label for="card-element">
            Credit or debit card
        </label>
        <div
            id="card-element"
            ref="card-element"
        >
            <!-- A Stripe Element will be inserted here. -->
    </div>

    <!-- Used to display form errors. -->
    <div
        class="card-errors"
        role="alert"
    >{{error}}</div>
        </div>
</template>
<script lang="ts">
import Vue from 'vue';

interface Props {
  card: stripe.elements.Element;
  error: string;
}

export default Vue.extend<{}, {}, {}, Props>({
  name: 'StripeElement',
  props: {
    card: Object,
    error: String,
  },
  mounted() {
    // In mounted hook, the 'card-element' node is actually attached to the DOM.
    if (this.$refs['card-element'] !== undefined) {
      // Create an instance of the card Element.
      this.card.mount(this.$refs['card-element']);
      (this.card as any).addEventListener(
        'change',
        (event: stripe.elements.ElementChangeResponse) => {
          this.$emit('change', event);
        },
      );
    }
  },
});
</script>
<style lang="scss" scoped>
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

.card-errors {
  color: #fa755a;
  margin: 5px;
}

.form-row {
  text-align: start;
  padding: 0 20px;
  width: 100%;
}
@media only screen and (min-width: 600px) {
  .form-row {
    width: 60%;
  }
}
</style>
