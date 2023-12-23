import React, { useState } from 'react'
import Registration from '../component/Registration'
import { useAppContext } from './context/AppContext'
import { useSearchParams,useLocation } from 'react-router-dom'

const ProtectedRoute = ({children,session}) => {
  const x = useLocation();

  console.log(x)
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