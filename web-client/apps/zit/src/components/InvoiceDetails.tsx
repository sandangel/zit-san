import * as React from 'react';
import ReadMore from './ReadMore';
import { InvoiceRequest } from '@zit/invoice_model';
import styled, { media } from '@zit-react/shared';

const StyledInvoiceDetails = styled.section`
  font-size: 0.8rem;

  .invoice-description {
    width: 50%;
  }

  table {
    overflow-x: auto;
    width: 100%;
  }

  tr {
    border-bottom: 0.5px solid #70707070;
    vertical-align: top;

    th:last-child,
    td:last-child {
      text-align: right;
    }

    th:first-child,
    td:first-child {
      text-align: left;
    }
  }

  tbody {
    tr {
      &:last-of-type {
        border-bottom: none;
      }
    }
  }

  th,
  td {
    padding: 20px 5px 10px;
  }

  ${media.desktop`
    th,
    td {
      padding: 20px 10px 10px;
    }

    font-size: 1rem;

    .invoice-description {
      width: 60%;
    }
  `};
`;

interface Props {
  items: InvoiceRequest['items'];
}

const InvoiceDetails = (props: Props) => {
  const getSubtotal = (i: number) => {
    const item = props.items[i];
    return (item.rate * item.hours).toFixed(2);
  };

  return (
    <StyledInvoiceDetails>
      <table>
        <thead>
          <tr>
            <th>TASK DESCRIPTION</th>
            <th>RATE</th>
            <th>HOURS</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, i) => (
            <tr key={i}>
              <td className="invoice-description">
                <h4>{item.title}</h4>
                <ReadMore text={item.description} />
              </td>
              <td>
                <h4>${item.rate}</h4>
              </td>
              <td>
                <h4>{item.hours}</h4>
              </td>
              <td>
                <h4>${getSubtotal(i)}</h4>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </StyledInvoiceDetails>
  );
};
export default InvoiceDetails;
