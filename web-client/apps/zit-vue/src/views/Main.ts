import Vue from 'vue';
import ClientInfo from '@/components/ClientInfo.vue';
import InvoiceDetails from '@/components/InvoiceDetails';
import InvoiceTotal from '@/components/InvoiceTotal';
import InvoicePay from '@/components/InvoicePay';
import { invoiceService } from '@/invoice_service';
import { InvoiceRequest } from '@zit/invoice_model';
import Modal from '@/components/Modal.vue';
import SuccessMessage from '@/components/SuccessMessage.vue';
import FailureMessage from '@/components/FailureMessage.vue';

export default Vue.extend({
  name: 'Main',
  components: {
    ClientInfo,
    InvoiceDetails,
    InvoiceTotal,
    InvoicePay,
    Modal,
    SuccessMessage,
    FailureMessage,
  },
  data() {
    return {
      clientInfo: null! as InvoiceRequest,
      chargeSuccess: false,
      sent: false,
      loading: false,
    };
  },
  async created() {
    await this.fetchClientInfo();
  },
  methods: {
    async fetchClientInfo() {
      const result = await invoiceService.getClientInfo(this.$route);
      this.clientInfo = result.data;
    },
    async payHandler(token: string) {
      const { name, email } = this.clientInfo.receiver;
      const res = await invoiceService.sendChargeToken({
        stripeToken: token,
        amount: this.clientInfo.total,
        currency: 'usd',
        user: { name, email },
      });

      this.sent = true;
      this.chargeSuccess = res.data.ok;
      this.loading = false;
    },
    loadingHandler(loading: boolean) {
      this.loading = loading;
    },
  },
});
