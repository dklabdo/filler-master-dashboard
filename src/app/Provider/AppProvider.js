"use client";
import React, { createContext, useState } from "react";
import frMessages from '@/messages/fr.json';
import arMessages from '@/messages/ar.json';

export const AppContext = createContext(null);

const messages = {
  fr: frMessages,
  ar: arMessages,
};


function AppProvider({ children }) {

  const [openSlider , setopenSlider] = useState(false);
  const [locale, setLocale] = useState('fr');

  return (
    <AppContext.Provider
      value={{openSlider , setopenSlider , locale, setLocale, messages: messages[locale]}}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
