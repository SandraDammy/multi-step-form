import React, {useState} from "react";
import Arcade from "../img/Arcade.png";
import Advanced from "../img/Advanced.png";
import Pro from "../img/Pro.png";
import Switch from "react-switch";

const Select_your_plan = () => {
  const [checked, setChecked] = useState(true);

  const handleChange = val => {
    setChecked(val)
  }
  return (
    <div className="form-container">
      <div>
        <div className="form-header">
          <h1>Select your plan</h1>
          <span>You have the option of monthly or yearly billing.</span>
        </div>
        <div className="card-body">
          <div className=" card card-active">
            <img src={Arcade} alt="Arcade" />
            <div className="text">
              <h1 className="bg-txt">Arcade</h1>
              <span className="sm-txt">$9/mo</span>
            </div>
          </div>
          <div className="card">
            <img src={Advanced} alt="Advanced" />
            <div className="text">
              <h1 className="bg-txt">Arcade</h1>
              <span className="sm-txt">$9/mo</span>
            </div>
          </div>
          <div className="card">
            <img src={Pro} alt="Pro" />
            <div className="text">
              <h1 className="bg-txt">Arcade</h1>
              <span className="sm-txt">$9/mo</span>
            </div>
          </div>
        </div>
        <div className="card-toggle">
          <div className="toggle-page">
            <div className="monthly">
              <p>Monthly</p>
            </div>
            <div className="switch-card">
              <Switch
                className="card-switch"
                checked={checked}
                onChange={handleChange}
                onColor="#9699AA"
                onHandleColor="#fffff"
                offColor="#022959"
                offHandleColor="#fffff"
              />
            </div>
            <div className="yearly">
              <p>Yearly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select_your_plan;
