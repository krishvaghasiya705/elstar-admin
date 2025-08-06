import React from "react";
import Link from "next/link";
import Image from "next/image";
import Tooltip from "../tooltip";
import CommonButton from "../commonbutton";

export default function TaskTable({ tasks }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-50 border-b border-gray-200">
          <tr>
            {["Task ID", "Subject", "Priority", "Assignees"].map((head) => (
              <th
                key={head}
                className="px-6 py-3 text-left text-xs font-semibold font-InterUi text-gray-500 uppercase"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 last:border-none"
            >
              <td className="px-6 py-4 text-left">
                <Link
                  href={task.link || "/"}
                  className="text-sm font-semibold font-InterUi text-gray-500 hover:underline"
                >
                  {task.id}
                </Link>
              </td>
              <td className="px-6 py-4 text-left">
                <p className="text-sm font-medium font-InterUi text-gray-500">
                  {task.subject}
                </p>
              </td>
              <td className="px-6 py-4 text-left">
                <CommonButton
                  text={task.priority}
                  Styling={task.priority === "High"
                    ? "px-2.5 font-semibold hover:no-underline !bg-red-100 text-red-600"
                    : task.priority === "Medium"
                    ? "px-2.5 font-semibold hover:no-underline !bg-amber-100 text-amber-600"
                    : "px-2.5 font-semibold hover:no-underline !bg-blue-100 text-blue-600"}
                  variant="plain"
                  color="yellow"
                  size="xs"
                  shape="round"
                  loading={false}
                  disabled={false}
                  block={false}
                />
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center mb-[5px]">
                  {task.assignees.map((user, i) => (
                    <div
                      key={i}
                      className={`w-[30px] h-[30px] ${i !== 0 ? "-ml-2" : ""}`}
                    >
                      <Tooltip text={user.name}>
                        <Image
                          src={user.image}
                          alt={user.name}
                          className="w-[30px] h-[30px] rounded-full cursor-pointer"
                        />
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
