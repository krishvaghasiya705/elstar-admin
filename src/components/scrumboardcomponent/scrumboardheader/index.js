"use client";
import Tooltip from "@/common/tooltip";
import Image from "next/image";
import React from "react";

import thumb1 from "@/assets/image/thumb1.jpg";
import thumb2 from "@/assets/image/thumb2.jpg";
import thumb3 from "@/assets/image/thumb3.jpg";
import thumb5 from "@/assets/image/thumb5.jpg";
import CommonButton from "@/common/commonbutton";
import Signuppicon from "@/assets/icon/signuppicon";
import Settingicon from "@/assets/icon/settingicon";
import Circleplusicon from "@/assets/icon/circleplusicon";
import Tabs from "@/common/tabs";

export default function Scrumboardheader({ activeTab, onTabChange }) {
  const tabItems = [
    { label: 'All', value: 'all' },
    { label: 'Task', value: 'task' },
    { label: 'Bug', value: 'bug' },
    { label: 'Live issue', value: 'live-issue' },
    { label: 'Low priority', value: 'low-priority' },
  ];

  const handleTabClick = (tabValue) => {
    onTabChange(tabValue);
  };

  return (
    <>
      <div className="pt-8 pb-4 border-b border-gray-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="text-sm font-medium font-InterUi text-gray-500 mb-1">
                Agile project
              </p>
              <h1 className="text-2xl font-semibold font-InterUi text-gray-900">
                RND Team Sprint 2
              </h1>
            </div>
            <div>
              <div className="flex items-center mb-[5px]">
                <div className="w-[30px] h-[30px] relative z-[1}">
                  <Tooltip text="Carolyn Perkins">
                    <Image
                      src={thumb1}
                      alt="thumb1"
                      className="w-[30px] h-[30px] rounded-full cursor-pointer"
                    />
                  </Tooltip>
                </div>
                <div className="w-[30px] h-[30px] relative z-[2} -ml-2">
                  <Tooltip text="Terrance Moreno">
                    <Image
                      src={thumb2}
                      alt="thumb2"
                      className="w-[30px] h-[30px] rounded-full cursor-pointer"
                    />
                  </Tooltip>
                </div>
                <div className="w-[30px] h-[30px] relative z-[3} -ml-2">
                  <Tooltip text="Ron Vargas">
                    <Image
                      src={thumb3}
                      alt="thumb3"
                      className="w-[30px] h-[30px] rounded-full cursor-pointer"
                    />
                  </Tooltip>
                </div>
                <div className="w-[30px] h-[30px] relative z-[4} -ml-2">
                  <Tooltip text="Joyce Freeman">
                    <Image
                      src={thumb5}
                      alt="thumb5"
                      className="w-[30px] h-[30px] rounded-full cursor-pointer"
                    />
                  </Tooltip>
                </div>
                <div className="w-[30px] h-[30px] relative z-[5} -ml-2">
                  <Tooltip text="3 More">
                    <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center cursor-pointer select-none bg-gray-400">
                      <span className="text-xs font-medium font-InterUi text-white uppercase">
                        +3
                      </span>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">
            <div>
              <Tabs 
                tabs={tabItems}
                defaultActiveTab={tabItems.findIndex(tab => tab.value === activeTab)}
                onTabChange={(index) => handleTabClick(tabItems[index].value)}
                className="mt-4"
                activeTabClassName="bg-indigo-50"
                inactiveTabClassName="bg-white"
                activeTextClassName="text-indigo-600"
                inactiveTextClassName="text-gray-500 hover:text-indigo-600"
              />
            </div>
            <div className="flex items-center gap-2">
              <CommonButton
                Styling="font-medium font-InterUi !p-0 w-9 h-9 flex justify-center items-center"
                icon={<Signuppicon width="18px" height="18px" />}
                iconStyle="!m-0 text-gray-600"
                text=""
                variant="default"
                color="gray"
                size="sm"
                shape="round"
                loading={false}
                disabled={false}
                block={false}
              />
              <CommonButton
                Styling="font-medium font-InterUi !p-0 w-9 h-9 flex justify-center items-center"
                icon={<Settingicon width="18px" height="18px" />}
                iconStyle="!m-0 text-gray-600"
                text=""
                variant="default"
                color="gray"
                size="sm"
                shape="round"
                loading={false}
                disabled={false}
                block={false}
              />
              <CommonButton
                Styling="font-InterUi py-[7px] font-semibold"
                icon={<Circleplusicon width="18px" height="18px" />}
                iconStyle="text-gray-600"
                text="New Board"
                variant="default"
                color="gray"
                size="sm"
                shape="round"
                loading={false}
                disabled={false}
                block={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}