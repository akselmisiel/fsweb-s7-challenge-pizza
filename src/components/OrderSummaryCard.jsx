import React from "react";

const OrderSummaryCard = ({ size, toppings, totalPrice }) => {
  const calculateToppingsPrice = () => {
    return 8 * toppings.length;
  };

  return (
    <div className="order-summary-card">
      <h2>Order Summary</h2>
      <p>Size: {size}</p>
      <p>Extra Toppings: {calculateToppingsPrice()} TL</p>
      <p>Total Price: {totalPrice} TL</p>
    </div>
  );
};

export default OrderSummaryCard;
