import React from 'react';

interface FoundersSectionProps {
    variant?: 'light' | 'dark';
}

const FoundersSection: React.FC<FoundersSectionProps> = ({ variant = 'light' }) => {
    const isDark = variant === 'dark';

    return (
        <section id="founders" className={`relative py-24 ${isDark ? 'bg-[#0A0D12] text-white' : 'bg-white text-[#212236]'} overflow-hidden`}>
            {/* Decorative Dotted Path - Top Right */}
            {!isDark && (
                <div className="absolute top-0 right-0 w-[400px] h-[300px] pointer-events-none opacity-10 hidden lg:block">
                    <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M400 50C350 50 300 100 250 150C200 200 150 250 50 250" stroke="#212236" strokeWidth="2" strokeDasharray="8 8" />
                        <path d="M400 150C300 150 200 50 100 50" stroke="#212236" strokeWidth="2" strokeDasharray="8 8" />
                    </svg>
                </div>
            )}

            {/* Yellow ZigZag on the left */}
            <div className="absolute bottom-0 left-[calc(50%-800px)] w-[600px] pointer-events-none z-0">
                <img src="/assets/images/decorative-wave-2.svg" alt="" className="w-full h-auto" />
            </div>

            <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px]">
                <h2 className={`text-[28px] lg:text-[32px] font-bold mb-3 lg:mb-4 font-sans ${isDark ? 'text-white' : 'text-[#212236]'}`}>Founders</h2>
                <p className={`text-[16px] lg:text-[18px] mb-8 lg:mb-12 font-sans ${isDark ? 'text-gray-300' : 'text-[#6D6D73]'}`}>
                    The Healthcare Creators Collective is co-founded by
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Leya Card */}
                    <div className="relative aspect-[4/3] rounded-[12px] lg:rounded-[24px] overflow-hidden group shadow-lg">
                        <img src="/assets/images/founder-photo-leya.png" alt="Leya Luhar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 lg:p-8 text-white z-10 text-left">
                            <h3 className="text-[16px] lg:text-[18px] font-bold mb-1 lg:mb-2 font-sans">Leya Luhar,</h3>
                            <p className="text-[12px] lg:text-[14px] font-normal opacity-90 font-sans leading-tight">
                                Final year medical student and founder of OSCE Toolbox
                            </p>
                        </div>
                    </div>

                    {/* Dev Card */}
                    <div className="relative aspect-[4/3] rounded-[12px] lg:rounded-[24px] overflow-hidden group shadow-lg">
                        <img src="/assets/images/founder-photo-dev.png" alt="Dr Dev Gakhar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 lg:p-8 text-white z-10 text-left">
                            <h3 className="text-[16px] lg:text-[18px] font-bold mb-1 lg:mb-2 font-sans">Dr Dev Gakhar (Doctor Devify),</h3>
                            <p className="text-[12px] lg:text-[14px] font-normal opacity-90 font-sans leading-tight">
                                NHS doctor and healthcare content creator.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersSection;
