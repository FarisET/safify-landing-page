import { FaLaptopCode, FaBuilding, FaBriefcaseMedical, FaRobot, FaBusinessTime } from "react-icons/fa";

const BusinessCategoriesMobile = () => {
  return (
    <div className="text-center py-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Industries</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          <FaLaptopCode className="text-primary text-3xl" />
          <p className="text-gray-800 font-semibold text-sm mt-2">Safify IT</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBuilding className="text-primary text-3xl" />
          <p className="text-gray-800 font-semibold text-sm mt-2">Safify Construction</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBriefcaseMedical className="text-primary text-3xl" />
          <p className="text-gray-800 font-semibold text-sm mt-2">Safify Health</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBusinessTime className="text-primary text-3xl" />
          <p className="text-gray-800 font-semibold text-sm mt-2">Safify Corporate</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCategoriesMobile;
