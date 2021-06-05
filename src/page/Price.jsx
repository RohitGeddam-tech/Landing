import { useState } from "react";
import "./Price.css";
import check from "../images/check-min.jpg";
import Button from "../components/Button";
import PriceSlider from "../components/PriceSlider";
import YearSlider from "../components/YearSlider";

const cardDetails = [
  {
    name: "Small",
    rupee: 600,
    patients: 300,
  },
  {
    name: "Medium",
    rupee: 1500,
    patients: 750,
  },
  {
    name: "Large",
    rupee: 2000,
    patients: 1000,
  },
];

const yearDetails = [
  {
    name: "Small",
    rupee: 7200,
    patients: 3600,
  },
  {
    name: "Medium",
    rupee: 18000,
    patients: 9000,
  },
  {
    name: "Large",
    rupee: 24000,
    patients: 12000,
  },
];

const Price = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="price">
      <div className="priceContainer">
        <h1>Get started at ₹600 only</h1>
        <div className="container">
          <div className="bloc-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Monthly Pack
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Yearly Pack
            </button>
          </div>
          <div className="divider"></div>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <div className="allcards">
              {cardDetails.map((doc) => (
                <div className="cards" key={doc.rupee}>
                  <div className="cardHeader">
                    <h1>{doc.name}</h1>
                    <h2> ₹{doc.rupee}</h2>
                  </div>
                  <div className="divider"></div>
                  <div className="cardInfo">
                    <div className="info">
                      <img src={check} alt="check" />
                      <div className="point1">
                        <h1> Add upto </h1> <h2>{doc.patients} Patients</h2>
                      </div>
                    </div>
                    <div className="info">
                      <img src={check} alt="check" />
                      <h1>Validity: 30 days</h1>
                    </div>
                    <div className="info">
                      <img src={check} alt="check" />
                      <h1>All features included</h1>
                    </div>
                  </div>
                  <div className="cardAlign">
                    <Button name="Try it out" />
                  </div>
                </div>
              ))}
            </div>
            <div className="priceSlider">
              <PriceSlider />
            </div>
          </div>

          <div
            className={
              toggleState === 2 ? "content  active-content" : "content"
            }
          >
            <div className="allcards">
              {yearDetails.map((doc) => (
                <div className="cards" key={doc.rupee}>
                  <div className="cardHeader">
                    <h1>{doc.name}</h1>
                    <h2> ₹{doc.rupee}</h2>
                  </div>
                  <div className="divider"></div>
                  <div className="cardInfo">
                    <div className="info">
                      <img src={check} alt="check" />
                      <div className="point1">
                        <h1> Add upto </h1> <h2>{doc.patients} Patients</h2>
                      </div>
                    </div>
                    <div className="info">
                      <img src={check} alt="check" />
                      <h1>Validity: 1 year</h1>
                    </div>
                    <div className="info">
                      <img src={check} alt="check" />
                      <h1>All features included</h1>
                    </div>
                    <div className="info">
                      <img src={check} alt="check" />
                      <h1>Get a free website*</h1>
                    </div>
                  </div>
                  <div className="cardAlign">
                    <Button name="Try it out" />
                  </div>
                </div>
              ))}
            </div>
            <div className="priceSlider">
              <YearSlider />
            </div>
          </div>
        </div>
      </div>
      <div className="freeHeight" id="contact"></div>
    </div>
  );
};

export default Price;
