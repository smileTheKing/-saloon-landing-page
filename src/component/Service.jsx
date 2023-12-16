import React from 'react';
import { heroImage } from '../assets/assetsImage'
import { FaAngleRight, FaArrowRight, FaMicroscope } from 'react-icons/fa';

const Card = ()=>{
    return(
        <div className="card  lg:w-80 border rounded-md">
        <img src={heroImage} alt="card" className='w-[250px]' />
        <div className='px-2 pt-8 pb-2 relative w-full'>
        <FaMicroscope size={24} className='bg-[#4A4041] absolute top-0 left-4 -mt-6 w-12 h-12 p-3 rounded-full'  color='#fff'/>
        <div className='flex items-center justify-center'>
        <h2 className='font-bold text-2xl w-full'>Make Up </h2>
        <hr className='h-[2.5px] -ml-4 bg-[#4A4041] w-full'/>
        </div>
           
            <p className='font-normal text-sm py-1 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eaque voluptatum voluptate!</p>
            <button className='font-medium'>View more <FaAngleRight className=' inline-block'/></button>
        </div>
       
    </div>
    )
}

const Service = () => {
  return (
    <div className='text-[#4A4041]'>
         <div className=" max-w-[1024px] min-h-[600px] flex-col w-full  mx-auto flex justify-between py-8 px-4 md:px-4">

            <div className="flex   justify-between items-center py-6">
                <div>
                <h6 className='font-sans  text-base'>our Serves</h6>
                <h2 className='font-bold  text-2xl'>Explore our Serves</h2>
                </div>
                <button className=" border px-3 py-2 capitalize rounded-md flex items-center ">see all <FaArrowRight className='inline-block ml-2'/></button>
            </div>

            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
               <Card img={heroImage}/>
               <Card/>
               <Card/>
               <Card img={heroImage}/>
               <Card/>
               <Card/>

            </div>

        </div>
    </div>
  )
}

export default Service