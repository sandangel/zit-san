import Vue from 'vue';
import StripeElement from './StripeElement';
import BouncingLoader from './BouncingLoader.vue';
import RaisedButton from './RaisedButton.vue';

// Create a Stripe client.
const stripe = Stripe(process.env.VUE_APP_STRIPE_PUBLISHABLE_KEY as string);
// Create an instance of the card Element.
const card = stripe.elements().create('card', {
  // Custom styling can be passed to options when creating an Element.
  // (Note that this demo uses a wider set of styles than the guide below.)
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      lineHeight: '18px',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
});

export default Vue.extend({
  name: 'InvoicePay',
  components: { StripeElement, BouncingLoader, RaisedButton },
  data() {
    return {
      error: '',
      card,
    };
  },
  props: { loading: Boolean },
  methods: {
    submitHandler() {
      this.$emit('loading', true);
      stripe.createToken(card).then(result => {
        if (result.error != null) {
          // Inform the user if there was an error.
          this.error = result.error.message as string;
        } else {
          // Send the token to your server.
          console.log(result.token);
          this.$emit('stripeToken', result.token);
        }
      });
    },
    changeHandler(event: stripe.elements.ElementChangeResponse) {
      if (event.error != null) {
        this.error = event.error.message as string;
      } else {
        this.error = '';
      }
    },
  },
});
