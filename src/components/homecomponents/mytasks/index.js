import React from "react";
import thumb1 from "@/assets/image/thumb1.jpg";
import thumb2 from "@/assets/image/thumb2.jpg";
import thumb3 from "@/assets/image/thumb3.jpg";
import thumb5 from "@/assets/image/thumb5.jpg";
import TaskTable from "@/common/tasktable";
import CommonButton from "@/common/commonbutton";

export default function Mytasks() {
  const tasks = [
    {
      id: "KCM-1393",
      subject: "Design sign up flow",
      priority: "High",
      assignees: [
        { name: "Carolyn Perkins", image: thumb1 },
        { name: "Terrance Moreno", image: thumb2 },
      ],
    },
    {
      id: "KCM-2039",
      subject: "Update contact page",
      priority: "Medium",
      assignees: [{ name: "Carolyn Perkins", image: thumb1 }],
    },
    {
      id: "KCM-2155",
      subject: "Document features 2.0",
      priority: "Medium",
      assignees: [
        { name: "Carolyn Perkins", image: thumb1 },
        { name: "Terrance Moreno", image: thumb2 },
        { name: "Ron Vargas", image: thumb3 },
      ],
    },
    {
      id: "KCM-2270",
      subject: "Fix typo in home page",
      priority: "Low",
      assignees: [
        { name: "Carolyn Perkins", image: thumb1 },
        { name: "Joyce Freeman", image: thumb5 },
      ],
    },
    {
      id: "KCM-1957",
      subject: "Fix broken API",
      priority: "High",
      assignees: [{ name: "Carolyn Perkins", image: thumb1 }],
    },
  ];

  return (
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
      <TaskTable tasks={tasks} />
    </div>
  );
}
