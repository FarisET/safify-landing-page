"use client";

import { motion } from "framer-motion";
import FormQuestionImg from "@/public/images/mobile-preview-qs-selected.png";
import HvacImg from "@/public/images/hvac-pressure-evidence.png";
import Image from "next/image";
import { JSX } from "react";
/**
 * TriadicHealthcareDiagram.tsx
 * - Fixed bez helper signature and corrected call sites
 * - Self-contained component (SVG + nodes + animated paths)
 *
 * Requirements: framer-motion, Tailwind (optional for styling)
 */

const nodeStyles =
    "rounded-2xl shadow-lg px-4 py-3 text-sm font-medium bg-white/90 backdrop-blur border border-slate-200";

const glow = "drop-shadow-[0_0_10px_rgba(59,130,246,0.45)]";

const ArrowPath: React.FC<{ d: string; delay?: number }> = ({ d, delay = 0 }) => (
    <motion.path
        d={d}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay }}
        className="stroke-blue-500/80 fill-none"
        strokeWidth={3}
        strokeLinecap="round"
    />
);

const DottedFlow: React.FC<{ d: string; delay?: number }> = ({ d, delay = 0 }) => (
    <motion.path
        d={d}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse", delay }}
        className="stroke-blue-500/40 fill-none"
        strokeWidth={6}
        strokeDasharray="6 12"
        strokeLinecap="round"
    />
);

