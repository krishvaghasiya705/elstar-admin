"use client";
import CommonButton from "@/common/commonbutton";
import React from "react";
import Image from "next/image";
import Tagicon from "@/assets/icon/tagicon";

import thumb3 from "@/assets/image/thumb3.jpg";

const activityData = [
  {
    id: 1,
    name: "Carolyn Perkins",
    time: "08:50 PM",
    avatarText: "CP",
    action: "changed",
    target: "PD-979",
    status: "Completed",
    type: "status",
  },
  {
    id: 2,
    name: "Ron Vargas",
    time: "08:23 PM",
    image: thumb3,
    action: "commented",
    target: "yourPost",
    comment:
      "Fine, Java MIGHT be a good example of what a programming language should be like. But Java applications are good examples of what applications SHOULDN'T be like.",
    type: "comment",
  },
  {
    id: 3,
    name: "Joyce Freeman",
    time: "07:10 PM",
    icon: "tag",
    action: "added tags",
    tags: [
      { name: "Live Issue", color: "rose" },
      { name: "Backend", color: "blue" },
    ],
    type: "tags",
  },
  {
    id: 4,
    name: "Luke Cook",
    time: "05:48 PM",
    icon: "tag",
    action: "added",
    file: "document.csv",
    type: "file",
  },
];

export default function Activities() {
  return (
    <div className="p-5 border border-gray-200 bg-white rounded-lg">
      <div className="flex justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold font-InterUi text-gray-900">
          Activities
        </h2>
        <CommonButton
          text="View All"
          Styling="font-medium font-InterUi"
          variant="default"
          color="gray"
          size="sm"
          shape="round"
        />
      </div>

      <div>
        {activityData.map((activity, index) => (
          <div
            key={activity.id}
            className="grid grid-cols-[30px_1fr] gap-4 mb-[2px]"
          >
            <div className="grid grid-rows-[35px_1fr]">
              <div className="my-1">
                <div className="w-[30px] h-[30px]">
                  {activity.image ? (
                    <Image
                      src={activity.image}
                      alt={activity.name}
                      className="w-[30px] h-[30px] rounded-full object-cover"
                    />
                  ) : activity.icon === "tag" ? (
                    <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-200">
                      <Tagicon
                        width="15px"
                        height="15px"
                        className="text-gray-700"
                      />
                    </div>
                  ) : (
                    <div className="w-[30px] h-[30px] rounded-full flex justify-center items-center bg-teal-500">
                      <span className="text-xs font-medium font-InterUi text-white">
                        {activity.avatarText || activity.name.slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {index !== activityData.length - 1 && (
                <div className="w-full h-full flex justify-center">
                  <div className="h-full w-[2px] bg-gray-200 transition-all duration-500 ease-in-out" />
                </div>
              )}
            </div>

            <div
              className={`${
                index === activityData.length - 1 ? "pb-0" : "pb-6"
              }`}
            >
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold font-InterUi text-gray-900">
                  {activity.name}
                </p>
                <span className="text-xs font-medium font-InterUi text-gray-500">
                  {activity.time}
                </span>
              </div>

              <div className="mt-4">
                {activity.type === "status" && (
                  <p className="text-sm font-medium font-InterUi text-gray-500">
                    has changed{" "}
                    <span className="mx-1 text-gray-900 font-semibold">
                      {activity.target}
                    </span>{" "}
                    status to{" "}
                    <span className="mx-1 text-gray-900 font-semibold">
                      {activity.status}
                    </span>
                  </p>
                )}

                {activity.type === "comment" && (
                  <>
                    <p className="text-sm font-medium font-InterUi text-gray-500">
                      comment on{" "}
                      <span className="mx-1 text-gray-900 font-semibold">
                        {activity.target}
                      </span>
                    </p>
                    <div className="mt-4 border border-gray-200 rounded-lg p-5">
                      <p className="text-sm font-medium font-InterUi text-gray-500">
                        {activity.comment}
                      </p>
                    </div>
                  </>
                )}

                {activity.type === "tags" && (
                  <div className="flex items-center flex-wrap">
                    <p className="text-sm font-medium font-InterUi text-gray-500 mr-1">
                      added tags
                    </p>
                    {activity.tags.map((tag, tagIndex) => (
                      <CommonButton
                        key={tagIndex}
                        text={tag.name}
                        Styling="text-gray-500 font-semibold hover:no-underline px-2.5 border !border-gray-200 !rounded-full mx-1"
                        dotstyle={`w-2 h-2 bg-${tag.color}-500`}
                        variant="plain"
                        color={tag.color}
                        size="xs"
                        shape="round"
                      />
                    ))}
                  </div>
                )}

                {activity.type === "file" && (
                  <p className="text-sm font-medium font-InterUi text-gray-500">
                    added{" "}
                    <span className="mx-1 text-gray-900 font-semibold">
                      {activity.file}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
