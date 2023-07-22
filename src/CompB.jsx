import React, { useContext } from "react";
import CompC from "./CompC";
import {FirstName, LastName} from "./App";



const CompB = () => {
  const context = useContext(FirstName);
  const context2 = useContext(LastName);
  return (
    <div>
        <h1>My name is {context} {context2}</h1>
    </div>
  );
}
export default CompB;