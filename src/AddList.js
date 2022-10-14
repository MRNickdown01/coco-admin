import React from "react";

function AddList() {
  return (
    <div className="List of Brands">
      <div className="container-fluid">
        <h3 className="title d-flex justify-content-start mt-5 mb-5">
          List of Brands
        </h3>

        <div className="Brand-info-data d-flex justify-content-start">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Rank</th>
                <th scope="col">Brand Name</th>
                <th scope="col">Payout Policy</th>
                <th scope="col">Return Period</th>
                <th scope="col">% for customer</th>
                <th scope="col">% for social</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  class="rounded-circle"
                  alt="Avatar"
                />
                <th scope="row">1</th>
                <td>Sublime Life</td>
                <td>10 days</td>
                <td>10 days</td>
                <td>10 %</td>
                <td>10 %</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddList;
