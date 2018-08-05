export interface InvoiceRequest {
  sender: { logoUrl: string; name: string; phoneNumber: string };
  receiver: { name: string; email: string; address: string };
  advance: number;
  discount: number;
  total: number;
  items: Array<{
    title: string;
    hours: number;
    rate: number;
  }>;
  invoiceNo: string;
  invoiceDate: string;
  currency: 'usd';
}
