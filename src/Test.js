import { Button } from "./Components/Button.style";
import "./test.css";
function Test() {
  return (
    <>
      <div className="main-form mt-5">
        <div className="container">
          <h3 className="title d-flex justify-content-start mt-5 mb-5">
            Add a Brand
          </h3>
          <div className="form">
            <div className="filetype">
              <input type="file" class="custom-file-input" />
            </div>
            <form>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" required />
                  <label for="">Brand Name</label>
                </div>
                <div className="formop">
                  <input type="text" required />
                  <label for="">Rank</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" required />
                  <label for="">Return Policy</label>
                </div>
                <div className="formop">
                  <input type="text" required />
                  <label for="">Payout Policy</label>
                </div>
              </div>
              <div className="maininput mt-5">
                <div className="formop">
                  <input type="text" required />
                  <label for="">% for social</label>
                </div>
                <div className="formop">
                  <input type="text" required />
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
