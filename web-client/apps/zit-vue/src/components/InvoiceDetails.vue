<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>TASK DESCRIPTION</th>
          <th>RATE</th>
          <th>HOURS</th>
          <th>TOTAL</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="index"
          v-for="(task, index) of tasks"
        >
          <td class="invoice-description">
            <h4>{{task.title}}</h4>
            <ReadMore :text="task.description"></ReadMore>
          </td>
          <td>
            <h4>{{task.rate}}</h4>
          </td>
          <td>
            <h4>{{task.hours}}</h4>
          </td>
          <td>
            <h4>{{task.subtotal}}</h4>
          </td>
          </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import ReadMore from './ReadMore.vue';

export default Vue.extend({
  name: 'InvoiceDetails',
  props: {
    tasks: Array,
  },
  components: {
    ReadMore,
  },
});
</script>
<style lang="scss" scoped>
section {
  font-size: 0.6rem;
}

.invoice-description {
  width: 50%;
}

table {
  overflow-x: auto;
  width: 100%;
}

tr {
  border-bottom: 0.5px solid #70707070;
  vertical-align: top;

  th:last-child,
  td:last-child {
    text-align: right;
  }

  th:first-child,
  td:first-child {
    text-align: left;
  }
}

tbody {
  tr {
    &:last-of-type {
      border-bottom: none;
    }
  }
}

th,
td {
  padding: 20px 5px 10px;
}

@media only screen and (min-width: 600px) {
  th,
  td {
    padding: 20px 10px 10px;
  }

  section {
    font-size: 0.8rem;
  }

  .invoice-description {
    width: 60%;
  }
}
</style>

