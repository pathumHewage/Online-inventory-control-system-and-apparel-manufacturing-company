import React, { Component } from "react";
import "./navStyle.css";

class AccountNavBar extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <br />
            <br />
            &nbsp; &nbsp; &nbsp;
            <img
              src="%PUBLIC_URL%../../acc.png"
              class="rounded-circle"
              width="200"
              height="200"
              alt=""
            />
            <br />
            <br />
            <li>
              <a href="#">
                <i class="fas fa-sort-amount-up-alt"></i>
                &nbsp; Order Mangment
              </a>
            </li>
            <li>
                <a href="#">
                    <i class="fas fa-sort-amount-up-alt"></i>

                    &nbsp;
                    
                    Meterial</a>
                </li>
            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <i class="fas fa-cubes"></i>
                  &nbsp; Production
                </button>
                <div className="dropdown-content">
                  <a href="/PMDashboard">Production Dashboard</a>
                  <a href="/clientneworder">Client New Orders</a>
                  <a href="/searchfac">Search Factory</a>
                  <a href="/magictool">Magic Tool</a>
                  <a href="/rawfacHome">Raw Factory Dashboard</a>
                  <a href="/pmHome">Register Factory Dashboard</a>
                </div>
              </div>
            </li>


            <li>
              <div className="dropdown">
                <button className="dropbtn">
                  <i class="fas fa-cubes"></i>
                  &nbsp; Import Management
                </button>
                <div className="dropdown-content">
                  <a href="/SHdashboard">Import Dashboard</a>
                  <a href="/ShipmentHome">ShipmentHome</a>
                  <a href="/HomeLSmaterial">LMO Card</a>
                </div>
              </div>
            </li>
            
            
            
            
            <li>

              <a href="#">
                <i class="fas fa-tasks"></i>
                &nbsp; Quality Check
              </a>
            </li>
            <li>
            <div className="dropdown">
                <button className="dropbtn">
                  <i class="fas fa-cubes"></i>
                  &nbsp; Account Management
                </button>
                <div className="dropdown-content">
                <a href="/Accountdashboard"> &nbsp;&nbsp;&nbsp;&nbsp;Dashboard</a>
                  <a href="/journal"> &nbsp;&nbsp;&nbsp;&nbsp;Journal Details</a>
                  <a href="/accountHome">  &nbsp;&nbsp;&nbsp; P&L calculate</a>
                  <a href="/reporte">&nbsp;&nbsp;&nbsp; Reporting</a>
                  <a href="/accountPlanHome"> &nbsp;&nbsp;&nbsp;&nbsp;Planning </a>
                </div>
              </div>
              </li>
              <li>
                <div className="dropdown">
                        <button className="dropbtn">
                        <i class="fas fa-shipping-fast"></i>
                        &nbsp;
                          Transport Management</button>
                        <div className="dropdown-content">
                        <a href="/DriHome">Driver Management </a>
                        <a href="/vehicleDash">Vehicle Management </a>
                        <a href="/Driverschedule">Driver  Schedule</a>
                        <a href="/VehicleSchedule">Vehicle Schedule</a>
                        <a href="/TMSSchedule">Schedules</a>
                    </div>
                    </div>
                </li>


                <li>
              <a href="#">
                
                <div className="dropdown">
                <button className="dropbtn">
                  <i class="fas fa-tshirt"></i>
                  &nbsp; Ready Made
                </button>
                <div className="dropdown-content">
                  
                  <a href="/RMDashbord">Dashboard</a>
                  <a href="/">Packing Form</a>
                  <a href="#">Transport Form</a>
                  <a href="/RMReport">Reporting</a>
                </div>
              </div>
              
              </a>
            </li>
           
           
           
           
           
            <li>
              <a href="#">
                <i class="fas fa-users-cog"></i>
                &nbsp; Admin
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-file-invoice"></i>
                &nbsp; Reports
              </a>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <!-- Image and text --> */}
          <a class="navbar-brand" href="#"></a>
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/accountHome">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i class="fas fa-question-circle"></i>
                    &nbsp; HELP
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <i class="fas fa-phone-square"></i> &nbsp;Contact
                  </a>
                </li>

                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    <i class="fas fa-bell"></i>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>

                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <img
                        src="%PUBLIC_URL%../../my.png"
                        class="rounded-circle"
                        width="40"
                        height="40"
                        alt=""
                      />
                      &nbsp; Hewage H.K.P &nbsp; &nbsp; &nbsp;{" "}
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default AccountNavBar;