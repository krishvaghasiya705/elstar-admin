import Calender from "@/common/calender";
import Chaticon from "@/assets/icon/chaticon";
import Meetingicon from "@/assets/icon/meetingicon";
import Reporticon from "@/assets/icon/reporticon";
import React from "react";

export default function Schedule() {
  return (
    <div className="p-5 border border-gray-200 bg-white rounded-lg">
      <Calender />
      <div className="my-6 w-full h-[1px] bg-gray-200"></div>
      <div>
        <div className="flex justify-between items-center mb-4 gap-4">
          <h2 className="text-lg font-semibold font-InterUi text-gray-900">
            Schedule
          </h2>
        </div>
        <div>
          <div className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 cursor-pointer user-select">
            <div className="flex items-center gap-3">
              <div className="rounded-lg h-10 w-10 text-lg flex items-center justify-center text-indigo-600 bg-indigo-100">
                <Meetingicon width="18px" height="18px" />
              </div>
              <div>
                <p className="text-sm font-bold font-InterUi text-gray-900">
                  Sprint Planning
                </p>
                <span className="text-sm font-medium font-InterUi text-gray-500">
                  via Zoom
                </span>
              </div>
            </div>
            <span className="text-sm font-medium font-InterUi text-gray-500">
              10:00am
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 cursor-pointer user-select">
            <div className="flex items-center gap-3">
              <div className="rounded-lg h-10 w-10 text-lg flex items-center justify-center text-indigo-600 bg-indigo-100">
                <Meetingicon width="18px" height="18px" />
              </div>
              <div>
                <p className="text-sm font-bold font-InterUi text-gray-900">
                  Design discussion
                </p>
                <span className="text-sm font-medium font-InterUi text-gray-500">
                  via Microsoft Teams
                </span>
              </div>
            </div>
            <span className="text-sm font-medium font-InterUi text-gray-500">
              1:00pm
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 cursor-pointer user-select">
            <div className="flex items-center gap-3">
              <div className="rounded-lg h-10 w-10 text-lg flex items-center justify-center text-emerald-600 bg-emerald-100">
                <Reporticon width="18px" height="18px" />
              </div>
              <div>
                <p className="text-sm font-bold font-InterUi text-gray-900">
                  Create daily report
                </p>
                <span className="text-sm font-medium font-InterUi text-gray-500">
                  Daily task
                </span>
              </div>
            </div>
            <span className="text-sm font-medium font-InterUi text-gray-500">
              3:00pm
            </span>
          </div>
          <div className="flex items-center justify-between rounded-md mb-2 p-2 hover:bg-gray-50 cursor-pointer user-select">
            <div className="flex items-center gap-3">
              <div className="rounded-lg h-10 w-10 text-lg flex items-center justify-center text-amber-600 bg-amber-100">
                <Chaticon width="18px" height="18px" />
              </div>
              <div>
                <p className="text-sm font-bold font-InterUi text-gray-900">
                  MySql online workshop
                </p>
                <span className="text-sm font-medium font-InterUi text-gray-500">
                  Online workshop
                </span>
              </div>
            </div>
            <span className="text-sm font-medium font-InterUi text-gray-500">
              4:00pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
