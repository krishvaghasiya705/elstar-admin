"use client";
import CommonButton from "@/common/commonbutton";
import Tooltip from "@/common/tooltip";
import Fileicon from "@/assets/icon/fileicon";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import thumb1 from "@/assets/image/thumb1.jpg";
import thumb3 from "@/assets/image/thumb3.jpg";
import thumb5 from "@/assets/image/thumb5.jpg";
import thumb6 from "@/assets/image/thumb6.jpg";
import thumb8 from "@/assets/image/thumb8.jpg";
import thumb10 from "@/assets/image/thumb10.jpg";
import Rowdots from "@/assets/icon/rowdots";
import Addflagicon from "@/assets/icon/addflagicon";
import Settingicon from "@/assets/icon/settingicon";
import Moveicon from "@/assets/icon/moveicon";
import ProgressBar from "@/common/progressBar";

const projectsData = [
  {
    id: 1,
    title: "EVO SaaS",
    type: "Web Application",
    files: "27 / 32",
    progress: 80,
    progressColor: "green-500",
    team: [
      { id: 1, name: "Frederick Adams", image: thumb8, initial: null },
      { id: 2, name: "Joyce Freeman", image: thumb5, initial: null },
      { id: 3, name: "Clayton Bates", initial: "CB", bgColor: "amber-500" },
      { id: 4, name: "Clayton Bates", initial: "CB", bgColor: "amber-500" },
    ],
  },
  {
    id: 2,
    title: "AIA Bill App",
    type: "Mobile Application",
    files: "15 / 36",
    progress: 45,
    progressColor: "indigo-600",
    team: [
      { id: 1, name: "Carolyn Perkins", initial: null, image: thumb1 },
      { id: 2, name: "Gabriel Frazier", initial: "GF", bgColor: "amber-500" },
    ],
  },
  {
    id: 3,
    title: "IOP Web",
    type: "Web Backend Application",
    files: "19 / 27",
    progress: 73,
    progressColor: "green-500",
    team: [
      { id: 1, name: "Debra Hamilton", initial: "DH", bgColor: "pink-500" },
      { id: 2, name: "Stacey Ward", initial: "SW", bgColor: "blue-600" },
      { id: 3, name: "Ron Vargas", image: thumb3, initial: null },
      { id: 4, name: "Ron Vargas", image: thumb3, initial: null },
      { id: 5, name: "+2", initial: "+2", bgColor: "gray-400" },
    ],
  },
  {
    id: 4,
    title: "Octonine POS",
    type: "Backend Application",
    files: "23 / 78",
    progress: 21,
    progressColor: "red-500",
    team: [
      { id: 1, name: "Brittany Hale", image: thumb10, initial: null },
      { id: 2, name: "Frederick Adams", image: thumb8, initial: null },
      { id: 3, name: "Samantha Phillips", image: thumb6, initial: null },
      { id: 4, name: "Samantha Phillips", image: thumb6, initial: null },
      { id: 5, name: "+1", initial: "+1", bgColor: "gray-400" },
    ],
  },
];

export default function Projects() {
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      let clickedInsideAnyDropdown = false;

      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && ref.contains(event.target)) {
          clickedInsideAnyDropdown = true;
        }
      });

      if (!clickedInsideAnyDropdown) {
        setActiveDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="p-5 border border-gray-200 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold font-InterUi text-gray-900">
          Projects
        </h2>
        <CommonButton
          text="View All"
          Styling="font-medium font-InterUi"
          variant="default"
          color="gray"
          size="sm"
          shape="round"
          loading={false}
          disabled={false}
          block={false}
        />
      </div>
      <div>
        {projectsData.map((project) => (
          <div className="mb-4" key={project.id}>
            <div className="border border-gray-200 bg-white rounded-lg p-5">
              <div className="grid gap-x-4 grid-cols-12">
                <div className="flex items-center col-span-3">
                  <div className="flex flex-col">
                    <h4 className="text-base font-bold font-InterUi text-gray-900">
                      {project.title}
                    </h4>
                    <span className="text-sm font-medium font-InterUi text-gray-500">
                      {project.type}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-end col-span-2">
                  <div className="inline-flex items-center px-2 py-1 border border-gray-300 rounded-full text-gray-500">
                    <Fileicon width="16px" height="16px" />
                    <span className="ml-1 text-sm font-medium font-InterUi">
                      {project.files}
                    </span>
                  </div>
                </div>

                <div className="flex items-center col-span-3">
                  <ProgressBar
                    value={project.progress}
                    color={project.progressColor}
                  />
                </div>

                <div className="flex items-center col-span-3">
                  <div className="flex items-center mb-[5px]">
                    {project.team.map((user, idx) => (
                      <div
                        key={user.id + (user.name || user.initial)}
                        className={`w-[30px] h-[30px] relative z-[${idx + 1}]${
                          idx > 0 ? " -ml-2" : ""
                        }`}
                      >
                        <Tooltip text={user.name}>
                          {user.image ? (
                            <Image
                              src={user.image}
                              alt={user.name}
                              className="w-[30px] h-[30px] rounded-full cursor-pointer"
                            />
                          ) : (
                            <div
                              className={`w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer select-none ${
                                user.bgColor
                                  ? `bg-${user.bgColor}`
                                  : "bg-gray-400"
                              }`}
                            >
                              <span className="text-xs font-medium font-InterUi text-white uppercase">
                                {user.initial}
                              </span>
                            </div>
                          )}
                        </Tooltip>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end col-span-1">
                  <div
                    className="relative"
                    ref={(el) => (dropdownRefs.current[project.id] = el)}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-50 text-gray-600"
                      onClick={() =>
                        setActiveDropdownId(
                          activeDropdownId === project.id ? null : project.id
                        )
                      }
                    >
                      <Rowdots width="16px" height="16px" />
                    </div>
                    <div
                      className={`absolute top-full right-0 z-20 bg-white rounded-md shadow-md max-h-40 border border-gray-200 overflow-y-auto p-[6px] w-40 transition-all duration-300 ease-in-out transform-gpu ${
                        activeDropdownId === project.id
                          ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                      }`}
                    >
                      {[
                        ["Add Flag", Addflagicon],
                        ["Move", Moveicon],
                        ["Setting", Settingicon],
                      ].map(([label, Icon], index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center mb-1 py-2 px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out"
                          onClick={() => setActiveDropdownId(null)}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600 group-hover:text-gray-900">
                              <Icon width="18px" height="18px" />
                            </span>
                            <span className="text-sm font-semibold text-gray-600 font-Roboto group-hover:text-gray-900">
                              {label}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
