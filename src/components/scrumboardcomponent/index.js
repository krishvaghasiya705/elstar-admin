"use client";
import React, { useState } from "react";
import Scrumboardheader from "./scrumboardheader";
import Scrumboardbody from "./scrumboardbody";

export default function Scrumboardcomponent() {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabChange = (tabValue) => {
    setActiveTab(tabValue);
  };

  return (
    <>
      <Scrumboardheader activeTab={activeTab} onTabChange={handleTabChange} />
      <Scrumboardbody activeTab={activeTab} />
    </>
  );
}
