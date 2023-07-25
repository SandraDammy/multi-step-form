import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/styles.css";
import Button from "./Button";
import Sidebar from "./Sidebar";
import Personal_info from "./Personal_info";
import Select_your_plan from "./Select_your_plan";
import Pick_add_ons from "./Pick_add_ons";
import Finishing_up from "./Finishing_up";
import Success from "./Success";

const User_Form = () => {
  // const navigate = useNavigate();

  // const handleEventClick = () => {
  //   navigate("");
  // };
  return (
    <div className="container">
      <div className="container-body">
        <div className="banner">
          <Sidebar />
        </div>
        <div className="form-body">
          <div className="form-input">
            {/* <Personal_info /> */}
            {/* <Select_your_plan/> */}
            {/* <Pick_add_ons/> */}
            {/* <Finishing_up/> */}
            <Success/>
          </div>
          <div className="form-footer">
            <div className="btn-container">
              <Button className={"btnOutline"} title={"Go Back"} />
              <Button
                className={"btnBlue"}
                title={"Next Step"}
                // btnEventHandler={handleEventClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Form;
