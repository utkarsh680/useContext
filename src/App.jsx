import React, {createContext} from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();


const App = () => {
  return (
    <>
   <FirstName.Provider value={'Utkarsh'} >
    <LastName.Provider value={'Singh'} >
    <CompA />
    </LastName.Provider>
   </FirstName.Provider>
   </>
);
}
export default App;
export {FirstName, LastName};