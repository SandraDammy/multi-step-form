import React from "react";

const Personal_info = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-header">
          <h1>Personal info</h1>
          <span>
            Please provide your name, email address, and phone number.
          </span>
        </div>
        <div className="form">
          <div className="input">
            <label htmlFor="Name">Name</label>
            <input type="text" />
          </div>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <input type="text" />
          </div>
          <div className="input">
            <label htmlFor="1234">Phone Number</label>
            <input type="text" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Personal_info;
