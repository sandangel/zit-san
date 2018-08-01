<template>
  <div id="app">
    <Header></Header>
    <main>
      <ClientInfo
        invoiceNo="0047"
        invoiceDate="26/07/18"
        name="Thinh Pham"
        address="1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States"
      ></ClientInfo>
        <InvoiceDetails :tasks="tasks"></InvoiceDetails>
        <InvoiceTotal
          advance="$21,000.00"
          discount="$645.00"
          total="$64,276.00"
        ></InvoiceTotal>
          <InvoicePay></InvoicePay>
    </main>
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import ClientInfo from './components/ClientInfo.vue';
import InvoiceDetails from './components/InvoiceDetails.vue';
import InvoiceTotal from './components/InvoiceTotal.vue';
import InvoicePay from './components/InvoicePay.vue';
import Footer from './components/Footer.vue';

import { tasks } from './tasks';

export default Vue.extend({
  name: 'app',
  components: {
    Header,
    ClientInfo,
    InvoiceDetails,
    InvoiceTotal,
    InvoicePay,
    Footer,
  },
  data() {
    return {
      tasks,
    };
  },
});
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap-reboot.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1080px;
  margin: auto;
  padding: 20px;
  font-size: 0.9rem;
}

@media only screen and (min-width: 600px) {
  #app {
    font-size: 1rem;
  }
}
</style>
