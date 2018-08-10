import * as React from 'react';
import ClientInfo from '../components/ClientInfo';
import InvoiceDetails from '../components/InvoiceDetails';
import InvoiceTotal from '../components/InvoiceTotal';
import InvoicePay from '../components/InvoicePay';
import { bindThis } from '../shared';

const items = [
  {
    title: 'Character illustration',
    description: 'Character Design projects from the latest top online portfolios on Behance.',
    rate: 65,
    hours: 84,
  },
  {
    title: 'Cross Heart Charity Branding',
    description:
      'Attempt to attach higher credibility to a new product by associating it with a well established company name.',
    rate: 89,
    hours: 100,
  },
  {
    title: 'iOS App',
    description:
      'A video game franchise inspired primarily by a sketch of stylized wingless ' +
      '- Including Branding/Graphics/Motion Picture & Videos.',
    rate: 100,
    hours: 500,
  },
];

interface State {
  loading: boolean;
}

export default class Main extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { loading: false };
  }
  render() {
    return (
      <main>
        <ClientInfo
          name={'Thinh Pham'}
          invoiceNo={'0047'}
          invoiceDate={'2018/08/07'}
          address={'1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States'}
        />
        <InvoiceDetails items={items} />
        <InvoiceTotal advance={21000.0} discount={8} total={64275.0} />
        <InvoicePay
          onStripeToken={this.onStripeToken}
          submitHandler={this.submitHandler}
          loading={this.state.loading}
        />
      </main>
    );
  }

  @bindThis
  submitHandler() {
    this.setState({ loading: true });
  }

  @bindThis
  onStripeToken() {}
}
