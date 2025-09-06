"use client";

import React from "react";
import {
    TrendingUp,
    TrendingDown,
    BarChart3,
    PieChart,
    Activity,
} from "lucide-react";

export default function AnalyticsChart() {
    const complianceData = [
        { month: "Jan", compliant: 85, nonCompliant: 15 },
        { month: "Feb", compliant: 88, nonCompliant: 12 },
        { month: "Mar", compliant: 92, nonCompliant: 8 },
        { month: "Apr", compliant: 89, nonCompliant: 11 },
        { month: "May", compliant: 94, nonCompliant: 6 },
        { month: "Jun", compliant: 96, nonCompliant: 4 },
    ];

    const auditData = [
        { category: "Finance", completed: 45, pending: 5, overdue: 2 },
        { category: "Human Resource", completed: 38, pending: 8, overdue: 1 },
        { category: "Inpatient (IPD)", completed: 42, pending: 3, overdue: 0 },
        { category: "Outpatient (OPD)", completed: 35, pending: 7, overdue: 3 },
    ];

    return (
        <div className="relative w-full sm:w-[350px] sm:h-[300px] md:w-[500px] md:h-[500px] mx-auto transform rotate-0 hover:rotate-0 transition-transform duration-300 scale-[0.92]">
            <div className="w-full h-full bg-white border border-slate-200 rounded-2xl shadow-xl p-6 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h3 className="text-lg font-semibold text-slate-800">Compliance Analytics</h3>
                        <p className="text-sm text-slate-500">Real-time audit insights</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-slate-600">Live</span>
                    </div>
                </div>

                {/* Charts Grid */}
                <div className="flex-1 grid grid-cols-2 gap-4">
                    {/* Compliance Trend Chart */}
                    <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-medium text-slate-700">Compliance Trend</h4>
                            <TrendingUp size={16} className="text-green-600" />
                        </div>

                        {/* Simple Bar Chart */}
                        <div className="space-y-2">
                            {complianceData.slice(-4).map((data, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-xs text-slate-600 w-8">{data.month}</span>
                                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                                        <div
                                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                                            style={{ width: `${data.compliant}%` }}
                                        ></div>
                                    </div>
                                    <span className="text-xs font-medium text-slate-700">{data.compliant}%</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Audit Status Pie Chart */}
                    <div className="bg-slate-50 rounded-lg p-4">
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

                    {/* Performance Metrics */}
                    <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-medium text-slate-700">Performance</h4>
                            <Activity size={16} className="text-purple-600" />
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-slate-600">Coverage</span>
                                    <span className="text-sm font-semibold text-green-600">98.5%</span>
                                </div>
                                <span className="text-xs text-slate-600">Avg. Time to Complete Audits</span>
                                <span className="text-sm font-semibold text-slate-800">2.3s</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <span className="text-xs text-slate-600">Reduced Audit Findings</span>
                                <span className="text-sm font-semibold text-blue-600">65%</span>
                            </div>
                        </div>
                    </div>

                    {/* Category Breakdown */}
                    <div className="bg-slate-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-medium text-slate-700">Departments</h4>
                            <BarChart3 size={16} className="text-orange-600" />
                        </div>

                        <div className="space-y-2">
                            {auditData.map((data, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <span className="text-xs text-slate-600">{data.category}</span>
                                    <div className="flex items-center gap-1">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-xs font-medium text-slate-700">{data.completed}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle floating glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/6 to-purple-500/6 rounded-2xl blur-2xl -z-10"></div>
        </div>
    );
}
