import React, { useState } from "react";
import "./Card.css";
import Test from "./Test";
import { Button, Input } from "./Components/Button.style";
const Card = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      <section>
        <div className="bannerimage">
          <img src="https://cdn.pixabay.com/photo/2022/08/18/15/17/mountain-7395141_960_720.jpg"></img>
        </div>
        <div className="allcard">
          <div className="container">
            <div className="row">
              <div class="col-12 col-md-5 col-lg-5">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://cdn.pixabay.com/photo/2016/03/28/18/07/micky-mouse-1286470_960_720.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5>Brand</h5>
                    <div className="card-info">
                      <div className="card-button">
                        <Button
                          onClick={handleClick}
                          backgroundColor="#0A3724"
                          borderRadius="10px"
                          color="#fff"
                        >
                          Add New
                        </Button>
                      </div>
                      <div className="card-button2">
                        <Button
                          backgroundColor="#92B9A8"
                          borderRadius="4px"
                          border="2px dashed #0A3724"
                        >
                          View List
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5 col-lg-5">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://cdn.pixabay.com/photo/2016/03/28/18/07/micky-mouse-1286470_960_720.jpg"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5>Transaction</h5>
                    <div className="card-info">
                      <Button
                        backgroundColor="#0A3724"
                        borderRadius="10px"
                        color="#fff"
                      >
                        Add New
                      </Button>
                      <Button
                        backgroundColor="#92B9A8"
                        borderRadius="4px"
                        color="#fff"
                        border="2px dashed #0A3724"
                      >
                        View List
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </section>
    </>
  );
};
export default Card;
