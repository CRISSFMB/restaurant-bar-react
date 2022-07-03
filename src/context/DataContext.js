import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [isOrder, setIsOrder] = useState(false);
  return (
    <DataContext.Provider value={{ isOrder, setIsOrder }}>
      {children}
    </DataContext.Provider>
  );
};
