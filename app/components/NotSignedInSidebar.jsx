import React, { useState } from "react";
import Link from "next/link";
import { IoMdAnalytics } from "react-icons/io";
import { TbPencil } from "react-icons/tb";
import { PiMagicWandLight, PiSignInFill } from "react-icons/pi";
import { TbLayoutSidebarInactive } from "react-icons/tb";
import Image from "next/image";
import main_logo from "../public/Main_Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const NotSignedInSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-white border rounded-full shadow-lg md:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Sidebar and overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-[17rem] bg-white border-r border-[#E4E7EC] z-50 transform transition-transform duration-300 md:relative md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
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
                className="flex items-center space-x-3 px-2 py-2 text-lg text-[#344054] font-semibold hover:bg-gray-100 rounded-lg"
              >
                <PiMagicWandLight size={25} />
                <span>Dexter AI</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-3 px-2 py-2 text-lg text-[#344054] font-semibold hover:bg-gray-100 rounded-lg"
              >
                <IoMdAnalytics size={25} />
                <span>Analytics</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-3 px-2 py-2 text-lg text-[#344054] font-semibold hover:bg-gray-100 rounded-lg"
              >
                <TbPencil size={25} />
                <span>Blog post</span>
              </Link>
              <Link
                href="#"
                className="flex items-center space-x-3 px-2 py-2 text-lg text-[#344054] font-semibold hover:bg-gray-100 rounded-lg"
              >
                <PiSignInFill size={25} />
                <span>Sign In</span>
              </Link>
            </div>
          </div>

          <div className="w-full mt-5 py-5 border-t border-[#E4E7EC]">
            <p className="text-xs font-medium text-[#7A8EAC] tracking-wider mb-4">
              Create a free account, or go Pro to unlock automated blog creation and domain analytics
            </p>
            <Link
              href="#"
              className="flex items-center justify-center font-bold px-2 py-3 tracking-wide border-[1.5px] border-[#6D68FB] text-base text-[#6D68FB] hover:bg-gray-100 rounded-[30px]"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-[#E4E7EC] space-y-2 mb-72">
          <p className="text-[#7A8EAC] font-bold text-base">Why My Dexter?</p>
          <p className="text-[#7A8EAC] font-bold text-base">FAQ</p>
          <p className="text-[#7A8EAC] font-bold text-base">Terms & Policies</p>
          <p className="text-[#7A8EAC] font-medium text-xs"> &copy; 2024 My Dexter</p>
        </div>
      </div>
    </>
  );
};

export default NotSignedInSidebar;
