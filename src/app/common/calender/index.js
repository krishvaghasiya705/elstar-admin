import Nexticon from "@/assets/icon/nexticon";
import Previcon from "@/assets/icon/previcon";
import React from "react";

export default function Calender() {
  return (
    <div>
      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold font-InterUi text-gray-900 cursor-pointer hover:text-indigo-600 select-none">
              Aug
            </span>
            <span className="text-lg font-semibold font-InterUi text-gray-900 cursor-pointer hover:text-indigo-600 select-none">
              2025
            </span>
          </div>
          <div className="flex items-center">
            <div className="bg-transparent border border-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 rounded-md h-9 w-9 flex items-center justify-center cursor-pointer">
              <Previcon width="18px" height="18px" />
            </div>
            <div className="bg-transparent border border-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 rounded-md h-9 w-9 flex items-center justify-center cursor-pointer">
              <Nexticon width="18px" height="18px" />
            </div>
          </div>
        </div>
        <table cellSpacing="0" className="w-full">
          <thead>
            <tr>
              <th className="h-7">
                <span className="text-sm font-semibold font-InterUi text-gray-500">
                  Mo
                </span>
              </th>
              <th className="h-7">
                <span className="text-sm font-semibold font-InterUi text-gray-500">
                  Tu
                </span>
              </th>
              <th className="h-7">
                <span className="text-sm font-semibold font-InterUi text-gray-500">
                  We
                </span>
              </th>
              <th className="h-7">
                <span className="text-sm font-semibold font-InterUi text-gray-500">
                  Th
                </span>
              </th>
              <th className="h-7">
                <span className="text-sm font-semibold font-InterUi text-gray-500">
                  Fr
                </span>
              </th>
              <th className="h-7">
                <span className="text-sm font-semibold font-InterUi text-gray-500">
                  Sa
                </span>
              </th>
              <th className="h-7">
                <span className="text-sm font-semibold font-InterUi text-gray-500">
                  Su
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-500">
                    28
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-500">
                    29
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-500">
                    30
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-500">
                    31
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    1
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    2
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    3
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    4
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    5
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white border border-indigo-600 hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-indigo-600">
                    6
                  </span>
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2">
                    <span className="w-1 h-1 rounded-full bg-red-500 block"></span>
                  </div>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    7
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    8
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    9
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    10
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    11
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    12
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    13
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    14
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    15
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    16
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    17
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    18
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    19
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    20
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    21
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    22
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    23
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    24
                  </span>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    25
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    26
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    27
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    28
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    29
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    30
                  </span>
                </div>
              </td>
              <td>
                <div className="w-full max-w-12 mx-auto h-12 cursor-pointer flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 relative">
                  <span className="text-base font-medium font-InterUi text-gray-700">
                    31
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold font-InterUi text-gray-900 cursor-pointer hover:text-indigo-600 select-none">
              2025
            </span>
          </div>
          <div className="flex items-center">
            <div className="bg-transparent border border-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 rounded-md h-9 w-9 flex items-center justify-center cursor-pointer">
              <Previcon width="18px" height="18px" />
            </div>
            <div className="bg-transparent border border-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 rounded-md h-9 w-9 flex items-center justify-center cursor-pointer">
              <Nexticon width="18px" height="18px" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Jan
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Feb
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Mar
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Apr
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              May
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Jun
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Jul
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-indigo-600 hover:bg-indigo-600 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-white">
              Aug
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Sep
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Oct
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Nov
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              Dec
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold font-InterUi text-gray-900 cursor-pointer hover:text-indigo-600 select-none">
              2019 - 2030
            </span>
          </div>
          <div className="flex items-center">
            <div className="bg-transparent border border-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 rounded-md h-9 w-9 flex items-center justify-center cursor-pointer">
              <Previcon width="18px" height="18px" />
            </div>
            <div className="bg-transparent border border-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-600 rounded-md h-9 w-9 flex items-center justify-center cursor-pointer">
              <Nexticon width="18px" height="18px" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2019
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2020
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2021
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2022
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2023
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2024
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-indigo-600 hover:bg-indigo-600 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-white">
              2025
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2026
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2027
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2028
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2029
            </span>
          </div>
          <div className="p-2 flex justify-center items-center rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span className="text-sm font-semibold font-InterUi text-gray-500">
              2030
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
