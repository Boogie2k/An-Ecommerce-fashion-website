import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, checkout, setCheckout }) => {
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (isModal) {
      setTimeout(() => {
        setIsModal(false);
      }, 3000);
    }
  });

  let sum = 0;
  cart.map((item) => {
    const { prices } = item;
    return (sum += prices);
  });

  return (
    <>
      <section className="cart-section">
        <div className="col-3">
        SHOPPING CART
        </div>
        {isModal && (
          <h4
            style={{
              background: "red",
              position: "fixed",
              top: "7.1%",
              width: "100%",
            }}
          >
            cart is empty!
          </h4>
        )}
        <div style={{ marginTop: "10%" }} className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
              <th scope="row">0</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>  </tr>*/}

              {cart.map((item) => {
                const { products, prices } = item;
                return (
                  <tr>
                    <th scope="row">{products}</th>
                    <td>{"$" + prices}</td>
                    <td>1</td>
                    <td>{"$" + prices}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <article className="col-4" style={{ marginTop: "10%" }}>
            <h3 style={{ textAlign: "left" }}>Cart Totals</h3>
            <div className="row">
              {" "}
              <p className="col-6" style={{ textAlign: "left" }}>
                Subtotal
              </p>
              <p className="col-6" style={{ textAlign: "right" }}>
                {"$" + sum}
              </p>
            </div>

            <div className="row">
              {" "}
              <p className="col-6" style={{ textAlign: "left" }}>
                Shopping Fee
              </p>
              <p className="col-6" style={{ textAlign: "right" }}>
                free
              </p>
            </div>

            <div className="row">
              {" "}
              <p className="col-6" style={{ textAlign: "left" }}>
                Total
              </p>
              <p className="col-6" style={{ textAlign: "right" }}>
                {"$" + sum}
              </p>
            </div>

            <div className="row">
              <Link to={sum ? "/checkout" : "#"}>
                <button
                  style={{ marginLeft: "3%", width: "50%" }}
                  className=" btn btn-warning"
                  onClick={() => {
                    /*  cart.map((item) => {
                    
                    setCheckout([...checkout,item]);
                    console.log(checkout);
                  }); */
                    if (!sum) {
                      setIsModal(true);
                    }
                    setCart([]);
                    setCheckout([...checkout, cart]);
                  }}
                >
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Cart;
