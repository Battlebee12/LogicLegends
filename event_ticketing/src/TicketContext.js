// TicketContext.js

import React, { createContext, useContext, useState } from 'react';

// Create a new context
const TicketContext = createContext();

// Create a provider component to wrap around your application
export const TicketProvider = ({ children }) => {
  const [ticketDetails, setTicketDetails] = useState(null);

  return (
    <TicketContext.Provider value={{ ticketDetails, setTicketDetails }}>
      {children}
    </TicketContext.Provider>
  );
};

// Create a custom hook to consume the context
export const useTicketContext = () => useContext(TicketContext);
