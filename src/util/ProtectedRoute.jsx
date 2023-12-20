import React, { useState } from 'react'
import Registration from '../component/Registration'
import { useAppContext } from './context/AppContext'

const ProtectedRoute = ({children,session}) => {
  
  const {isLocked} = useAppContext()
  console.log(isLocked)
  
  return (
    <div className={`relative  h-screen   ${!isLocked&& ' overflow-hidden'}`}>

      { !isLocked&& <Registration />}
    {children}
        {/* {session? children: <Registration/>} */}
    </div>
  )
}

export default ProtectedRoute