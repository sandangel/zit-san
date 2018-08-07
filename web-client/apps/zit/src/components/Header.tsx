import * as React from 'react';
import logo from '../assets/zehitomo-logo.svg';
import styled, { media } from '@zit-react/shared';

const StyledHeader = styled.header`
  height: 110px;
  display: flex;
  flex-wrap: wrap;
  flex-flow: column;
  justify-content: space-between;

  .header-logo {
    height: 50px;
    margin-right: 15px;
  }

  .header-contact {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    font-size: 0.9rem;
    font-weight: 100;
  }

  .header-banner {
    display: flex;
    flex-flow: row;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 500;
  }

  ${media.desktop`
    .header-banner {
      font-size: 1.3rem;
    }
  `};
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div className="header-banner">
        <img className="header-logo" src={logo} alt="Zehitomo Logo" />
        <span>Zehitomo Inc.</span>
        <span style={{ flex: 'auto' }} />
        <span>INVOICE</span>
      </div>
      <div className="header-contact">
        <span>Zehitomo Sales </span>
        <span>(877) 412-7753</span>
      </div>
    </StyledHeader>
  );
};

export default Header;
