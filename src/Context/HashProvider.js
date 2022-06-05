import React from 'react';

export const HashContext = React.createContext(null);

export default function HashProvider({children}) {
  const [hash, setHash] = React.useState(null);
  const [selectedMenu, setSelectedMenu] = React.useState(null);

  return (
    <HashContext.Provider
      value={{hash, setHash, selectedMenu, setSelectedMenu}}
    >
      {children}
    </HashContext.Provider>
  );
}
