import React from "react";

const Input = ({
   type = "",
   className = "",
   labelName = "",
   validationMsg = "",
   ...rest
}) => {
   return (
      <>
         <label className="input-container">
            <span className={`label-name${className ? ` ${className}` : ""}`}>
               {labelName}
            </span>
            <input {...rest} type={type} />
            {validationMsg && <small className="validation-msg">{validationMsg}</small>}
         </label>
      </>
   );
};

export default Input;
