import React from "react";

const OrderSummaryCard = ({ size, toppings, totalPrice, submitButton }) => {
  const calculateToppingsPrice = () => {
    return 8 * toppings.length;
  };

  return (
    <>
      <div>
        <h2>Sipariş Özeti</h2>
        <p>Boyut: {size}</p>
        <p>Ek Malzemeler: {calculateToppingsPrice()} TL</p>
        <p>Toplam Fiyat: {totalPrice} TL</p>
      </div>
      {submitButton}
    </>
  );
};

export default OrderSummaryCard;
