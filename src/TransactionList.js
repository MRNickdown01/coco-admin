import React from "react";

function TransactionList() {
  return (
    <div className="List of Transaction">
      <div className="container-fluid">
        <h3 className="title d-flex justify-content-start mt-5 mb-5">
          List of Transaction
        </h3>
      </div>
      <div className="table-responsive" id="no-more-tables">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Last Updated</th>
              <th scope="col">Status</th>
              <th scope="col">Name</th>
              <th scope="col">Coupon code</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-title="Date">22/08/2022</td>
              <td data-title="Last Updated">25/08/2022</td>
              <td data-title="Status">Code generated</td>
              <td data-title="Name">Romil Meghani</td>
              <td data-title="Coupon Code">BOGO</td>
              <td data-title="Amount">250/-</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td data-title="Date">22/08/2022</td>
              <td data-title="Last Updated">25/08/2022</td>
              <td data-title="Status">Code generated</td>
              <td data-title="Name">Romil Meghani</td>
              <td data-title="Coupon Code">BOGO</td>
              <td data-title="Amount">250/-</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td data-title="Date">22/08/2022</td>
              <td data-title="Last Updated">25/08/2022</td>
              <td data-title="Status">Code generated</td>
              <td data-title="Name">Romil Meghani</td>
              <td data-title="Coupon Code">BOGO</td>
              <td data-title="Amount">250/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionList;
