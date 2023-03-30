import React from 'react'
import { AppContext } from './AppContext'

const AppProvider = ({
  children,
  setWidthBurgerMenu,
  setWidthList,
  widthActive,
  setWidthActive,
}) => {
  console.log(setWidthBurgerMenu);
  return (
    <AppContext.Provider
      value={{
        setWidthBurgerMenu,
        setWidthList,
        widthActive,
        setWidthActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
