import React, { useState } from "react";
import "./Card.css";
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
                    src="https://images.squarespace-cdn.com/content/v1/57ec45673e00be08c53b9142/1481488248167-IGINL272OSZD4S8HKH9H/btb-brands-wall_share.jpg?format=2500w"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Brand</h5>
                    <div className="card-info">
                      <div className="card-button">
                        <a href="/test">
                          <Button
                            onClick={handleClick}
                            backgroundColor="#0A3724"
                            borderRadius="10px"
                            color="#fff"
                          >
                            Add New
                          </Button>
                        </a>
                      </div>
                      <div className="card-button2">
                        <a href="viewlist">
                          <Button
                            backgroundColor="#92B9A8"
                            borderRadius="4px"
                            border="2px dashed #0A3724"
                          >
                            View List
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-5 col-lg-5">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="https://images.squarespace-cdn.com/content/v1/57ec45673e00be08c53b9142/1481488248167-IGINL272OSZD4S8HKH9H/btb-brands-wall_share.jpg?format=2500w"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 className="card-title">Transaction</h5>
                    <div className="card-info">
                      <a href="/transaction">
                        <Button
                          backgroundColor="#0A3724"
                          borderRadius="10px"
                          color="#fff"
                        >
                          Add New
                        </Button>
                      </a>
                      <a href="/transactionlist">
                        <Button
                          backgroundColor="#92B9A8"
                          borderRadius="4px"
                          border="2px dashed #0A3724"
                        >
                          View List
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="/dashboard">
            <Button
              type="button"
              className="d-flex-justify-content-center mt-5"
            >
              Dashboard
            </Button>
          </a>
        </div>
      </section>
    </>
  );
};
export default Card;
