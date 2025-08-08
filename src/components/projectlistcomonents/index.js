"use client";
import React, { useState } from "react";
import Projectlistcards from "./projectlistcards";
import Magnificationicon from "@/assets/icon/magnificationicon";
import Listingicon from "@/assets/icon/listingicon";
import Gridicon from "@/assets/icon/gridicon";
import Sortupicon from "@/assets/icon/sortupicon";
import Sortdownicon from "@/assets/icon/sortdownicon";
import Tooltip from "@/common/tooltip";
import CommonButton from "@/common/commonbutton";
import Circleplusicon from "@/assets/icon/circleplusicon";
import Commonmodal from "@/common/commonmodal";
import Closeicon from "@/assets/icon/closeicon";
import AssigneeDropdown from "@/common/assigneedropdown";

export default function Projectlistcomponents() {
  const [isGridView, setIsGridView] = useState(true);
  const [sortAZ, setSortAZ] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Task flow states
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleToggleView = () => setIsGridView(!isGridView);
  const handleToggleSort = () => setSortAZ(!sortAZ);

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask("");
    setIsAddingTask(false);
  };

  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold font-InterUi text-gray-900">
          Project List
        </h1>
        <div className="flex flex-col md:flex-row md:items-center gap-1">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border outline-none border-gray-300 text-sm font-semibold font-InterUi text-gray-500 py-2 pr-3 pl-[34px] bg-white h-9 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 appearance-none"
            />
            <div className="absolute top-2/4 left-2.5 -translate-y-2/4 text-gray-500">
              <Magnificationicon width="18px" height="18px" />
            </div>
          </div>
          <Tooltip text={isGridView ? "List View" : "Grid View"}>
            <div
              onClick={handleToggleView}
              className="h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-white text-gray-600 hover:bg-gray-50"
            >
              {isGridView ? (
                <Listingicon width="18px" height="18px" />
              ) : (
                <Gridicon width="18px" height="18px" />
              )}
            </div>
          </Tooltip>
          <Tooltip text={sortAZ ? "Sort: Z-A" : "Sort: A-Z"}>
            <div
              onClick={handleToggleSort}
              className="h-9 w-9 flex justify-center items-center rounded-md cursor-pointer bg-white text-gray-600 hover:bg-gray-50"
            >
              {sortAZ ? (
                <Sortupicon width="18px" height="18px" />
              ) : (
                <Sortdownicon width="18px" height="18px" />
              )}
            </div>
          </Tooltip>
          <div>
            <CommonButton
              Styling="bg-indigo-50 !text-indigo-600 border-none hover:bg-indigo-100 text-sm font-semibold font-InterUi"
              icon={<Circleplusicon width="18px" height="18px" />}
              text="New Project"
              size="md"
              variant="twoTone"
              color="indigo"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>

      <Projectlistcards
        ProjectcardList={!isGridView}
        ProjectcardGrid={isGridView}
        sortAZ={sortAZ}
        searchQuery={searchQuery}
      />

      <Commonmodal
        ModalclassName="w-[520px]"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold font-InterUi text-gray-900">
            Add new project
          </h1>
          <div
            className="cursor-pointer text-gray-500"
            onClick={() => setIsModalOpen(false)}
          >
            <Closeicon width="14px" height="14px" />
          </div>
        </div>
        <div className="mt-4 h-[55.8vh] overflow-y-hidden hover:overflow-y-auto gray-thin-scroll pl-[1px]">
          <form>
            <div className="mb-7">
              <label
                htmlFor="Title"
                className="text-sm font-semibold font-InterUi text-gray-500 mb-2 block"
              >
                Title
              </label>
              <input
                type="text"
                id="Title"
                placeholder="Enter Title"
                className="w-full rounded-md border outline-none border-gray-300 text-sm font-semibold font-InterUi text-gray-500 py-2 px-3 bg-white h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 appearance-none"
              />
            </div>
            <div className="mb-7">
              <label
                htmlFor="Assignees"
                className="text-sm font-semibold font-InterUi text-gray-500 mb-2 block"
              >
                Assignees
              </label>
              <div className="relative">
                <AssigneeDropdown />
              </div>
            </div>
            <div className="mb-7">
              <label
                htmlFor="Content"
                className="text-sm font-semibold font-InterUi text-gray-500 mb-2 block"
              >
                Content
              </label>
              <textarea
                id="Content"
                placeholder="Enter Content"
                className="w-full resize-none rounded-md border outline-none border-gray-300 text-sm font-semibold font-InterUi text-gray-500 py-2 px-3 bg-white h-28 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 appearance-none"
              ></textarea>
            </div>
            <div className="mb-7">
              <div className="flex flex-col">
                {tasks.map((task, idx) => (
                  <div key={idx} className="flex items-center gap-2 mb-2 last:mb-5">
                    <input
                      type="checkbox"
                      id={`checkbox-${idx}`}
                      className="w-5 h-5 rounded-[4px] border border-gray-300 cursor-pointer shadow-md text-indigo-600 checked:bg-indigo-600 checked:border-transparent"
                    />
                    <label
                      htmlFor={`checkbox-${idx}`}
                      className="text-sm font-semibold font-InterUi text-gray-500 block cursor-pointer select-none"
                    >
                      {task}
                    </label>
                  </div>
                ))}
              </div>
              {!isAddingTask ? (
                <button
                  className="bg-white border border-gray-300 hover:bg-gray-50 active:bg-gray-100 text-gray-600 text-sm font-semibold font-InterUi rounded-md h-11 px-8 py-2 border-dashed w-full"
                  type="button"
                  onClick={() => setIsAddingTask(true)}
                >
                  Create new task
                </button>
              ) : (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Add new task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="w-full rounded-md border outline-none border-gray-300 text-sm font-semibold font-InterUi text-gray-500 py-2 px-3 bg-white h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 focus:border-indigo-600 appearance-none"
                  />
                  <CommonButton
                    text="Add"
                    Styling="text-sm font-semibold font-InterUi px-8 h-11"
                    variant="default"
                    color="gray"
                    size="sm"
                    shape="round"
                    onClick={handleAddTask}
                  />
                </div>
              )}
            </div>
            <button
              className="rounded-md bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-sm font-semibold font-InterUi h-11 px-8 py-2 w-full"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Commonmodal>
    </>
  );
}
