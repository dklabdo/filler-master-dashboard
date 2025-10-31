"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext(null);




function AppProvider({ children }) {

  const [isModifie , setIsModiefie] = useState(false);
  const [modifieObj , setModifieObj] = useState(null);
      const [open, setOpen] = useState(false);


  
  return (
    <AppContext.Provider
      value={{open, setOpen , isModifie , setIsModiefie , modifieObj , setModifieObj}}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
