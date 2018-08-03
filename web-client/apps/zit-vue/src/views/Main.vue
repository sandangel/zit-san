<template>
  <main>
    <ClientInfo invoiceNo="0047"
                invoiceDate="26/07/18"
                :name="clientInfo.receiver.name"
                :address="clientInfo.receiver.address"></ClientInfo>
    <InvoiceDetails :tasks="tasks"></InvoiceDetails>
    <InvoiceTotal advance="$21,000.00"
                  discount="$645.00"
                  total="$64,276.00"></InvoiceTotal>
    <InvoicePay></InvoicePay>
  </main>
</template>
<script src="./Main.ts" lang="ts">
</script>
