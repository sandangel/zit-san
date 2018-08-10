import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import styled, { media, bindThis } from '@zit-react/shared';
import { MouseEvent } from 'react';
import RaisedButton from './RaisedButton';

interface State {
  error: string;
}

const StyledStripeElement = styled.div`
  text-align: center;
  padding: 0 20px;
  width: 100%;

  .StripeElement {
    background-color: white;
    height: 40px;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: 0 1px 3px 0 #e6ebf1;
    transition: box-shadow 300ms ease;
  }

  .StripeElement--focus {
    box-shadow: 0 1px 3px 0 #cfd7df;
  }

  .StripeElement--invalid {
    border-color: #fa755a;
  }

  .StripeElement--webkit-autofill {
    background-color: #fefde5 !important;
  }

  .card-errors {
    color: #fa755a;
    margin: 5px;
    min-height: 1rem;
    line-height: 1rem;
  }
  .card-row {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-flow: column;
    height: 110px;
  }
  #card-element {
    width: 100%;
  }

  label {
    margin: 10px;
  }

  ${media.desktop`
    #card-element {
      width: 60%;
    }

    .card-row {
      flex-flow: row;
      height: auto;
      justify-content: center;
    }

    .card-errors {
      margin: 10px;
    }
  `};
`;

class StripeElement extends React.Component<ReactStripeElements.InjectedStripeProps, State> {
  constructor(props: ReactStripeElements.InjectedStripeProps) {
    super(props);
    this.state = {
      error: '',
    };
  }

  render() {
    return (
      <StyledStripeElement>
        <label htmlFor="card-element">Credit or debit card</label>

        <div className="card-row">
          <CardElement onChange={this.onChange} id="card-element" />
          <RaisedButton onClick={this.submit} renderText={'Submit Payment'} />
        </div>
        <div className="card-errors" role="alert">
          {this.state.error}
        </div>
      </StyledStripeElement>
    );
  }

  @bindThis
  onChange(e: stripe.elements.ElementChangeResponse) {
    if (e.error != null) {
      this.setState({ error: e.error.message as string });
    } else {
      this.setState({ error: '' });
    }
  }

  @bindThis
  async submit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    const { token } = await this.props.stripe!.createToken();
    console.log(token);
  }
}

export default injectStripe(StripeElement);
