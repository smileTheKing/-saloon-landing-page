import React, { createContext, useContext, useState } from 'react'
const Context = createContext();


const AppContext = ({children}) => {
    const [isLocked,setIsLock ]= useState(false)
  const handleIsLock =()=>{
    setIsLock(!isLocked)
  }
  return (
    <Context.Provider value={{isLocked,setIsLock,handleIsLock}}>
        {children}
    </Context.Provider>
  )
}

export const useAppContext = () => useContext(Context)
export default AppContext