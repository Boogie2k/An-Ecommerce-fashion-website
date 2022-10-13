import React, { useEffect, useState } from "react";

import { data } from "../data/product-data";
import star from "../photos/product/stars.png";

const Product = ({ product, cart, setCart }) => {
  return (
    <>
      <ProductPage product={product} cart={cart} setCart={setCart} />
    </>
  );
};

const ProductPage = ({ product, cart, setCart }) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      setTimeout(() => {
        setIsModal(false);
      }, 3000);
    }

    /* return () => {
      second 
    }*/
  });

  console.log(data.Name);
  return (
    <>
      {" "}
      {isModal && (
        <h4
          style={{
            background: "green",
            position: "fixed",
            top: "7.1%",
            width: "100%",
          }}
        >
          Item has been added to cart successfully!
        </h4>
      )}
      <section className="container-fluid  product">
        {/* <div className="container"> */}
        <div className="row">
          <article className="col-md-12 col-lg-6">
            <img className="main-pic" src={product.image} alt="" />
          </article>
          <article className="col-md-12 col-lg-6 desc">
            <h2>{product.Name}</h2>
            <img className="stars" src={star} alt="" />
            <p className="prices">
              <span className="old-price">69.00</span>{" "}
              <span className="price">{"$" + product.price} </span>{" "}
            </p>
            <p className="product-texts">{product.text}</p>
            <select className="select-size">
              <option value="-1">Select Sizes</option>{" "}
            </select>{" "}
            <button
              onClick={() => {
                setIsModal(true);
                const items = {
                  products: product.Name,
                  prices: product.price,
                };
                setCart([...cart, items]);
                cart.map((shoe) => {
                  return console.log(shoe.prices);
                });
              }}
            >
              Add To Cart
            </button>
            <div className="CandT">
              <p>category: {product.category}</p>
              <p>Tags: {product.tags}</p>
            </div>
          </article>{" "}
          <div className="container description">
            <article>
              <span>description</span>
              <span className="reviews">Reviews</span>
            </article>

            <p>{product.Description}</p>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Product;
