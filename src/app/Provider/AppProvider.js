"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext(null);




function AppProvider({ children }) {

  
  return (
    <AppContext.Provider
      value={{}}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
