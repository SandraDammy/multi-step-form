import React from "react";
import { useForm } from "react-hook-form";

const Personal_info = () => {
  // const {
  //   handleSubmitNext,
  //   register,
  //   formState: { errors },
  // } = useForm();
  // const onNextPage = (values) => alert(values.name + values.email+ values.phone);

  return (
    <div className="form-container">
      <form 
      // onSubmit={handleSubmitNext(onNextPage)}
      >
        <div className="form-header">
          <h1>Personal info</h1>
          <span>
            Please provide your name, email address, and phone number.
          </span>
        </div>
        <div className="form">
          <div className="input">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              placeholder="e.g. Stephen King"
              // {...register("name", {
              //   required: "Required",
              //   pattern: {
              //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              //     message: "invalid email address",
              //   },
              // })}
            />
            {/* {errors.email && errors.email.message} */}
          </div>
          <div className="input">
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              placeholder="e.g. stephenking@lorem.com"
              // {...register("email", {
              //   required: "Required",
              //   pattern: {
              //     value:
              //       /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
              //     message:
              //       "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.",
              //   },
              // })}
            />
            {/* {errors.password && errors.password.message} */}
          </div>
          <div className="input">
            <label htmlFor="1234">Phone Number</label>
            <input type="text" placeholder="e.g. +1 234 567 890" 
            // {...register("phone", {
            //   required: "Required",
            //   pattern: {
            //     value: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
            //     message: "Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol."
            //   }
            // })}
          />
          {/* {errors.password && errors.password.message} */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Personal_info;
