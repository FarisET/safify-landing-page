import SafetyIcon from '@/public/images/safify-AI-Icon.svg'

export default function CircularFlow() {
    return (
        <section className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="relative w-96 h-96">
                {/* Outer Circle */}
                <div className="absolute inset-0 rounded-full border-8 border-blue-500 animate-pulse"></div>

                {/* Center Text */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-blue-800">
                            Safify Incident
                        </h2>
                        <h2 className="text-2xl font-bold text-blue-800">
                            Management
                        </h2>
                    </div>
                </div>

                {/* Items Around the Circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="flex flex-col items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
                        <i className="fas fa-exclamation-circle text-blue-500 text-xl mb-1"></i>
                        <p className="text-sm font-medium text-gray-800">
                            Incident Occurrence <br /> and Identification
                        </p>
                    </div>
                </div>

                <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="flex flex-col items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
                        <i className="fas fa-tasks text-blue-500 text-xl mb-1"></i>
                        <p className="text-sm font-medium text-gray-800">
                            Categorize, Prioritize <br /> and Assign
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 text-center">
                    <div className="flex flex-col items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
                        <i className="fas fa-chart-bar text-blue-500 text-xl mb-1"></i>
                        <p className="text-sm font-medium text-gray-800">
                            Incident Analysis <br /> and Evaluation
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-center">
                    <div className="flex flex-col items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
                        <i className="fas fa-check-circle text-blue-500 text-xl mb-1"></i>
                        <p className="text-sm font-medium text-gray-800">
                            Incident Approvals <br /> and Closure
                        </p>
                    </div>
                </div>

                <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 text-center">
                    <div className="flex flex-col items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
                        <i className="fas fa-lightbulb text-blue-500 text-xl mb-1"></i>
                        <p className="text-sm font-medium text-gray-800">
                            Learning and <br /> Future Prevention
                        </p>
                    </div>
                </div>

                <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="flex flex-col items-center px-4 py-2 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform">
                        <i className="fas fa-search text-blue-500 text-xl mb-1"></i>
                        <p className="text-sm font-medium text-gray-800">
                            Proactive Incident <br /> Detection
                        </p>
                    </div>
                </div>
            </div>
        </section>

    );
}
