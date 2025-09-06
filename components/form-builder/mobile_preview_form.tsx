"use client";

import React, { useState } from "react";
import {
  Edit2,
  Image as ImageIcon,
  Wifi,
  Battery,
  Signal,
  ChevronDown,
} from "lucide-react";
import { WifiOff } from "react-feather";

export default function MobilePreviewForm() {
  const [selectedAnswer1, setSelectedAnswer1] = useState("");
  const [selectedAnswer2, setSelectedAnswer2] = useState("");

  return (
    <div className="relative w-full max-w-[500px] aspect-[10/11] mx-auto">
      {/* Mobile Device Frame */}
      <div className="w-full h-full bg-slate-900 rounded-[2rem] p-2 sm:p-3 shadow-2xl relative overflow-hidden">
        {/* subtle floating glow behind */}
        <div className="absolute inset-0 -z-10 rounded-[2rem] bg-gradient-to-r from-blue-500/6 to-purple-500/6 blur-2xl"></div>

        {/* Notch */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-5 bg-slate-800 rounded-b-2xl shadow-inner"></div>

        {/* Mobile Screen */}
        <div className="w-full h-full bg-white rounded-[1.8rem] sm:rounded-[2.3rem] overflow-hidden flex flex-col">
          {/* Status Bar */}
          <div className="flex items-center justify-between px-3 sm:px-6 py-2 bg-white border-b border-slate-100">
            <div className="text-xs font-semibold text-slate-900">9:41</div>
            <div className="flex items-center gap-2">
              <Signal size={14} className="text-slate-900" />
              <WifiOff size={14} className="text-slate-900" />
              <Battery size={14} className="text-slate-900" />
            </div>
          </div>

          {/* App Header / Page Controls */}
          <div className="px-3 sm:px-4 pt-3 pb-2 bg-white border-b border-slate-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <button className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                  <ChevronDown size={14} />
                  <span>Page 2 of 4</span>
                </button>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-800">1 / 4 (20%)</div>
            </div>
          </div>

          {/* Title & Subtitle */}
          <div className="px-3 sm:px-6 pt-4 pb-3 sm:pb-4">
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-slate-900 leading-tight">
              Infection Control & Prevention
            </h1>
            <p className="mt-2 sm:mt-3 text-sm sm:text-md text-slate-700 max-w-[95%]">
              Checklist for ISO 13485, WHO IPC Core Components, and SHCC guidelines for patient and staff safety.
            </p>
          </div>

          {/* Offline sync indicator */}
          <div className="px-3 sm:px-6 pb-3">
            <div className="mt-1 sm:mt-2 flex items-center gap-2 text-xs sm:text-sm">
              <WifiOff size={18} className="text-red-600" />
              <span className="text-amber-600 font-medium">
                Offline — changes will sync when you’re back online
              </span>
            </div>
          </div>

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto px-3 sm:px-4 pb-4 sm:pb-6">
            {/* Example question card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-3 sm:p-4 mb-4 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="text-lg sm:text-2xl font-bold text-slate-300">1.</div>
                </div>

                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-slate-800 mb-2 sm:mb-3 leading-snug">
                    Are isolation rooms maintaining negative pressure? <span className="text-red-500">*</span>
                  </h3>

                  <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
                    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="q1"
                        value="compliant"
                        checked={selectedAnswer1 === "compliant"}
                        onChange={(e) => setSelectedAnswer1(e.target.value)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                      />
                      <span className="text-xs sm:text-sm text-slate-700">Compliant</span>
                    </label>
                    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="q1"
                        value="partial"
                        checked={selectedAnswer1 === "partial"}
                        onChange={(e) => setSelectedAnswer1(e.target.value)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                      />
                      <span className="text-xs sm:text-sm text-slate-700">Partial-Compliant</span>
                    </label>
                    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="q1"
                        value="non"
                        checked={selectedAnswer1 === "non"}
                        onChange={(e) => setSelectedAnswer1(e.target.value)}
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                      />
                      <span className="text-xs sm:text-sm text-slate-700">Non-Compliant</span>
                    </label>
                  </div>
                  <div className="flex gap-3 mt-2">
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 text-sm rounded-lg shadow-sm">
                      <Edit2 size={12} /> Note
                    </button>
                    <button className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg shadow-sm">
                      <ImageIcon size={12} /> Media
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-3 sm:p-4 mb-4 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="text-lg sm:text-2xl font-bold text-slate-300">2.</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-slate-800 mb-2 sm:mb-3 leading-snug">
                    Temperature range of 18–24°C maintained for clinical areas
                  </h3>
                  <div className="mb-2 sm:mb-3">
                    <input
                      type="number"
                      placeholder="Enter number"
                      className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <hr className="border-t border-slate-100 my-2" />
                  <div className="flex gap-2 sm:gap-3 mt-2">
                    <button className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-slate-100 text-slate-600 text-xs sm:text-sm rounded-lg shadow-sm">
                      <Edit2 size={12} /> Note
                    </button>
                    <button className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg shadow-sm">
                      <ImageIcon size={12} /> Media
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white border border-slate-100 rounded-2xl p-3 sm:p-4 mb-4 shadow-sm">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0">
                  <div className="text-lg sm:text-2xl font-bold text-slate-300">3.</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm sm:text-base font-medium text-slate-800 mb-2 sm:mb-3 leading-snug">
                    Emergency exits are clearly marked and unobstructed? <span className="text-red-500">*</span>
                  </h3>
                  <div className="space-y-1 sm:space-y-2 mb-2 sm:mb-3">
                    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="q3"
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 border-slate-300"
                      />
                      <span className="text-xs sm:text-sm text-slate-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="q3"
                        className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 border-slate-300"
                      />
                      <span className="text-xs sm:text-sm text-slate-700">No</span>
                    </label>
                  </div>
                  <hr className="border-t border-slate-100 my-2" />
                  <div className="flex gap-2 sm:gap-3 mt-2">
                    <button className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-slate-100 text-slate-600 text-xs sm:text-sm rounded-lg shadow-sm">
                      <Edit2 size={12} /> Note
                    </button>
                    <button className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-lg shadow-sm">
                      <ImageIcon size={12} /> Media
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
}
