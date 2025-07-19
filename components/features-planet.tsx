import Image from "next/image";
import { FaArrowRight, FaCog, FaDatabase, FaMagic, FaRegCheckCircle, FaUserCheck } from 'react-icons/fa';

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

          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaRegCheckCircle className="text-primary" />
                <span>Compliance & Audit Automation</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Leverage our products and custom services to digitize and automate audits, inspections, and compliance checks, ensuring your organization meets regulatory standards with ease.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaUserCheck className="text-primary" />
                <span>Expert-Led Automation Strategy

                </span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Our experts work with you to analyze existing processes, identify automation opportunities, and design a strategic roadmap for integrating AI and digital workflows into your enterprise ecosystem.
              </p>
            </article>

            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaDatabase className="text-primary" />
                <span>Custom Solutions</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Beyond our core products, we build small, targeted digital solutions to address specific enterprise automation challenges and streamline niche operational processes.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaMagic className="text-primary" />
                <span>Intelligent Form & Data Capture</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Utilize our Safify FormBuilder and custom development services to create dynamic, intelligent forms that simplify data collection, validation, and integration into your automated workflows.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaCog className="text-primary" />
                <span>AI-Powered Workflow Automation</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                We design and deploy intelligent workflows using AI Agents to automate complex enterprise processes, from complex calculations to repitive operational tasks.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaArrowRight className="text-primary" />
                <span>System Integration & Support</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                We provide end-to-end support for our SaaS products and automation services, including seamless integration with your existing systems to ensure a unified and efficient operational environment.
              </p>
            </article>
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
                      AI Processing & <br /> Analysis
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-6 translate-y-1/2 translate-x-1/2 transform text-center md:right-0">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaCog className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Automated Action<br /> & Routing
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 transform text-center">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaRegCheckCircle className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Validation &<br /> Approvals
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-6 -translate-x-1/2 translate-y-1/2 transform text-center md:left-0">
                  <div className="flex flex-col items-center rounded-lg bg-gradient-to-t from-primary to-blue-500 px-2 py-1 shadow-lg transition-transform hover:scale-105 sm:px-4 sm:py-2">
                    <FaUserCheck className="mb-1 text-lg text-white sm:text-xl" />
                    <p className="text-xs font-medium text-white sm:text-sm">
                      Human-in-the-Loop <br /> Review
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