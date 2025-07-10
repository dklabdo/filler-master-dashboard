"use client";
import React, { createContext, useState } from "react";

export const AppContext = createContext(null);

function AppProvider({ children }) {

  const [openSlider , setopenSlider] = useState(false)

  return (
    <AppContext.Provider
      value={{openSlider , setopenSlider}}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
