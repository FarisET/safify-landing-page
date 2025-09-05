"use client";

import React, { useState } from "react";
import {
  CheckCircle,
  XCircle,
  Edit2,
  ChevronDown,
  PlusCircle,
  CheckSquare,
} from "lucide-react";

export default function LogicRuleFB() {
  const [showOptions, setShowOptions] = useState(false);
  const [triggerValue, setTriggerValue] = useState("Partial-Compliant");
  const [selectedAction, setSelectedAction] = useState<"pass" | "fail">("pass");

  return (
    <div className="relative w-[500px] h-[405px] mx-auto transform rotate-0 hover:rotate-0 transition-transform duration-300 scale-[0.92]">
      <div className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-xl p-4 flex flex-col gap-3 overflow-hidden">
        {/* scrollable content area */}
        <div className="flex-1 overflow-y-auto pr-2">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <h4 className="text-sm font-medium text-slate-800">Are isolation rooms maintaining negative pressure?</h4>
              <div className="mt-2 flex items-center gap-3 text-[13px] text-slate-500">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="w-4 h-4 rounded border-slate-200" />
                  <span>Required</span>
                </label>

                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs">multipleChoice</span>
              </div>
            </div>

            <div className="text-xs text-slate-400">50/200</div>
          </div>

          <div className="h-[1px] bg-slate-100 my-2" />

          {/* Multiple choice responses header */}
          {/* <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-slate-700">Multiple choice responses</div>
            <button
              onClick={() => setShowOptions((s) => !s)}
              className="flex items-center gap-1 text-slate-500 text-sm"
            >
              {showOptions ? "Hide Options" : "Hide Options"}
              <ChevronDown size={14} />
            </button>
          </div> */}

          {/* Logic Rules section */}
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">Logic Rules</div>
              <div className="text-xs text-slate-400">1 rule</div>
            </div>

            <div className="mt-3">
              {/* example rule card */}
              <div className="rounded-lg border border-slate-100 p-3 shadow-sm flex items-start justify-between gap-3 bg-white">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium">
                      <CheckCircle size={14} />
                      <span className="ml-2">PASS</span>
                    </span>
                  </div>
                  <div className="text-sm text-slate-600">IF answer is "compliant" THEN PASS</div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="p-1 hover:bg-slate-100 rounded"><Edit2 size={14} /></button>
                  <button className="p-1 hover:bg-slate-100 rounded text-slate-400"><XCircle size={16} /></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Logic Rule form - kept visible at bottom */}
        <div className="rounded-lg border border-slate-100 p-3 bg-slate-50">
          <div className="text-sm font-semibold text-slate-800 mb-2">Add Logic Rule</div>

          <label className="text-xs text-slate-600">Select Trigger Value</label>
          <div className="mt-2">
            <select
              value={triggerValue}
              onChange={(e) => setTriggerValue(e.target.value)}
              className="w-full rounded-md border border-slate-200 p-2 text-sm bg-white"
            >
              <option>Compliant</option>
              <option>Partial-Compliant</option>
              <option>Non-Compliant</option>
            </select>
          </div>

          <div className="mt-3">
            <label className="text-xs text-slate-600">Action</label>

            <div className="mt-2 flex items-center gap-2">
              <button
                onClick={() => setSelectedAction("pass")}
                className={`flex items-center gap-2 px-2 py-1 rounded-lg border ${
                  selectedAction === "pass" ? "border-emerald-300 bg-emerald-50" : "border-slate-200 bg-white"
                } text-sm`}
              >
                <CheckSquare size={14} />
                <span className="text-sm">PASS</span>
              </button>

              <button
                onClick={() => setSelectedAction("fail")}
                className={`flex items-center gap-2 px-2 py-1 rounded-lg border ${
                  selectedAction === "fail" ? "border-rose-300 bg-rose-50" : "border-slate-200 bg-white"
                } text-sm text-slate-700`}
              >
                <XCircle size={14} />
                <span className="text-sm">FAIL</span>
              </button>
            </div>
          </div>

          {/* <div className="mt-3 flex items-center gap-2">
            <button className="inline-flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:shadow-md">
              <PlusCircle size={16} /> Add Rule
            </button>

            <button className="text-sm text-slate-600">Cancel</button>
          </div> */}
        </div>
      </div>

      {/* subtle floating glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/6 to-purple-500/6 rounded-2xl blur-2xl -z-10"></div>
    </div>
  );
}
