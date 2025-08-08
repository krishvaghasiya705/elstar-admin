import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="px-8 flex justify-between items-center gap-4">
      <p className="text-sm font-medium font-InterUi text-gray-500">
        Copyright © 2025 <span className="font-semibold">Elstar</span> All
        rights reserved.
      </p>
      <div className="flex items-center gap gap-3 py-5">
        <Link
          href={"/"}
          className="text-sm font-medium font-InterUi text-gray-500"
        >
          Term & Conditions
        </Link>
        <span className="text-sm font-medium font-InterUi text-gray-500">
          |
        </span>
        <Link
          href={"/"}
          className="text-sm font-medium font-InterUi text-gray-500"
        >
          Privacy & Policy
        </Link>
      </div>
    </footer>
  );
}
