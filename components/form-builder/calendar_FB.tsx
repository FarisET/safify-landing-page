"use client";

import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar as CalendarIcon,
  User,
  FileText,
  Home,
} from "lucide-react";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const sampleEvents = [
  {
    id: 1,
    dayIndex: 1, // Monday
    date: 1,
    time: "09:15am",
    title: "Waste Management",
    person: "Hamza Iqbal",
    form: "Infection Control Audit",
    location: "Radiology, Main Branch",
  },
  {
    id: 2,
    dayIndex: 1,
    date: 8,
    time: "01:15pm",
    title: "Complete Form",
    person: "Fizza Ahmed",
    form: "Infection Control Audit",
    location: "Paediatric, Main Branch",
  },
];

export default function CalendarFB() {
  const [focusedEvent, setFocusedEvent] = useState(sampleEvents[0]);

  return (
    <div className="w-full max-w-[1200px] h-[700px] mx-auto p-6">
      <div className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-sm p-6 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-800">My Calendar</h2>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><ChevronLeft size={18} /></button>
              <button className="p-2 rounded-lg border border-slate-200 hover:bg-slate-50"><ChevronRight size={18} /></button>
              <button className="ml-2 px-3 py-2 bg-emerald-200 text-emerald-800 rounded-lg">Today</button>
            </div>

            <div className="ml-6 text-center text-lg font-semibold">September 2025</div>

            <div className="ml-6 flex items-center gap-2">
              <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">Month</button>
              <button className="px-3 py-2 rounded-lg border border-slate-200">Week</button>
              <button className="px-3 py-2 rounded-lg border border-slate-200">Day</button>
              <button className="px-3 py-2 rounded-lg border border-slate-200">List Week</button>
              <button className="px-3 py-2 rounded-lg border border-slate-200">List Month</button>
            </div>
          </div>
        </div>

        {/* Calendar grid */}
        <div className="w-full h-[520px] border rounded-lg overflow-hidden">
          <div className="grid grid-cols-7 bg-slate-50 border-b border-slate-100">
            {days.map((d) => (
              <div key={d} className="py-3 text-center font-semibold text-slate-700 border-r last:border-r-0">
                {d}
              </div>
            ))}
          </div>

          {/* 6 rows of weeks */}
          <div className="grid grid-cols-7 grid-rows-6 h-[460px]">
            {Array.from({ length: 42 }).map((_, idx) => {
              const day = idx + 1 - 1; // simple placement for demo
              const dayIndex = idx % 7;
              const eventsForCell = sampleEvents.filter((ev) => ev.dayIndex === dayIndex);

              return (
                <div key={idx} className="border-r border-b border-slate-100 p-3 relative bg-white">
                  <div className="text-xs text-slate-400">{(idx % 31) + 1}</div>

                  {/* render event pills only for demonstration days */}
                  {eventsForCell.slice(0, 2).map((ev) => (
                    <button
                      key={ev.id}
                      onClick={() => setFocusedEvent(ev)}
                      className="mt-2 block text-left w-full rounded-md py-1 px-2 bg-amber-400 text-white text-sm font-medium shadow-inner"
                    >
                      <span className="font-semibold mr-2">{ev.time}</span>
                      <span className="align-middle">{ev.title}</span>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Focused overlay item */}
        {focusedEvent && (
          <div className="absolute top-28 right-10 w-[320px] bg-white border border-slate-200 rounded-2xl shadow-2xl p-4 z-50">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs text-slate-500">{focusedEvent.time} • {focusedEvent.date} September</div>
                <div className="mt-2 text-sm font-semibold text-slate-800">{focusedEvent.title}</div>
                <div className="mt-1 text-sm text-slate-600">{focusedEvent.form}</div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-slate-50">
                      <User size={16} />
                    </span>
                    <div>
                      <div className="text-xs text-slate-500">Person</div>
                      <div className="font-medium">{focusedEvent.person}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-slate-50">
                      <FileText size={16} />
                    </span>
                    <div>
                      <div className="text-xs text-slate-500">Form</div>
                      <div className="font-medium">{focusedEvent.form}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-slate-50">
                      <Home size={16} />
                    </span>
                    <div>
                      <div className="text-xs text-slate-500">Location</div>
                      <div className="font-medium">{focusedEvent.location}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-sm text-slate-400">●</div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <button className="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">Open</button>
              <button className="px-3 py-2 border border-slate-200 rounded-lg text-sm">Edit</button>
              <button className="px-3 py-2 border border-slate-200 rounded-lg text-sm">Close</button>
            </div>
          </div>
        )}

        {/* subtle background */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/4 to-purple-500/4 rounded-2xl -z-10 blur-3xl" />
      </div>
    </div>
  );
}
