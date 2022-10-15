import React from "react";
import { Button } from "./Components/Button.style";
import leaves from "./leaves.png";
function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-main">
        <div className="dashboard-div d-flex justify-content-between">
          <h3 className="title mt-5">COCO</h3>
          <div className="user-avatar mt-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              class="rounded-circle"
              alt="Avatar"
            />
          </div>
        </div>
        <div className="container">
          <div className="user-info d-flex justify-content-between">
            <h4 className="title d-flex justify-content-start mt-4">
              Transaction
            </h4>
            <div className="user-avatar mt-4">
              <img
                src={leaves}
                class="rounded-circle"
                alt="Avatar"
                style={{
                  transform: "rotate(-35.42deg)",
                }}
              />
            </div>
          </div>
          <table class="table align-middle mb-0 bg-white">
            {/* <thead class="bg-light">
              <tr>
                <th>Name</th>
                <th>Title</th>
                <th>Status</th>
                <th>Position</th>
                <th>Actions</th>
              </tr>
            </thead> */}
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img src={leaves} alt="" class="rounded-circle" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1 dashboardt">Planted a tree</p>
                      <p class="text-muted mb-0">26 July, 6:23 PM</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1 yourtrees">₹ 1025</p>
                </td>
                <td>
                  <span class="badge badge-success rounded-pill">
                    Code Generated
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img src={leaves} alt="" class="rounded-circle" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1 dashboardt">Planted a tree</p>
                      <p class="text-muted mb-0">26 July, 6:23 PM</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1 yourtrees">₹ 1025</p>
                </td>
                <td>
                  <span class="badge badge-success rounded-pill">
                    Code Generated
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img src={leaves} alt="" class="rounded-circle" />
                    <div class="ms-3">
                      <p class="fw-bold mb-1 dashboardt">Planted a tree</p>
                      <p class="text-muted mb-0">26 July, 6:23 PM</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1 yourtrees">₹ 1025</p>
                </td>
                <td>
                  <span class="badge badge-success rounded-pill">
                    Code Generated
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <Button className=" view-button mt-3">View All</Button>
          <div className="coupons">
            <h4 className="title d-flex justify-content-start mt-4">
              My Coupons
            </h4>
            <div className="coupons-card">
              <div class="card" id="coupons-card">
                <div class="card-body">
                  <h5 class="card-title">Sublime</h5>
                  <h6 class="card-title">Get 15% Off</h6>
                  <div className="text-info-coupons d-flex justify-content-between">
                    <div className="text-info-1 ">
                      <p class="card-text ">Social</p>
                      <h6>10%</h6>
                    </div>
                    <div className="text-info-2">
                      <p class="card-text">Customer</p>
                      <h6 className="d-flex justify-content-center">10%</h6>
                    </div>
                  </div>
                  <button className="dashboard-card-btn">
                    Generate Coupon
                  </button>
                </div>
              </div>
              <div class="card" id="coupons-card">
                <div class="card-body">
                  <h5 class="card-title">Sublime</h5>
                  <h6 class="card-title">Get 15% Off</h6>
                  <div className="text-info-coupons d-flex justify-content-between">
                    <div className="text-info-1 ">
                      <p class="card-text ">Social</p>
                      <h6>10%</h6>
                    </div>
                    <div className="text-info-2">
                      <p class="card-text">Customer</p>
                      <h6 className="d-flex justify-content-center">10%</h6>
                    </div>
                  </div>
                  <button className="dashboard-card-btn">
                    Generate Coupon
                  </button>
                </div>
              </div>
              <div class="card" id="coupons-card">
                <div class="card-body">
                  <h5 class="card-title">Sublime</h5>
                  <h6 class="card-title">Get 15% Off</h6>
                  <div className="text-info-coupons d-flex justify-content-between">
                    <div className="text-info-1 ">
                      <p class="card-text ">Social</p>
                      <h6>10%</h6>
                    </div>
                    <div className="text-info-2">
                      <p class="card-text">Customer</p>
                      <h6 className="d-flex justify-content-center">10%</h6>
                    </div>
                  </div>
                  <button className="dashboard-card-btn">
                    Generate Coupon
                  </button>
                </div>
              </div>
              <div class="card" id="coupons-card">
                <div class="card-body">
                  <h5 class="card-title">Sublime</h5>
                  <h6 class="card-title">Get 15% Off</h6>
                  <div className="text-info-coupons d-flex justify-content-between">
                    <div className="text-info-1 ">
                      <p class="card-text ">Social</p>
                      <h6>10%</h6>
                    </div>
                    <div className="text-info-2">
                      <p class="card-text">Customer</p>
                      <h6 className="d-flex justify-content-center">10%</h6>
                    </div>
                  </div>
                  <button className="dashboard-card-btn">
                    Generate Coupon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
