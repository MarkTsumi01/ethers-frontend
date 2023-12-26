'use client'

import React from "react";
import { useTheme } from "next-themes";

const Changetheme = () => {
  const { theme, setTheme } = useTheme();
  const buttonColor = theme === "dark" ? "bg-orange-500" : "bg-blue-200";

  return (
    <div className="flex gap-4">
      <button
        className={`p-2 rounded-lg ${buttonColor}`}
        onClick={() => setTheme("light")}
      >
        Light Mode
      </button>
      <button
        className={`p-2 rounded-lg ${buttonColor}`}
        onClick={() => setTheme("dark")}
      >
        Dark Mode
      </button>
    </div>
  );
};

export default Changetheme;
