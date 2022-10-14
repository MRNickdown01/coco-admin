import React from "react";
import { Button } from "./Components/Button.style";
import leaves from "./leaves.png";
function Dashboard() {
  return (
    <div className="container">
      <div className="dashboard-main">
        <div className="dashboard-div d-flex justify-content-between align-items-center">
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
              <img src={leaves} class="rounded-circle" alt="Avatar" />
            </div>
          </div>
          <table class="table align-middle mb-0 bg-white">
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src={leaves}
                      alt=""
                      //   style="width: 45px; height: 45px"
                      class="rounded-circle"
                    />
                    <div class="ms-3">
                      <p class="fw-bold mb-1 dashboardt">Planted a tree</p>
                      <p class="text-muted mb-0">26 July, 6:23 PM</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1 yourtrees"> 1025</p>
                </td>
                <td>
                  <span class="badge badge-success rounded-pill d-inline">
                    Code Generated
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="table align-middle mb-0 bg-white">
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src={leaves}
                      alt=""
                      //   style="width: 45px; height: 45px"
                      class="rounded-circle"
                    />
                    <div class="ms-3">
                      <p class="fw-bold mb-1 dashboardt">Planted a tree</p>
                      <p class="text-muted mb-0">26 July, 6:23 PM</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1 yourtrees"> 1025</p>
                </td>
                <td>
                  <span class="badge badge-success rounded-pill d-inline">
                    Code Generated
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="table align-middle mb-0 bg-white">
            <tbody>
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <img
                      src={leaves}
                      alt=""
                      //   style="width: 45px; height: 45px"
                      class="rounded-circle"
                    />
                    <div class="ms-3">
                      <p class="fw-bold mb-1 dashboardt">Planted a tree</p>
                      <p class="text-muted mb-0">26 July, 6:23 PM</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="fw-normal mb-1 yourtrees"> 1025</p>
                </td>
                <td>
                  <span class="badge badge-success rounded-pill d-inline">
                    Code Generated
                  </span>
                </td>
              </tr>
            </tbody>
            <Button className="d-flex">View All</Button>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
