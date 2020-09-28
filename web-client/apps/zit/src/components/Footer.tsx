import * as React from 'react';
import styled, { theme, media } from '@zit-react/shared';

const StyledFooter = styled.footer`
  margin-top: 20px;
  padding: 20px;
  display: flex;
  font-size: 0.7rem;
  text-align: start;

  a {
    padding: 0 5px;
    color: ${theme.primaryColor};
  }

  span {
    width: 50%;
  }

  ${media.desktop`
    font-size: 0.9rem;

    a {
      padding: 0 20px;
    }

    span {
      padding-right: 20px;
      width: auto;
    }
  `};
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <span>Copyright © 2017 Zehitomo. All rights reserved.</span>
      <a href="#">Term of use</a>
      <a href="#">Privacy policy</a>
    </StyledFooter>
  );
};

export default Footer;
