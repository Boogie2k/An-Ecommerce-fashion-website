import React from "react";
import { arrivalData } from "../data/new-arrival-data/new-arrival";
import { Link } from "react-router-dom";
import { arrivalDataTwo } from "../data/new-arrival-data/new-arrival";
import iconOOne from "../photos/benefit/icon1.png";
import iconTwoo from "../photos/benefit/icon2.png";
import iconThreee from "../photos/benefit/icon3.png";
import iconFourr from "../photos/benefit/icon4.png";

import { topSelling } from "../data/top-selling-data/top-selling";

const HomePage = ({ setProduct, product }) => {
  return (
    <>
      <Home setProduct={setProduct} product={product} />
    </>
  );
};

const Home = ({ setProduct, product }) => {
  return (
    <>
      <div class="hero">
        <article>
          <p>
            Stylist picks beat <br /> the heat
          </p>
          <button>shop now</button>{" "}
        </article>
      </div>

      <div class="container-fluid new-arrivals">
        <article>
          <h4>Discover new arrivals </h4>
          <p>recently added shirts</p>
        </article>
      </div>

      <div className="arrive">
        <div className="row" style={{}}>
          {/* */}{" "}
          {/*  <div  class="container">
                <img src={one} alt="" /> <h6>Plain shirt</h6> <p>83$</p>
              </div> */}
          {arrivalData.one.map((item) => {
            return (
              <div style={{}} className="col-md-6 col-lg-3">
                <Link to="/product">
                  {" "}
                  <div
                    onClick={() => {
                      setProduct({
                        ...product,
                        image: item.image,
                        Name: item.cloth,
                        price: item.price,
                        category: item.category,
                        tags: item.tags,
                        Description: item.Description,
                      });
                    }}
                    style={{}}
                    className="container"
                  >
                    <img src={item.image} alt="" />
                    <h4> {item.cloth} </h4>
                    <p> ${item.price} </p>
                  </div>
                </Link>{" "}
              </div>
            );
          })}{" "}
          {/*  */}
        </div>
        <br />
        <div class="row">
          {arrivalDataTwo.two.map((item) => {
            return (
              <div style={{}} className="col-md-6 col-lg-3">
                <Link to="/product">
                  {" "}
                  <div
                    onClick={() => {
                      setProduct({
                        ...product,
                        image: item.image,
                        Name: item.cloth,
                        price: item.price,
                        category: item.category,
                        tags: item.tags,
                        Description: item.Description,
                      });
                    }}
                    style={{}}
                    className="container"
                  >
                    <img src={item.image} alt="" /> <h4> {item.cloth} </h4>
                    <p>${item.price}</p>
                  </div>
                </Link>{" "}
              </div>
            );
          })}
        </div>{" "}
      </div>

      {/* Benefit */}
      <div class="container">
        <div class="row">
          <div class=" col-md-6 col-lg-3">
            <div class="container d-flex">
              {" "}
              <img
                className=""
                width="24px"
                height="24px"
                src={iconOOne}
                alt=""
              />
              <article>
                <h5>Free Shipping</h5> <p> Enjoy Free shipping</p>{" "}
              </article>
            </div>
          </div>
          <div class=" col-md-6 col-lg-3">
            <div class="container d-flex">
              {" "}
              <img
                className=""
                width="24px"
                height="24px"
                src={iconTwoo}
                alt=""
              />
              <article>
                <h5>Free Shipping</h5> <p> Enjoy Free shipping</p>{" "}
              </article>{" "}
            </div>
          </div>
          <div class=" col-md-6 col-lg-3">
            <div class="container d-flex">
              {" "}
              <img
                className=""
                width="24px"
                height="24px"
                src={iconThreee}
                alt=""
              />
              <article>
                <h5>Free Shipping</h5> <p> Enjoy Free shipping</p>{" "}
              </article>{" "}
            </div>
          </div>
          <div class=" col-md-6 col-lg-3">
            <div class="container d-flex">
              {" "}
              <img
                className=""
                width="24px"
                height="24px"
                src={iconFourr}
                alt=""
              />
              <article className="">
                <h5>Free Shipping</h5> <p> Enjoy Free shipping</p>{" "}
              </article>{" "}
            </div>
          </div>
        </div>
      </div>

      <article className="container">
        <div className="row text-light">
          <div
            style={{
              marginRight: "1%",
              height: "429px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="col-8 bg-dark"
          >
            <h4 style={{ textTransform: "uppercase" }}>Peace of mind </h4>
            <p>
              {" "}
              A one stop platform for all your fashion needs, hassle-free. Buy
              with Peace of mind
            </p>
            <button className="btn btn-light">BUY NOW</button>
          </div>
          <div
            style={{
              marginRight: "1%",
              height: "429px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
            className="col-3 bg-dark"
          >
            <h4 style={{ textTransform: "uppercase" }}>
              buy two get one free{" "}
            </h4>
            <p>
              {" "}
              End of season sales. Buy any two items of your choice and get one
              free
            </p>
            <button className="btn btn-light">BUY NOW</button>
          </div>
        </div>
      </article>

      <div class="container-fluid new-arrivals">
        <article>
          <h4>Top sellers </h4>
          <p>Browse our top selling products</p>
        </article>
      </div>

      <div className="arrive">
        <div className="row" style={{}}>
          {/* */}{" "}
          {/*  <div  class="container">
                <img src={one} alt="" /> <h6>Plain shirt</h6> <p>83$</p>
              </div> */}
          {topSelling.one.map((item) => {
            return (
              <div style={{}} className="col-md-6 col-lg-3">
                <Link to="/product">
                  {" "}
                  <div
                    onClick={() => {
                      setProduct({
                        ...product,
                        image: item.image,
                        Name: item.cloth,
                        price: item.price,
                        category: item.category,
                        tags: item.tags,
                        Description: item.Description,
                      });
                    }}
                    style={{}}
                    className="container"
                  >
                    <img src={item.image} alt="" />
                    <h4> {item.cloth} </h4>
                    <p> ${item.price} </p>
                  </div>
                </Link>{" "}
              </div>
            );
          })}{" "}
          {/*  */}
        </div>
      </div>

      <button className="btn btn-primary">Shop Now</button>
      <br />
    </>
  );
};

export default HomePage;
