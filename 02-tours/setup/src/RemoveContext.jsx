/* eslint-disable react/prop-types */
import React, { useContext } from "react";

// creat conext
const RemoveContext = React.createContext();

//create context provider
const RemoveContextProvide = ({ children, value }) => {
  return (
    <RemoveContext.Provider value={value}>{children}</RemoveContext.Provider>
  );
};

//crearte usecontext hooks
const useRemoveContext = () => {
  return useContext(RemoveContext);
};

//export contexts and hooks
export { RemoveContextProvide, useRemoveContext };
