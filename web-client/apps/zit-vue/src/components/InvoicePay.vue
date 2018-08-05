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
        >
          <RaisedButton @click="submitHandler">Submit Payment</RaisedButton>
          </StripeElement>

      </form>

      </transition>
  </section>
</template>

<script src="./InvoicePay.ts" lang="ts">
</script>

<style lang="scss" scoped>
section {
  background-color: #f7f8fa;
  margin-top: 20px;
  padding: 10px;
  height: 198px;
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
    height: 152px;
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
