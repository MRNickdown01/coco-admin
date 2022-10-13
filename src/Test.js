import React from "react";
import { Button } from "./Components/Button.style";
import "./test.css";
function Test() {
  return (
    <>
      <div className="main-form mt-5">
        <div className="container">
          <div className="form">
            <div className="filetype">
              <input type="file"></input>
            </div>
            <form>
              <div className="maininput mt-5">
                <div className="all-detail">
                  <div className="formop">
                    <input type="text" required />
                    <label for="">search</label>
                  </div>
                  <div className="formop">
                    <input type="text" required />
                    <label for="">search</label>
                  </div>

                  <div className="formop">
                    <input type="text" required />
                    <label for="">search</label>
                  </div>
                  <div className="formop">
                    <input type="text" required />
                    <label for="">search</label>
                  </div>
                  <div className="submitbuttonform">
                    <Button
                      backgroundColor="#0A3724"
                      color="#fff"
                      borderRadius="10px"
                    >
                      Save
                    </Button>
                  </div>
                </div>
                <div className="all-detail2">
                  <div className="formop">
                    <input type="text" required />
                    <label for="">search</label>
                  </div>

                  <div className="formop">
                    <input type="text" required />
                    <label for="">search</label>
                  </div>

                  <div className="formop">
                    <input type="text" required />
                    <label for="">search</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="transaction-form">
        <div className="transaction">
          <h3 className="title">Add a Transaction</h3>
          <div className="transactionfill mt-5">
            <div className="cardinput">
              <div className="formop1">
                <input type="text" required />
                <label for="">search</label>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <div className="form2 mt-5">
        <div className="inputfatch">
          <div className="formop1">
            <input type="text" required />
            <label for="">search</label>
          </div>
          <div className="formop1">
            <input type="text" required />
            <label for="">search</label>
          </div>
        </div>
      </div>
      <div className="submitbuttonform mt-3">
        <Button backgroundColor="#0A3724" color="#fff" borderRadius="10px">
          Save
        </Button>
      </div>
    </>
  );
}

export default Test;
