
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

                        {/* Offline indicator icons */}
                        <div className="mt-6 flex flex-wrap items-center gap-3" role="list" aria-label="Offline capability indicators">
                            {/* Wi‑Fi Off */}
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-black shadow-sm" role="listitem">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                                    <path d="M1 1l22 22" strokeLinecap="round"/>
                                    <path d="M2.1 8.1A16 16 0 0 1 12 4c3.3 0 6.3 1 8.9 2.8" strokeLinecap="round"/>
                                    <path d="M5.5 11.5A11 11 0 0 1 12 9c2.2 0 4.3.7 6 1.9" strokeLinecap="round"/>
                                    <path d="M9.3 15.3A6 6 0 0 1 12 14c1.2 0 2.4.4 3.3 1.1" strokeLinecap="round"/>
                                    <path d="M12 20.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                </svg>
                                Offline-ready
                            </span>

                            {/* Auto Sync */}
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-black shadow-sm" role="listitem">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                                    <path d="M3 12a9 9 0 0 1 15.3-6.4" strokeLinecap="round"/>
                                    <path d="M21 12a9 9 0 0 1-15.3 6.4" strokeLinecap="round"/>
                                    <path d="M7 6H3V2" strokeLinecap="round"/>
                                    <path d="M21 22v-4h-4" strokeLinecap="round"/>
                                </svg>
                                Auto-sync on reconnect
                            </span>

                            {/* Cloud Backup
                            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm font-medium text-black shadow-sm" role="listitem">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4">
                                    <path d="M7 18h10a4 4 0 0 0 .3-8A6 6 0 0 0 7 7.5 4.5 4.5 0 0 0 7 18z"/>
                                    <path d="M12 12v6" strokeLinecap="round"/>
                                    <path d="M9.5 14.5L12 12l2.5 2.5" strokeLinecap="round"/>
                                </svg>
                                Cloud Sync
                            </span> */}
                        </div>
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