import { Button } from "../StyleComponent/Button.style";
import "../AddBrands/Style.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Test() {
  const location = useLocation();
  const [brandDetails, setBrandDetails] = useState();
  const [brand, setBrand] = useState({
    brandName: {
      value: "",
      error: false,
    },
    rank: {
      value: "",
      error: false,
    },
    returnPolicy: {
      value: "",
      error: false,
    },
    payoutPolicy: {
      value: "",
      error: false,
    },
    socialPercentage: {
      value: "",
      error: false,
    },
    customerPercentage: {
      value: "",
      error: false,
    },
    imagePath: {
      value: "",
      error: false,
    },
  });

  useEffect(() => {
    let locParams = location.search;
    locParams = locParams.split("?brandId=")[1];
    console.log(locParams, "abcd");

    if (locParams) {
      var requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      fetch(
        `http://coco-backend1.herokuapp.com/getBrandById?brandId=${locParams}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          let brandDetails = result.brands;
          setBrandDetails(brandDetails);
          console.log(brandDetails);
        })
        .catch((error) => console.log("error", error));
    }
  }, []);

  const onInputChange = (id, value) => {
    let _brand = { ...brand };
    _brand[id].value = value;
    _brand[id].error = false;
    setBrand(_brand);
  };

  async function login(e) {
    e.preventDefault();
    let fileInput = document.getElementById("imagefile");
    var formdata = new FormData();
    formdata.append("brandName", brand.brandName.value.trim());
    formdata.append("rank", brand.rank.value.trim());
    formdata.append("returnPolicy", brand.returnPolicy.value.trim());
    formdata.append("payoutPolicy", brand.payoutPolicy.value.trim());
    formdata.append("socialPercentage", brand.socialPercentage.value.trim());
    formdata.append(
      "customerPercentage",
      brand.customerPercentage.value.trim()
    );
    formdata.append(
      "brandImage",
      fileInput.files[0],
      brand.imagePath.value.trim()
    );

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch("http://coco-backend1.herokuapp.com/addBrand", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  return (
    <>
      <div className="main-form mt-5">
        <div className="container">
          <h3 className="title d-flex justify-content-start mt-5 mb-5">
            Add a Brand
          </h3>
          <div className="form">
            <form onSubmit={login}>
              <div className="filetype">
                <input
                  onChange={(e) => {
                    let value = e.target.value;
                    onInputChange("imagePath", value);
                  }}
                  id="imagefile"
                  type="file"
                  class="custom-file-input"
                />
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input
                    value={brandDetails ? brandDetails.brandName : null}
                    onChange={(e) => {
                      let value = e.target.value;
                      onInputChange("brandName", value);
                    }}
                    type="text"
                    required
                  />
                  <label for="">Brand Name</label>
                </div>
                <div className="formop">
                  <input
                    value={brandDetails ? brandDetails.rank : null}
                    onChange={(e) => {
                      let value = e.target.value;
                      onInputChange("rank", value);
                    }}
                    type="text"
                    required
                  />
                  <label for="">Rank</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input
                    value={brandDetails ? brandDetails.returnPolicy : null}
                    onChange={(e) => {
                      let value = e.target.value;
                      onInputChange("returnPolicy", value);
                    }}
                    type="text"
                    required
                  />
                  <label for="">Return Policy</label>
                </div>
                <div className="formop">
                  <input
                    value={brandDetails ? brandDetails.payoutPolicy : null}
                    onChange={(e) => {
                      let value = e.target.value;
                      onInputChange("payoutPolicy", value);
                    }}
                    type="text"
                    required
                  />
                  <label for="">Payout Policy</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input
                    value={brandDetails ? brandDetails.socialPercentage : null}
                    onChange={(e) => {
                      let value = e.target.value;
                      onInputChange("socialPercentage", value);
                    }}
                    type="text"
                    required
                  />
                  <label for="">% for social</label>
                </div>
                <div className="formop">
                  <input
                    value={
                      brandDetails ? brandDetails.customerPercentage : null
                    }
                    onChange={(e) => {
                      let value = e.target.value;
                      onInputChange("customerPercentage", value);
                    }}
                    type="text"
                    required
                  />
                  <label for="">% for customer</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" />
                  <label for="">Add coupons</label>
                </div>
              </div>
              <div className="d-flex justify-content-start mt-3">
                <Button
                  // onClick={login}
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
    </>
  );
}

export default Test;
