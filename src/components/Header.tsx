import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute">
      <nav className="flex items-center justify-center bg-white border-gray-200 px-4 lg:px-6 py-6 dark:bg-gray-800">
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Productive
        </span>
      </nav>
    </header>
  );
};

export { Header };
