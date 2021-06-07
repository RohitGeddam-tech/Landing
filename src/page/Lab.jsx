import React from "react";
// import empty from "../images/emptybox.jpg";
import clock from "../images/Appointment.png";
import share from "../images/Send.png";
import ruppee from "../images/Payment.png";
import hospital from "../images/blueHosp.png";
import people from "../images/bluePeople.png";
import circle from "../images/blueCircle.png";
import calender from "../images/Calendar-min.webp";
import map from "../images/Map-min.webp";
import "./Lab.css";

const Lab = () => {
  return (
    <div className="lab">
      <div className="title">
        <h1>Easiest lab management software</h1>
      </div>
      <div className="patient">
        <div className="imgPatient">
          <img src={calender} alt="patient" srcSet='Calendar-min.webp 100vw' />
        </div>
        <div className="patientDetails">
          <h1>Patient Management</h1>
          <div className="patinetInfo">
            <div className="box">
              <div className="boxImg">
                <img src={clock} alt="clock" />
              </div>
              <div className="boxDetails">
                <h1>Manage Upcoming Appointments</h1>
                <p>
                  Keep a track of all your appointments in one place. You can
                  easily add, delete and reschedule your appointments with
                  Sugarlogger.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="boxImg">
                <img src={share} alt="shareReports" />
              </div>
              <div className="boxDetails">
                <h1>Send Reports directly through Sugarlogger</h1>
                <p>
                  Send the report directly to the patient’s account through
                  Sugarlogger. No SMS charges & no e-mail tracking problems.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="boxImg">
                <img src={ruppee} alt="rupee" />
              </div>
              <div className="boxDetails">
                <h1>Keep Track Of Pending Payments</h1>
                <p>
                  You can keep a record of the pending payments / fees of your
                  patients completely online.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="patient">
        <div className="branchImg">
          <img src={map} alt="patient" />
        </div>
        <div className="patientDetails">
          <h1>Branch Management</h1>
          <div className="patinetInfo">
            <div className="box">
              <div className="boxImg">
                <img src={hospital} alt="clock" />
              </div>
              <div className="boxDetails">
                <h1>All your branches in one place</h1>
                <p>
                  You can add all of your branches on Sugarlogger and manage
                  them from one place!
                </p>
              </div>
            </div>
            <div className="box">
              <div className="boxImg">
                <img src={people} alt="shareReports" />
              </div>
              <div className="boxDetails">
                <h1>Separate login access for different users</h1>
                <p>
                  You can get a separate account for all of your team / staff
                  members including technicians so that you do not have to share
                  your password with anyone.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="boxImg">
                <img src={circle} alt="rupee" />
              </div>
              <div className="boxDetails">
                <h1>Statistics & Graphs</h1>
                <p>
                  Get statistics and graphical data about important elements
                  like revenue, no. of patients etc.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="imgBranch">
          <img src={map} alt="patient" />
        </div>
      </div>
      <div className="freeHeight" id="freeWebsiteInLab"></div>
    </div>
  );
};

export default Lab;
