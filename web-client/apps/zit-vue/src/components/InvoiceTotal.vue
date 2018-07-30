<template>
  <section class="invoice-total">
    <div>
      <span>ADVANCE</span>
      <span>{{advance}}</span>
    </div>
    <div>
      <span>DISCOUNT (10%)</span>
      <span>{{discount}}</span>
    </div>
    <span style="flex: auto;"></span>
    <div>
      <span>TOTAL</span>
      <span>{{total}}</span>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InvoiceTotal',
  props: {
    advance: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.invoice-total {
  display: flex;
  margin-top: 20px;
  border: 1px solid $zehitomo-primary;
  height: 70px;
  justify-content: space-around;
  align-items: stretch;
  font-size: 0.7rem;

  div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 10px;
    color: $zehitomo-primary;

    span:last-of-type {
      font-weight: 500;
    }
  }

  div:last-of-type {
    align-items: flex-end;
    background-color: $zehitomo-primary;
    color: white;
    font-weight: 500;
    flex: 2;

    span:first-child {
      font-size: 0.7rem;
    }

    span:last-of-type {
      font-size: 1.1rem;
    }
  }
}

@media only screen and (min-width: 600px) {
  .invoice-total {
    font-size: 0.9rem;
  }

  .invoice-total {
    div {
      padding: 10px 20px;
    }

    div:last-of-type {
      flex: 1.5;
    }
  }
}
</style>
