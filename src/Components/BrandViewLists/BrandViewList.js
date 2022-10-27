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
              <th></th>
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
              <td data-title="Rank ">
                <div className="">
                  <h4>1</h4>
                </div>
              </td>
              <td date-title="">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                  className="rounded-circle"
                />
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
              <td data-title="Rank ">
                <div className="">
                  <h4>2</h4>
                </div>
              </td>
              <td date-title="">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg"
                  alt=""
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                  className="rounded-circle"
                />
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
              <td data-title="Rank ">
                <div className="">
                  <h4>3</h4>
                </div>
              </td>
              <td date-title="">
                <img
                  src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                  alt=""
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                  className="rounded-circle"
                />
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
