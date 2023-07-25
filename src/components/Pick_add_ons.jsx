import React from "react";

function Pick_add_ons() {
  // const [allchecked, setAllChecked] = React.useState([]);
  // function handleChange(e) {
  //    if (e.target.checked) {
  //       setAllChecked([...allchecked, e.target.value]);
  //    } else {
  //       setAllChecked(allchecked.filter((item) => item !== e.target.value));
  //    }
  // }
  return (
    <div className="form-container">
      <div>
        <div className="form-header">
          <h1>Pick add-ons</h1>
          <span>Add-ons help enhance your gaming experience.</span>
        </div>
        <div className="pick-card">
          <div className="card-pick">
            <div className="section-card">
              <div className="checkbox">
                {/* <input value = "one" type = "checkbox" onChange = {handleChange} /> */}
                <input type="checkbox" />
              </div>
              <div className="checkbox-txt">
                <p className="txt-check">Online service</p>
                <span className="txt-checks">Access to multiplayer games</span>
              </div>
            </div>
            <div className="cost">
              <p className="cost-txt">+$1/mo</p>
            </div>
          </div>
          <div className="card-pick">
            <div className="section-card">
              <div className="checkbox">
                {/* <input value = "one" type = "checkbox" onChange = {handleChange} /> */}
                <input type="checkbox" />
              </div>
              <div className="checkbox-txt">
              <p className="txt-check">Larger storage</p>
              <span className="txt-checks">Extra 1TB of cloud save</span>
              </div>
            </div>
            <div className="cost">
              <p className="cost-txt">+$2/mo</p>
            </div>
          </div>
          <div className="card-pick">
            <div className="section-card">
              <div className="checkbox">
                {/* <input value = "one" type = "checkbox" onChange = {handleChange} /> */}
                <input type="checkbox" />
              </div>
              <div className="checkbox-txt">
              <p className="txt-check">Customizable profile</p>
              <span className="txt-checks">Custom theme on your profile</span>
              </div>
            </div>
            <div className="cost">
              <p className="cost-txt">+$2/mo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pick_add_ons;
