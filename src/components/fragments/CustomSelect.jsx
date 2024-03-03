import React, { useRef, useState } from "react";
import Input from "./Input";
import { useEffect } from "react";

const CustomSelect = ({
   elements = [],
   selectedElement,
   onSelectElement,
   isDefaultActive = false,
}) => {
   const [isSelectActive, setIsSelectActive] = useState(isDefaultActive);

   const selectRef = useRef();

   const handleFocusSelect = () => {
      setIsSelectActive((prev) => !prev);
   };

   const handleSelectElement = (element) => {
      onSelectElement(element);
      setIsSelectActive(false);
   };

   useEffect(() => {
      const handleBlurSelect = ({ target }) => {
         const input = selectRef.current.querySelector(".custom-input");

         if (!selectRef.current.contains(target) && target !== input) {
            setIsSelectActive(false);
         }
      };

      document.addEventListener("click", handleBlurSelect);

      return () => document.removeEventListener("click", handleBlurSelect);
   }, [isSelectActive]);

   return (
      <div
         ref={selectRef}
         className={`custom-select${isSelectActive ? " select-active" : ""}`}
      >
         <div>
            <Input
               onClick={handleFocusSelect}
               className="custom-input"
               labelName="Select-brand"
               value={selectedElement}
               readOnly
            />
            <svg
               xmlns="http://www.w3.org/2000/svg"
               width="12"
               height="8"
               viewBox="0 0 12 8"
               fill="none"
            >
               <path
                  d="M1.41 7.41L6 2.83L10.59 7.41L12 6L6 0L0 6L1.41 7.41Z"
                  fill="#7A5CFA"
               />
            </svg>
         </div>
         <div className={`custom-select-items${!isSelectActive ? " d-none" : ""}`}>
            {elements.map((element) => (
               <div
                  key={element}
                  onClick={() => handleSelectElement(element)}
                  className={`custom-select-item ${
                     element === selectedElement ? " selected" : ""
                  }`}
               >
                  {element}
               </div>
            ))}
         </div>
      </div>
   );
};

export default CustomSelect;
