import * as React from 'react';
import styled, { media } from '@zit-react/shared';

const StyledClientInfo = styled.section`
  text-align: left;
  margin-top: 30px;

  .invoice-details {
    display: flex;
    justify-content: space-between;

    span:first-of-type {
      margin-right: 20px;
      font-weight: 500;
    }
  }
  .invoice-address {
    display: flex;
    justify-content: space-between;
    flex-flow: column;
  }

  .invoice-customer {
    font-size: 1.2rem;
    font-weight: 500;
    display: inline-block;
    margin: 5px 0;
  }

  ${media.desktop`
    .invoice-address {
      flex-flow: row;

      p {
        max-width: 40%;
      }
    }

    margin-top: 50px;
  `};
`;

interface Props {
  name: string;
  address: string;
  invoiceNo: string;
  invoiceDate: string;
}

export const ClientInfo: React.SFC<Props> = props => {
  return (
    <StyledClientInfo>
      <p>
        Invoice to <br />
        <span className="invoice-customer">{props.name}</span>
      </p>
      <div className="invoice-address">
        <p>{props.address}</p>
        <p>
          <span className="invoice-details">
            <span>INVOICE NO:</span>
            <span>{props.invoiceNo}</span>
          </span>
          <span className="invoice-details">
            <span>INVOICE DATE:</span>
            <span>{props.invoiceDate}</span>
          </span>
        </p>
      </div>
    </StyledClientInfo>
  );
};

export default ClientInfo;
