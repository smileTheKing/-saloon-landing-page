import React from 'react';
import { heroImage } from '../assets/assetsImage'
import { FaAngleRight, FaArrowRight, FaMicroscope, FaStar } from 'react-icons/fa';

const Card = ({title,img,icon,price})=>{
    return(
        <div className="card flex text-[#774659]  flex-col w-full lg:w-80 h-[400px] overflow-hidden border mx-auto rounded-md">
        <img src={img ? img: heroImage} alt="card" className='w-[100%] h-[55%]  object-cover' />
        <div className='px-2 pb-2 relative w-full flex flex-col items-center justify-center gap-2 h-full'>
        <div className='flex self-start'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar />
        </div>
        <div className='flex items-center justify-center w-full '>
        <h2 className='font-bold text-2xl w-full whitespace-nowrap'>{title?title:'Make Up'} </h2>
       
        </div>
            <p className='font-bold py-1 w-full text-[#774659]/70'>{price?`$${price}.00`:" USD $100.00"}</p>
            <button className='font-medium border-2 w-full py-2 px-4 rounded'>Book Appointment</button>
        </div>    
    </div>
    )
}

const Favorite = () => {
  return (
    <div className='text-[#4A4041]'>
         <div className=" max-w-[1024px] min-h-[600px] flex-col w-full  mx-auto flex justify-between py-8 px-4 md:px-4">
            <div className="flex text-[#000]  justify-between items-center py-6">
                <div>
                <h6 className='font-sans  text-base'>Favorite Services</h6>
                <h2 className='font-bold  text-2xl'>Our Favorite Services</h2>
                </div>
                <button className=" border px-3 py-2 capitalize rounded-md flex items-center ">see all <FaArrowRight className='inline-block ml-2'/></button>
            </div>

            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
               <Card price={150}img={heroImage}/>
               <Card price={300}/>
               <Card price={200}/>
            </div>
        </div>
    </div>
  )
}

export default Favorite