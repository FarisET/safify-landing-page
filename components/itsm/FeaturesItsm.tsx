// components/ehs-key-features.jsx
import { FaRegCheckCircle, FaChartLine, FaRegClock, FaShieldAlt, FaTicketAlt, FaBox, FaUsers, FaChartBar, FaBell, FaCogs, FaLock, FaNetworkWired, FaAddressBook } from 'react-icons/fa';

type FeaturesItsmProps = {
  id?: string; // Allow `id` to be an optional prop
};

const FeaturesItsm: React.FC<FeaturesItsmProps> = ({ id }) => {
  const features = [
    {
      icon: <FaTicketAlt className="text-primary" />,
      title: "Incident Management",
      text: (
        <ul className="text-left space-y-2">
          <li className="font-semibold text-gray-800">
            Launch Ticket
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Link asset
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Attach image
              </li>
            </ul>
          </li>

          <li className="font-semibold text-gray-800">
            Ticket Management
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Ticket assignment
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Escalate ticket
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Track in real-time
              </li>
            </ul>
          </li>

          <li className="font-semibold text-gray-800">
            Investigation Report
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Detailed forms
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Resolution
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Root Cause Analysis
              </li>
            </ul>
          </li>

          <li className="font-semibold text-gray-800">
            Ticket Closure
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Form Approvals
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Proof of Work
              </li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      icon: <FaBox className="text-primary" />,
      title: "Asset Management",
      text: (
        <ul className="text-left space-y-2">
          <li className="font-semibold text-gray-800">
            Register asset
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Bulk upload
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Single creation
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Edit & delete
              </li>
            </ul>
          </li>

          <li className="font-semibold text-gray-800">
            Register asset type
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Create, update & delete
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                On & Off Network asset types
              </li>
            </ul>
          </li>

          <li className="font-semibold text-gray-800">
            Asset assignment
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                User assignment
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Location assignment
              </li>
            </ul>
          </li>

          <li className="font-semibold text-gray-800">
            Asset Status
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Available
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                In use
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                In repair
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Disposed
              </li>
            </ul>
          </li>

          <li className="font-semibold text-gray-800">
            Traceability
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Asset History
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Asset logs
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Linked ticket logs
              </li>
            </ul>
          </li>

        </ul>

      ),
    },

    {
      icon: <FaUsers className="text-blue-500 text-xl" />,
      title: "Knowledge Base",
      text: (
        <ul className="font-semibold text-left space-y-2">
          <li className="font-semibold text-gray-800">
            Solution Forum
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Identify repeated issues
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Quick resolution
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500 hover:text-blue-600 cursor-pointer">
                Pool of common issues
              </li>
            </ul>
          </li>
          <li className="font-semibold text-gray-800">
            Dashboard
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                Asset metrics
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                Resolution and Response Time Averages
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                Efficiencies and team performances
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                Issues and ticket patterns
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                On-demand custom metrics
              </li>

            </ul>
          </li>
          <li className="font-semibold text-gray-800">
            Reports
            <ul className="pl-6 space-y-1 text-gray-700">
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                 Tickets summary
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                Investigation reports summary
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                Assigned asset summary
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                User scores summary
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                Network scan summary
              </li>
              <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
                On-demand custom reports
              </li>


            </ul>
          </li>
        </ul>
      ),
    },
    {
      icon: <FaNetworkWired className="text-blue-500 text-xl" />,
      title: "Network Scan",
      text: (
        <ul className="font-semibold p-4 text-left space-y-2">
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Add assets directly from your network
          </li>
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Discover active devices on network
          </li>
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Agentless scanner
          </li>
        </ul>
      ),
    },
    {
      icon: <FaAddressBook className="text-blue-500 text-xl" />,
      title: "Resource Directory",
      text: (
        <ul className="font-semibold p-4 text-left space-y-2">
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            User Management
          </li>
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Site and Location Management
          </li>
        </ul>
      ),
    },

    {
      icon: <FaBell className="text-blue-500 text-xl" />,
      title: "Notifications and Alerts",
      text: (
        <ul className="p-4 font-semibold text-left space-y-2">
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Email notifications on every step of the ticket cycle from launching to closure
          </li>
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Announcements by admin to the entire user base
          </li>
        </ul>
      ),
    },
    {
      icon: <FaCogs className="text-blue-500 text-xl" />,
      title: "Customizations on Request",
      text: (
        <ul className="p-4 font-semibold text-left space-y-2">
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Custom asset fields
          </li>
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Custom alerts
          </li>
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            Dashboard additions
          </li>
          <li className="relative before:content-['➜'] before:absolute before:-left-4 before:text-blue-500">
            And much more..
          </li>
        </ul>
      ),
    },
 ];

  return (
    <section id={id} className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features of IT Service Management
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto grid-auto-flow-dense">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 space-y-4 border"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
              <div className="text-gray-700">{feature.text}</div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default FeaturesItsm;