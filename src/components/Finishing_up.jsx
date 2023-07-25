import React from "react";

function Finishing_up() {
  return (
    <div className="form-container">
      <div>
        <div className="form-header">
          <h1>Finishing up</h1>
          <span>Double-check everything looks OK before confirming.</span>
        </div>
        <div className="section-cards">
          <div className="section-one">
            <div className="section-body">
              <div className="section">
                <p className="txt-section">Arcade (Monthly)</p>
                <span className="section-txt">Change</span>
              </div>
              <div className="section-cost">
                <p>$9/mo</p>
              </div>
            </div>
            <div className="section-hr">
              <hr />
            </div>
            <div className="section-body">
              <p className="txt-section">Online service</p>
              <span className="section-txt">+$1/mo</span>
            </div>
            <div className="section-body">
              <p className="txt-section">Larger storage</p>
              <span className="section-txt">+$2/mo</span>
            </div>
          </div>
          <div className="section-two">
            <div className="section-body">
              <p className="txt-section">Total (per month)</p>
              <span className="section-bg">+$12/mo</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Finishing_up;
