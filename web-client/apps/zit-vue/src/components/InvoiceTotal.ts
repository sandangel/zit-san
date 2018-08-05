import Vue from 'vue';
interface Props {
  advance: number;
  discount: number;
  total: number;
}
export default Vue.extend<{}, {}, {}, Props>({
  name: 'InvoiceTotal',
  props: {
    advance: Number,
    discount: Number,
    total: Number,
  },
  computed: {
    discountAmount() {
      return ((this.advance * this.discount) / 100).toFixed(2);
    },
  },
});
