import axios from 'axios';
import { Route } from 'vue-router';
import { InvoiceRequest } from '@zit/invoice_model';
export class InvoiceService {
  public getClientInfo({ query }: Route) {
    return axios.get<InvoiceRequest>(`http://localhost:3000/client-info?token=${query.token}`);
  }
}

export const invoiceService = new InvoiceService();
