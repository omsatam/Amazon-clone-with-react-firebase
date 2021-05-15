import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getCartTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ cart }] = useStateValue();
  const history = useHistory();

  // console.log(cart);
  // const getCartTotal = () => {
  //   let priceItem;
  //   let price = 0;
  //   for (let i = 0; i < cart.length; i++) {
  //     priceItem = cart[0].price;
  //     console.log(priceItem);
  //     priceItem = priceItem.replace(",", "");
  //     priceItem = parseInt(priceItem);
  //     price += priceItem;
  //   }
  //   return price;
  // };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{` ${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
