import React, { useState } from "react";
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
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});

  const handleEventNext = (data) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      ...data,
    }));
    setStep((prevStep) => prevStep + 1);
  };

  const handleEventPrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <Personal_info onNext={handleEventNext} />;
      case 2:
        return <Select_your_plan onNext={handleEventNext}  onPrevious={handleEventPrevious}/>;
      case 3:
        return <Pick_add_ons onNext={handleEventNext} onPrevious={handleEventPrevious}/>;
      case 4:
        return <Finishing_up onNext={handleEventNext} onPrevious={handleEventPrevious}/>;
      case 5:
        return <Success onNext={handleEventNext} onPrevious={handleEventPrevious}/>;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="container-body">
        <div className="banner">
          <Sidebar />
        </div>
        <div className="form-body">
          <div className="form-input">

            {renderStep()}
            {/* <Personal_info /> */}
            {/* <Select_your_plan/> */}
            {/* <Pick_add_ons/> */}
            {/* <Finishing_up/> */}
            {/* <Success/> */}
          </div>
          <div className="form-footer">
            <div className="btn-container">
              <Button
                className={"btnOutline"}
                title={"Go Back"}
                btnEventHandler={handleEventPrevious}
              />
              <Button
                className={"btnBlue"}
                title={"Next Step"}
                btnEventHandler={handleEventNext}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_Form;
