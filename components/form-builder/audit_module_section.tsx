"use client";
import { motion } from "framer-motion";
import { JSX } from "react";

const nodeStyles = "rounded-2xl shadow-xl px-6 py-4 text-sm font-medium bg-white/95 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-300";

const ArrowPath: React.FC<{ d: string; delay?: number }> = ({ d, delay = 0 }) => (
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
    strokeWidth={4}
    strokeLinecap="round"
  />
);

const DottedFlow: React.FC<{ d: string; delay?: number }> = ({ d, delay = 0 }) => (
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
    strokeWidth={8}
    strokeDasharray="10 16"
    strokeLinecap="round"
  />
);

const PulseEffect: React.FC<{ x: number; y: number; delay?: number }> = ({ x, y, delay = 0 }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={8}
    initial={{ r: 8, opacity: 0.8 }}
    animate={{ r: 25, opacity: 0 }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
      ease: "easeOut"
    }}
    className="fill-blue-400/30"
  />
);

export default function AuditModuleSection(): JSX.Element {
  // Adjusted coordinates for larger diagram
  const FB = { x: 280, y: 200 }; // Form Builder
  const AU = { x: 280, y: 480 }; // Audit
  const CO = { x: 780, y: 340 }; // Compliance

  // Bézier helper
  const bez = (a: any, b: any, c1x: number, c1y: number, c2x: number, c2y: number) =>
    `M ${a.x} ${a.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;

  const fbToAu = `M ${FB.x} ${FB.y + 80} L ${AU.x} ${AU.y - 80}`; // straight vertical
  const fbToCo = bez(FB, CO, 480, 180, 620, 260);
  const auToCo = bez(AU, CO, 480, 500, 640, 400);

  return (
    <section className="w-full py-16 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Audit Module
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Streamline your audit process with intelligent form building, seamless execution, 
              and automated compliance tracking. Stay inspection-ready with confidence.
            </p>
          </motion.div>
        </div>

        {/* Large Diagram Section */}
        <motion.div 
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <svg
            viewBox="0 0 1200 700"
            role="img"
            aria-label="Audit module diagram showing Form Builder linking to Audit and Compliance"
            className="w-full h-[500px] md:h-[600px]"
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
              <linearGradient id="nodeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
                <stop offset="100%" stopColor="rgba(147, 51, 234, 0.1)" />
              </linearGradient>
            </defs>

            {/* Background glow effects */}
            <circle cx={FB.x} cy={FB.y} r="120" fill="url(#nodeGradient)" opacity="0.3" />
            <circle cx={AU.x} cy={AU.y} r="120" fill="url(#nodeGradient)" opacity="0.3" />
            <circle cx={CO.x} cy={CO.y} r="140" fill="url(#nodeGradient)" opacity="0.3" />

            {/* Pulse effects */}
            <PulseEffect x={FB.x} y={FB.y} delay={0} />
            <PulseEffect x={AU.x} y={AU.y} delay={0.7} />
            <PulseEffect x={CO.x} y={CO.y} delay={1.4} />

            {/* Animated paths */}
            <DottedFlow d={fbToAu} />
            <DottedFlow d={fbToCo} delay={0.4} />
            <DottedFlow d={auToCo} delay={0.8} />

            <ArrowPath d={fbToAu} />
            <ArrowPath d={fbToCo} delay={0.4} />
            <ArrowPath d={auToCo} delay={0.8} />

            <path d={fbToAu} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />
            <path d={fbToCo} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />
            <path d={auToCo} markerEnd="url(#arrow)" className="stroke-transparent fill-none" />

            {/* Enhanced Nodes */}
            <foreignObject x={FB.x - 160} y={FB.y - 80} width={320} height={160}>
              <motion.div 
                className={`${nodeStyles} text-center`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <h3 className="text-xl font-bold text-slate-800">Form Builder</h3>
                </div>
                <ul className="text-sm text-left mt-2 space-y-1.5 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                    Create multi-page forms
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                    Link to regulatory clauses
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></span>
                    Custom audit workflow logic
                  </li>
                </ul>
              </motion.div>
            </foreignObject>

            <foreignObject x={AU.x - 160} y={AU.y - 90} width={320} height={180}>
              <motion.div 
                className={`${nodeStyles} text-center`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                  <h3 className="text-xl font-bold text-slate-800">Audit</h3>
                </div>
                <ul className="text-sm text-left mt-2 space-y-1.5 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                    Schedule audits & assign auditors
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                    Attach media as evidence
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2"></span>
                    Automate corrective actions
                  </li>
                </ul>
              </motion.div>
            </foreignObject>

            <foreignObject x={CO.x - 180} y={CO.y - 90} width={360} height={180}>
              <motion.div 
                className={`${nodeStyles} text-center`}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                  <h3 className="text-xl font-bold text-slate-800">Compliance</h3>
                </div>
                <ul className="text-sm text-left mt-2 space-y-1.5 text-slate-600">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    Track linked evidences
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    Seamless audit preparation
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    Identify coverage gaps
                  </li>
                </ul>
              </motion.div>
            </foreignObject>
          </svg>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm font-medium text-slate-600">Trusted by 500+ organizations worldwide</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}