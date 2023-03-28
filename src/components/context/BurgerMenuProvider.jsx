import React from 'react'
import { BurgerMenuContext } from './burgerMenuContext'

const BurgerMenuProvider = ({
  children,
  setWidthBurgerMenu,
  setWidthList,
  widthActive,
  setWidthActive,
}) => {
  console.log(setWidthBurgerMenu);
  return (
    <BurgerMenuContext.Provider
      value={{
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
