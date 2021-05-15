import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ cart, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/Zeitgeist/Mar20/Covid19/2021/IN_GWD_Covid19_CustomerMsg_MH_ENG_1x_v1._CB654576486_.png"
          alt=""
          className="checkout__ad"
        />
        <h3 className="checkout__name">
          Hello {user ? user.displayName : "Guest"}
        </h3>
        <h2 className="checkout__title">Your Cart</h2>

        {cart.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            rating={item.rating}
          />
        ))}
      </div>

      <div className="checkout__right">
        <Subtotal />
        {/* <h2>Subtotal component</h2> */}
      </div>
    </div>
  );
}

export default Checkout;
