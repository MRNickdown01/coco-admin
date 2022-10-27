import { Button } from "../StyleComponent/Button.style";
import "../AddBrands/Style.css";
import { useState } from "react";
function Test() {
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

  const onInputChange = (id, value) => {
    let _brand = { ...brand };
    _brand[id].value = value;
    _brand[id].error = false;
    setBrand(_brand);
  };

  async function login(e) {
    e.preventDefault();
    let item = {
      brandName: brand.brandName.value.trim(),
      rank: brand.rank.value.trim(),
      returnPolicy: brand.returnPolicy.value.trim(),
      payoutPolicy: brand.payoutPolicy.value.trim(),
      socialPercentage: brand.socialPercentage.value.trim(),
      customerPercentage: brand.customerPercentage.value.trim(),
      brandImage: brand.imagePath.value.trim(),
    };
    console.log(item);
    const response = await fetch("http://localhost:5000/addBrand", {
      method: "POST",
      headers: {
        "Content-Type":
          "multipart/form-data; boundary=<calculated when request is sent>",
        Accept: "*/*",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(item),
    });
    const data = await response.json();
    console.log(data);
    alert(data.message);
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
                  type="file"
                  class="custom-file-input"
                />
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input
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
                  <input type="text" required />
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
