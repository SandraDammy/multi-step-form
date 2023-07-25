import React from "react";
import Thanks from "../img/Thanks.png";

function Success() {
  return (
    <div className="form-container">
      <div className="success-container">
        <img src={Thanks} alt="Thanks" />
        <div className="success-txt">
          <h1 className="success-bg">Thank you!</h1>
          <p className="success-sm">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
