import React, { useState } from "react";
import { Button } from "./Components/Button.style";
import "./test.css";
function Test() {
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setShow(true);
  };
  return (
    <>
      <div className="main-form mt-5">
        <div className="container">
          <h3 className="title d-flex justify-content-start mt-5 mb-5">
            Add a Brand
          </h3>
          <div className="form">
            <div className="filetype">
              <input type="file"></input>
            </div>
            <form>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" required />
                  <label for="">Brand Name</label>
                </div>
                <div className="formop">
                  <input type="text" required />
                  <label for="">Rank</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" required />
                  <label for="">Return Policy</label>
                </div>
                <div className="formop">
                  <input type="text" required />
                  <label for="">Payout Policy</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" required />
                  <label for="">% for social</label>
                </div>
                <div className="formop">
                  <input type="text" required />
                  <label for="">% for customer</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" required />
                  <label for="">Add coupons</label>
                </div>
              </div>
              <div className="d-flex justify-content-start mt-3">
                <Button
                  backgroundColor="#0A3724"
                  color="#fff"
                  borderRadius="10px"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="transaction-form">
          <div className="transaction">
            <h3 className="title d-flex justify-content-start mt-5">
              Add a Transaction
            </h3>
            <div className="transactionfill mt-5">
              <div className="cardinput">
                <div className="formop1">
                  <input type="text" required />
                  <label for="">Coupon Code</label>
                </div>
              </div>
              <div className="any">
                <Button
                  onClick={handleclick}
                  backgroundColor="#0A3724"
                  color="#fff"
                  borderRadius="10px"
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
        {show ? (
          <main className="condition">
            <div className="transaction-card mt-5">
              <div class="card w-75 transactionCardColor">
                <div class="card-body transactionbody">
                  <div className="table1">
                    <table>
                      <tr>
                        <th>Customer’s Name</th>
                        <th>Customer’s Email</th>
                        <th>Brand Name</th>
                      </tr>
                      <tr>
                        <td>Romil Meghani</td>
                        <td>romilmeghani@gmail.com</td>
                        <td>Sublime Life</td>
                      </tr>
                    </table>
                  </div>
                  <div className="table2">
                    <table>
                      <tr>
                        <th>% for Customer</th>
                        <th>% for Social</th>
                        <th>Payout Policy</th>
                        <th>Return Period</th>
                      </tr>
                      <tr>
                        <td>20%</td>
                        <td>20%</td>
                        <td>10 Days</td>
                        <td>10 Days</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="transactionfill mt-5">
              <div className="cardinput">
                <div className="formop1">
                  <input type="text" required />
                  <label for="">Transaction Amount</label>
                </div>
              </div>
            </div>
            <div className="transactionfill mt-5">
              <div className="cardinput">
                <div className="formop1">
                  <input type="text" required />
                  <label for="">Status</label>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-start mt-3">
              <Button
                backgroundColor="#0A3724"
                color="#fff"
                borderRadius="10px"
              >
                Save
              </Button>
            </div>
          </main>
        ) : null}
      </div>
    </>
  );
}

export default Test;
