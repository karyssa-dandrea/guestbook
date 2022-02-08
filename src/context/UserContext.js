import { useState, createContext, useContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');

  return <UserContext.Provider value={(user, setUser)}> {children} </UserContext.Provider>;
};

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser must be used within a UseProvider');
  }
  return context;
};

export { UserProvider, useUser };
