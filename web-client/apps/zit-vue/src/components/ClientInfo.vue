<template>
  <section>
    <p>
      Invoice to <br>
      <span class="invoice-customer">Thinh Pham</span><br> Pages incoperated. <br> page.inc
    </p>
    <div class="invoice-address">
      <p>
        1600 Amphitheatre Pkwy, Mountain View,<br> CA 94043, United States
      </p>
      <p>
        <span class="invoice-details">
          <span>INVOICE NO:</span>
          <span>0047</span>
        </span>
        <span class="invoice-details">
          <span>INVOICE DATE:</span>
          <span>26/07/18</span>
        </span>
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'ClientInfo',
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
  }

  section {
    margin-top: 50px;
  }
}
</style>
