import React from "react";
import Taskoverview from "./taskoverview";
import Mytasks from "./mytasks";
import Projects from "./projects";
import Activities from "./activities";
import Schedule from "./schedule";

export default function Homecomponent() {

  return (
    <div className="flex flex-col gap-4 h-full">
      <div>
        <h1 className="mb-1 text-xl font-semibold font-InterUi text-gray-900">
          Hello, Carolyn Perkins!
        </h1>
        <p className="text-sm font-medium font-InterUi text-gray-500">
          You have 5 tasks on hand.
        </p>
      </div>
      <div className="grid grid-cols-[1fr_380px] gap-4">
        <div className="w-full flex flex-col gap-4">
          <Taskoverview />
          <Mytasks />
          <Projects />
        </div>

        <div className="w-full flex flex-col gap-4">
          <Schedule />
          <Activities />
        </div>
      </div>
    </div>
  );
}
