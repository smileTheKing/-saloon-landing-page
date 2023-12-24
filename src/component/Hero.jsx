import React from "react";
import { bridal, heroImage } from "../assets/assetsImage";
//[#4A4041]
{
  // <div  className={`w-full grid md:grid-cols-2 lg:grid-cols-1 place-items-center px-4   xl:px-0`}>
  //         <div className="pt-8 lg:pt-2  lg:col-span-">
  //           <h1 className="text-5xl  lg:w-[80%] font-bold  lg:text-5xl capitalize font-serif  ">
  //             It's time to start your style with perfection
  //           </h1>
  //           <p className="py-8 lg:w-[80%] lg:text-lg">
  //             Lorem ipsum, dolor sit amet consectetur adipisicing elit.
  //             Voluptate quae culpa non et nulla blanditiis nemo dolorem! Autem
  //             adipisci doloremque consequuntur, molestias nihil odio?
  //           </p>
  //         </div>
  //         {/* imgage */}
  //         <div className="lg:py-4 hidden">
  //           <img
  //             src={heroImage}
  //             alt="hero"
  //             className=" w-[100%] lg:w-[100%] h-full -z-10"
  //           />
  //         </div>
  //       </div>
  // <div className="w-full hidden  lg:w-[98%] xl:w-full mx-auto md:-bottom-[180px]  left-0 right-0 min-h-[240px] bg-white text-black lg:rounded-md place-items-center grid py-4 px-4 border-[1.5px] border-[#e14282]/50 ">
  //         <h3 className="font-bold capitalize text-center text-[#e14282] text-2xl">
  //           Enhance Your Appearance At our salon
  //         </h3>
  //         <div className="grid grid-cols-2 lg:grid-cols-4  gap-4">
  //           <input
  //             type="text"
  //             placeholder="name"
  //             className="border placeholder:text-center sm:w-56 p-1 border-[#4A4041]/30 rounded"
  //           />
  //           <input
  //             type="text"
  //             placeholder="phone number"
  //             className="border placeholder:text-center sm:w-56 p-1 border-[#4A4041]/30 rounded"
  //           />
  //           <input
  //             type="text"
  //             className="border sm:w-56 p-1 placeholder:text-gray-400 placeholder:text-center border-[#4A4041]/30 text-gray-400 rounded "
  //             placeholder="choose time"
  //           />
  //           <input
  //             type="text"
  //             className="border sm:w-56 p-1 border-[#4A4041]/30 placeholder:text-gray-400  placeholder:text-center rounded"
  //             placeholder="choose date"
  //           />
  //         </div>
  //         <button className="text-white font-medium bg-[#e14282] px-12 py-2 lg:w-96 capitalize rounded ">
  //           Book an Appointment
  //         </button>
  //       </div>
}
const Hero = () => {
  return (
    <div className="mx-auto w-full  bg-top bg-gradient-to-r from-[#e14282] to-[#f4aed1]  pt-28 md:mb-28  text-white  relative">
      <div
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundRepeat: "no-repeat",
         // backgroundSize: "contain",
          // backgroundOrigin:'border-box',
         // backgroundPositionX:'500px'
        }}
        className="bg-bottom h-[500px] md:bg-[center_right_-2rem] lg:bg-[center_right_-2.5rem] mx-auto w-full lg:h-screen  bg-contain relative"
      >
        <div className="flex max-w-[1048px] mx-auto relative   flex-col  justify-center w-full h-full">
          <div className="absolute md:relative bottom-0 md:w-[60%] lg:w-[70%] w-full text-center md:text-start  min-h-1/2    grid   mt-24 md:-mt-0  lg:-mt-24 px-4">
          <h1 className=" text-lg py-4">Welcome To Your Luxury Beauty Experience</h1>
          <h1 className=" text-4xl break-words  font-bold md:text-5xl lg:text-6xl  xl:text-7xl capitalize font-serif  ">
            It's time to start your style with perfection
          </h1>

          <p className="py-8 md:w-2/3  lg:text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
            quae culpa non et nulla blanditiis nemo dolorem! 
          </p>
          <button className="bg-white text-pink-400 m px-6 py-4 rounded-md text-lg my-4 md:w-[40%] font-medium  ">Get started</button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[75%]  mx-auto md:-bottom-[140px]  left-0 right-0 min-h-[240px] lg:absolute  bg-white text-black place-items-center grid py-4 px-4 border-[1.5px] border-y-[#e14282]/50 ">
          <h3 className="font-bold capitalize text-center text-[#e14282] text-2xl">
            Enhance Your Appearance At our salon
          </h3>
          <div className="grid grid-cols-2 xl:grid-cols-4  gap-4">
            <input
              type="text"
              placeholder="name"
              className="border placeholder:text-center sm:w-56 p-1 border-[#4A4041]/30 rounded"
            />
            <input
              type="text"
              placeholder="phone number"
              className="border placeholder:text-center sm:w-56 p-1 border-[#4A4041]/30 rounded"
            />
            <input
              type="text"
              className="border sm:w-56 p-1 placeholder:text-gray-400 placeholder:text-center border-[#4A4041]/30 text-gray-400 rounded "
              placeholder="choose time"
            />
            <input
              type="text"
              className="border sm:w-56 p-1 border-[#4A4041]/30 placeholder:text-gray-400  placeholder:text-center rounded"
              placeholder="choose date"
            />
          </div>
          <button className="text-white font-medium bg-[#e14282] px-12 py-2 lg:w-96 capitalize rounded ">
            Book an Appointment
          </button>
        </div>
    </div>
  );
};

export default Hero;
