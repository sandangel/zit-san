import axios from 'axios';
import { Route } from 'vue-router';
export class InvoiceService {
  public getClientInfo({ query }: Route) {
    return axios.get(`http://localhost:3000/client-info?token=${query.token}`);
  }
}

export const invoiceService = new InvoiceService();
