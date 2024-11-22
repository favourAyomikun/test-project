import React from "react";
import { FiSend } from "react-icons/fi";
import { PiMagicWandLight } from "react-icons/pi";
import main_logo from "../app/public/Main_Logo.png";
import Image from "next/image";
import SignedInSidebar from "./components/SignedInSidebar";

const SignedInPage = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex flex-grow min-h-screen">
        <SignedInSidebar />

        {/* Main content */}
        <div className="flex-1 justify-center h-screen flex flex-col">
          {/* Header */}
          <div className="flex justify-center p-8">
            <div className="text-center">
              <div className="flex mx-auto justify-center mb-4 bg-white py-3 w-52 rounded-[60px]">
                <Image
                  height={150}
                  width={150}
                  src={main_logo}
                  alt="main-logo"
                />
              </div>
              <p className=" text-base text-[#6B7280] tracking-wide mb-8">
                Your personal Ai-powered SEO specialist
              </p>
              <h1 className="text-4xl font-semibold mb-8">Welcome!</h1>

              {/* Search bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative flex items-center">
                  <PiMagicWandLight
                    className="absolute left-3 text-[#98A2B3]"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Ask Dexter a question..."
                    className="text-[#344054] w-full h-16 pl-10 pr-12 py-2 border border-[#D0D5DD] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="flex items-center space-x-2 absolute right-3 text-[#98A2B3]">
                    <span className="text-sm">0/2000</span>
                    <FiSend size={20} />
                  </div>
                </div>
              </div>

              {/* Topic buttons */}
              <div className="mt-8 text-center">
                <div className="text-base tracking-wide text-gray-600 mb-4">
                  Choose a prompt below or write your own to{" "}
                  <p className="mb-4">start chatting with Dexter</p>
                  <p> Ask about:</p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <button className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]">
                      Performance and Optimization
                    </button>
                    <button className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]">
                      Visibility and Traffic
                    </button>
                    <button className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]">
                      Content and Keywords
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    <button className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]">
                      Quality and Usability
                    </button>
                    <button className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]">
                      Backlinks
                    </button>
                    <button className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]">
                      Keywords
                    </button>
                    <button className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]">
                      Domain authority
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignedInPage;
