import Image from "next/image";
import { FaArrowRight, FaCog, FaDatabase, FaMagic, FaRegCheckCircle, FaShieldAlt, FaUserCheck } from 'react-icons/fa';

export default function Services() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
              Services
            </h2>
            <p className="text-lg text-gray-400">
              Streamlining Compliance and Automating Enterprise Workflows
            </p>
          </div>

          {/* Services Grid - 2 Rows Structure */}
          <div className="space-y-8">
            {/* Row 1: Compliance Automation */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Compliance Automation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <FaRegCheckCircle className="text-primary text-2xl mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Regulatory Audit Automation</h3>
                  <p className="text-gray-400 text-sm">
                    Digitize and automate audits, inspections, and compliance checks to meet regulatory standards with ease.
                  </p>
                </div>
                <div className="text-center">
                  <FaMagic className="text-primary text-2xl mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Intelligent Form & Data Capture</h3>
                  <p className="text-gray-400 text-sm">
                    Build custom, forms with our form building tool with validation, policy linking and seamless audit workflow integration.
                  </p>
                </div>
                <div className="text-center">
                  <FaShieldAlt className="text-primary text-2xl mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Industry-Specific Solutions</h3>
                  <p className="text-gray-400 text-sm">
                    Tailored audit templates and checklists for manufacturing, healthcare, and other sectors.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Workflow Automation */}
            <div className="bg-gray-900 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Workflow Automation</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <FaUserCheck className="text-primary text-2xl mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Automation Strategy</h3>
                  <p className="text-gray-400 text-sm">
                     We analyze your existing processes, identify automation opportunities, and design a strategic roadmap for integrating AI and digital workflows into your enterprise ecosystem.                  </p>
                </div>
                {/* <div className="text-center">
                  <FaDatabase className="text-primary text-2xl mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">Custom Solutions</h3>
                  <p className="text-gray-400 text-sm">
                    Build targeted digital solutions to address specific enterprise automation challenges.
                  </p>
                </div> */}
                <div className="text-center">
                  <FaCog className="text-primary text-2xl mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">AI-Powered Workflows</h3>
                  <p className="text-gray-400 text-sm">
                    Placing the automation strategy into action, we design and deploy intelligent workflows using AI Agents to automate operational processes.
                  </p>
                </div>
                <div className="text-center">
                  <FaArrowRight className="text-primary text-2xl mx-auto mb-3" />
                  <h3 className="text-white font-medium mb-2">System Integration & Support</h3>
                  <p className="text-gray-400 text-sm">
                    A secure, privacy‑first integration is established with your systems and data sources to fully realize your workflow automation goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Workflow Diagram */}
          <div className="flex items-center justify-center pt-16 md:pt-20" data-aos="zoom-y-out">
            <div className="relative">
              <div className="relative h-72 w-72 md:h-96 md:w-96">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full border-8 border-blue-500 animate-pulse"></div>

                {/* Center Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-2xl text-white md:text-4xl">
                      AI Workflow
                    </h2>
                    <h2 className="text-2xl text-white md:text-4xl">
                      Automation
                    </h2>
                  </div>
                </div>

                {/* Items Around the Circle */}
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform text-center">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaDatabase className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Data Input & <br /> Integration
                    </p>
                  </div>
                </div>

                <div className="absolute right-6 top-1/4 -translate-y-1/2 translate-x-1/2 transform text-center md:right-0">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaMagic className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      AI Processing
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-6 translate-y-1/2 translate-x-1/2 transform text-center md:right-0">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaCog className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Automated <br /> Action
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform text-center">
                 <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaDatabase className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Data Output & <br /> Integration
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-6 -translate-x-1/2 translate-y-1/2 transform text-center md:left-0">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaUserCheck className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Human in <br /> the Loop
                    </p>
                  </div>
                </div>

                <div className="absolute left-6 top-1/4 -translate-x-1/2 -translate-y-1/2 transform text-center md:left-0">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaArrowRight className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Continuous <br /> Optimization
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}