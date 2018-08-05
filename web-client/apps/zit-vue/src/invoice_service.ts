import axios, { AxiosPromise } from 'axios';
import { Route } from 'vue-router';
import { InvoiceRequest } from '@zit/invoice_model';
import { ChargeInfo } from '@zit/charge_model';

export class InvoiceService {
  private url = 'http://localhost:3000';

  public getClientInfo({ query }: Route): AxiosPromise<InvoiceRequest> {
    return axios.get(`${this.url}/client-info?token=${query.token}`, {
      responseType: 'json',
    });
  }

  public sendChargeToken(info: ChargeInfo): AxiosPromise<{ ok: boolean }> {
    return axios.post(`${this.url}/charge`, info, { responseType: 'json' });
  }
}

export const invoiceService = new InvoiceService();
