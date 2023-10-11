import React from "react";

const Footer = () => {
  return (
    <footer className="container-fluid bg-#fbfbfb">
      <div className="row">
        <div className="  col-md-3 col-6">
          <div className="container s">
            <h5>Company info</h5>{" "}
            <article className=" ">
              <p>About us </p>
              <p>Latest Posts</p>
              <p>Contact us</p>
              <p>shop</p>
              <p></p>
            </article>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="container s">
            <h5>Company info</h5>{" "}
            <article className=" ">
              <p>tracking </p>
              <p>order status</p>
              <p>Delievery</p>
              <p>Shopping info</p>
              <p>faq</p>
            </article>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="container s">
            <h5>Company info</h5>{" "}
            <article className=" ">
              <p>Special offers </p>
              <p>Advertising</p>
              <p>Terms of use</p>
              <p>gift cards</p>
              <p></p>
            </article>
          </div>
        </div>
        <div className="col-md-3 col-6">
          <div className="container">
            <h5>Get in the know</h5>{" "}
            <article className=" ">
              <input className="input" type="text" placeholder="enter email" />
            </article>
          </div>
        </div>
      </div>

      <div className="container copy-right ">
        <hr className=""></hr>
        <div className="col-md-3 col-12">
          <article style={{ textAlign: "left" }}>
            &copy; 2022 NorthStar ecommerce
            <article className="d-flex">
              {" "}
              <p style={{ marginRight: "5%" }}>privacy policy </p>
              <p> terms and condition</p>
            </article>
          </article>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
