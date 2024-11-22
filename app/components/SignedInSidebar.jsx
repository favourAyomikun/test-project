"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdAnalytics } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { PiMagicWandLight } from "react-icons/pi";
import { TbLayoutSidebarInactive } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import main_logo from "../public/Main_Logo.png";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import { PiLightning } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";
import { RiLogoutBoxLine } from "react-icons/ri";

const SignedInSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col h-full w-[17rem] border-r border-[#E4E7EC] bg-white">
      {/* Logo section */}
      <div className="p-4">
        <div className="flex justify-between items-center space-x-2">
          <Image height={130} width={130} src={main_logo} alt="main-logo" />
          <TbLayoutSidebarInactive size={27} />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-auto p-4">
        <div className="space-y-1">
          <p className="text-xs font-medium text-[#7A8EAC] mb-4">ASSISTANT</p>
          <div className="space-y-2">
            <Link
              href="#"
              className="flex items-center space-x-3 px-2 py-2 text-base md:text-lg text-[#344054] font-semibold hover:bg-gray-100 rounded-lg"
            >
              <PiMagicWandLight size={25} />
              <span>Dexter AI</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-2 py-2 text-base md:text-lg text-[#344054] font-semibold hover:bg-gray-100 rounded-lg"
            >
              <IoMdAnalytics size={25} />
              <span>Analytics</span>
            </Link>
            <Link
              href="#"
              className="flex items-center space-x-3 px-2 py-2 text-base md:text-lg text-[#344054] font-semibold hover:bg-gray-100 rounded-lg"
            >
              <TbPencil size={25} />
              <span>Blog post</span>
            </Link>
          </div>
        </div>

        <div className="w-full mt-5 py-5 border-t border-[#E4E7EC] mb-72">
          <p className="text-xs font-medium text-[#7A8EAC] tracking-wider mb-4">
            RECENT CHATS
          </p>
          <div className="space-y-2">
            <Link
              href="#"
              className="block font-medium px-2 py-2 tracking-wide text-sm text-[#344054] hover:bg-gray-100 rounded-lg"
            >
              Create a SEO campaign that...
            </Link>
            <Link
              href="#"
              className="block font-medium px-2 py-2 tracking-wide text-sm text-[#344054] hover:bg-gray-100 rounded-lg"
            >
              Natural Language Conversations...
            </Link>
            <Link
              href="#"
              className="block font-medium px-2 py-2 tracking-wide text-sm text-[#344054] hover:bg-gray-100 rounded-lg"
            >
              Create a free account, or go Pro...
            </Link>
          </div>
        </div>
      </nav>

      {/* User section */}
      <div className="p-4 border-t border-[#E4E7EC] ">
        {isOpen && (
          <div className="absolute left-6 bottom-10 mt-1 w-60 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
            <div className="space-y-1">
              {/* Menu items */}
              <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50">
                <IoSettingsOutline className="w-4 h-4 mr-3" />
                Settings
              </button>

              <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50">
                <PiLightning className="w-4 h-4 mr-3" />
                Plans
              </button>

              <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50">
                <BiSupport className="w-4 h-4 mr-3" />
                Support
              </button>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-1" />

              {/* Logout button */}
              <button className="w-full flex items-center px-4 py-2 text-sm font-medium text-[#344054] hover:bg-gray-50">
                <RiLogoutBoxLine className="w-4 h-4 mr-3" />
                Log out
              </button>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleDropdown}
            aria-expanded={isOpen}
            aria-haspopup="true"
          >
            <CgProfile size={25} />
          </button>
          <span className="text-sm font-semibold text-[#344054]">
            email@example.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignedInSidebar;
