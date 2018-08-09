import * as React from 'react';
import styled, { media, theme } from '@zit-react/shared';

interface Props {
  advance: number;
  discount: number;
  total: number;
}

const StyledInvoiceTotal = styled.section`
  display: flex;
  margin-top: 20px;
  border: 1px solid ${theme.primaryColor};
  height: 70px;
  justify-content: space-around;
  align-items: stretch;
  font-size: 0.7rem;

  div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-around;
    padding: 10px;
    color: ${theme.primaryColor};

    span:last-of-type {
      font-weight: 500;
    }
  }

  div:last-of-type {
    align-items: flex-end;
    background-color: ${theme.primaryColor};
    color: white;
    font-weight: 500;
    flex: 2;

    span:first-child {
      font-size: 0.7rem;
    }

    span:last-of-type {
      font-size: 1.1rem;
    }
  }

  ${media.desktop`
    font-size: 0.9rem;

    div {
      padding: 10px 20px;
    }

    div:last-of-type {
      flex: 1.5;
    }
  `};
`;

export const InvoiceTotal: React.SFC<Props> = props => {
  const { advance, discount, total } = props;
  const discountAmount = ((discount * advance) / 100).toFixed(2);
  return (
    <StyledInvoiceTotal>
      <div>
        <span>ADVANCE</span>
        <span>${advance}</span>
      </div>
      <div>
        <span>
          DISCOUNT ({discount}
          %)
        </span>
        <span>${discountAmount}</span>
      </div>
      <span style={{ flex: 'auto' }} />
      <div>
        <span>TOTAL</span>
        <span>${total}</span>
      </div>
    </StyledInvoiceTotal>
  );
};

export default InvoiceTotal;
