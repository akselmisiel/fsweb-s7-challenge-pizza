import React from "react";

const OrderSummaryCard = ({ size, toppings, totalPrice }) => {
  const calculateTotalPrice = () => {
    let price = 0;
    switch (size) {
      case "Küçük":
        price = 35;
        break;
      case "Orta":
        price = 40;
        break;
      case "Büyük":
        price = 45;
        break;
      default:
        price = 25;
    }

    toppings.forEach(() => {
      price += 8;
    });
    return price;
  };

  const calculateToppingsPrice = () => {
    return 8 * toppings.length;
  };

  return (
    <div className="order-summary-card">
      <h2>Order Summary</h2>
      <p>Size: {size}</p>
      <p>Extra Toppings: {calculateToppingsPrice()} TL</p>
      <p>Total Price: {calculateTotalPrice()} TL</p>
    </div>
  );
};

export default OrderSummaryCard;
