import Image from "next/image";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import PageIllustration from "@/components/page-illustration";
import TicketHeroImg from "@/public/images/SAFIFY ITSM Home Page-compressed-2.png";
import NetworkScan from "@/public/images/Network Scan.jpg"; // Replace with actual image paths
import ActionForm from "@/public/images/Action Form.jpg";
import TicketForm from "@/public/images/Ticket Form-resized.png";
import AssetManagement from "@/public/images/Assets Page-ITSM.png";
import Image3 from "@/public/images/Assets Page-ITSM.png";

export default function InterfaceItsm() {
    const sections = [
        {
            image: [ActionForm, TicketForm], // Two images for Reporting and Investigation
            title: "Reporting and Investigation",
            description: "Quick forms for launching tickets. More detailed action form for investigation and future preventions.",
        },
        {
            image: [AssetManagement], // Single image for Asset Management
            title: "Asset Management",
            description: "Manage and track assets across your organization. Assign to employees and locations. Bind mac addresses to network devices",
        },
        {
            image: [NetworkScan], // Single image for Feature Three
            title: "Network Scan",
            description: "Identify all active devices on your network in minutes. Easily onboard new devices directly from the network",
        },
    ];

    return (
        <section id="InterfacesItsm" className="mx-auto flex items-center justify-center relative">
            <div className="mx-auto px-4 sm:px-6">
                {sections.map((section, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 py-12`}
                        data-aos="zoom-y-out"
                        data-aos-delay={150 * (index + 1)}
                    >
                        <div className="flex gap-4 w-full md:w-1/2">
                            {/* Render the first image */}
                            <div className="rounded-xl overflow-hidden shadow-xl">
                                <Image
                                    src={section.image[0]}
                                    alt={section.title}
                                    className="w-full h-auto"
                                    width={1920}
                                    height={1080}
                                />
                            </div>

                            {/* Conditionally render the second image if it exists */}
                            {section.image.length > 1 && (
                                <div className="rounded-xl overflow-hidden shadow-xl">
                                    <Image
                                        src={section.image[1]}
                                        alt={section.title}
                                        className="w-full h-auto"
                                        width={1920}
                                        height={1080}
                                    />
                                </div>
                            )}
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="text-xl md:text-3xl font-bold mb-4">{section.title}</h2>
                            <p className="text-md md:text-lg text-gray-700">{section.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}