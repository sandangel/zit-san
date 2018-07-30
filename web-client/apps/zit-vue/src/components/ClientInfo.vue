<template>
  <section>
    <p>
      Invoice to <br>
      <span class="invoice-customer">{{name}}</span>
    </p>
    <div class="invoice-address">
      <p>
        {{address}}
      </p>
      <p>
        <span class="invoice-details">
          <span>INVOICE NO:</span>
          <span>{{invoiceNo}}</span>
        </span>
        <span class="invoice-details">
          <span>INVOICE DATE:</span>
          <span>{{invoiceDate}}</span>
        </span>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ClientInfo',
  props: {
    invoiceNo: String,
    invoiceDate: String,
    name: String,
    address: String,
  },
});
</script>

<style lang="scss" scoped>
section {
  text-align: left;
  margin-top: 30px;
  font-size: 0.9rem;
}
.invoice-details {
  display: flex;
  justify-content: space-between;

  span:first-of-type {
    margin-right: 20px;
    font-weight: 500;
  }
}
.invoice-address {
  display: flex;
  justify-content: space-between;
  flex-flow: column;
}

.invoice-customer {
  font-size: 1.2rem;
  font-weight: 500;
  display: inline-block;
  margin: 5px 0;
}

@media only screen and (min-width: 600px) {
  .invoice-address {
    flex-flow: row;

    p {
      max-width: 40%;
    }
  }

  section {
    margin-top: 50px;
  }
}
</style>
