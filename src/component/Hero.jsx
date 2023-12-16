import React from "react";
import { heroImage } from "../assets/assetsImage";
//[#4A4041]
const Hero = () => {
  return (
    <div className="mx-auto  text-white  relative">
      <div className="bg-gradient-to-r from-[#e14282] to-[#f4aed1] h-full lg:h-[450px] w-full absolute -z-10" />
      <div className="max-w-[1024px] w-full mx-auto flex flex-col lg:h-[480px]  pt-8 lg:pt-0 relative">
        
        <div className="w-full grid md:grid-cols-3 place-items-center px-4  xl:px-0">
          <div className="pt-8 lg:pt-2  col-span-2">
            <h1 className="text-4xl  sm:text-6xl  lg:text-6xl capitalize font-serif  ">It's time to start your style with perfection</h1>

            <p className="py-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate quae culpa non et nulla blanditiis nemo dolorem! Autem
              adipisci doloremque consequuntur, molestias nihil odio?
            </p>
          </div>  
          <div className="  lg:py-4">
          <img src={heroImage} alt="hero" className=" w-[100%] lg:w-[100%] h-full -z-10" />
            </div>   
            
        </div>

        <div className="w-full lg:absolute -bottom-[100px]  left-0 right-0 h-[240px] bg-white text-black lg:rounded-md place-items-center grid px-4 border-[1.5px] border-[#e14282]/50 ">
          <h3 className="font-bold capitalize text-[#e14282] text-2xl">Enhance Your Appearance At our salon</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4  gap-4">
            <input type="text" placeholder="name" className="border sm:w-56 p-1 border-[#4A4041]/30 rounded-sm"/>
            <input type="text" placeholder="phone number" className="border sm:w-56 p-1 border-[#4A4041]/30 rounded-sm"/>
            <button className="border sm:w-56 p-1 border-[#4A4041]/30 text-gray-400 rounded-sm">choose time</button>
            <button className="border sm:w-56 p-1 border-[#4A4041]/30 text-gray-400 rounded-sm">choose date</button>
          </div>
          <button className="text-white bg-[#e14282] px-12 py-2 m:w-96 capitalize rounded-sm ">Book an Appointment</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
