"use client";

import { motion } from "framer-motion";
import { JSX } from "react";

const nodeStyles =
  "rounded-xl shadow-lg px-4 py-3 text-sm font-medium bg-white/90 backdrop-blur border border-slate-200";

const ArrowPath: React.FC<{ d: string; delay?: number }> = ({ d, delay = 0 }) => (
  <motion.path
    d={d}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{
      duration: 2.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
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
    transition={{
      duration: 2.2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
    className="stroke-blue-500/30 fill-none"
    strokeWidth={6}
    strokeDasharray="6 12"
    strokeLinecap="round"
  />
);

export default function AuditModuleSection(): JSX.Element {
  // Coordinates in viewBox
  const FB = { x: 220, y: 150 }; // Form Builder
  const AU = { x: 220, y: 380 }; // Audit
  const CO = { x: 620, y: 260 }; // Compliance

  // Bézier helper
  const bez = (a: any, b: any, c1x: number, c1y: number, c2x: number, c2y: number) =>
    `M ${a.x} ${a.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;

  const fbToAu = `M ${FB.x} ${FB.y + 60} L ${AU.x} ${AU.y - 60}`; // straight vertical
  const fbToCo = bez(FB, CO, 360, 140, 480, 200);
  const auToCo = bez(AU, CO, 360, 400, 500, 300);

  return (
    <section className="w-full py-10 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
        {/* Left Column: Tagline + Description */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-800">
            <span className="text-blue-600">Audit Module</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-lg">
            Manage and execute audits seamlessly. Link audit forms with media
            evidence, evaluate responses, track compliance coverage, and automate
            follow-ups — ensuring your organization stays inspection-ready.
          </p>
        </div>

        {/* Right Column: Diagram */}
        <div className="relative rounded-2xl bg-white p-4 md:p-6 border border-slate-200 shadow-sm">
          <svg
            viewBox="0 0 1000 600"
            role="img"
            aria-label="Audit module diagram showing Form Builder linking to Audit and Compliance"
            className="w-full h-[420px]"
          >
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 10 10"
                refX="9"
                refY="5"
                markerWidth="8"
                markerHeight="8"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 10 5 L 0 10 z" className="fill-blue-500/80" />
              </marker>
            </defs>

            {/* Animated paths */}
            <DottedFlow d={fbToAu} />
            <DottedFlow d={fbToCo} delay={0.3} />
            <DottedFlow d={auToCo} delay={0.5} />

            <ArrowPath d={fbToAu} />
            <ArrowPath d={fbToCo} delay={0.3} />
            <ArrowPath d={auToCo} delay={0.5} />

            <path d={fbToAu} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />
            <path d={fbToCo} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />
            <path d={auToCo} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />

            {/* Nodes */}
            <foreignObject x={FB.x - 120} y={FB.y - 60} width={240} height={120}>
              <div className={`${nodeStyles} text-center`}>
                <h3 className="text-lg font-semibold">Form Builder</h3>
                <ul className="text-xs text-left mt-1 list-disc list-inside space-y-0.5">
                  <li>Create multi-page forms</li>
                  <li>Link to regulatory clauses</li>
                  <li>Custom audit workflow logic</li>
                </ul>
              </div>
            </foreignObject>

            <foreignObject x={AU.x - 120} y={AU.y - 60} width={240} height={140}>
              <div className={`${nodeStyles} text-center`}>
                <h3 className="text-lg font-semibold">Audit</h3>
                <ul className="text-xs text-left mt-1 list-disc list-inside space-y-0.5">
                  <li>Schedule audits & assign auditors</li>
                  <li>Attach media as evidence</li>
                  <li>Automate corrective actions</li>
                </ul>
              </div>
            </foreignObject>

            <foreignObject x={CO.x - 140} y={CO.y - 60} width={280} height={140}>
              <div className={`${nodeStyles} text-center`}>
                <h3 className="text-lg font-semibold">Compliance</h3>
                <ul className="text-xs text-left mt-1 list-disc list-inside space-y-0.5">
                  <li>Track linked evidences</li>
                  <li>Seamless audit preparation</li>
                  <li>Identify coverage gaps</li>
                </ul>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </section>
  );
}
