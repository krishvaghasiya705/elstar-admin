import React, { useState } from "react";
import PropTypes from "prop-types";

const Tabs = ({
  tabs = [],
  defaultActiveTab = 0,
  onTabChange = () => {},
  className = "",
  tabClassName = "",
  activeTabClassName = "bg-indigo-50",
  inactiveTabClassName = "bg-white",
  textClassName = "text-sm font-semibold font-InterUi",
  activeTextClassName = "text-indigo-600",
  inactiveTextClassName = "text-gray-500 hover:text-indigo-600",
}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index, tabs[index]);
  };

  return (
    <div
      className={`flex items-center gap-1 whitespace-nowrap overflow-x-auto ${className}`}
    >
      {tabs.map((tab, index) => {
        const isActive = activeTab === index;
        return (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`py-2 px-5 flex justify-center items-center cursor-pointer select-none border-none rounded-md transition-all duration-300 ease-in-out ${
              isActive ? activeTabClassName : inactiveTabClassName
            } ${tabClassName}`}
          >
            <span
              className={`${textClassName} transition-all duration-300 ease-in-out ${
                isActive ? activeTextClassName : inactiveTextClassName
              }`}
            >
              {typeof tab === "object" ? tab.label : tab}
            </span>
          </div>
        );
      })}
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.any,
      }),
    ])
  ).isRequired,
  defaultActiveTab: PropTypes.number,
  onTabChange: PropTypes.func,
  className: PropTypes.string,
  tabClassName: PropTypes.string,
  activeTabClassName: PropTypes.string,
  inactiveTabClassName: PropTypes.string,
  textClassName: PropTypes.string,
  activeTextClassName: PropTypes.string,
  inactiveTextClassName: PropTypes.string,
};

export default Tabs;
