import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider";

function Product({ id, category_title, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  //   console.log("my cart is ", cart);

  const addToCart = () => {
    //dispatch the item to data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      {category_title ? (
        <div className="product__categoryInfo">{category_title}</div>
      ) : (
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            {price && <small>₹</small>}
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
      )}
      <img src={image} alt="" />
      {price ? (
        <button onClick={addToCart}>Add to Cart</button>
      ) : (
        <p className="product__showMore">See more</p>
      )}
    </div>
  );
}

export default Product;
