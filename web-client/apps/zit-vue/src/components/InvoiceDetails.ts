import Vue from 'vue';
import ReadMore from './ReadMore';
import { InvoiceRequest } from '@zit/invoice_model';

type Items = InvoiceRequest['items'];
interface Props {
  items: Items;
}
export default Vue.extend<{}, {}, {}, Props>({
  name: 'InvoiceDetails',
  props: {
    items: Array,
  },
  components: {
    ReadMore,
  },
  methods: {
    getSubtotal(i: number) {
      const item = this.items[i];
      return (item.rate * item.hours).toFixed(2);
    },
  },
});
