import React from 'react'
import { hair, hairColor, heroImage, makeup } from '../assets/assetsImage'
import { FaAngleRight, FaArrowRight, FaSprayCan,FaBrush } from 'react-icons/fa';


const Card = ({title,img,icon,desc})=>{
    return(
        <div className="card flex text-[#774659] hover:scale-105 ease-in-out duration-150  flex-col max-w-full lg:w-80 h-[400px] overflow-hidden border mx-auto rounded-md">
        <img src={img ? img: heroImage} alt="card" className='w-[100%] h-[55%]  object-cover' />
        <div className='px-2 pt-8 pb-2 relative w-full'>
        {icon?<div  className='bg-[#ac5678] text-white absolute top-0 left-4 -mt-6 w-12 h-12 p-3 rounded-full'>
            {icon}
        </div>:<div  className='bg-[#ac5678] absolute top-0 left-4 -mt-6 w-12 h-12 p-3 rounded-full'  color='#fff'/>}
        <div className='flex items-center justify-center w-full '>
        <h2 className='font-bold text-2xl w-full whitespace-nowrap'>{title?title:'Make Up'} </h2>
        <hr className='h-[2.5px]  bg-[#e14282] w-full ml-2'/>
        </div>
            <p className='font-normal text-sm py-1 w-full'>{desc?desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. In eaque voluptatum voluptate!"}</p>
            <button className='font-medium'>View more <FaAngleRight className=' inline-block'/></button>
        </div>    
    </div>
    )
}

const Category = () => {
  return (
    <div className=' pt-8 lg:pt-56'>
         <div className=" max-w-[1024px] flex-col w-full  mx-auto flex justify-between  px-4 lg:px-0">

            <div className="flex justify-between text-[#000] items-center py-6">
                <div>
                <h6 className='font-sans  text-base'>our Categories</h6>
                <h2 className='font-bold  text-2xl'>Explore our Categories</h2>
                </div>
                <button className=" border px-3 py-2 capitalize rounded-md flex items-center ">see all <FaArrowRight className='inline-block ml-2'/></button>
            </div>

            <div className="bottom grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
               <Card img={makeup} title={'Make Up'} icon={<FaBrush size={24} />}/>
               <Card img={hair} title={'Hair Style'} />
               <Card img={hairColor} title={'Hair Coloring'} icon={<FaSprayCan size={24} />}/>
            </div>

        </div>
    </div>
  )
}

export default Category