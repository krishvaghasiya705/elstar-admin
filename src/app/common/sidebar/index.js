"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Accounticon from "@/assets/icon/accounticon";
import Bookicon from "@/assets/icon/bookicon";
import Cryptoicon from "@/assets/icon/cryptoicon";
import Dropdownicon from "@/assets/icon/dropdownicon";
import Growicon from "@/assets/icon/growicon";
import Logo from "@/assets/icon/logo";
import Messageicon from "@/assets/icon/messageicon";
import Monitericon from "@/assets/icon/monitericon";
import Palette from "@/assets/icon/palette";
import Projecticon from "@/assets/icon/projecticon";
import Usersicon from "@/assets/icon/usersicon";
import Formicon from "@/assets/icon/formicon";
import Navigationicon from "@/assets/icon/navigationicon";
import Graphicon from "@/assets/icon/graphicon";
import Handicon from "@/assets/icon/handicon";
import Noaccessicon from "@/assets/icon/noaccessicon";
import Shieldicon from "@/assets/icon/shieldicon";
import Signuppicon from "@/assets/icon/signuppicon";
import Lockicon from "@/assets/icon/lockicon";
import Keyicon from "@/assets/icon/keyicon";
import Documenticon from "@/assets/icon/documenticon";
import Shareicon from "@/assets/icon/shareicon";
import Utilityicon from "@/assets/icon/utilityicon";
import Chanalogicon from "@/assets/icon/chanalogicon";
import Logo2 from "@/assets/icon/logo2";

const sidebarSections = [
  {
    title: "Apps",
    items: [
      {
        label: "Project",
        icon: Projecticon,
        details: [
          { name: "Dashboard", path: "/" },
          { name: "Project List", path: "" },
          { name: "Scrum Board", path: "" },
          { name: "Issue", path: "" },
        ],
      },
      {
        label: "CRM",
        icon: Usersicon,
        details: [
          { name: "Dashboard", path: "" },
          { name: "Calendar", path: "" },
          { name: "Customers", path: "" },
          { name: "Customer Details", path: "" },
          { name: "Mail", path: "" },
        ],
      },
      {
        label: "Sales",
        icon: Growicon,
        details: [
          { name: "Dashboard", path: "" },
          { name: "Product List", path: "" },
          { name: "Product Edit", path: "" },
          { name: "New Product", path: "" },
          { name: "Order List", path: "" },
          { name: "Order Details", path: "" },
        ],
      },
      {
        label: "Crypto",
        icon: Cryptoicon,
        details: [
          { name: "Dashboard", path: "" },
          { name: "Portfolio", path: "" },
          { name: "Market", path: "" },
          { name: "Wallets", path: "" },
        ],
      },
      {
        label: "Knowledge Base",
        icon: Bookicon,
        details: [
          { name: "Help Center", path: "" },
          { name: "Article", path: "" },
          { name: "Manage Articles", path: "" },
          { name: "Edit Article", path: "" },
        ],
      },
      {
        label: "Account",
        icon: Accounticon,
        details: [
          { name: "Settings", path: "" },
          { name: "Invoice", path: "" },
          { name: "Activity Log", path: "" },
          { name: "KYC Form", path: "" },
        ],
      },
    ],
  },
  {
    title: "UI Components",
    items: [
      {
        label: "Common",
        icon: Palette,
        details: [
          { name: "Button", path: "" },
          { name: "Grid", path: "" },
          { name: "Typrography", path: "" },
          { name: "Icons", path: "" },
        ],
      },
      {
        label: "Feedback",
        icon: Messageicon,
        details: [
          { name: "Alert", path: "" },
          { name: "Dialog", path: "" },
          { name: "Drawer", path: "" },
          { name: "Progress", path: "" },
          { name: "Skeleton", path: "" },
          { name: "Spinner", path: "" },
          { name: "Toast", path: "" },
        ],
      },
      {
        label: "Data Display",
        icon: Monitericon,
        details: [
          { name: "Avatar", path: "" },
          { name: "Badge", path: "" },
          { name: "Calender", path: "" },
          { name: "Cards", path: "" },
          { name: "Table", path: "" },
          { name: "Tag", path: "" },
          { name: "Timeline", path: "" },
          { name: "Tooltip", path: "" },
        ],
      },
      {
        label: "Forms",
        icon: Formicon,
        details: [
          { name: "Checkbox", path: "" },
          { name: "Date Picker", path: "" },
          { name: "Form Control", path: "" },
          { name: "Input", path: "" },
          { name: "Input Group", path: "" },
          { name: "Radio", path: "" },
          { name: "Segment", path: "" },
          { name: "Select", path: "" },
          { name: "Switcher", path: "" },
          { name: "Time Input", path: "" },
          { name: "Upload", path: "" },
        ],
      },
      {
        label: "Navigation",
        icon: Navigationicon,
        details: [
          { name: "Dropdown", path: "" },
          { name: "Menu", path: "" },
          { name: "Pagination", path: "" },
          { name: "Steps", path: "" },
          { name: "Tabs", path: "" },
        ],
      },
      {
        label: "Graph",
        icon: Graphicon,
        details: [
          { name: "Charts", path: "" },
          { name: "Maps", path: "" },
        ],
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        label: "Welcome",
        labelpath: "",
        icon: Handicon,
        details: [],
      },
      {
        label: "Access Denied",
        labelpath: "",
        icon: Noaccessicon,
        details: [],
      },
    ],
  },
  {
    title: "Authentication",
    items: [
      {
        label: "Sign In",
        labelpath: "",
        icon: Shieldicon,
        details: [
          { name: "Simple", path: "" },
          { name: "Side", path: "" },
          { name: "Cover", path: "" },
        ],
      },
      {
        label: "Sign Up",
        labelpath: "",
        icon: Signuppicon,
        details: [
          { name: "Simple", path: "" },
          { name: "Side", path: "" },
          { name: "Cover", path: "" },
        ],
      },
      {
        label: "Reset Password",
        labelpath: "",
        icon: Keyicon,
        details: [
          { name: "Simple", path: "" },
          { name: "Side", path: "" },
          { name: "Cover", path: "" },
        ],
      },
      {
        label: "Forgot Password",
        labelpath: "",
        icon: Lockicon,
        details: [
          { name: "Simple", path: "" },
          { name: "Side", path: "" },
          { name: "Cover", path: "" },
        ],
      },
    ],
  },
  {
    title: "Guide",
    items: [
      {
        label: "Documentation",
        labelpath: "",
        icon: Documenticon,
        details: [],
      },
      {
        label: "Shared Component",
        labelpath: "",
        icon: Shareicon,
        details: [],
      },
      {
        label: "Utilities",
        labelpath: "",
        icon: Utilityicon,
        details: [],
      },
      {
        label: "Changelog",
        labelpath: "/",
        icon: Chanalogicon,
        details: [],
      },
    ],
  },
];

