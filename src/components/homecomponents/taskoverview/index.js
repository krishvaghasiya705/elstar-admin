"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Taskoverview() {
  const [selectedView, setSelectedView] = useState("monthly");
  const chartConfigs = {
    monthly: {
      categories: [
        "01 Jan",
        "05 Jan",
        "10 Jan",
        "15 Jan",
        "20 Jan",
        "25 Jan",
        "27 Jan",
      ],
      yaxis: {
        min: 0,
        max: 280,
        tickAmount: 4,
      },
      series: [
        { name: "On Going", data: [28, 52, 91, 154, 227, 256, 270] },
        { name: "Finished", data: [22, 31, 74, 88, 97, 107, 113] },
      ],
    },
    weekly: {
      categories: [
        "21 Jan",
        "22 Jan",
        "23 Jan",
        "24 Jan",
        "25 Jan",
        "26 Jan",
        "27 Jan",
      ],
      yaxis: {
        min: 0,
        max: 150,
        tickAmount: 5,
      },
      series: [
        { name: "On Going", data: [45, 52, 68, 84, 103, 112, 126] },
        { name: "Finished", data: [35, 41, 62, 62, 75, 81, 87] },
      ],
    },
    daily: {
      categories: [
        "6:00 AM",
        "9:00 AM",
        "12:00 PM",
        "03:00 PM",
        "06:00 PM",
        "09:00 PM",
      ],
      yaxis: {
        min: 0,
        max: 20,
        tickAmount: 4,
      },
      series: [
        { name: "On Going", data: [3, 4, 2, 1, 2, 1] },
        { name: "Finished", data: [1, 2, 3, 4, 5, 6] },
      ],
    },
  };
  const currentConfig = chartConfigs[selectedView];
  const ongoing = currentConfig.series[0].data.at(-1);
  const finished = currentConfig.series[1].data.at(-1);
  const total = ongoing + finished;
  const chartData = {
    series: currentConfig.series,
    options: {
      chart: {
        type: "bar",
        height: 300,
        toolbar: { show: false },
        fontFamily: "Inter, sans-serif",
      },
      colors: ["#6366f1", "#10b981"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          borderRadiusApplication: "end",
          borderRadius: 3,
          endingShape: "flat",
        },
      },
      dataLabels: { enabled: false },
      stroke: {
        show: true,
        width: 5,
        colors: ["transparent"],
      },
      xaxis: {
        categories: currentConfig.categories,
        labels: {
          style: {
            fontSize: "12px",
            fontWeight: 500,
            colors: "#7B809A",
          },
        },
        axisBorder: { show: true },
        axisTicks: { show: true },
      },
      yaxis: {
        ...currentConfig.yaxis,
        labels: {
          style: { fontSize: "12px", colors: "#7B809A" },
          formatter: (val) => `${val}`,
        },
      },
      fill: { opacity: 1 },
      tooltip: {
        theme: "light",
        style: {
          fontSize: "13px",
          fontFamily: "Inter, sans-serif",
        },
        marker: {
          radius: 5,
        },
        y: {
          formatter: (val) => `${val}`,
        },
      },
      legend: { show: false },
      grid: {
        strokeDashArray: 5,
        borderColor: "#e0e0e0",
        padding: {
          left: 10,
          right: 10,
        },
        yaxis: {
          lines: {
            show: true,
            opacity: "1",
            strokeDashArray: 0,
          },
        },
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
    },
  };
  const buttonClass = (view) =>
    `py-2 px-3 text-sm font-semibold font-InterUi capitalize outline-none transition-all duration-300 ease-in-out ${
      selectedView === view
        ? "bg-gray-100 text-gray-600"
        : "bg-white text-gray-600 hover:bg-gray-100"
    }`;
  return (
    <>
      <div className="p-5 border border-gray-200 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-6 gap-4">
          <h2 className="text-xl font-semibold font-InterUi text-gray-900">
            Task Overview
          </h2>
          <div className="border border-gray-300 rounded-md overflow-hidden">
            <button
              type="button"
              className={`${buttonClass("monthly")} border-none`}
              onClick={() => setSelectedView("monthly")}
            >
              monthly
            </button>
            <button
              type="button"
              className={`${buttonClass("weekly")} border-x border-gray-300`}
              onClick={() => setSelectedView("weekly")}
            >
              weekly
            </button>
            <button
              type="button"
              className={`${buttonClass("daily")} border-none`}
              onClick={() => setSelectedView("daily")}
            >
              daily
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4 gap-4">
          <div className="flex flex-col">
            <h3 className="text-lg font-bold font-InterUi text-gray-900">
              {total}
            </h3>
            <p className="text-sm font-medium font-InterUi text-gray-500 capitalize">
              total tasks
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-start">
              <div className="w-2 h-2 rounded-full bg-indigo-600 mt-2.5"></div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold font-InterUi text-gray-900">
                  {ongoing}
                </h3>
                <p className="text-sm font-medium font-InterUi text-gray-500 capitalize">
                  On Going
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-start">
              <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2.5"></div>
              <div className="flex flex-col">
                <h3 className="text-lg font-bold font-InterUi text-gray-900">
                  {finished}
                </h3>
                <p className="text-sm font-medium font-InterUi text-gray-500 capitalize">
                  Finished
                </p>
              </div>
            </div>
          </div>
        </div>

        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height={300}
        />
      </div>
    </>
  );
}
