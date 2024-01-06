import React, { useState } from "react";
import { FaHeart, FaBell, FaAngleDown, FaCartPlus } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { logo } from "../assets/assetsImage";

const Navbar = () => {
  const [nav, setNav] = useState(false);


//bg-gradient-to-r from-[#e14282] to-[#f4aed1]

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" w-full text-white  absolute z-50 bg-gradient-to-r from-[#e14282] to-[#f4aed1] ">
      <div className=" max-w-[1024px] flex-col w-full mx-auto items-center flex justify-between px-4 xl:px-0">
        <div className=" w-full flex justify-between items-center py-4">
          <div className="flex gap-2">
            <div className="border flex items-center  px-2 rounded">
              ENG <FaAngleDown />
            </div>
            <div className="border flex items-center px-2 rounded">
              USD <FaAngleDown />
            </div>
          </div>
          <div className="flex items-center gap-4">
           
            
            <div className="flex items-center gap-1 justify-center"><FaCartPlus size={18} />{3}</div>
            <FaBell size={18} />
            <button className="border  px-4 font-medium rounded">Login</button>
          </div>
        </div>

        <div className="flex w-full h-full items-center justify-between ">
        <Link to={'/'} className="flex items-center font-serif justify-center"><h1 className="w-full text-4xl font-bold">SALON</h1><img width={60} height={60} src={logo}/> </Link>
          <ul className="hidden md:flex justify-between items-center gap-4 font-medium">
            <li className="uppercase font-medium cursor-pointer"><Link to={'/'}>Home</Link></li>
            <li className="uppercase font-medium cursor-pointer">Beauty</li>
            <li className="uppercase font-medium cursor-pointer">Galley</li>
            <li className="uppercase font-medium cursor-pointer">Salon</li>
            <li className="uppercase font-medium cursor-pointer">About</li>
          </ul>

          {!nav && (
            <AiOutlineMenu
              size={30}
              className="md:hidden "
              onClick={handleNav}
            />
          )}
        </div>

        <div className={nav?"bg-black/50  md:hidden   fixed top-0 w-[100%]  h-full left-0 z-50  ":"fixed top-0 left-[-100%]"}>
          <ul
            className={
              nav
                ? "flex flex-col px-4   bg-white w-[70%] h-full text-[#e14282] gap-4 font-medium ease-in-out left-0 duration-150"
                : " fixed  ease-in-out duration-150 left-[-100%]"
            }
          >
            <h1 className="w-full text-[#e14282] text-4xl font-bold py-16 blur-none">
              Salon
            </h1>
            <AiOutlineClose
              size={30}
              className={nav?"lg:hidden absolute right-0 text-white top-2 ease-in-out delay-75 duration-150  bg-black/50 rounded-full p-2 mr-1":'right-[-100%] ease-in-out duration-150'}
              onClick={handleNav}
            />
            <li className="border-b uppercase py-2">Home</li>
            <li className="border-b uppercase py-2">Beauty</li>
            <li className="border-b uppercase py-2">Galley</li>
            <li className="border-b uppercase py-2">Salon</li>
            <li className="border-b uppercase py-2">About</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
