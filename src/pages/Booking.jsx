import React, { useState } from "react";
import { bridal } from "../assets/assetsImage";
import { DayPicker } from "react-day-picker";

import { differenceInCalendarDays, format } from "date-fns";

import {
  AiFillClockCircle,
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import Favorite from "../component/Favorite";
//import { DayPicker, Row, RowProps } from 'react-day-picker';

const Booking = () => {
  const [time, setTime] = useState(new Date());
  const [selectTime, setSelectTime] = useState(null);
  const [selected, setSelected] = useState(new Date());
  const [booked, setBooked] = useState(false);

  function handleTime(t) {
    //return differenceInCalendarDays(date, new Date()) < 0;
    // console.log(format(value.currentTarget?.value,'pp'));
    // console.log(t.currentTarget.value);
    setSelectTime(t.currentTarget.value);
    setTime(time)
  }

  function handleDate(value) {
    //return differenceInCalendarDays(date, new Date()) < 0;
    console.log(value);
    setSelected(value);
  }

  const convert = (value) => {
    const t = parseInt(value.split(":")[0]);
    const s = parseInt(value.split(":")[1]);
    console.log("cv", s);
    if (t >= 12) {
        if( t == 12 )return `${12}:${s} PM`;
      return `${t-12}:${s} PM`;
    } else {
      return `${value.toString()} AM`;
    }
  };

  const bookedDays = [new Date(2023, 11, 24), new Date(2023, 11, 9)];
  const bookedStyle = { border: "2px solid pink" };
  const selectedStyle = { background: "pink" };

  const footer = booked ? "This day is already booked!" : null;

  const handleDayClick = (day, modifiers) => {
    setBooked(day && modifiers.booked);
  };

  return (
    <div className="w-full miin-h-screen bg-inherit">
      <div className="max-w-[1024px] w-full  flex flex-col items-center justify-center mx-auto pt-12 pb-36 px-4 border-b mb-12">
        <h1 className="py-8  font-bold text-3xl text-center italic font-serif">
          Booking Bridal Makeup
        </h1>
        <div className="grid md:grid-cols-3 w-full  border-2  relative   rounded-lg mb-24 overflow-hidden  min-h-[500px]">
          <div className=" object-fit flex-grow w-full  ">
            <img src={bridal} alt="/" className="h-full w-full object-cover " />
          </div>

          <div className="flex flex-col justify-center lg:justify-start  w-full h-full">
            <DayPicker
              className=" "
              mode={"single"}
              modifiers={{ booked: bookedDays }}
              fromDate={new Date()}
              defaultMonth={new Date()}
              selected={selected}
              onSelect={handleDate}
              footer={footer}
              onDayClick={handleDayClick}
              modifiersStyles={{
                booked: bookedStyle,
                selected: selectedStyle,
              }}
            />
            <div className="time  flex flex-col justify-center p-4 h-full ">
              <h2 className="py-2 self-start font-medium">Pick a Time</h2>
              <input
                type="time"
                className={
                  "  font-semibold text-lg bg-[#e142828e]  self-auto py-2 text-white px-4 rounded-md border-orange-500 "
                }
                //inputMode="numeric"
                onChange={handleTime}
                // pattern="[0-9]{2}:[0-9]{2}"
                defaultValue={'03:23'}
                //value={time}
                //autoCorrect="false"
              />
            </div>
          </div>

          <div className="flex relative flex-col border-l items-start gap-2 min-h-[500px]   p-4">
            <h1 className="text-lg font-medium "> Bridal Makeup</h1>
            <hr className="h-[1px] bg-black/50 w-full" />
            <div className="text-lg font-medium flex items-center">
              <AiOutlineDollarCircle size={20} className="text-pink-500" />
              <h3 className="text-md font- ml-2"> 300.00</h3>
            </div>

            {/* time */}
            <div className="flex items-center border- border-slate-500 ">
              <AiOutlineClockCircle size={20} className="text-pink-500" />

              <h2 className="text-md font- ml-2">
                {!selectTime
                  ? format(new Date(), "p")
                  : format(time, "p") && convert(selectTime)}
              </h2>
            </div>
            {/* date */}
            <div className="flex items-center border-b- border-slate-500 mb-4 ">
              <AiOutlineCalendar size={20} className="text-pink-500" />
              <h2 className="text-md font- ml-2 ">
                {selected == undefined
                  ? format(new Date(), "PP")
                  : format(selected?.getTime(), "PP")}
              </h2>
            </div>
            <label className="font-semibold">Instruction:</label>
            <textarea
              
              rows={6}
              placeholder="instruction"
              className=" resize-none p-4 font-mono border text-sm w-full"
            />

            {/* button */}
            <Link
              className="w-full  absolute bottom-4 left-0 right-0 p-4"
              to={"/booking"}
            >
              <button className="font-medium bg-[#e142828e] duration-300 hover:scale-105 transition-all ease-in-out  hover:bg-pink-300 border-2 w-full py-2 px-4 rounded-md text-white">
                Submit Booking
              </button>
            </Link>
          </div>
        </div>
        <Favorite/>
      </div>
     
    </div>
  );
};

export default Booking;
