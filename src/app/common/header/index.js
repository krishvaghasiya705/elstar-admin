import Magnifyicon from "@/assets/icon/magnifyicon";
import Menuicon1 from "@/assets/icon/menuicon1";
import Image from "next/image";
import React from "react";
import usflag from "@/assets/image/usflag.png";
import cnflag from "@/assets/image/cnflag.png";
import spflag from "@/assets/image/spflag.png";
import arflag from "@/assets/image/arflag.png";
import Trueicon from "@/assets/icon/trueicon";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 h-[64px] border-b border-gray-200 bg-white py-[5px] px-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out">
            <Menuicon1 width="24px" height="24px" />
          </div>
          <div className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out">
            <Magnifyicon width="24px" height="24px" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <div className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out active:bg-gray-100">
              <Image
                src={usflag}
                alt="usflag"
                className="w-6 h-6 rounded-full"
              />
            </div>
            <div className="absolute top-10 right-0 bg-white rounded-md shadow-md p-[6px] w-40">
              <div className="flex justify-between items-center mb-1 py-[6px] px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src={usflag}
                      alt="usflag"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">English</span>
                </div>
                <div className="text-emerald-500">
                  <Trueicon width="18px" height="18px" />
                </div>
              </div>
              <div className="flex justify-between items-center mb-1 py-[6px] px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src={cnflag}
                      alt="cnflag"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">Chinese</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-1 py-[6px] px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src={spflag}
                      alt="spflag"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">Spanish</span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-1 py-[6px] px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4">
                    <Image
                      src={arflag}
                      alt="arflag"
                      className="w-4 h-4 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">Arabic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
