"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Magnifyicon from "@/assets/icon/magnifyicon";
import Menuicon1 from "@/assets/icon/menuicon1";
import Trueicon from "@/assets/icon/trueicon";
import usflag from "@/assets/image/usflag.png";
import cnflag from "@/assets/image/cnflag.png";
import spflag from "@/assets/image/spflag.png";
import arflag from "@/assets/image/arflag.png";
import Bellicon from "@/assets/icon/bellicon";
import Mailopenicon from "@/assets/icon/mailopenicon";
import Tooltip from "../tooltip";
import Thumb4 from "@/assets/image/thumb4.jpg";
import Thumb8 from "@/assets/image/thumb8.jpg";
import Calendericon from "@/assets/icon/calendericon";
import Noneicon from "@/assets/icon/noneicon";
import Listicon from "@/assets/icon/listicon";
import Settingicon from "@/assets/icon/settingicon";
import Menuicon2 from "@/assets/icon/menuicon2";
import thumb1 from "@/assets/image/thumb1.jpg";
import Usericon from "@/assets/icon/usericon";
import Activityicon from "@/assets/icon/activityicon";

export default function Header({ toggleSidebar, isSidebarOpen }) {
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] =
    useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const langDropdownRef = useRef(null);
  const notificationDropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  // Language dropdown outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Notification dropdown outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationDropdownRef.current &&
        !notificationDropdownRef.current.contains(event.target)
      ) {
        setIsNotificationDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Profile dropdown outside click handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileDropdownRef.current &&
        !profileDropdownRef.current.contains(event.target)
      ) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 h-[64px] border-b border-gray-200 bg-white py-[5px] px-4 flex justify-between items-center">
      <div className="flex items-center">
        <div
          className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out"
          onClick={toggleSidebar}
        >
          <div className="relative w-6 h-6">
            <div
              className={`absolute transition-opacity duration-300 ease-in-out ${
                isSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <Menuicon1 width="24px" height="24px" />
            </div>
            <div
              className={`absolute transition-opacity duration-300 ease-in-out ${
                !isSidebarOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <Menuicon2 width="24px" height="24px" />
            </div>
          </div>
        </div>
        <div className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out">
          <Magnifyicon width="24px" height="24px" />
        </div>
      </div>

      <div className="flex items-center">
        <div className="relative" ref={langDropdownRef}>
          <div
            className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out active:bg-gray-100"
            onMouseDown={() => setIsLangDropdownOpen((prev) => !prev)}
          >
            <Image src={usflag} alt="usflag" className="w-6 h-6 rounded-full" />
          </div>

          <div
            className={`absolute top-10 right-0 z-20 bg-white rounded-md shadow-md max-h-40 border border-gray-200 overflow-y-auto p-[6px] w-40 gray-thin-scroll transition-all duration-300 ease-in-out transform-gpu ${
              isLangDropdownOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            {[
              { flag: usflag, label: "English", selected: true },
              { flag: cnflag, label: "Chinese" },
              { flag: spflag, label: "Spanish" },
              { flag: arflag, label: "Arabic" },
            ].map(({ flag, label, selected }) => (
              <div
                key={label}
                className="flex justify-between items-center mb-1 py-[6px] px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={flag}
                    alt={`${label} flag`}
                    className="w-4 h-4 rounded-full"
                  />
                  <span className="text-sm font-semibold text-gray-600 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">
                    {label}
                  </span>
                </div>
                {selected && (
                  <div className="text-emerald-500">
                    <Trueicon width="18px" height="18px" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="relative" ref={notificationDropdownRef}>
          <div
            className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out active:bg-gray-100"
            onMouseDown={() => setIsNotificationDropdownOpen((prev) => !prev)}
          >
            <div className="relative">
              <span className="absolute top-[3px] right-[6px] w-2 h-2 bg-red-500 rounded-full"></span>
              <Bellicon width="24px" height="24px" />
            </div>
          </div>

          <div
            className={`absolute top-10 right-0 z-20 bg-white rounded-md shadow-md h-[395px] w-[340px] border border-gray-200 transition-all duration-300 ease-in-out transform-gpu ${
              isNotificationDropdownOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="h-full grid grid-rows-[53px_1fr_54px]">
              <div className="border-b border-gray-200 py-2 px-4 flex justify-between items-center">
                <p className="text-base font-semibold font-InterUi capitalize text-black">
                  Notifications
                </p>
                <Tooltip text="Mark all as read">
                  <div className="text-gray-600 w-9 h-9 flex justify-center items-center cursor-pointer hover:bg-gray-50">
                    <Mailopenicon width="20px" height="20px" />
                  </div>
                </Tooltip>
              </div>

              <div className="h-full overflow-y-hidden hover:overflow-y-auto gray-thin-scroll">
                <div className="relative flex items-start px-4 py-4 cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  <div className="w-10 h-10">
                    <Image
                      src={Thumb8}
                      alt="Thumb8"
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-InterUi capitalize text-gray-500">
                      <span className="font-semibold text-slate-900">
                        Jean Bowman
                      </span>{" "}
                      invited you to new project.
                    </p>
                    <span className="text-xs text-gray-500 font-InterUi">
                      4 minutes ago
                    </span>
                  </div>
                  <div className="bg-indigo-600 absolute top-4 right-4 mt-1.5 w-2 h-2 rounded-full"></div>
                </div>
                <div className="relative flex items-start px-4 py-4 cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  <div className="w-10 h-10">
                    <div className="bg-indigo-600 w-full h-full rounded-full flex justify-center items-center">
                      <span className="text-sm font-medium font-InterUi text-white">
                        VK
                      </span>
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-InterUi capitalize text-gray-500">
                      <span className="font-semibold text-slate-900">
                        Vickie Kim
                      </span>{" "}
                      comment in your ticket.
                    </p>
                    <span className="text-xs text-gray-500 font-InterUi">
                      20 minutes ago
                    </span>
                  </div>
                  <div className="bg-indigo-600 absolute top-4 right-4 mt-1.5 w-2 h-2 rounded-full"></div>
                </div>
                <div className="relative flex items-start px-4 py-4 cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  <div className="w-10 h-10">
                    <div className="bg-blue-500/20 w-full h-full rounded-full flex justify-center items-center text-blue-600">
                      <Calendericon width="20px" height="20px" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-InterUi capitalize text-gray-500">
                      Please submit your daily report.
                    </p>
                    <span className="text-xs text-gray-500 font-InterUi">
                      1 hour ago
                    </span>
                  </div>
                  <div className="bg-indigo-600 absolute top-4 right-4 mt-1.5 w-2 h-2 rounded-full"></div>
                </div>
                <div className="relative flex items-start px-4 py-4 cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  <div className="w-10 h-10">
                    <div className="bg-red-100 w-full h-full rounded-full flex justify-center items-center text-red-600">
                      <Noneicon width="20px" height="20px" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-InterUi capitalize text-gray-500">
                      Your request was rejected
                    </p>
                    <span className="text-xs text-gray-500 font-InterUi">
                      2 days ago
                    </span>
                  </div>
                  <div className="bg-gray-300 absolute top-4 right-4 mt-1.5 w-2 h-2 rounded-full"></div>
                </div>
                <div className="relative flex items-start px-4 py-4 cursor-pointer hover:bg-gray-50 border-b border-gray-200">
                  <div className="w-10 h-10">
                    <Image
                      src={Thumb4}
                      alt="Thumb4"
                      className="rounded-full w-full h-full"
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-InterUi capitalize text-gray-500">
                      <span className="font-semibold text-slate-900">
                        Jennifer Ruiz
                      </span>{" "}
                      mentioned your in comment.
                    </p>
                    <span className="text-xs text-gray-500 font-InterUi">
                      2 days ago
                    </span>
                  </div>
                  <div className="bg-gray-300 absolute top-4 right-4 mt-1.5 w-2 h-2 rounded-full"></div>
                </div>
                <div className="relative flex items-start px-4 py-4 cursor-pointer hover:bg-gray-50">
                  <div className="w-10 h-10">
                    <div className="bg-emerald-100 w-full h-full rounded-full flex justify-center items-center text-emerald-600">
                      <Listicon width="20px" height="20px" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium font-InterUi capitalize text-gray-500">
                      Your request has been approved.
                    </p>
                    <span className="text-xs text-gray-500 font-InterUi">
                      4 minutes ago
                    </span>
                  </div>
                  <div className="bg-gray-300 absolute top-4 right-4 mt-1.5 w-2 h-2 rounded-full"></div>
                </div>
              </div>

              <div className="border-t border-gray-200 py-2 px-4 flex justify-center items-center">
                <span className="py-2 px-4 cursor-pointer text-sm font-semibold font-Roboto capitalize text-gray-500 hover:text-black">
                  View All Activity
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="p-2 mx-1 rounded-full cursor-pointer text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-400 ease-in-out active:bg-gray-100">
            <Settingicon width="24px" height="24px" />
          </div>
        </div>
        <div className="relative" ref={profileDropdownRef}>
          <div
            className="flex items-center gap-2 p-2 mx-1 cursor-pointer select-none"
            onMouseDown={() => setIsProfileDropdownOpen((prev) => !prev)}
          >
            <div className="w-8 h-8">
              <Image
                src={thumb1}
                alt="thumb1"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <span className="text-xs font-medium font-InterUi text-gray-500 capitalize">
                admin
              </span>
              <p className="text-sm font-bold font-InterUi text-gray-500 capitalize">
                carolyn perkins
              </p>
            </div>
          </div>
          <div
            className={`absolute top-[53px] right-0 z-20 bg-white rounded-md shadow-md p-[6px] w-60 max-h-[268px] border border-gray-200 transition-all duration-300 ease-in-out transform-gpu ${
              isProfileDropdownOpen
                ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
            }`}
          >
            <div className="py-2 px-3 flex items-center gap-2">
              <div className="w-10 h-10">
                <Image
                  src={thumb1}
                  alt="thumb1"
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <p className="text-sm font-bold font-InterUi text-gray-900 capitalize">
                  carolyn perkins
                </p>
                <span className="text-xs font-medium font-InterUi text-gray-500">
                  carolyn.p@elstar.com
                </span>
              </div>
            </div>
            <div className="my-2 border-b border-gray-200"></div>
            <div className="max-h-[120px] overflow-y-hidden hover:overflow-y-auto gray-thin-scroll">
              <div className="flex justify-between items-center mb-1 py-2 px-2 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
                <div className="flex items-center gap-2">
                  <div className="opacity-50 text-gray-500 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                    <Usericon width="20px" height="20px" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">
                    Profile
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-1 py-2 px-2 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
                <div className="flex items-center gap-2">
                  <div className="opacity-50 text-gray-500 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                    <Settingicon width="20px" height="20px" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">
                    Account Setting
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center mb-1 py-2 px-2 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
                <div className="flex items-center gap-2">
                  <div className="opacity-50 text-gray-500 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                    <Activityicon width="20px" height="20px" />
                  </div>
                  <span className="text-sm font-semibold text-gray-500 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">
                    Activity Log
                  </span>
                </div>
              </div>
            </div>
            <div className="my-2 border-b border-gray-200"></div>
            <div className="flex justify-between items-center mb-1 py-2 px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out">
              <div className="flex items-center gap-2">
                <div className="opacity-50 text-gray-500 group-hover:opacity-100 transition-all duration-400 ease-in-out">
                  <Usericon width="20px" height="20px" />
                </div>
                <span className="text-sm font-semibold text-gray-500 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">
                  Sign Out
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
