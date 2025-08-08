import Tooltip from "@/common/tooltip";
import Image from "next/image";
import React from "react";

import thumb1 from "@/assets/image/thumb1.jpg";
import thumb2 from "@/assets/image/thumb2.jpg";
import thumb3 from "@/assets/image/thumb3.jpg";
import thumb4 from "@/assets/image/thumb4.jpg";
import thumb5 from "@/assets/image/thumb5.jpg";
import thumb6 from "@/assets/image/thumb6.jpg";
import thumb7 from "@/assets/image/thumb7.jpg";
import thumb8 from "@/assets/image/thumb8.jpg";
import thumb9 from "@/assets/image/thumb9.jpg";
import thumb10 from "@/assets/image/thumb10.jpg";
import thumb11 from "@/assets/image/thumb11.jpg";
import thumb12 from "@/assets/image/thumb12.jpg";
import thumb13 from "@/assets/image/thumb13.jpg";
import thumb14 from "@/assets/image/thumb14.jpg";
import thumb15 from "@/assets/image/thumb15.jpg";
import CommonButton from "@/common/commonbutton";
import Signuppicon from "@/assets/icon/signuppicon";
import Settingicon from "@/assets/icon/settingicon";
import Circleplusicon from "@/assets/icon/circleplusicon";
import Tabs from "@/common/tabs";

export default function Scrumboardheader() {
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
              <Tabs />
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
