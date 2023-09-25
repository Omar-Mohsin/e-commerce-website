import React from "react";
import styled from "styled-components";

function OrderedProductSummary({ orderSummary }: any) {
  return (
    <>
      <SummaryItem>
        <SummaryLabel>Subtotal:</SummaryLabel>
        <SummaryValue>${orderSummary.subtotal}</SummaryValue>
      </SummaryItem>
      <SummaryItem>
        <SummaryLabel>Tax (5%):</SummaryLabel>
        <SummaryValue>${orderSummary.tax}</SummaryValue>
      </SummaryItem>
      <SummaryItem>
        <SummaryLabel>Grand Total:</SummaryLabel>
        <SummaryValue>${orderSummary.grandTotal}</SummaryValue>
      </SummaryItem>
    </>
  );
}

export default OrderedProductSummary;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SummaryLabel = styled.p`
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const SummaryValue = styled.p`
  color: #444;
  font-size: 16px;
  margin: 0;
`;
