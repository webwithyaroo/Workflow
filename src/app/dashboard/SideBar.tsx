"use client";

import { FaGears, FaCodeFork } from "react-icons/fa6";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

interface AsideBarProps {
  bgColor: number;
}

export const SideBar = () => {
  const [bgColor, setBgColor] = useState<number>(1);
  return <AsideBar bgColor={bgColor} />;
};

function AsideBar({ bgColor }: AsideBarProps) {
  return (
    <section className="h-screen pl-3 py-3">
      <div className="h-full w-[55px] rounded-md p-3 text-primary-250 bg-primary-300 flex flex-col justify-between items-center">
        <div className="flex flex-col gap-y-5 items-center justify-center">
          <span className="flex items-center justify-center hover:text-white cursor-pointer w-6 mb-6 mt-2">
            <img src="icon/logo.svg" alt="logo" />
          </span>
          <span className="flex items-center justify-center hover:text-white cursor-pointer bg-primary-100 ring-1 p-2 ring-primary-150">
            <FaHome size={24} />
          </span>
          <span className="flex items-center justify-center hover:text-white cursor-pointer">
            <FaCodeFork size={24} />
          </span>
        </div>
        <div className="grid grid-cols-1 gap-y-5 grid-rows-3 items-center justify-center">
          <span className="flex items-center justify-center hover:text-white cursor-pointer">
            <FaGears size={24} />
          </span>
          <span className="flex items-center justify-center hover:text-white cursor-pointer">
            <FaSignOutAlt size={24} />
          </span>
          <UserButton />
        </div>
      </div>
    </section>
  );
}
