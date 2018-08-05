import Vue from 'vue';

export default Vue.extend({
  name: 'ReadMore',
  data() {
    return {
      expanded: false,
    };
  },
  props: {
    text: {
      type: String,
      required: true,
    },
    length: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    textWithLength(): string {
      const text: string = this.text;
      if (text.length > this.length && !this.expanded) {
        return text.substring(0, this.length) + '...';
      }
      return text;
    },
  },
});
