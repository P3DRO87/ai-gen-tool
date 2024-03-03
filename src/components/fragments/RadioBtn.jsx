import React from "react";

const RadioButton = ({
   checked = true,
   color = "#7a5cfa",
   label = "",
   name = "",
   onChange = function () {},
   ...rest
}) => {
   return (
      <>
         <div className="custom-radio-btn">
            <label className="radio-container d-flex align-items-center">
               <input onChange={onChange} type="radio" name={name} {...rest} />
               <span className="inner-circle"></span>
            </label>
            <p className="ms-2">{label}</p>
         </div>
      </>
   );
};

export default RadioButton;
