import React from 'react';

export const HashContext = React.createContext(null);

export default function HashProvider({children}) {
  const [hash, setHash] = React.useState(null);

  return (
    <HashContext.Provider value={{hash, setHash}}>
      {children}
    </HashContext.Provider>
  );
}
