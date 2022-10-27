import React from "react";
import { useState, useEffect } from "react";

function BrandViewList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function login() {
      const response = await fetch(
        "https://coco-backend1.herokuapp.com/getBrands",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "*/*",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      const result = await response.json();
      setData(result);
      console.log(result);
    }
    login();
  }, []);

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
              <th>Brand</th>
              <th>Brand Name</th>
              <th>Payout Policy</th>
              <th>Return Period</th>
              <th>% for customer</th>
              <th>% for social</th>
              <th></th>
            </tr>
          </thead>
          {data
            .map((data) => {
              return (
                <>
                  <tbody>
                    <tr key={data.brandId}>
                      <td data-title="Rank">
                        <div className="d-flex align-items-center justify-content-center">
                          <h4>{data.rank}</h4>
                        </div>
                      </td>
                      <td data-title="Brand">
                        <div class="d-flex align-items-center justify-content-center">
                          <img
                            src={data.imagePath}
                            alt=""
                            style={{
                              width: "45px",
                              height: "45px",
                            }}
                            class="rounded-circle"
                          />
                        </div>
                      </td>
                      <td data-title="Brand Name">
                        <p class="fw-bold mb-1">{data.brandName}</p>
                      </td>
                      <td data-title="Payout Policy">
                        <p class="fw-normal mb-1">{data.payoutPolicy}</p>
                      </td>
                      <td data-title="Return Period">
                        <p class="fw-normal mb-1">{data.returnPolicy}</p>
                      </td>
                      <td data-title="% for customer">
                        <p class="fw-normal mb-1">{data.customerPercentage}</p>
                      </td>
                      <td data-title="% for social">
                        <p class="fw-normal mb-1">{data.socialPercentage}</p>
                      </td>
                      <td data-title="% for social">
                        <button
                          style={{
                            padding: "5px 2rem",
                            borderRadius: "4px",
                            color: "#fff",
                            backgroundColor: "#1c5a40",
                            border: "2px solid#1c5a40",
                          }}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </>
              );
            })
            .reverse()}
        </table>
      </div>
    </div>
  );
}

export default BrandViewList;
