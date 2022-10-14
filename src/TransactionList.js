import React from "react";

function TransactionList() {
  return (
    <div className="List of Transaction">
      <div className="container-fluid">
        <h3 className="title d-flex justify-content-start mt-5 mb-5">
          List of Transaction
        </h3>
        <div className="transactionlist-info">
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
                <th scope="row">10/14/2002</th>
                <td>10/14/2022</td>
                <td>Code generated</td>
                <td>Romil Meghani</td>
                <td>BOGO</td>
                <td>250/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TransactionList;
