import React from "react";
import check from "../images/check-min.jpg";
import ContactRedirectBtn from "./ContactRedirectBtn";

const PackageCard = ({rupee,patients,name,validity}) => {
  return (
    <div className="cards" >
      <div className="cardHeader">
        <h1>{name}</h1>
        <h2> ₹{rupee}</h2>
      </div>
      <div className="divider"></div>
      <div className="cardInfo">
        <div className="info">
          <img src={check} alt="check" />
          <div className="point1">
            <h1> Add upto </h1> <h2>{patients} Patients</h2>
          </div>
        </div>
        <div className="info">
          <img src={check} alt="check" />
          <h1>Validity: {validity}</h1>
        </div>
        <div className="info">
          <img src={check} alt="check" />
          <h1>All features included</h1>
        </div>
      </div>
      <div className="cardAlign">
        <ContactRedirectBtn
          name="Try it out"
          content={`Package ₹${rupee}`}
        />
      </div>
    </div>
  );
};

export default PackageCard;
