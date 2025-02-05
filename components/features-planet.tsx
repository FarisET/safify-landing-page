import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PlanetTagImg01 from "@/public/images/planet-tag-01.png";
import PlanetTagImg02 from "@/public/images/planet-tag-02.png";
import PlanetTagImg03 from "@/public/images/planet-tag-03.png";
import PlanetTagImg04 from "@/public/images/planet-tag-04.png";
import SafifyCycleFlow from "@/public/images/safify-cycle-flow-diagram.jpg";
import { FaArrowUp, FaBiohazard, FaBook, FaChartBar, FaChevronDown, FaChevronUp, FaLaptop, FaPen, FaSign, FaSignature, FaUserInjured } from 'react-icons/fa';

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-200 md:text-4xl">
              Safify helps your teams work more efficiently together
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20 flex justify-center items-center" data-aos="zoom-y-out">
            <div className="relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full border-8 border-blue-500 animate-pulse"></div>

                {/* Center Text */}
                <div className="absolute inset-0 flex justify-center items-center">
                  <div className="text-center">
                    <h2 className="text-2xl md:text-4xl text-white">
                      Safify Incident
                    </h2>
                    <h2 className="text-2xl md:text-4xl text-white">
                      Management
                    </h2>
                  </div>
                </div>

                {/* Items Around the Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-t from-primary to-blue-500 shadow-lg rounded-lg hover:scale-105 transition-transform">
                    <i className="fas fa-exclamation-circle text-blue-500 text-lg sm:text-md mb-1"></i>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Incident Occurrence <br /> and Identification
                    </p>
                  </div>
                </div>

                <div className="absolute top-1/4 right-6 md:right-0 transform translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-t from-primary to-blue-500 shadow-lg rounded-lg hover:scale-105 transition-transform">
                    <i className="fas fa-exclamation-circle text-blue-500 text-lg sm:text-md mb-1"></i>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Categorize, Prioritize <br /> and Assign
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-6 md:right-0 transform translate-x-1/2 translate-y-1/2 text-center">
                  <div className="flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-t from-primary to-blue-500 shadow-lg rounded-lg hover:scale-105 transition-transform">
                    <i className="fas fa-exclamation-circle text-blue-500 text-lg sm:text-md mb-1"></i>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Incident Analysis <br /> and Evaluation
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
                  <div className="flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-t from-primary to-blue-500 shadow-lg rounded-lg hover:scale-105 transition-transform">
                    <i className="fas fa-exclamation-circle text-blue-500 text-lg sm:text-md mb-1"></i>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Incident Approvals <br /> and Closure
                    </p>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-6 md:left-0 transform -translate-x-1/2 translate-y-1/2 text-center">
                  <div className="flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-t from-primary to-blue-500 shadow-lg rounded-lg hover:scale-105 transition-transform">
                    <i className="fas fa-exclamation-circle text-blue-500 text-lg sm:text-md mb-1"></i>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Learning and <br /> Future Prevention
                    </p>
                  </div>
                </div>

                <div className="absolute top-1/4 left-6 md:left-0 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="flex flex-col items-center px-2 py-1 sm:px-4 sm:py-2 bg-gradient-to-t from-primary to-blue-500 shadow-lg rounded-lg hover:scale-105 transition-transform">
                    <i className="fas fa-exclamation-circle text-blue-500 text-lg sm:text-md mb-1"></i>
                    <p className="text-xs sm:text-sm font-medium text-white">
                      Proactive Incident <br /> Detection
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [&>*]:relative [&>*]:p-6 [&>*]:before:absolute [&>*]:before:bg-gray-800 [&>*]:before:[block-size:100vh] [&>*]:before:[inline-size:1px] [&>*]:before:[inset-block-start:0] [&>*]:before:[inset-inline-start:-1px] [&>*]:after:absolute [&>*]:after:bg-gray-800 [&>*]:after:[block-size:1px] [&>*]:after:[inline-size:100vw] [&>*]:after:[inset-block-start:-1px] [&>*]:after:[inset-inline-start:0] md:[&>*]:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaUserInjured className="text-primary" />
                <span>Incident Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Tracks and resolves IT incidents to minimize downtime. Ticket creation, prioritization,
                escalation, & investigations.

              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaBiohazard className="text-primary" />
                <span>Problem Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Identifies root causes of recurring incidents to prevent future occurrences.
                Root Cause Analysis (RCA), Investigation forms, & problem-resolution mapping

              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaBook className="text-primary" />
                <span>Knowledge Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Provides a centralized repository of solutions and best practices. Close incidents quicker
                with quick resolutions.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaLaptop className="text-primary" />
                <span>Asset Management</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Tracks IT assets and their relationships within the system. Assign and track
                asset history and link with incidents.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaPen className="text-primary" />
                <span>Incident Reporting and Investigation</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Captures and tracks workplace incidents, near-misses, and hazards. Assign and investigate for future preventions.

              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <FaChartBar className="text-primary" />
                <span>Analytics and Dashboard</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Observe various trends, key KPIs and efficiencies through data driven dashboards.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
