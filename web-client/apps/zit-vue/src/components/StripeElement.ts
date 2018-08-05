import Vue from 'vue';

interface Props {
  card: stripe.elements.Element;
  error: string;
}

export default Vue.extend<{}, {}, {}, Props>({
  name: 'StripeElement',
  props: {
    card: Object,
    error: String,
  },
  mounted() {
    // In mounted hook, the 'card-element' node is actually attached to the DOM.
    if (this.$refs['card-element'] !== undefined) {
      // Create an instance of the card Element.
      this.card.mount(this.$refs['card-element']);
      this.card.on('change', event => {
        this.$emit('change', event);
      });
    }
  },
});
