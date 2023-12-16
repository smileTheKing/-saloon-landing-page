import React from "react";

const Newletter = () => {
  return (
    <div className="w-full bg-[#e14282]/80">
      <div className="max-w-[1024px] h-[200px] mx-auto w-full flex flex-col justify-center px-4">
        <div className="grid md:grid-cols-2 gap-4 lg:gap-0">
          <div className="flex font-semibold capitalize text-white flex-col text-3xl">
            <h3>subscribe our newsletter</h3>
            <h3>To get more updates!</h3>
          </div>

          <div className="flex flex-row h-[50px] border border-[#fff] w-full">
            <input type="text" placeholder="Enter you email" className="w-full bg-inherit px-2"/>
            <input type="button" value='Subscribe' className="bg-white h-full px-4 text-[#e14282] "/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newletter;
