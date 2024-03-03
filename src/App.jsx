import { useState } from "react";
import CustomSelect from "./components/fragments/CustomSelect";
import Input from "./components/fragments/Input";
import Textarea from "./components/fragments/Textarea";
import Checkbox from "./components/fragments/Checkbox";
import RadioButton from "./components/fragments/RadioBtn";

const genId = () => Date.now().toString(32);

const brands = ["Alt Fragrances", "Jack Henry", "Good Clean Love"];

function App() {
   const [selectedBrand, setSelectedBrand] = useState(brands[0]);

   const [messages, setMessages] = useState([
      { type: "Customer", id: genId(), number: 1 },
   ]);

   const [costumersCount, setCostumersCount] = useState(messages.length);
   const [agentsCount, setAgentsCount] = useState(0);

   return (
      <div className="app-container">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <form className="ai-gen-tool-form mb-4 mt-3">
                     <h2 className="form-title mb-5">Abstract AI Generation Tool</h2>
                     <CustomSelect
                        isDefaultActive={true}
                        onSelectElement={(brand) => setSelectedBrand(brand)}
                        selectedElement={selectedBrand}
                        elements={brands}
                     />

                     <Input
                        className="mt-4"
                        labelName="Customer name"
                        placeholder="Optional"
                     />
                     <Input
                        className="mt-4"
                        labelName="Customer Email"
                        placeholder="Optional"
                        validationMsg="Your password is between 4 and 12 characters"
                     />
                     <Input
                        className="mt-4"
                        labelName="Email Subject"
                        placeholder="Optional"
                        validationMsg="Your password is between 4 and 12 characters"
                     />
                     {messages.map(({ type, id, number }) => (
                        <Textarea
                           key={id}
                           className="mt-4"
                           placeholder="required"
                           labelName={`${type} Message ${number}`}
                        />
                     ))}

                     <div className="add-btns d-flex justify-content-between gap-3 mt-5 flex-md-nowrap flex-wrap">
                        <button
                           type="button"
                           onClick={() => {
                              setMessages((prev) => [
                                 ...prev,
                                 {
                                    type: "Agent",
                                    id: genId(),
                                    number: agentsCount + 1,
                                 },
                              ]);

                              setAgentsCount((prev) => prev + 1);
                           }}
                           className="btn-secondary w-100"
                        >
                           Add Agent Message
                        </button>
                        <button
                           type="button"
                           onClick={() => {
                              setMessages((prev) => [
                                 ...prev,
                                 {
                                    type: "Customer",
                                    id: genId(),
                                    number: costumersCount + 1,
                                 },
                              ]);

                              setCostumersCount((prev) => prev + 1);
                           }}
                           className="btn-secondary w-100"
                        >
                           Add Customer Message
                        </button>
                     </div>
                     <div className="selection-section mt-4">
                        <div className="selection-item d-flex align-items-center">
                           <Checkbox id="taking-tools" />
                           <span className="ms-3">Use Action Taking Tools</span>
                        </div>
                        <div className="selection-item mt-4 d-flex align-items-center">
                           <RadioButton id="once" name="responses" />
                           <label htmlFor="once" className="ms-3">
                              Once Abstract Ultra Response
                           </label>
                        </div>
                        <div className="selection-item mt-4 d-flex align-items-center">
                           <RadioButton id="two" name="responses" />
                           <label htmlFor="two" className="ms-3">
                              Two Abstract Ultra Responses
                           </label>
                        </div>
                        <div className="selection-item mt-4 d-flex align-items-center">
                           <RadioButton id="two-plus-turbo" name="responses" />
                           <label htmlFor="two-plus-turbo" className="ms-3">
                              Two Abstract Ultra Responses + 4-Turbo
                           </label>
                        </div>
                        <div className="d-flex w-100 justify-content-center mt-5">
                           <button className="btn-primary">Generate Response</button>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="ai-gen-printed my-5 w-100 justify-content-center">
                  <h2 className="text-center">[AI Generation Prints Here]</h2>
               </div>
            </div>
         </div>
      </div>
   );
}

export default App;
