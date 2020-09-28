import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './views/Main';
import styled, { media } from '@zit-react/shared';

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
        <Main />
        <Footer />
      </StyledApp>
    );
  }
}

export default App;
