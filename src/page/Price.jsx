import { useState } from "react";
import "./Price.css";
import PackageCard from "../components/PackageCard";
import CustomSlider from "../components/CustomSlider";
import useWindowSize from "../hooks/useWindowSize";

const packageDetails = [
  {
    label: "monthly",
    value: [
      {
        name: "Small",
        rupee: 600,
        patients: 300,
        validity: "30 Days",
      },
      {
        name: "Medium",
        rupee: 1500,
        patients: 750,
        validity: "30 Days",
      },
      {
        name: "Large",
        rupee: 2000,
        patients: 1000,
        validity: "30 Days",
      },
    ],
  },
  {
    label: "yearly",
    value: [
      {
        name: "Small",
        rupee: 7200,
        patients: 3600,
        validity: "1 Year",
      },
      {
        name: "Medium",
        rupee: 18000,
        patients: 9000,
        validity: "1 Year",
      },
      {
        name: "Large",
        rupee: 24000,
        patients: 12000,
        validity: "1 Year",
      },
    ],
  },
];

const Price = () => {
  const [toggleState, setToggleState] = useState("monthly");
  const [width] = useWindowSize();
  
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
              className={
                toggleState === "monthly" ? "tabs active-tabs" : "tabs"
              }
              onClick={() => toggleTab("monthly")}
            >
              Monthly Pack
            </button>
            <button
              className={toggleState === "yearly" ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab("yearly")}
            >
              Yearly Pack
            </button>
          </div>
          <div className="divider"></div>
        </div>
        <div className="content-tabs">
          {packageDetails.map(({ label, value }) => (
            <div
              className={`content ${label === toggleState && "active-content"}`}
              key={label}
            >
              {width <= 767 ? (
                <div className="priceSlider">
                  <CustomSlider>
                    {value.map((item) => (
                      <PackageCard {...item} />
                    ))}
                  </CustomSlider>{" "}
                </div>
              ) : (
                <div className="allcards">
                  {value.map((item) => (
                    <PackageCard {...item} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="freeHeight" id="contact"></div>
    </div>
  );
};

export default Price;
