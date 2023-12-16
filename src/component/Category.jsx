import React from 'react'
import { heroImage } from '../assets/assetsImage'
import { FaAngleRight, FaArrowRight, FaMicroscope,FaBrush } from 'react-icons/fa';


const Card = ({title,img,icon,desc})=>{
    return(
        <div className="card  lg:w-80 border mx-auto rounded-md">
        <img src={heroImage} alt="card" className='w-[250px]' />
        <div className='px-2 pt-8 pb-2 relative w-full'>
        {icon?<div  className='bg-[#4A4041] text-white absolute top-0 left-4 -mt-6 w-12 h-12 p-3 rounded-full'>
            {icon}
        </div>:<div  className='bg-[#4A4041] absolute top-0 left-4 -mt-6 w-12 h-12 p-3 rounded-full'  color='#fff'/>}
        <div className='flex items-center justify-center w-full '>
        <h2 className='font-bold text-2xl w-full whitespace-nowrap'>{title?title:'Make Up'} </h2>
        <hr className='h-[2.5px]  bg-[#4A4041] w-full ml-2'/>
        </div>
           
            <p className='font-normal text-sm py-1 w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eaque voluptatum voluptate!</p>
            <button className='font-medium'>View more <FaAngleRight className=' inline-block'/></button>
        </div>
       
    </div>
    )
}

const Category = () => {
  return (
    <div className='text-[#e14282] '>
         <div className=" max-w-[1024px] flex-col w-full  mx-auto flex justify-between  px-4 md:px-4">

            <div className="flex justify-between items-center py-6">
                <div>
                <h6 className='font-sans  text-base'>our Category</h6>
                <h2 className='font-bold  text-2xl'>Explore our Category</h2>
                </div>
                <button className=" border px-3 py-2 capitalize rounded-md flex items-center ">see all <FaArrowRight className='inline-block ml-2'/></button>
            </div>

            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
               <Card img={heroImage} title={'Make Up'} icon={<FaBrush size={24} />}/>
               <Card title={'Hair Style'} />
               <Card title={'Hair Coloring'}/>
            </div>

        </div>
    </div>
  )
}

export default Category