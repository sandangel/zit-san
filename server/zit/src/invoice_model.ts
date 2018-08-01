export interface InvoiceRequest {
  sender: { logoUrl: string; name: string; phoneNumber: string };
  receiver: { name: string; email: string; address: string };
  advance: string;
  discount: number;
  total: string;
  items: Array<{
    title: string;
    hours: number;
    rate: string;
    total: string;
  }>;
}
