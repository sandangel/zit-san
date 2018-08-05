<template>
  <div class="form-row">
    <label for="card-element">
      Credit or debit card
    </label>

    <div class="card-row">
      <div
        id="card-element"
        ref="card-element"
      >
        <!-- A Stripe Element will be inserted here. -->
    </div>
    <!-- Used to display form errors. -->

    <slot></slot>
  </div>
  <div
    class="card-errors"
    role="alert"
  >{{error}}</div>
    </div>
</template>
<script src="./StripeElement.ts" lang="ts">
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
  min-height: 1rem;
  line-height: 1rem;
}

.form-row {
  text-align: center;
  padding: 0 20px;
  width: 100%;
}

.card-row {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column;
  height: 110px;
}
#card-element {
  width: 100%;
}

label {
  margin: 10px;
}
@media only screen and (min-width: 600px) {
  #card-element {
    width: 60%;
  }

  .card-row {
    flex-flow: row;
    height: auto;
    justify-content: center;
  }

  .card-errors {
    margin: 10px;
  }
}
</style>
