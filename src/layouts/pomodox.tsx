import React from "react";
import { BsFillGearFill, BsFillPlayFill } from "react-icons/bs";
import Clock from "../components/Pomodox/Clock";

import ProgressTimer from "../components/Pomodox/ProgressTimer";
import Slider from "../components/Pomodox/Slider";

function Pomodox() {
  return (
    <div className="h-full flex flex-col  items-center w-80 bg-app-red-500 border-app-red-500 border-[1px] rounded-md">
      <div className="w-full h-16 p-6 text-white text-xl">
        <BsFillGearFill className="hover:text-app-red-700 cursor-pointer" />
      </div>

      <ProgressTimer max={100} progress={60}>
        <Clock />
      </ProgressTimer>

      <div className="w-60 flex gap-4 pb-6 pt-12 px-6">
        <Slider value={20} />
      </div>

      <div>
        <p className="text-white text-xs font-semibold antialiased tracking-wider">
          Focus for 25 Minutes
        </p>
      </div>

      <div className="text-white flex pb-8 pt-8 justify-center w-full p-4 text-4xl">
        <BsFillPlayFill className="hover:text-app-red-700 cursor-pointer" />
      </div>
    </div>
  );
}

export default Pomodox;
