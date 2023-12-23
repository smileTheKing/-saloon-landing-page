import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { FaFacebook, FaGoogle, FaTiktok } from 'react-icons/fa'
import { google, tiktok } from '../assets/assetsImage'
import { useAppContext } from '../util/context/AppContext'
import { Link } from 'react-router-dom'

const Registration = ({}) => {
    const {handleIsLock} = useAppContext()
  return (
    <div className='w-full h-screen flex flex-col  overflow-auto z-50 md:absolute relative top-0 bottom-0   bg-transparent md:bg-gray-500/70 backdrop-blur-lg  items-center justify-center'>
        <button onClick={handleIsLock} className="absolute flex justify-center items-center rounded-full  top-0 w-[50px]  my-8 mx-8  h-[50px] right-0  z-50 bg-slate-50/80 "><Link to={'/'}><AiOutlineCloseCircle  className='text-black font-bold' size={30}/></Link> </button>


        <div className="w-full relative h-full md:max-w-[500px] md:h-[500px] z-40  bg-white md:shadow rounded-lg flex flex-col gap-y-6 justify-center items-center   ">
        <h1 className='text-black font-bold text-2xl underline'>Login</h1>
        <button className="w-[80%] flex items-center justify-center gap-2 rounded-full  shadow-sm font-bold text-2xl border px-4 py-4">
                <p>Google</p>
                <img src={google} alt="tiktok icon" width={30} height={30} />
        </button>
        <button className="w-[80%] flex bg-blue-400 text-white rounded-full  items-center justify-center gap-2 font-bold text-2xl border px-4 py-4 shadow-sm">
                <p>Facebook</p>
                <FaFacebook/>
        </button>
        <button className="w-[80%] flex items-center justify-center gap-2 rounded-full bg-slate-500/50 shadow-sm font-bold text-2xl border px-4 py-4">
                <p>Tiktok</p>
                <img src={tiktok} alt="tiktok icon" width={30} height={30} />
        </button>

        <div className="flex items-center justify-center gap-x-2 py-4 text-sm text-slate-800">
            
            <button className='w-full '>Sign Up</button>
           |
            <button className='whitespace-nowrap ml-auto w-full'>Forget Password? <span className='text-pink-400 underline cursor-pointer'>Here</span></button>
        </div>
        <div className="privacy">

            <p className='mt-8'>By clicking continue, you agree to our Terms of Service and Privacy Policy.</p>
        </div>
        </div>
    </div>
    
    
  )
}

export default Registration