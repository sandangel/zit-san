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
          v-for="(item, index) of items"
        >
          <td class="invoice-description">
            <h4>{{item.title}}</h4>
            <ReadMore :text="item.description"></ReadMore>
          </td>
          <td>
            <h4>${{item.rate}}</h4>
          </td>
          <td>
            <h4>{{item.hours}}</h4>
          </td>
          <td>
            <h4>${{getSubtotal(index)}}</h4>
          </td>
          </tr>
      </tbody>
    </table>
  </section>
</template>

<script src="./InvoiceDetails.ts" lang="ts">
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

