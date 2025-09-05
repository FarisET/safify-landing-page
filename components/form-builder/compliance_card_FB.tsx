"use client";

import React from "react";
import {
    Shield,
    RefreshCw,
    BookOpen,
    CheckCircle,
} from "lucide-react";

export default function ComplianceTrackingCard() {
    return (
        <div className="relative w-[500px] h-[400px] mx-auto transform rotate-0 hover:rotate-1 transition-transform duration-300">
            <div className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-xl p-6 flex flex-col">
                {/* Header with icon and title */}
                <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 shadow-inner">
                        <Shield size={24} />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-800 mb-1">
                            Sindh Service Delivery Standards for Hospitals
                        </h3>
                        <p className="text-sm text-slate-500">
                            Sindh Service Delivery Standards for Hospitals
                        </p>
                    </div>
                </div>

                {/* Progress Information */}
                <div className="space-y-4 mb-6">
                    {/* Framework Progress */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-700">Framework Progress</span>
                            <span className="text-sm text-slate-600">25% (At Risk)</span>
                        </div>
                        <div className="w-full bg-red-100 rounded-full h-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                    </div>

                    {/* Compliance Progress */}
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-slate-700">Compliance Progress</span>
                            <span className="text-sm text-slate-600">25%</span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2">
                            <div className="bg-slate-300 h-2 rounded-full" style={{ width: "0%" }}></div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <button
                        type="button"
                        className="w-full px-4 py-2 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2"
                        aria-label="25 percent of articles compliant"
                        title="25 of 100 articles compliant"
                    >
                        25 / 100 articles compliant
                    </button>


                    <button className="w-full px-4 py-3 bg-white border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 shadow-sm">
                        <BookOpen size={16} className="text-slate-700" />
                        <span className="text-slate-700 font-medium">View Sections</span>
                    </button>
                </div>
            </div>

            {/* subtle floating glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-2xl -z-10"></div>
        </div>
    );
}
