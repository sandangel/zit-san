import * as React from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { invoiceService } from '@zit-vue/invoice_service';
import { ReactElement } from 'react';

interface Props {
  renderButton: ReactElement<any>;
}

interface State {
  error: string;
}

class StripeElement extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      error: '',
    };
  }

  render() {
    return (
      <div className="form-row">
        <label htmlFor="card-element">Credit or debit card</label>

        <div className="card-row">
          <CardElement id="card-element" />
          {this.props.renderButton}
        </div>
        <div className="card-errors" role="alert">
          {this.state.error}
        </div>
      </div>
    );
  }
}
export default injectStripe(StripeElement);
