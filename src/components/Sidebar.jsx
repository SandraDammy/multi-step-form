import React from "react";
import "./styles/styles.css";

const Sidebar = () => {
  return (
    <div className="step-container">
      <div className="step-body">
        <div className="step-text">
          <div className="step-nos">
            <p>1</p>
          </div>
          <div className="text-step">
            <small>Step 1</small>
            <p>YOUR INFO</p>
          </div>
        </div>
        <div className="step-text">
          <div className="step-Nos">
            <p>2</p>
          </div>
          <div className="text-step">
            <small>Step 2</small>
            <p>SELECT PLAN</p>
          </div>
        </div>
        <div className="step-text">
          <div className="step-Nos">
            <p>3</p>
          </div>
          <div className="text-step">
            <small>Step 3</small>
            <p>ADD-ONS</p>
          </div>
        </div>
        <div className="step-text">
        <div className="step-Nos">
            <p>4</p>
          </div>
          <div className="text-step">
            <small>Step 4</small>
            <p>SUMMARY</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
