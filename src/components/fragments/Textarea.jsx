import React from "react";

const Textarea = ({ className, labelName, ...rest }) => {
   return (
      <div className={`textarea-container${className ? ` ${className}` : ""}`}>
         <span className="label-name">{labelName}</span>
         <textarea {...rest}></textarea>
      </div>
   );
};

export default Textarea;
