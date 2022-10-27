import React from "react";

function BrandViewList() {
  return (
    <div className="List of Brands">
      <div className="container-fluid">
        <h3 className="title d-flex justify-content-start mt-5 mb-5">
          List of Brands
        </h3>
      </div>
      <div className="table-responsive" id="no-more-tables">
        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th>Rank</th>
              <th>Brand Name</th>
              <th>Payout Policy</th>
              <th>Return Period</th>
              <th>% for customer</th>
              <th>% for social</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Rank">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                    className="rounded-circle"
                  />
                </div>
              </td>
              <td data-title="Brand Name">
                <p className="fw-bold mb-1">Sublime Life</p>
              </td>
              <td data-title="Payout Policy">
                <p classname="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="Return Period">
                <p classname="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="% for customer">
                <p classname="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="% for social">
                <p classname="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="">
                <button
                  style={{
                    padding: "5px 30px",
                    borderRadius: "6px",
                    background: "#1c5a40",
                    border: "1px solid #1c5a40",
                    color: "#fff",
                  }}
                  type="submit"
                  id="edit-button"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td data-title="Rank">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    class="rounded-circle"
                    alt=""
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  />
                </div>
              </td>
              <td data-title="Brand Name">
                <p className="fw-bold mb-1">Sublime Life</p>
              </td>
              <td data-title="Payout Policy">
                <p className="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="Return Period">
                <p className="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="% for customer">
                <p className="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="% for social">
                <p className="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="">
                <button
                  style={{
                    padding: "5px 30px",
                    borderRadius: "6px",
                    background: "#1c5a40",
                    border: "1px solid #1c5a40",
                    color: "#fff",
                  }}
                  type="submit"
                  id="edit-button"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td data-title="Rank">
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                    className="rounded-circle"
                    alt=""
                    style={{
                      width: "45px",
                      height: "45px",
                    }}
                  />
                </div>
              </td>
              <td data-title="Brand Name">
                <p className="fw-bold mb-1">Sublime Life</p>
              </td>
              <td data-title="Payout Policy">
                <p className="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="Return Period">
                <p className="fw-normal mb-1">10 days</p>
              </td>
              <td data-title="% for customer">
                <p className="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="% for social">
                <p className="fw-normal mb-1">10 %</p>
              </td>
              <td data-title="">
                <button
                  style={{
                    padding: "5px 30px",
                    borderRadius: "6px",
                    background: "#1c5a40",
                    border: "1px solid #1c5a40",
                    color: "#fff",
                  }}
                  type="submit"
                  id="edit-button"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BrandViewList;
