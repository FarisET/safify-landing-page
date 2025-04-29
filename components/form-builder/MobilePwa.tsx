
import Image from "next/image";

const MobilePWA = () => {
    return (
        <section className="py-12 px-4 md:px-0" style={{ backgroundColor: '#e9e8e9' }}>
            <div className="container px-8 mx-auto flex flex-col lg:flex-row items-center gap-8">
                {/* Left Content */}
                <div className="w-full flex justify-center px-4">
                    <div className="max-w-md text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
                            Offline Access from Your Mobile
                        </h2>
                        <p className="text-gray-700 font-medium mb-4">
                            Whether you're <span className="font-bold text-black">on-site</span> or in <span className="font-bold text-primary">remote areas</span>,
                            <span className="font-bold"> Safify </span> ensures your operations never skip a beat.
                        </p>
                        <p className="text-gray-700 font-medium">
                            <span className="font-bold text-black">Data syncs</span> back to the cloud when reconnected, maintaining records in <span className="font-bold">real-time</span>.
                        </p>
                    </div>
                </div>



                {/* Right Image - Made much smaller */}
                <div className="w-full lg:w-1/2">
                    <div className="relative overflow-hidden rounded-xl mx-auto"
                        style={{ width: '300px', aspectRatio: '1024/1536' }}>
                        <Image
                            src="/images/form-builder-pwa-gray.png"
                            alt="Mobile Form Preview"
                            width={1024}
                            height={1536}
                            className="object-cover w-full h-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MobilePWA;