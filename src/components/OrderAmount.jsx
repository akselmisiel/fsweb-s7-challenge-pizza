import React from "react";
import styled from "styled-components";

const AdjusterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  margin: auto;
  height: 45px;
`;

const Button = styled.button`
  background-color: #fdc913;
  display: flex;
  flex-grow: 1;
  border: none;
  color: #333;
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  height: 100%;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  border-radius: 5px;
  &:hover {
    background-color: #e0a800;
  }
`;

const Span = styled.span`
  color: #333;
  display: flex;
  flex-grow: 1;
  font-size: 1rem;
  justify-content: center;
`;

const OrderAmountAdjuster = ({ orderAmount, setForm }) => {
  const handleIncrement = (e) => {
    e.preventDefault();
    setForm((prevCount) => ({
      ...prevCount,
      amount: prevCount.amount + 1,
    }));
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (orderAmount > 1) {
      setForm((prevCount) => ({
        ...prevCount,
        amount: prevCount.amount - 1,
      }));
    }
  };

  return (
    <AdjusterContainer>
      <Button onClick={handleDecrement} disabled={orderAmount <= 1}>
        -
      </Button>
      <Span>{orderAmount}</Span>
      <Button onClick={handleIncrement}>+</Button>
    </AdjusterContainer>
  );
};

export default OrderAmountAdjuster;
