import Closeicon from "@/assets/icon/closeicon";
import Dropdownicon from "@/assets/icon/dropdownicon";
import React, { useState, useRef, useEffect } from "react";
import thumb1 from "@/assets/image/thumb1.jpg"
import thumb2 from "@/assets/image/thumb2.jpg"
import thumb3 from "@/assets/image/thumb3.jpg"
import thumb4 from "@/assets/image/thumb4.jpg"
import thumb5 from "@/assets/image/thumb5.jpg"
import thumb6 from "@/assets/image/thumb6.jpg"
import thumb7 from "@/assets/image/thumb7.jpg"
import thumb8 from "@/assets/image/thumb8.jpg"
import thumb9 from "@/assets/image/thumb9.jpg"
import thumb10 from "@/assets/image/thumb10.jpg"
import thumb11 from "@/assets/image/thumb11.jpg"
import thumb12 from "@/assets/image/thumb12.jpg"
import thumb13 from "@/assets/image/thumb13.jpg"
import thumb14 from "@/assets/image/thumb14.jpg"
import thumb15 from "@/assets/image/thumb15.jpg"
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Carolyn Perkins",
    avatar: thumb1,
  },
  {
    id: 2,
    name: "Terrance Moreno",
    avatar: thumb2,
  },
  {
    id: 3,
    name: "Ron Vargas",
    avatar: thumb3,
  },
  {
    id: 4,
    name: "Luke Cook",
    avatar: thumb4,
  },
  {
    id: 5,
    name: "Joyce Freeman",
    avatar: thumb5,
  },
  {
    id: 6,
    name: "Samantha Phillips",
    avatar: thumb6,
  },
  {
    id: 7,
    name: "Tara Fletcher",
    avatar: thumb7,
  },
  {
    id: 8,
    name: "Frederick Adams",
    avatar: thumb8,
  },
  {
    id: 9,
    name: "Carolyn Hanson",
    avatar: thumb9,
  },
  {
    id: 10,
    name: "Brittany Hale",
    avatar: thumb10,
  },
  {
    id: 11,
    name: "Lloyd Obrien",
    avatar: thumb11,
  },
  {
    id: 12,
    name: "Gabriella May",
    avatar: thumb12,
  },
  {
    id: 13,
    name: "Lee Wheeler",
    avatar: thumb13,
  },
  {
    id: 14,
    name: "Gail Barnes",
    avatar: thumb14,
  },
  {
    id: 15,
    name: "Ella Robinson",
    avatar: thumb15,
  },
];

export default function AssigneeDropdown() {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredPeople = people.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      !selected.some((s) => s.id === p.id)
  );

  const toggleSelect = (person) => {
    setSelected([...selected, person]);
    setSearch("");
    setIsOpen(true);
    inputRef.current?.focus();
  };

  const removeSelected = (id) => {
    setSelected(selected.filter((p) => p.id !== id));
  };

  const clearAll = () => {
    setSelected([]);
    setSearch("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className={`w-full flex items-start relative rounded-md border outline-none text-sm font-semibold font-InterUi px-3 bg-white min-h-11 focus:ring-indigo-600 focus-within:ring-indigo-600 focus-within:border-indigo-600 appearance-none ${
          isOpen
            ? "border-indigo-600 ring-1 ring-indigo-600"
            : "border-gray-300"
        }`}
        onClick={() => {
          setIsOpen(true);
          inputRef.current?.focus();
        }}
      >
        <div className="gray-thin-scroll h-full max-h-24 my-2 overflow-y-auto relative z-10 w-[calc(100%-70px)] flex flex-wrap items-center gap-x-1 gap-y-2">
          {selected.map((person) => (
            <div
              key={person.id}
              className="flex items-center bg-gray-100 rounded-lg p-1 cursor-pointer"
            >
              <div className="flex items-center pl-[6px] py-[3px] pr-[3px] gap-[2px]">
                <Image
                  src={person.avatar}
                  alt={person.name}
                  className="w-5 h-5 rounded-full mr-1"
                />
                <span className="text-xs font-semibold text-gray-500">
                  {person.name}
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeSelected(person.id);
                }}
                className="px-1 text-gray-500 cursor-pointer"
              >
                <Closeicon width="14px" height="14px" />
              </button>
            </div>
          ))}
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setIsOpen(true);
            }}
            onKeyDown={(e) => {
              if (
                e.key === "Backspace" &&
                search === "" &&
                selected.length > 0
              ) {
                e.preventDefault();
                removeSelected(selected[selected.length - 1].id);
              }
            }}
            placeholder={selected.length === 0 ? "Select..." : ""}
            className="flex-1 min-w-[100px] border-none text-sm font-semibold font-InterUi text-gray-500 outline-none py-1"
          />
        </div>

        {/* <input
          ref={inputRef}
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setIsOpen(true);
          }}
          placeholder={selected.length === 0 ? "Select..." : ""}
          className="flex-1 min-w-[100px] border-none text-sm font-semibold font-InterUi text-gray-500 outline-none py-1 absolute top-1/2 -translate-y-1/2 z-0"
        /> */}

        <div className="flex justify-end items-center w-[70px] py-1">
          {selected.length > 0 && (
            <div
              className="text-gray-500 p-2 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                clearAll();
              }}
            >
              <Closeicon width="18px" height="18px" />
            </div>
          )}
          <div className="text-gray-500 p-2">
            <Dropdownicon width="20px" height="20px" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-[300px] overflow-y-auto z-10">
          {filteredPeople.length > 0 ? (
            filteredPeople.map((person) => (
              <div
                key={person.id}
                onClick={() => toggleSelect(person)}
                className="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-gray-100"
              >
                <Image
                  src={person.avatar}
                  alt={person.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-sm font-semibold text-gray-500">
                  {person.name}
                </span>
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm font-semibold text-gray-500 text-center select-none">
              No Options
            </div>
          )}
        </div>
      )}
    </div>
  );
}
