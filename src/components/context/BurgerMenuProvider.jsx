import React from 'react'
import { BurgerMenuContext } from './burgerMenuContext'

const BurgerMenuProvider = ({children, widthBurgerMenu, widthList}) => {
  return (
   <BurgerMenuContext.Provider value={{widthBurgerMenu, widthList}}>
        {children}
   </BurgerMenuContext.Provider>
  )
}

export default BurgerMenuProvider
