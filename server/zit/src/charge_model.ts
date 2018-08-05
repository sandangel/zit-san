import { sources } from 'stripe';

export interface ChargeInfo {
  amount: number;
  currency: 'usd';
  stripeToken: string;
  user: { name: string; email: string };
}
