import React from "react";

function AddList() {
  return (
    <div className="List of Brands">
      <div className="container-fluid">
        <h3 className="title d-flex justify-content-start mt-5 mb-5">
          List of Brands
        </h3>
      </div>
      <div className="table-responsive" id="no-more-tables">
        <table class="table align-middle mb-0 bg-white">
          <thead class="bg-light">
            <tr>
              <th>Rank</th>
              <th>Brand Name</th>
              <th>Payout Policy</th>
              <th>Return Period</th>
              <th>% for customer</th>
              <th>% for social</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Rank">
                <div class="d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                    class="rounded-circle"
                  />
                  <div class="ms-3">
                    <h6>1</h6>
                  </div>
                </div>
              </td>
              <td data-title="Brand Name">
                <p class="fw-bold mb-1">Sublime Life</p>
              </td>
              <td data-title="Payout Policy">
                <p class="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="Return Period">
                <p class="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="% for customer">
                <p class="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="% for social">
                <p class="fw-normal mb-1">10 %</p>
              </td>
            </tr>
            <tr>
              <td data-title="Rank">
                <div class="d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    class="rounded-circle"
                    alt=""
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  />
                  <div class="ms-3">
                    <h6>1</h6>
                  </div>
                </div>
              </td>
              <td data-title="Brand Name">
                <p class="fw-bold mb-1">Sublime Life</p>
              </td>
              <td data-title="Payout Policy">
                <p class="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="Return Period">
                <p class="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="% for customer">
                <p class="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="% for social">
                <p class="fw-normal mb-1">10 %</p>
              </td>
            </tr>
            <tr>
              <td data-title="Rank">
                <div class="d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    class="rounded-circle"
                    alt=""
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  />
                  <div class="ms-3">
                    <h6>1</h6>
                  </div>
                </div>
              </td>
              <td data-title="Brand Name">
                <p class="fw-bold mb-1">Sublime Life</p>
              </td>
              <td data-title="Payout Policy">
                <p class="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="Return Period">
                <p class="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="% for customer">
                <p class="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="% for social">
                <p class="fw-normal mb-1">10 %</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AddList;
