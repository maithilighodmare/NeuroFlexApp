import React, { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const UserContext = createContext();

// Step 2: Create the Provider
export const UserProvider = ({ children }) => {
  // By default, we assume the user is a doctor (change later after login)
  const [role, setRole] = useState('doctor');

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

// Step 3: Create a custom hook to use the context easily
export const useUser = () => useContext(UserContext);

