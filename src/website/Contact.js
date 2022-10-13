import React from "react";
import { useState } from "react";

const Contact = () => {
  const [isContact, setIsContact] = useState(false);
  return (
    <div className="contact-section">
      <article className="contact-section-bg">
        <h2>CONTACT US</h2>
      </article>

      <form className="container">
        {isContact ? (
          <article>
            <h2>Message sent! we will get back to you very soon</h2>
          </article>
        ) : (
          <article>
            <div className="row">
              <div className="col-9 text-start">
                <h2 style={{}}>We would love to hear from you</h2>
                <p>
                  {" "}
                  if you have any suggestions, you can contact us here. We would
                  love to hear from you
                </p>
                <article className="row">
                  <div className="col-5">
                    <label for="name">Name</label> <br />
                    <input id="name" />
                  </div>
                  <div className="col-5">
                    <label for="email">email</label> <br />
                    <input id="email" />
                  </div>{" "}
                </article>

                <div className="col-10">
                  <label for="message"> message</label> <br />
                  <input className="message" id="message" />
                </div>
              </div>

              <div className="col-3 text-start">
                <h2> visit us</h2>
                <p>
                  UET lahore, punjab pakistan
                  <br />
                  phone:+2138117389
                </p>

                <h2>Get in touch</h2>
                <p>
                  you can get in touch with us with the provided email
                  <br></br>
                  Email: abc@gmail.com
                </p>
              </div>
            </div>

            <article className="text-start">
              <button
                className="btn btn-primary "
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setIsContact(true);
                }}
              >
                send message
              </button>
            </article>
          </article>
        )}
      </form>
    </div>
  );
};

export default Contact;
