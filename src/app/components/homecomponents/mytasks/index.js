import CommonButton from "@/app/common/commonbutton";
import React from "react";

export default function Mytasks() {
  return (
    <>
      <div className="p-5 border border-gray-200 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-6 gap-4">
          <h2 className="text-xl font-semibold font-InterUi text-gray-900">
            My Tasks
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
      </div>
    </>
  );
}
