import Vue from 'vue';
import ClientInfo from '@/components/ClientInfo.vue';
import InvoiceDetails from '@/components/InvoiceDetails.vue';
import InvoiceTotal from '@/components/InvoiceTotal.vue';
import InvoicePay from '@/components/InvoicePay.vue';
import { invoiceService } from '../invoice_service';
import { InvoiceRequest } from '@zit/invoice_model';

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
      clientInfo: {} as InvoiceRequest,
    };
  },
  async created() {
    const result = await invoiceService.getClientInfo(this.$route);
    this.clientInfo = result.data;
  },
});
