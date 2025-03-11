"use client";
//comment
import { useState, useEffect } from "react";
import Image from "next/image"; // Import Next.js Image component
import LSC from "@/public/images/Safify Form Builder.png"; // Import your image
import { CheckCircle } from "react-feather"; // Import icons from react-feather

export default function LaunchingSoonCard() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleClose = () => {
    setIsVisible(false);
  };

  // Calculate the countdown timer
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 20); // Set target date to 30 days from now

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 right-0 m-4 bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-xl sm:max-w-2xl border border-gray-200 z-50">
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl"
      >
        &times;
      </button>
      <div className="w-full h-40 sm:h-64 relative rounded-t-lg overflow-hidden flex-start">
      <Image
          src={LSC}
          alt="Hero Image"
          layout="fill"
          objectFit="contain"
          objectPosition="left" // Use objectFit="contain" to fit the image properly
          quality={100}
        />
      </div>
      <h2 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 bg-gradient-to-r from-blue-500 to-[#1893F8] bg-clip-text text-transparent">
        Safify Form Builder
      </h2>
      <p className="text-gray-500 mt-2 sm:mt-3 text-base sm:text-lg">
        Build any type of Inspection, Audit or Incident Form to ensure Compliance and Safety
      </p>
      <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
        <li className="flex items-center space-x-2 sm:space-x-3">
          <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <span className="text-gray-700 text-base sm:text-lg">
            Powerful Web-based Form Builder
          </span>
        </li>
        <li className="flex items-center space-x-2 sm:space-x-3">
          <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <span className="text-gray-700 text-base sm:text-lg">
            Signatures, location, multiple choice, and many other response type options
          </span>
        </li>
        <li className="flex items-center space-x-2 sm:space-x-3">
          <CheckCircle className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <span className="text-gray-700 text-base sm:text-lg">
            Share with your frontline workers to fill using the offline-supported mobile app
          </span>
        </li>
      </ul>
      <div className="mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-500 to-[#1893F8] bg-clip-text text-transparent">
          Launching In
        </h3>
        <div className="flex space-x-3 sm:space-x-4 mt-2 sm:mt-3">
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-[#1893F8] bg-clip-text text-transparent">
              {timeLeft.days}
            </span>
            <span className="block text-sm text-gray-500">Days</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-[#1893F8] bg-clip-text text-transparent">
              {timeLeft.hours}
            </span>
            <span className="block text-sm text-gray-500">Hours</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-[#1893F8] bg-clip-text text-transparent">
              {timeLeft.minutes}
            </span>
            <span className="block text-sm text-gray-500">Minutes</span>
          </div>
          <div className="text-center">
            <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-[#1893F8] bg-clip-text text-transparent">
              {timeLeft.seconds}
            </span>
            <span className="block text-sm text-gray-500">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}