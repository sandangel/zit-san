import * as React from 'react';
import BouncingLoader from './BouncingLoader';
import StripeElement from './StripeElement';
import { StripeProvider, Elements } from 'react-stripe-elements';
import styled, { media } from '@zit-react/shared';

interface Props {
  loading: boolean;
  onStripeToken: () => void;
  submitHandler: () => void;
}

const StyledInvoicePay = styled.section`
  background-color: #f7f8fa;
  margin-top: 20px;
  padding: 10px;
  height: 198px;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    height: 100%;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  ${media.desktop`
    form {
      flex-flow: row;
    }
    height: 152px;
  `};
`;

export default class InvoicePay extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <StyledInvoicePay>
        {this.props.loading ? (
          <BouncingLoader />
        ) : (
          <form>
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY as string}>
              <Elements>
                <StripeElement />
              </Elements>
            </StripeProvider>
          </form>
        )}
      </StyledInvoicePay>
    );
  }
}
