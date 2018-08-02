<template>
  <main>
    <ClientInfo invoiceNo="0047"
                invoiceDate="26/07/18"
                name="Thinh Pham"
                address="1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States"></ClientInfo>
    <InvoiceDetails :tasks="tasks"></InvoiceDetails>
    <InvoiceTotal advance="$21,000.00"
                  discount="$645.00"
                  total="$64,276.00"></InvoiceTotal>
    <InvoicePay></InvoicePay>
  </main>
</template>
<script lang="ts">
import Vue from 'vue';
import ClientInfo from '@/components/ClientInfo.vue';
import InvoiceDetails from '@/components/InvoiceDetails.vue';
import InvoiceTotal from '@/components/InvoiceTotal.vue';
import InvoicePay from '@/components/InvoicePay.vue';
import { invoiceService } from '../invoice_service';
import { tasks } from '../tasks';

export default Vue.extend({
  name: 'Main',
  components: {
    ClientInfo,
    InvoiceDetails,
    InvoiceTotal,
    InvoicePay,
  },
  data() {
    return {
      tasks,
    };
  },
  async created() {
    const clientInfo = await invoiceService.getClientInfo(this.$route);
    console.log(clientInfo);
  },
});
</script>