export default function TriadicHealthcareDiagram(): JSX.Element {
    // Coordinates in viewBox (0..1000 x 0..600)
    const Q = { x: 140, y: 300 }; // Form Question
    const C = { x: 460, y: 300 }; // Internal Control
    const R1 = { x: 820, y: 170 };
    const R2 = { x: 820, y: 300 };
    const R3 = { x: 820, y: 430 };

    // Bezier helper: a -> b with two control points (c1x,c1y) and (c2x,c2y)
    const bez = (a: { x: number; y: number }, b: { x: number; y: number }, c1x: number, c1y: number, c2x: number, c2y: number) =>
        `M ${a.x} ${a.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;

    // Provide exactly 4 numbers per call (two control points)
    const qToC = bez(Q, C, 260, 300, 340, 300);
    const cToR1 = bez(C, R1, 560, 260, 700, 200);
    const cToR2 = bez(C, R2, 560, 300, 700, 300);
    const cToR3 = bez(C, R3, 560, 340, 700, 400);



    // Add new coordinates
    const Media = { x: Q.x + 80, y: Q.y + 60 }; // approximate position of "Media" footer inside the image
    const Evidence = { x: 420, y: 480 };        // evidence image node position

    const mediaToEvidence = bez(Media, Evidence, 280, 400, 360, 440);


    return (
        <section id="multi-framework-audit" className="w-full min-h-[520px] grid place-items-center p-6 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="w-full max-w-5xl mx-auto">
                <div className="mb-6 md:justify-items-center">
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-800 md:text-center">
                        How it works: <span className="text-blue-600">Form → Control → Regulation</span>
                    </h1>
                    <p className="text-slate-600 max-w-2xl mt-2 md:text-center">
                        Each form answer becomes auditable evidence: a question connects to an internal control, which maps to one or more clauses
                        - <strong><em>multi-framework compliance made simple</em></strong>.
                    </p>

                </div>

                <div className="relative rounded-2xl bg-white p-4 md:p-6 border border-slate-200 shadow-sm">
                    <svg
                        viewBox="0 0 1000 650"
                        role="img"
                        aria-label="Animated diagram showing a Form Question node linking to an Internal Control, which fans out to three clauses"
                        className="w-full"
                    >
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                            <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse">
                                <path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-500/80" />
                            </marker>
                        </defs>

                        {/* Flow paths */}
                        <DottedFlow d={qToC} />
                        <DottedFlow d={cToR1} delay={0.3} />
                        <DottedFlow d={cToR2} delay={0.45} />
                        <DottedFlow d={cToR3} delay={0.6} />
                        <DottedFlow d={mediaToEvidence} delay={0.75} />



                        <ArrowPath d={qToC} />
                        <ArrowPath d={cToR1} delay={0.3} />
                        <ArrowPath d={cToR2} delay={0.45} />
                        <ArrowPath d={cToR3} delay={0.6} />
                        <ArrowPath d={mediaToEvidence} delay={0.75} />


                        {/* Invisible paths for arrowheads */}
                        <path d={qToC} markerEnd="url(#arrow)" className="fill-none stroke-transparent" />
                        <path d={cToR1} markerEnd="url(#arrow)" className="fill-none stroke-transparent" />
                        <path d={cToR2} markerEnd="url(#arrow)" className="fill-none stroke-transparent" />
                        <path d={cToR3} markerEnd="url(#arrow)" className="fill-none stroke-transparent" />
                        <path d={mediaToEvidence} markerEnd="url(#arrow)" className="fill-none stroke-transparent" />

                        {/* Nodes */}
                        {/* Image node */}
                        {/* Title placed above the node */}
                        <text
                            x={Q.x + 25}    // tweak so it aligns with image
                            y={Q.y - 100}   // position above the image box
                            textAnchor="middle"
                            className="fill-blue-600 text-md font-bold"
                        >
                            Form
                        </text>
                        <foreignObject
                            x={Q.x - 100}   // shift left so the image is centered around Q.x
                            y={Q.y - 80}    // shift up so the image is centered around Q.y
                            width={250}     // explicit width
                            height={214}    // explicit height
                        >
                            <div className="flex flex-col w-full h-full items-center justify-center">
                                <Image
                                    src={FormQuestionImg}
                                    alt="Primary Forms Interface"
                                    unoptimized
                                    className="border border-slate-400 rounded-xl shadow-md"
                                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                />
                            </div>

                        </foreignObject>

                        {/* Evidence node */}
                        <foreignObject
                            x={Evidence.x - 80}
                            y={Evidence.y - 60}
                            width={220} // Increased width to accommodate overflow
                            height={170} // Increased height to accommodate overflow
                        >
                            <div className="relative w-[180px] h-[130px] flex flex-col items-center justify-center border border-slate-400 rounded-xl shadow-md bg-white">
                                {/* Sticker top-right */}
                                <div className="absolute -top-1 right-2">
                                    <span className="bg-blue-600 text-white text-[10px] font-semibold px-2 py-1 rounded-sm shadow-md rotate-12">
                                        Evidence
                                    </span>
                                </div>
                                {/* Evidence Image */}
                                <Image
                                    src={HvacImg} // replace with your attached evidence img
                                    alt="Evidence Attachment"
                                    unoptimized
                                    style={{ width: "100%", height: "100%", objectFit: "contain" }}
                                />
                                {/* Floating footer card (overlapping outside) */}
                                <div className="absolute -bottom-6 -right-6 bg-white border border-slate-300 shadow-lg rounded-lg px-3 py-1.5 text-[10px] text-slate-700 w-[150px] z-10">
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs">📅</span>
                                        <span>2025-09-03 14:22</span>
                                    </div>
                                    <div className="flex items-center gap-1 mt-0.5">
                                        <span className="text-xs">👤</span>
                                        <span>Inspected by: <span className="font-medium">Bilal Philips</span></span>
                                    </div>
                                </div>
                            </div>
                        </foreignObject>


                        {/* Title for Internal Control */}
                        <text
                            x={C.x}
                            y={C.y - 100}
                            textAnchor="middle"
                            className="fill-blue-600 text-md font-bold"
                        >
                            Internal Control/Policy
                        </text>
                        <foreignObject x={C.x - 120} y={C.y - 42} width="240" height="110">
                            <div className={`${nodeStyles} ${glow} text-slate-800`}>
                                <div className="text-xs uppercase tracking-wide text-slate-500">Internal Control</div>
                                <div className="mt-0.5">HVAC & Isolation Room Pressure Monitoring SOP</div>
                                {/* <div className="mt-1 text-[11px] text-slate-500">Owner: Facilities | Frequency: Daily</div> */}
                            </div>
                        </foreignObject>


                        {/* Title for Regulatory Clause 2 */}
                        <text
                            x={R2.x}
                            y={R2.y - 200}
                            textAnchor="middle"
                            className="fill-blue-600 text-md font-bold"
                        >
                            Regulatory Clause
                        </text>
                        <foreignObject x={R1.x - 150} y={R1.y - 40} width="300" height="115">
                            <div className={`${nodeStyles} text-slate-800`}>
                                <div className="text-xs uppercase tracking-wide text-slate-500">Regulatory Clause</div>
                                <div className="mt-0.5">SHCC: Infection Prevention & Control — Airborne Isolation</div>
                                <div className="mt-1 text-[12px] text-emerald-600">Local pack</div>
                            </div>
                        </foreignObject>

                        <foreignObject x={R2.x - 150} y={R2.y - 40} width="300" height="115">
                            <div className={`${nodeStyles} text-slate-800`}>
                                <div className="text-xs uppercase tracking-wide text-slate-500">Regulatory Clause</div>
                                <div className="mt-0.5">ISO 15190: Safety in medical laboratories — Ventilation/pressure</div>
                                <div className="mt-1 text-[12px] text-emerald-600">Cross-mapped framework</div>
                            </div>
                        </foreignObject>

                        <foreignObject x={R3.x - 150} y={R3.y - 40} width="300" height="115">
                            <div className={`${nodeStyles} text-slate-800`}>
                                <div className="text-xs uppercase tracking-wide text-slate-500">Regulatory Clause</div>
                                <div className="mt-0.5">CDC/WHO IPC Guidance: Negative-pressure rooms</div>
                                <div className="mt-1 text-[12px] text-emerald-600">Best practice reference</div>
                            </div>
                        </foreignObject>
                    </svg>


                </div>
            </div>
        </section>
    );
}