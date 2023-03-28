import React from 'react'
import { BurgerMenuContext } from './burgerMenuContext'

const BurgerMenuProvider = ({
  children,
  widthBurgerMenu,
  widthList,
  setWidthBurgerMenu,
  setWidthList,
  widthActive,
  setWidthActive,
}) => {
  return (
    <BurgerMenuContext.Provider
      value={{
        widthBurgerMenu,
        widthList,
        setWidthBurgerMenu,
        setWidthList,
        widthActive,
        setWidthActive,
      }}
    >
      {children}
    </BurgerMenuContext.Provider>
  );
};

export default BurgerMenuProvider
