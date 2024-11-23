"use client";

import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import { PiMagicWandLight } from "react-icons/pi";
import { ImSpinner8 } from "react-icons/im";
import main_logo from "../public/Main_Logo.png";
import Image from "next/image";
import NotSignedInSidebar from "../components/NotSignedInSidebar";

const SkeletonLoader = () => {
  return (
    <div className="max-w-2xl mx-auto mb-6 animate-pulse">
      <div className="bg-gray-200 h-6 rounded-md mb-2 w-3/4"></div>
      <div className="bg-gray-200 h-6 rounded-md mb-2 w-5/6"></div>
      <div className="bg-gray-200 h-6 rounded-md mb-2 w-2/3"></div>
    </div>
  );
};

const NotSignedInPage = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [error, setError] = useState("");
  const [showSkeleton, setShowSkeleton] = useState(false);

  const topics = [
    "Performance and Optimization",
    "Visibility and Traffic",
    "Content and Keywords",
    "Quality and Usability",
    "Backlinks",
    "Keywords",
    "Domain authority",
  ];

  const handlePromptChange = (e) => {
    const text = e.target.value;
    if (text.length <= 2000) {
      setPrompt(text);
      setCharCount(text.length);
    }
  };

  const handleTopicClick = (topic) => {
    setPrompt(topic);
    setCharCount(topic.length);
    setError("");
  };

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      setError("Please enter a valid prompt.");
      return;
    }

    setLoading(true);
    setShowSkeleton(true); // Show skeleton loader
    setError("");
    setResponse("");

    try {
      const res = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCw1mgPnlP7JumtmQykyuj6LsEqASWAgCA",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error.message || "Failed to fetch response.");
      }

      const data = await res.json();

      const output =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response available.";
      setResponse(output);

      // Clear the text area
      setPrompt("");
      setCharCount(0);
    } catch (err) {
      setError(err.message);
    } finally {
      setShowSkeleton(false); // Hide skeleton loader
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex flex-grow min-h-screen">
        <NotSignedInSidebar />

        {/* Main content */}
        <div className="flex-1 justify-center h-full flex flex-col mt-5 md:mt-0">
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
              <p className="text-sm md:text-base text-[#6B7280] tracking-wide mb-8">
                Your personal AI-powered SEO specialist
              </p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
                Good day!
              </h1>

              {/* Error message */}
              {error && (
                <div className="max-w-2xl mx-auto mb-6">
                  <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl">
                    {error}
                  </div>
                </div>
              )}

              {/* Response area */}
              {showSkeleton && <SkeletonLoader />}
              {!showSkeleton && response && (
                <div className="max-w-2xl mx-auto mb-6">
                  <div className="bg-white p-4 rounded-xl shadow-lg text-left">
                    <p className="text-gray-700">{response}</p>
                  </div>
                </div>
              )}

              {/* Search bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative flex items-center">
                  <PiMagicWandLight
                    className="absolute left-3 text-[#98A2B3]"
                    size={20}
                  />
                  <textarea
                    value={prompt}
                    onChange={handlePromptChange}
                    placeholder="Ask Dexter a question..."
                    className="w-full h-32 pl-10 pr-12 py-2 border border-[#D0D5DD] rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                    maxLength={2000}
                    disabled={loading}
                  ></textarea>
                  <div className="flex items-center space-x-2 absolute right-3 bottom-2 text-[#98A2B3]">
                    <span className="text-sm">{charCount}/2000</span>
                    {loading ? (
                      <ImSpinner8 className="animate-spin text-[#6546F3] w-5 h-5" />
                    ) : (
                      <button
                        onClick={handleSubmit}
                        disabled={!prompt.trim() || loading}
                        className="cursor-pointer text-[#6546F3] disabled:opacity-50"
                      >
                        <FiSend size={20} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Topic buttons */}
              <div className="mt-8 text-center">
                <div className="text-sm md:text-base tracking-wide text-gray-600 mb-4">
                  Choose a prompt below or write your own to{" "}
                  <p className="mb-4">start chatting with Dexter</p>
                  <p> Ask about:</p>
                </div>
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {topics.slice(0, 3).map((topic, index) => (
                      <button
                        key={index}
                        onClick={() => handleTopicClick(topic)}
                        className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {topics.slice(3).map((topic, index) => (
                      <button
                        key={index + 3}
                        onClick={() => handleTopicClick(topic)}
                        className="px-4 py-2 text-sm md:text-base bg-white hover:bg-gray-200 shadow-sm rounded-[30px]"
                      >
                        {topic}
                      </button>
                    ))}
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

export default NotSignedInPage;
