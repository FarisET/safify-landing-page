"use client";
import { motion } from "framer-motion";
import { JSX } from "react";

const nodeStyles =
  "rounded-2xl shadow-xl px-6 py-5 text-base font-medium bg-white/95 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-300";

const ArrowPath: React.FC<{ d: string; delay?: number }> = ({
  d,
  delay = 0,
}) => (
  <motion.path
    d={d}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
    className="stroke-gradient-to-r from-blue-500 to-purple-600 fill-none"
    strokeWidth={3.5}
    strokeLinecap="round"
  />
);

const DottedFlow: React.FC<{ d: string; delay?: number }> = ({
  d,
  delay = 0,
}) => (
  <motion.path
    d={d}
    initial={{ pathLength: 0 }}
    animate={{ pathLength: 1 }}
    transition={{
      duration: 3.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
      delay,
    }}
    className="stroke-blue-400/40 fill-none"
    strokeWidth={7}
    strokeDasharray="8 14"
    strokeLinecap="round"
  />
);

const PulseEffect: React.FC<{ x: number; y: number; delay?: number }> = ({
  x,
  y,
  delay = 0,
}) => (
  <motion.circle
    cx={x}
    cy={y}
    r={10}
    initial={{ r: 10, opacity: 0.8 }}
    animate={{ r: 28, opacity: 0 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
      ease: "easeOut",
    }}
    className="fill-blue-400/30"
  />
);

export default function AuditModuleSection(): JSX.Element {
  // Node coordinates (kept wide for right side scaling)
  const FB = { x: 300, y: 200 };
  const AU = { x: 300, y: 480 };
  const CO = { x: 820, y: 340 };

  const bez = (a: any, b: any, c1x: number, c1y: number, c2x: number, c2y: number) =>
    `M ${a.x} ${a.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;

  const fbToAu = `M ${FB.x} ${FB.y + 80} L ${AU.x} ${AU.y - 80}`;
  const fbToCo = bez(FB, CO, 500, 180, 680, 260);
  const auToCo = bez(AU, CO, 500, 500, 680, 400);

  return (
    <section className="w-full py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
        {/* Left Content Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-sm md:text-base"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5">
            Unified Audit & Compliance
          </h2>
          <p className="text-base text-slate-600 mb-5 leading-relaxed">
            Manage audits and compliance from one connected workspace. Build
            structured audit forms, run inspections with ease, and map findings
            directly to compliance requirements.
          </p>

          <ul className="space-y-3 text-slate-700">
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 mr-3"></span>
              Centralize compliance data and keep regulatory evidence always
              ready.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-purple-500 mr-3"></span>
              Automate audit workflows, corrective actions, and approvals to
              reduce prep time.
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 mt-2 rounded-full bg-emerald-500 mr-3"></span>
              Identify control gaps and strengthen coverage with real-time
              insights.
            </li>
          </ul>
        </motion.div>

        {/* Right Diagram Column */}

        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <svg
            viewBox="0 0 1000 600"
            role="img"
            aria-label="Audit module diagram showing Form Builder linking to Audit and Compliance"
            className="w-full"
          >
            <defs>
              <marker
                id="arrow"
                viewBox="0 0 12 12"
                refX="11"
                refY="6"
                markerWidth="10"
                markerHeight="10"
                orient="auto-start-reverse"
              >
                <path d="M 0 0 L 12 6 L 0 12 z" className="fill-blue-500" />
              </marker>
              <linearGradient
                id="nodeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
              </linearGradient>
            </defs>

            {/* Glows */}
            <circle cx={FB.x} cy={FB.y} r="130" fill="url(#nodeGradient)" opacity="0.3" />
            <circle cx={AU.x} cy={AU.y} r="130" fill="url(#nodeGradient)" opacity="0.3" />
            <circle cx={CO.x} cy={CO.y} r="150" fill="url(#nodeGradient)" opacity="0.3" />

            {/* Pulses */}
            <PulseEffect x={FB.x} y={FB.y} delay={0} />
            <PulseEffect x={AU.x} y={AU.y} delay={0.7} />
            <PulseEffect x={CO.x} y={CO.y} delay={1.4} />

            {/* Arrows */}
            <DottedFlow d={fbToAu} />
            <DottedFlow d={fbToCo} delay={0.4} />
            <DottedFlow d={auToCo} delay={0.8} />
            <ArrowPath d={fbToAu} />
            <ArrowPath d={fbToCo} delay={0.4} />
            <ArrowPath d={auToCo} delay={0.8} />
            <path d={fbToAu} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />
            <path d={fbToCo} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />
            <path d={auToCo} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />

            {/* Nodes — bigger text */}
            <foreignObject x={FB.x - 170} y={FB.y - 90} width={340} height={180}>
              <motion.div
                className={`${nodeStyles} text-center`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-slate-800">Form Builder</h3>
                <p className="text-xl text-base text-slate-600 mt-2 leading-snug">
                  Multi-page forms, regulatory clause mapping, workflow logic
                </p>
              </motion.div>
            </foreignObject>

            <foreignObject x={AU.x - 170} y={AU.y - 100} width={340} height={200}>
              <motion.div
                className={`${nodeStyles} text-center`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-slate-800">Audit</h3>
                <p className="text-xl text-base text-slate-600 mt-2 leading-snug">
                  Schedule audits, assign auditors, attach evidence, automate
                  corrective actions
                </p>
              </motion.div>
            </foreignObject>

            <foreignObject x={CO.x - 190} y={CO.y - 100} width={380} height={200}>
              <motion.div
                className={`${nodeStyles} text-center`}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-slate-800">Compliance</h3>
                <p className="text-xl text-base text-slate-600 mt-2 leading-snug">
                  Evidence tracking, seamless audit readiness, identify gaps,
                  strengthen coverage
                </p>
              </motion.div>
            </foreignObject>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
