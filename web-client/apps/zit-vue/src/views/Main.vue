<template>
    <main v-if="clientInfo != null">
        <ClientInfo
            :invoiceNo="clientInfo.invoiceNo"
            :invoiceDate="clientInfo.invoiceDate"
            :name="clientInfo.receiver.name"
            :address="clientInfo.receiver.address"
        ></ClientInfo>
            <InvoiceDetails :items="clientInfo.items"></InvoiceDetails>
            <InvoiceTotal
                :advance="clientInfo.advance"
                :discount="clientInfo.discount"
                :total="clientInfo.total"
            ></InvoiceTotal>
                <InvoicePay
                    @loading="loadingHandler"
                    :loading="loading"
                    @stripeToken="payHandler"
                ></InvoicePay>
                    <Modal
                        width="300px"
                        height="300px"
                        v-if="sent"
                    >
                        <template slot="body">
                            <SuccessMessage
                                @click="sent = false"
                                v-if="chargeSuccess"
                            ></SuccessMessage>
                                <FailureMessage
                                    @click="sent = false"
                                    v-else
                                ></FailureMessage>
                        </template>
                        </Modal>
    </main>
</template>
<script src="./Main.ts" lang="ts">
</script>
