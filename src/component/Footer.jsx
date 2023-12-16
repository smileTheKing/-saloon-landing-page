import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white">
      <div className="max-w-[1024px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-[#4A4041]">
        <div className="col-span-">
          <h1 className="w-full text-3xl font-bold text-[#e14282] uppercase">
            Reacat.
          </h1>
          <p className="py-4 text-[#4A4041]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta iure
            tempora provident.
          </p>
          <div className="flex md:w-[75%] justify-between my-6">
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        {/* solution */}
        <div className="flex lg:col-span- justify-between text-[#e14282]/80 ">
          <div>
            <h6 className="font-medium text-[#4A4041]">Quick Links</h6>
            <ul>
              <li className="py-2 text-sm ">Home</li>
              <li className="py-2 text-sm ">Services</li>
              <li className="py-2 text-sm ">Commerce</li>
              <li className="py-2 text-sm ">Insights</li>
            </ul>
          </div>

          

          {/* pricing */}
          <div>
            <h6 className="font-medium text-[#4A4041]">Services</h6>
            <ul>
              <li className="py-2 text-sm">About</li>
              <li className="py-2 text-sm">Blog</li>
              <li className="py-2 text-sm">Jobs</li>
              <li className="py-2 text-sm">Press</li>
              <li className="py-2 text-sm">Careers</li>
            </ul>
          </div>
        
        {/* pricing */}
        <div>
            <h6 className="font-medium text-[#4A4041]">Contact Us</h6>
            <ul>
              <li className="py-2 text-sm">Claim</li>
              <li className="py-2 text-sm">Policy</li>
              <li className="py-2 text-sm">Terms</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footer;
