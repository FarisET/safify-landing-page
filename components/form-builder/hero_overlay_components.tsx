"use client";

import React from "react";
import {
  CheckCircle,
  Clock,
  Users,
  Shield,
  TrendingUp,
  Smartphone,
  Wifi,
  Battery,
  Signal,
  PieChart,
} from "lucide-react";

// Mobile Form Overlay Component
export function MobileFormOverlay() {
  return (
    <div className="absolute top-4 right-4 w-48 h-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-30">
      {/* Mobile Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-50 border-b border-slate-100">
        <div className="text-xs font-semibold text-slate-900">9:41</div>
        <div className="flex items-center gap-1">
          <Signal size={10} className="text-slate-900" />
          <Wifi size={10} className="text-slate-900" />
          <Battery size={10} className="text-slate-900" />
        </div>
      </div>

      {/* Mobile Content */}
      <div className="p-3 space-y-3">
        <div className="text-xs font-semibold text-slate-800">Safety Audit Form</div>

        {/* Question Card */}
        <div className="bg-slate-50 rounded-lg p-2">
          <div className="text-xs font-medium text-slate-800 mb-2">
            8. Hazardous waste disposal? *
          </div>
          <div className="space-y-1">
            <label className="flex items-center gap-2">
              <input type="radio" name="q8" className="w-3 h-3" />
              <span className="text-xs text-slate-700">Yes</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="q8" className="w-3 h-3" />
              <span className="text-xs text-slate-700">No</span>
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-1">
          <button className="flex items-center gap-1 px-2 py-1 bg-blue-600 text-white text-xs rounded">
            <CheckCircle size={8} />
            Note
          </button>
          <button className="flex items-center gap-1 px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded">
            <Smartphone size={8} />
            Media
          </button>
        </div>
      </div>
    </div>
  );
}

// Analytics Dashboard Overlay
export function AnalyticsOverlay() {
  return (
    <div className="absolute bottom-4 left-7 w-64 h-48 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 z-30">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-slate-800">Analytics</h4>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs text-slate-600">Live</span>
        </div>
      </div>

      {/* Mini Charts */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-50 rounded-lg p-2">
          <div className="text-xs text-slate-600 mb-1">Compliance</div>
          <div className="flex items-center gap-1">
            <TrendingUp size={12} className="text-green-600" />
            <span className="text-sm font-semibold text-slate-800">96%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-1 mt-1">
            <div className="bg-green-500 h-1 rounded-full" style={{ width: "96%" }}></div>
          </div>
        </div>

        <div className="bg-slate-50 rounded-lg p-2">
          <div className="text-xs text-slate-600 mb-1">Audits</div>
          <div className="flex items-center gap-1">
            <Shield size={12} className="text-blue-600" />
            <span className="text-sm font-semibold text-slate-800">42</span>
          </div>
          <div className="text-xs text-slate-500">This month</div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="text-slate-600">Control Coverage</span>
        <span className="font-semibold text-slate-800">83%</span>
      </div>
    </div>
  );
}

// Feature Highlights Overlay
export function FeatureHighlightsOverlay() {
  return (
    <div className="absolute top-1/2 left-4 transform -translate-y-1/2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 z-30">
      <h4 className="text-sm font-semibold text-slate-800 mb-3">Key Features</h4>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle size={12} className="text-green-600" />
          </div>
          <span className="text-xs text-slate-700">Offline Access</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <Shield size={12} className="text-blue-600" />
          </div>
          <span className="text-xs text-slate-700">Real-time Sync</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
            <Users size={12} className="text-purple-600" />
          </div>
          <span className="text-xs text-slate-700">Team Collaboration</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
            <Clock size={12} className="text-orange-600" />
          </div>
          <span className="text-xs text-slate-700">Scheduled Audits</span>
        </div>
      </div>
    </div>
  );
}


export function AuditPieChart() {
  {/* Audit Status Pie Chart */ }
  return (
    <div className="absolute top-4 right-4 w-52 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 z-30 opacity-100">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-slate-700">Audit Status</h4>
        <PieChart size={16} className="text-blue-600" />
      </div>

      {/* Pie Chart Representation */}
      <div className="relative w-20 h-20 mx-auto mb-3">
        <div className="absolute inset-0 rounded-full border-8 border-green-200"></div>
        <div className="absolute inset-0 rounded-full border-8 border-green-500" style={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)" }}></div>
        <div className="absolute inset-0 rounded-full border-8 border-yellow-500" style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)" }}></div>
        <div className="absolute inset-0 rounded-full border-8 border-red-500" style={{ clipPath: "polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)" }}></div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-slate-600">Completed: 160</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-xs text-slate-600">Pending: 23</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-xs text-slate-600">Overdue: 6</span>
        </div>
      </div>
    </div>
  )
}

// Compliance Status Overlay
export function ComplianceStatusOverlay() {
  return (
    <div className="absolute top-4 right-4 w-52 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 z-30 opacity-100">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-semibold text-slate-800">Compliance Status</h4>
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">Safety</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-semibold text-slate-800">Compliant</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">Quality</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-xs font-semibold text-slate-800">Compliant</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-600">Environmental</span>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
            <span className="text-xs font-semibold text-slate-800">Review</span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-100">
        <div className="text-xs text-slate-600 text-center">
          Last updated: 2 minutes ago
        </div>
      </div>
    </div>
  );
}
