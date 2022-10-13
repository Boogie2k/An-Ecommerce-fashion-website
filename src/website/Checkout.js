import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Checkout = ({ checkout }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [go, setGo] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isAddress, setIsAddress] = useState(false);
  const [isTown, setIsTown] = useState(false);

  useEffect(() => {
    if (name && address && town && phone && email) {
      setGo(true);
    } else {
      setGo(false);
    }
  }, [name, address, town, phone, email]);

  useEffect(() => {
    if (isModal) {
      setTimeout(() => {
        setIsModal(false);
      }, 3000);
    }
  });

  let mode = () => {
    if (!go) {
      setIsModal(true);
    }

    if (!name) {
      setIsName(true);
    } else if (name) {
      setIsName(false);
    }

    if (!address) {
      setIsAddress(true);
    } else if (address) {
      setIsAddress(false);
    }

    if (!town) {
      setIsTown(true);
    } else if (town) {
      setIsTown(false);
    }

    if (!phone) {
      setIsPhone(true);
    } else if (phone) {
      setIsPhone(false);
    }

    if (!email) {
      setIsEmail(true);
    } else if (email) {
      setIsEmail(false);
    }
  };

  let finalLists;
  console.log(checkout);
  checkout.map((item) => {
    finalLists = item;
    return console.log(finalLists);
  });

  let sum = 0;
  finalLists.map((item) => {
    const { prices } = item;
    return (sum += prices);
  });

  return (
    <>
      {" "}
      {isModal && (
        <h4
          style={{
            background: "red",
            position: "fixed",
            top: "7.1%",
            width: "100%",
          }}
        >
          Complete the form!
        </h4>
      )}
      <section className="checkout">
        <div className="col-3">CHECKOUT</div>
        <form>
          <article className="text-start billing container">
            <h2>Billing details</h2>
            <p>full Name*</p>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
            />
            {isName && (
              <i style={{ color: "red" }}>
                <br />
                name is required <br />
              </i>
            )}
            <p>Street Address*</p>
            <input
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              required
              type="text"
            />

            {isAddress && (
              <i style={{ color: "red" }}>
                <br />
                Address is required <br />
              </i>
            )}

            <p>Town/city*</p>
            <input
              value={town}
              onChange={(e) => {
                setTown(e.target.value);
              }}
              required
              type="text"
            />

            {isTown && (
              <i style={{ color: "red" }}>
                <br />
                city is required <br />
              </i>
            )}
            <p>Phone*</p>
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
              type="tel"
            />

            {isPhone && (
              <i style={{ color: "red" }}>
                <br />
                phone number is required <br />
              </i>
            )}

            <p>Email Address*</p>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />

            {isEmail && (
              <i style={{ color: "red" }}>
                <br />
                Email is required <br />
              </i>
            )}

            <div className="checkout-order">
              {" "}
              <h2 className="float-md-start">Your order</h2>
              <div style={{ border: "1px solid #f7f7" }} className="both row">
                <h5 className="col-6"> product</h5>{" "}
                <h5 className="col-6">Total</h5>
              </div>
              {/* <p className="col-6"> product</p> <p className="col-6">Total</p> */}
              {finalLists.map((item) => {
                const { products, prices } = item;
                return (
                  <div style={{ border: "1px solid #f7f7" }} className="row">
                    {" "}
                    <p style={{ color: "#555555" }} className="col-6">
                      {" "}
                      {products}
                    </p>{" "}
                    <p className="col-6">{"$" + prices}</p>
                  </div>
                );
              })}
              <div style={{}} className="row">
                <h5 style={{ color: "#555555" }} className="col-6">
                  {" "}
                  subtotal
                </h5>{" "}
                <p className="col-6">{"$" + sum}</p>
              </div>
              <div style={{ border: "1px solid #f7f7" }} className="row">
                <h5 style={{ textAlign: "center" }} className="col-12">
                  {"$" + sum}
                </h5>
              </div>
              <div style={{ border: "1px solid #f7f7" }} className="row">
                <p
                  style={{ border: "1px solid #f7f7", color: "#555555" }}
                  className=" last-p"
                >
                  Pay on delivery. Please contact us if you have any complaints
                  or which to make any additional changes
                </p>
                <div>
                  {" "}
                  {/*  <button
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(checkout);
                    }}
                    className="btn btn-danger float-md-end"
                    type="submit"
                  >
                    Place order
                  </button> */}
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={mode}
                  >
                    Place order
                  </button>
                  {go && (
                    <div
                      class="modal fade"
                      id="exampleModal"
                      tabindex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              style={{ color: "green" }}
                              class="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              Success!
                            </h1>

                            <Link to="/">
                              {" "}
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </Link>
                          </div>
                          <div class="modal-body">
                            Your order has been successfull, and will be
                            delivered to you within four days
                          </div>
                          <div class="modal-footer">
                            <Link to="/">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </article>
        </form>
      </section>
    </>
  );
};

export default Checkout;
