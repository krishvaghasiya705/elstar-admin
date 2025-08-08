"use client";
import React, { useState, useEffect } from "react";
import "./globals.scss";
import "@/font/font.scss";
import "@/styles/tailwind.css";
import Footer from "@/common/footer";
import Header from "@/common/header";
import Sidebar from "@/common/sidebar";

export default function RootLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    const storedSidebarState = localStorage.getItem("isSidebarOpen");
    if (storedSidebarState !== null) {
      setSidebarOpen(JSON.parse(storedSidebarState));
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    localStorage.setItem("isSidebarOpen", JSON.stringify(!isSidebarOpen));
  };

  return (
    <html lang="en">
      <head>
        <title>Elstar - React Admin Template</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Elstar - Powerful React Admin Dashboard Template"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="flex h-screen overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ease-in-out ${
              isSidebarOpen
                ? "w-[290px] min-w-[290px]"
                : "w-[87px] min-w-[87px]"
            }`}
          >
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>
          <div className="w-full flex flex-col overflow-y-auto border-l border-gray-200">
            <Header
              toggleSidebar={toggleSidebar}
              isSidebarOpen={isSidebarOpen}
            />
            <div className="h-[calc(100%-64px)] flex flex-col justify-between">
              <div>{children}</div>
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
