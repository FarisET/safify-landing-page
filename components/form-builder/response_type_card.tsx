"use client";

import {
  FileText,
  ListChecks,
  CheckSquare,
  Calendar,
  Hash,
  MapPin,
  Image as ImageIcon,
  PenTool,
  ClipboardList,
  MousePointerClick
} from "lucide-react";

const responseTypes = [
  { label: "Text", icon: FileText },
  { label: "Multiple Choice", icon: ListChecks },
  { label: "Multi-Select", icon: CheckSquare },
  { label: "Checkbox", icon: CheckSquare },
  { label: "Date", icon: Calendar },
  { label: "Number", icon: Hash },
  { label: "Location", icon: MapPin },
  { label: "Media", icon: ImageIcon },
  { label: "Signature", icon: PenTool },
  { label: "Audit", icon: ClipboardList },
  { label: "Select", icon: MousePointerClick },
 
];

export default function ResponseTypesCard() {
  return (
    <div className="relative w-[500px] h-[400px] mx-auto">
      <div className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-xl p-6 flex flex-col">
        <h3 className="text-base font-semibold text-slate-800 mb-4">
          Response Types
        </h3>
        <ul className="space-y-3 overflow-y-auto pr-1">
          {responseTypes.map((type, i) => (
            <li
              key={i}
              className="flex items-center gap-3 px-3 py-2 rounded-lg border border-slate-100 shadow-sm hover:shadow-md hover:bg-blue-50/40 transition-all"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 shadow-inner">
                <type.icon size={18} />
              </div>
              <span className="text-sm font-medium text-slate-700">
                {type.label}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* subtle floating glow */}
      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl -z-10"></div>
    </div>
  );
}
