import React, { useState, useEffect } from "react";
import "./Payment.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../reducer";
import axios from "../axios";
import { db } from "../firebase";

function Payment() {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    //generate the special stripe secret wwhich allows to charge the customer

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the currency total in currency subunits
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [cart]);

  // console.log("client secret is ", clientSecret);

  const handleSubmit = async (event) => {
    //stripe
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        //paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event) => {
    // Listen for changes in the CardElement and display any errors as the customer types in their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment__container">
        {!user && <h1>Please Sign In to continue</h1>}
        {getCartTotal(cart) === 0 ? (<h1>Please add items to your Cart to proceed further</h1>) :
        (user && (
          <>
            <h1>
              Checkout (<Link to="/checkout">{cart?.length} items</Link>)
            </h1>
             {/* Payment Section - delivery address */}
            <div className="payment__section">
              <div className="payment__title">
                <h3>Delivery Address</h3>
              </div>
              <div className="payment__address">
                <p>{user?.email}</p>
                <p>{user?.photoURL} </p>
              </div>
            </div>
            {/* Payment Section - Review items */}
            <div className="payment__section">
              <div className="payment__title">
                <h3>Review items and delivery</h3>
              </div>
              <div className="payment__items">
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
            </div>
            {/* Payment Section - Payment */}
            <div className="payment__section">
              <div className="payment__title">
                <h3>Payment Method</h3>
              </div>
              <div className="payment__details">
                {/* Stripe */}

                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />

                  <div className="payment__priceContainer">
                    <CurrencyFormat
                      renderText={(value) => <h3>Order Total: {value}</h3>}
                      decimalScale={2}
                      value={getCartTotal(cart)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₹"}
                    />
                    <button
                      disabled={processing || disabled || succeeded || !user}
                    >
                      <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                    </button>
                  </div>
                  {error && <div>{error}</div>}
                </form>
              </div>
            </div>
          </>
        )
)}
      </div>
    </div>
  );
}

export default Payment;
