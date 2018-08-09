import React, { Component } from 'react';
import BouncingLoader from './components/BouncingLoader';
import Header from './components/Header';
import Footer from './components/Footer';
import ClientInfo from './components/ClientInfo';
import InvoiceDetails from './components/InvoiceDetails';
import styled, { media } from '@zit-react/shared';
import InvoiceTotal from './components/InvoiceTotal';
import StripeElement from './components/StripeElement';
import { Elements, StripeProvider } from 'react-stripe-elements';
import RaisedButton from './components/RaisedButton';

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

const StyledApp = styled.div`
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1080px;
  margin: auto;
  padding: 20px;
  font-size: 0.9rem;

  ${media.desktop`
    font-size: 1rem;
  `};
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header />
        <main>
          <ClientInfo
            name={'Thinh Pham'}
            invoiceNo={'0047'}
            invoiceDate={'2018/08/07'}
            address={'1600 Amphitheatre Pkwy, Mountain View, CA 94043, United States'}
          />
          <InvoiceDetails items={items} />
          <InvoiceTotal advance={21000.0} discount={8} total={64275.0} />
          <StripeProvider apiKey="pk_test_x6cf2KGxbVSP4n0vYiPxbaRB">
            <Elements>
              <StripeElement renderButton={<RaisedButton renderText={'Submit Payment'} />} />
            </Elements>
          </StripeProvider>
          <BouncingLoader />
        </main>
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
