"use client";
import React, { useState } from "react";
import Nexticon from "@/assets/icon/nexticon";
import Previcon from "@/assets/icon/previcon";
import dayjs from "dayjs"; // install this if not already

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const yearRange = (start, end) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);

export default function Calendar() {
  const today = dayjs();
  const [view, setView] = useState("date"); // "date" | "month" | "year"
  const [selectedDate, setSelectedDate] = useState(today);
  const [activeDate, setActiveDate] = useState(today);
  const startOfMonth = selectedDate.startOf("month");
  const endOfMonth = selectedDate.endOf("month");
  const startDay = startOfMonth.day() === 0 ? 6 : startOfMonth.day() - 1;

  const daysInMonth = [];
  for (let i = 0; i < startDay; i++) {
    daysInMonth.push(null);
  }
  for (let d = 1; d <= endOfMonth.date(); d++) {
    daysInMonth.push(dayjs(selectedDate).date(d));
  }

  const changeMonth = (direction) => {
    const newDate = selectedDate.add(direction, "month");
    setSelectedDate(newDate);
  };

  const changeYear = (direction) => {
    const newDate = selectedDate.add(direction, "year");
    setSelectedDate(newDate);
  };

  const setMonth = (index) => {
    setSelectedDate(selectedDate.month(index));
    setView("date");
  };

  const setYear = (year) => {
    setSelectedDate(selectedDate.year(year));
    setView("month");
  };

  const isSameDay = (d1, d2) =>
    d1?.format("YYYY-MM-DD") === d2?.format("YYYY-MM-DD");

  const handleDateClick = (date) => {
    setActiveDate(date);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span
            onClick={() => setView("month")}
            className="text-lg font-semibold cursor-pointer hover:text-indigo-600 select-none"
          >
            {selectedDate.format("MMM")}
          </span>
          <span
            onClick={() => setView("year")}
            className="text-lg font-semibold cursor-pointer hover:text-indigo-600 select-none"
          >
            {selectedDate.format("YYYY")}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <div
            onClick={() => (view === "date" ? changeMonth(-1) : changeYear(-1))}
            className="h-9 w-9 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            <Previcon width="18px" height="18px" />
          </div>
          <div
            onClick={() => (view === "date" ? changeMonth(1) : changeYear(1))}
            className="h-9 w-9 rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-100"
          >
            <Nexticon width="18px" height="18px" />
          </div>
        </div>
      </div>

      {view === "date" && (
        <>
          <div className="grid grid-cols-7 text-center text-gray-500 font-semibold text-sm mb-1">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
              <div
                key={d}
                className="h-7 flex justify-center items-center"
              >
                <div className="text-sm font-semibold font-InterUi text-gray-500">{d}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7">
            {daysInMonth.map((date, i) => {
              const isToday = isSameDay(date, today);
              const isActive = isSameDay(date, activeDate);

              return (
                <div
                  key={i}
                  onClick={() => date && handleDateClick(date)}
                  className={`h-12 flex items-center justify-center rounded-lg cursor-pointer relative transition-all duration-200
        ${
          !date
            ? ""
            : isActive
            ? "bg-indigo-600 text-white hover:bg-indigo-600"
            : isToday
            ? "border border-indigo-600 text-indigo-600"
            : "text-gray-700 hover:bg-gray-100"
        }
      `}
                >
                  {date && (
                    <>
                      <span className="text-base font-medium font-InterUi">{date.date()}</span>
                      {isToday && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
                      )}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </>
      )}

      {view === "month" && (
        <div className="grid grid-cols-3 gap-2">
          {monthNames.map((name, index) => (
            <div
              key={index}
              onClick={() => setMonth(index)}
              className={`p-2 text-center rounded-lg cursor-pointer ${
                index === selectedDate.month()
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100 text-gray-500"
              }`}
            >
              {name}
            </div>
          ))}
        </div>
      )}

      {view === "year" && (
        <div className="grid grid-cols-3 gap-2">
          {yearRange(2019, 2030).map((year) => (
            <div
              key={year}
              onClick={() => setYear(year)}
              className={`p-2 text-center rounded-lg cursor-pointer ${
                year === selectedDate.year()
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-gray-100 text-gray-500"
              }`}
            >
              {year}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
