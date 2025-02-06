import React from "react";

const CartPage: React.FC = () => {
  return (
    <div>
      <h1>Your Cart</h1>
      <div className="snipcart-items"></div>
      <div className="snipcart-summary">
        <strong>Total:</strong> <span className="snipcart-total-price"></span>
      </div>
      <button className="snipcart-checkout">Checkout</button>
    </div>
  );
};

export default CartPage;
