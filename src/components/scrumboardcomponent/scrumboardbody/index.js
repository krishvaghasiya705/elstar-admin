"use client";
import React, { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Scrumboeaddata from "./scrumboeaddata";
import CommonButton from "@/common/commonbutton";
import Bookmarkicon from "@/assets/icon/bookmarkicon";
import Chaticon2 from "@/assets/icon/chaticon2";
import Pinicon from "@/assets/icon/pinicon";
import Tooltip from "@/common/tooltip";
import Image from "next/image";
import Rowdots from "@/assets/icon/rowdots";

// Replace with your icons
import Pencilicon from "@/assets/icon/pencilicon";
import Circleplusicon from "@/assets/icon/circleplusicon";
import Trashicon from "@/assets/icon/trashicon";

const tagColors = {
  Task: "bg-blue-500",
  "Live issue": "bg-rose-500",
  "Low priority": "bg-indigo-500",
  Bug: "bg-amber-400",
};

const addIdsToData = (data, activeTab = "all") => {
  let idCounter = 1;
  return data.reduce((acc, col) => {
    const filteredTasks = col.data.filter((task) => {
      if (activeTab === "all") return true;

      return task.Tag.some(
        (tag) =>
          tag.task.toLowerCase() === activeTab ||
          tag.task.toLowerCase().replace(" ", "-") === activeTab
      );
    });

    acc[col.Maintag] = {
      title: col.Maintag,
      tasks: filteredTasks.map((task) => ({
        ...task,
        id: idCounter++,
      })),
    };
    return acc;
  }, {});
};

export default function Scrumboardbody({ activeTab }) {
  const [columns, setColumns] = useState(() =>
    addIdsToData(Scrumboeaddata, activeTab)
  );
  const [columnOrder, setColumnOrder] = useState(Object.keys(columns));

  // Dropdown state
  const [activeDropdownId, setActiveDropdownId] = useState(null);
  const dropdownRefs = useRef({});

  useEffect(() => {
    setColumns(addIdsToData(Scrumboeaddata, activeTab));
  }, [activeTab]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdownId &&
        dropdownRefs.current[activeDropdownId] &&
        !dropdownRefs.current[activeDropdownId].contains(event.target)
      ) {
        setActiveDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdownId]);

  const onDragEnd = (result) => {
    const { source, destination, type } = result;
    if (!destination) return;

    if (type === "column") {
      const newOrder = Array.from(columnOrder);
      const [removed] = newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, removed);
      setColumnOrder(newOrder);
      return;
    }

    const sourceCol = columns[source.droppableId];
    const destCol = columns[destination.droppableId];

    if (source.droppableId === destination.droppableId) {
      const newTasks = Array.from(sourceCol.tasks);
      const [moved] = newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, moved);

      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, tasks: newTasks },
      });
    } else {
      const sourceTasks = Array.from(sourceCol.tasks);
      const destTasks = Array.from(destCol.tasks);
      const [moved] = sourceTasks.splice(source.index, 1);
      destTasks.splice(destination.index, 0, moved);

      setColumns({
        ...columns,
        [source.droppableId]: { ...sourceCol, tasks: sourceTasks },
        [destination.droppableId]: { ...destCol, tasks: destTasks },
      });
    }
  };

  return (
    <div className="container mx-auto">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="board" direction="horizontal" type="column">
          {(provided) => (
            <div
              className="flex overflow-x-auto mt-4"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnOrder.map((colId, colIndex) => {
                const colData = columns[colId];
                return (
                  <Draggable draggableId={colId} index={colIndex} key={colId}>
                    {(provided) => (
                      <div
                        className="board-column min-w-[300px] max-w-[300px] bg-white rounded-lg flex flex-col"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                      >
                        {/* Column Header */}
                        <div
                          className="px-4 py-3 flex justify-between items-center cursor-grab"
                          {...provided.dragHandleProps}
                        >
                          <h2 className="text-base font-semibold">
                            {colData.title}
                          </h2>

                          {/* Dropdown */}
                          <div
                            className="relative"
                            ref={(el) => (dropdownRefs.current[colId] = el)}
                          >
                            <div
                              className="w-7 h-7 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-50 text-gray-600"
                              onClick={() =>
                                setActiveDropdownId(
                                  activeDropdownId === colId ? null : colId
                                )
                              }
                            >
                              <Rowdots width="16px" height="16px" />
                            </div>

                            {/* Dropdown Menu */}
                            <div
                              className={`absolute top-full right-0 z-20 bg-white rounded-md shadow-md max-h-40 border border-gray-200 overflow-y-auto p-[6px] w-40 transition-all duration-300 ease-in-out transform-gpu ${
                                activeDropdownId === colId
                                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                              }`}
                            >
                              {[
                                ["Rename", Pencilicon],
                                ["Add Ticket", Circleplusicon],
                                ["Delete Board", Trashicon],
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

                        {/* Tasks */}
                        <Droppable droppableId={colId} type="task">
                          {(provided) => (
                            <div
                              className="px-4"
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                            >
                              {colData.tasks.map((task, idx) => (
                                <Draggable
                                  draggableId={task.id.toString()}
                                  index={idx}
                                  key={task.id}
                                >
                                  {(provided) => (
                                    <div
                                      className="bg-gray-50 rounded-lg p-4 mb-4 border cursor-grab"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      {/* Tags */}
                                      <div className="mb-2 flex flex-wrap gap-2">
                                        {task.Tag.map((tag, tIdx) => (
                                          <CommonButton
                                            key={tIdx}
                                            text={tag.task}
                                            variant="default"
                                            size="sm"
                                            dotstyle={`w-2 h-2 ${
                                              tagColors[tag.task] ||
                                              "bg-gray-400"
                                            }`}
                                            Styling="!rounded-full text-xs font-semibold text-gray-500 !px-2.5"
                                          />
                                        ))}
                                      </div>

                                      {/* Title */}
                                      {task.Title && (
                                        <h3 className="mb-2 text-base font-semibold text-gray-900">
                                          {task.Title}
                                        </h3>
                                      )}

                                      {/* Date */}
                                      {task.Date && (
                                        <div className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-500">
                                          <Bookmarkicon
                                            width="18px"
                                            height="18px"
                                          />
                                          {task.Date}
                                        </div>
                                      )}

                                      {/* Team & Comments */}
                                      <div className="mt-3 flex justify-between items-center">
                                        <div className="flex items-center">
                                          {task.Team.map((member, mIdx) => (
                                            <Tooltip
                                              text={member.name}
                                              key={mIdx}
                                            >
                                              <Image
                                                src={member.image}
                                                alt={member.name}
                                                width={30}
                                                height={30}
                                                className={`rounded-full ${
                                                  mIdx > 0 ? "-ml-2" : ""
                                                }`}
                                              />
                                            </Tooltip>
                                          ))}
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-500">
                                          {task.Comments.length > 0 && (
                                            <div className="flex items-center gap-1">
                                              <Chaticon2
                                                width="16px"
                                                height="16px"
                                              />{" "}
                                              {task.Comments.length}
                                            </div>
                                          )}
                                          {task.Attachments.length > 0 && (
                                            <div className="flex items-center gap-1">
                                              <Pinicon
                                                width="16px"
                                                height="16px"
                                              />{" "}
                                              {task.Attachments.length}
                                            </div>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