export default function Sidebar({ isSidebarOpen }) {
  const pathname = usePathname();

  const defaultOpenDropdown = {};
  sidebarSections.forEach((section, sectionIdx) => {
    section.items.forEach((item, itemIdx) => {
      if (Array.isArray(item.details) && item.details.length) {
        item.details.forEach(({ name, path }) => {
          if (
            pathname === path ||
            (pathname === "/" &&
              name.toLowerCase() === "dashboard" &&
              item.label === "Project")
          ) {
            defaultOpenDropdown[`${sectionIdx}-${itemIdx}`] = true;
          }
        });
      }
    });
  });

  const [openDropdown, setOpenDropdown] = useState(defaultOpenDropdown);
  const [hoverDropdown, setHoverDropdown] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    item: null,
  });

  const handleDropdown = (sectionIdx, itemIdx) => {
    setOpenDropdown((prev) => ({
      ...prev,
      [`${sectionIdx}-${itemIdx}`]: !prev[`${sectionIdx}-${itemIdx}`],
    }));
  };
  return (
    <nav className="w-full h-full bg-gray-100 border-r border-gray-200">
      <div
        className={`relative transition-opacity duration-300 ease-in-out ${
          isSidebarOpen
            ? "opacity-100"
            : "opacity-0 h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <div className="sticky top-0 left-0 h-[64px] px-6 flex items-center">
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="pt-0 p-4 h-[calc(100vh-64px)] overflow-y-hidden hover:overflow-y-auto gray-thin-scroll">
          {sidebarSections.map((section, sectionIdx) => (
            <div key={section.title}>
              <div className="mt-4 mb-2 px-3">
                <h1 className="text-sm font-semibold text-gray-500 uppercase font-Roboto">
                  {section.title}
                </h1>
              </div>
              <div>
                {section.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  const hasDropdown =
                    Array.isArray(item.details) && item.details.length > 0;
                  const isDropdownOpen =
                    openDropdown[`${sectionIdx}-${itemIdx}`];
                  const isSingleLink = !hasDropdown && item.labelpath;

                  const isActiveItem =
                    isSingleLink && pathname === item.labelpath;

                  const ItemWrapper = isSingleLink ? Link : "div";
                  const wrapperProps = isSingleLink
                    ? { href: item.labelpath }
                    : {};

                  return (
                    <div key={item.label}>
                      <ItemWrapper
                        {...wrapperProps}
                        className={`rounded-md py-[7px] px-3 mb-2 flex justify-between items-center cursor-pointer group hover:bg-[#dcdde1] transition-all duration-400 ease-in-out ${
                          isActiveItem ? "bg-[#e2e4e7]" : ""
                        }`}
                        onClick={
                          hasDropdown
                            ? () => handleDropdown(sectionIdx, itemIdx)
                            : undefined
                        }
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-2xl text-gray-600 group-hover:text-black transition-all duration-400 ease-in-out">
                            <Icon width="24px" height="24px" />
                          </span>
                          <p className="text-sm text-gray-600 font-semibold font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">
                            {item.label}
                          </p>
                        </div>
                        {hasDropdown && (
                          <span
                            className={`mt-1 text-lg text-gray-600 group-hover:text-black transition-all duration-400 ease-in-out transform ${
                              isDropdownOpen ? "rotate-180" : ""
                            }`}
                          >
                            <Dropdownicon width="18px" height="18px" />
                          </span>
                        )}
                      </ItemWrapper>

                      {hasDropdown && (
                        <div
                          className={`ml-5 overflow-hidden transition-all duration-400 ease-in-out ${
                            isDropdownOpen
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}
                          style={{ transitionProperty: "max-height, opacity" }}
                        >
                          {item.details.map(({ name, path }) => {
                            const isActive =
                              pathname === path ||
                              (pathname === "/" &&
                                name.toLowerCase() === "dashboard" &&
                                item.label === "Project");

                            const content = (
                              <p
                                className={`text-sm font-semibold font-Roboto capitalize transition-all duration-400 ease-in-out ${
                                  isActive
                                    ? "text-black"
                                    : "text-gray-500 group-hover:text-black"
                                }`}
                              >
                                {name}
                              </p>
                            );

                            return path ? (
                              <Link
                                href={path}
                                key={name}
                                className={`block rounded-md py-[9px] px-3 cursor-pointer group hover:bg-[#dcdde1] transition-all duration-400 ease-in-out ${
                                  isActive ? "bg-[#e2e4e7]" : ""
                                }`}
                              >
                                {content}
                              </Link>
                            ) : (
                              <div
                                key={name}
                                className="rounded-md py-[9px] px-3 cursor-pointer select-none group hover:bg-[#dcdde1] transition-all duration-400 ease-in-out"
                              >
                                {content}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`transition-opacity duration-300 ease-in-out ${
          !isSidebarOpen
            ? "opacity-100"
            : "opacity-0 h-0 overflow-hidden pointer-events-none"
        } relative`}
      >
        <div className="sticky top-0 left-0 h-[64px] px-4 flex items-center justify-center">
          <Link href={"/"}>
            <Logo2 />
          </Link>
        </div>
        {hoverDropdown && dropdownPosition.item && (
          <div
            className="absolute z-50 left-16"
            style={{
              top: dropdownPosition.top,
            }}
            onMouseEnter={() => setHoverDropdown(dropdownPosition.item.label)}
            onMouseLeave={() => setHoverDropdown(null)}
          >
            <div className="bg-white border rounded-md shadow-lg p-2 min-w-[200px]">
              {dropdownPosition.item.details.map(({ name, path }) => {
                const content = (
                  <span className="text-sm font-semibold text-gray-600 font-Roboto group-hover:text-black transition-all duration-400 ease-in-out">
                    {name}
                  </span>
                );
                return path ? (
                  <Link
                    key={name}
                    href={path}
                    className="flex justify-between items-center mb-1 py-[6px] px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out"
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    key={name}
                    className="flex justify-between items-center mb-1 py-[6px] px-3 cursor-pointer rounded-md group hover:bg-[#f3f4f6] transition-all duration-400 ease-in-out"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="px-4 pb-4 h-[calc(100vh-64px)] overflow-y-hidden hover:overflow-y-auto gray-thin-scroll">
          {sidebarSections.map((section, sectionIdx) => (
            <div key={section.title}>
              {section.items.map((item, itemIdx) => {
                const Icon = item.icon;
                const hasDropdown =
                  Array.isArray(item.details) && item.details.length > 0;
                const dropdownId = `${sectionIdx}-${itemIdx}`;
                const isSingleLink = !hasDropdown && item.labelpath;

                const handleMouseEnter = (e) => {
                  if (hasDropdown) {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setDropdownPosition({
                      top: rect.top,
                      left: rect.right + 8,
                      item: item,
                    });
                    setHoverDropdown(dropdownId);
                  } else {
                    setHoverDropdown(null);
                  }
                };

                const itemContent = (
                  <div
                    className="px-5 py-2 mb-2 flex justify-center items-center cursor-pointer rounded-md relative group hover:bg-[#dcdde1] transition-all duration-400 ease-in-out"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={() => setHoverDropdown(null)}
                  >
                    <span className="text-2xl text-gray-600 group-hover:text-black transition-all duration-400 ease-in-out">
                      <Icon width="24px" height="24px" />
                    </span>
                  </div>
                );

                if (isSingleLink) {
                  return (
                    <Link href={item.labelpath} key={item.label}>
                      {itemContent}
                    </Link>
                  );
                }

                return <div key={item.label}>{itemContent}</div>;
              })}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
