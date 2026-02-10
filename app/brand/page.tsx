'use client';

import { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoundersSection from '@/components/FoundersSection';

export default function BrandPage() {
    const processContainerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!processContainerRef.current) return;

            const element = processContainerRef.current;
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate progress based on how far the 300vh container has scrolled
            // rect.top goes from windowHeight to -(rect.height - windowHeight)
            const totalScrollable = rect.height - windowHeight;
            let progress = -rect.top / totalScrollable;

            progress = Math.min(Math.max(progress, 0), 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getStepContentStyles = (index: number) => {
        const stepPositions = [0.15, 0.5, 0.85];
        const targetPos = stepPositions[index];
        const distance = Math.abs(scrollProgress - targetPos);

        const scale = Math.max(0.9, 1.1 - (distance * 1.2));
        const opacity = Math.max(0.3, 1 - (distance * 1.5));

        return {
            transform: `scale(${scale})`,
            opacity: opacity,
            transformOrigin: index === 1 ? 'left center' : 'right center',
            transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
        };
    };

    return (
        <main className="min-h-screen pt-[90px]">
            {/* Header */}
            <Header variant="brand" />

            {/* Brand Hero Section */}
            <section id="brand-hero" className="relative bg-white pt-16 lg:pt-24 pb-24 overflow-hidden">
                {/* Decorative Wave Squiggle */}
                <div className="absolute bottom-70 left-0 w-[600px] pointer-events-none z-0">
                    <img src="/assets/images/decorative-wave-2.svg" alt="" className="w-full h-auto" />
                </div>

                <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] relative z-10">
                    <div className="max-w-[900px] mx-auto text-center mb-16 lg:mb-24">
                        <h1 className="text-[32px] lg:text-[48px] font-bold text-[#212236] leading-[40px] lg:leading-[55px] mb-8 font-sans">
                            Work with <span className="text-[#8430E1]">trusted</span><br />
                            healthcare creators
                        </h1>
                        <p className="text-[16px] lg:text-[20px] font-normal text-[#6D6D73] leading-[28px] lg:leading-[34px] mb-12 max-w-[720px] mx-auto font-sans text-center">
                            We design and deliver creator-led campaigns, collaborations and educational projects with credible healthcare professionals.
                        </p>
                        <a
                            href="#brand-waitlist"
                            className="inline-flex items-center justify-center px-10 h-[60px] w-lg max-w-full bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[12px] text-[16px] font-semibold hover:opacity-90 transition-opacity gap-3 shadow-xl shadow-purple-200"
                        >
                            Apply to work with us
                            <img src="/assets/images/icon-arrow-up-right-light.svg" alt="" className="w-4 h-4" />
                        </a>
                    </div>
                </div>

                {/* Infinite Horizontal Scrolling Image Grid */}
                <div className="w-full overflow-hidden mt-8 lg:mt-16">
                    <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] gap-6 px-4">
                        {[
                            { src: "/assets/images/summit-lunch.jpg", height: "h-[400px]" },
                            { src: "/assets/images/summit-award.jpg", height: "h-[320px]" },
                            { src: "/assets/images/summit-speech.jpg", height: "h-[400px]" },
                            { src: "/assets/images/summit-creators.jpg", height: "h-[320px]" },
                            { src: "/assets/images/doctor.jpg", height: "h-[400px]" },
                            { src: "/assets/images/summit-audience.jpg", height: "h-[320px]" },
                            { src: "/assets/images/summit-red-carpet.jpg", height: "h-[400px]" },
                            { src: "/assets/images/hospital.jpg", height: "h-[320px]" },
                            // Duplicate for infinite effect
                            { src: "/assets/images/summit-lunch.jpg", height: "h-[400px]" },
                            { src: "/assets/images/summit-award.jpg", height: "h-[320px]" },
                            { src: "/assets/images/summit-speech.jpg", height: "h-[400px]" },
                            { src: "/assets/images/summit-creators.jpg", height: "h-[320px]" },
                            { src: "/assets/images/doctor.jpg", height: "h-[400px]" },
                            { src: "/assets/images/summit-audience.jpg", height: "h-[320px]" },
                            { src: "/assets/images/summit-red-carpet.jpg", height: "h-[400px]" },
                            { src: "/assets/images/hospital.jpg", height: "h-[320px]" },
                        ].map((item, index) => (
                            <div key={index} className={`flex-shrink-0 w-64 lg:w-80 ${item.height} rounded-[12px] overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-500`}>
                                <img src={item.src} alt="" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do Section - Sticky Pinned */}
            <section ref={processContainerRef} id="brand-process" className="relative h-[300vh] bg-[#0A0D12]">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    {/* Background Grid Pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                            backgroundSize: '80px 80px'
                        }}
                    />

                    <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] relative z-10 w-full">
                        <div className="max-w-[800px] mx-auto text-center mb-16 lg:mb-24">
                            <div className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/20 text-[12px] font-medium uppercase tracking-wider mb-6 text-white">
                                Our Solution
                            </div>
                            <h2 className="text-[32px] lg:text-[48px] font-bold leading-[1.2] lg:leading-[55px] font-sans text-white">
                                What we do as Healthcare <br /> Creators Collective
                            </h2>
                        </div>

                        {/* Timeline Container */}
                        <div className="relative max-w-[1000px] mx-auto">
                            {/* Vertical Center Line */}
                            <div className="absolute left-[calc(50%_-_.375rem)] top-2 bottom-0 w-3 h-[calc(100%_-_2rem)] bg-white/10 hidden lg:block rounded-full">
                                <div
                                    className="w-full bg-white rounded-full absolute top-0 left-0 transition-all duration-100 ease-out"
                                    style={{ height: `${scrollProgress * 100}%` }}
                                ></div>
                            </div>

                            {/* Process Steps */}
                            <div className="space-y-12 lg:space-y-20">
                                {/* Step 1 */}
                                <div className="relative flex flex-col lg:flex-row items-center lg:justify-end group">
                                    <div
                                        className="w-full lg:w-[45%] text-center lg:text-right lg:pr-16 mb-6 lg:mb-0 mt-6 lg:mt-0"
                                        style={getStepContentStyles(0)}
                                    >
                                        <h3 className="text-[20px] lg:text-[24px] font-bold mb-3 font-sans text-white">We run creator-led campaigns</h3>
                                        <p className="text-[16px] lg:text-[18px] text-gray-400 font-normal leading-relaxed">
                                            Coordinated campaigns delivered by credible healthcare voices.
                                        </p>
                                    </div>
                                    <div className="relative flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center order-first lg:order-none bg-white rounded-full">
                                        <img src="/assets/images/paint-1.png" alt="" className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
                                    </div>
                                    <div className="w-full lg:w-[45%] hidden lg:block" />
                                </div>

                                {/* Step 2 */}
                                <div className="relative flex flex-col lg:flex-row items-center group">
                                    <div className="w-full lg:w-[45%] hidden lg:block" />
                                    <div className="relative flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center order-first lg:order-none bg-white rounded-full">
                                        <img src="/assets/images/paint-2.png" alt="" className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
                                    </div>
                                    <div
                                        className="w-full lg:w-[45%] text-center lg:pl-16 mt-6 lg:mt-0"
                                        style={getStepContentStyles(1)}
                                    >
                                        <h3 className="text-[20px] lg:text-[24px] font-bold mb-3 font-sans text-white">We match you with the right healthcare creators</h3>
                                        <p className="text-[16px] lg:text-[18px] text-gray-400 font-normal leading-relaxed">
                                            Not the biggest following - the right professional voice.
                                        </p>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="relative flex flex-col lg:flex-row items-center lg:justify-end group">
                                    <div
                                        className="w-full lg:w-[45%] text-center lg:text-right lg:pr-16 mb-6 lg:mb-0 mt-6 lg:mt-0"
                                        style={getStepContentStyles(2)}
                                    >
                                        <h3 className="text-[20px] lg:text-[24px] font-bold mb-3 font-sans text-white">We bring healthcare expertise into your projects</h3>
                                        <p className="text-[16px] lg:text-[18px] text-gray-400 font-normal leading-relaxed">
                                            Creators who understand clinical responsibility and public trust.
                                        </p>
                                    </div>
                                    <div className="relative flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center order-first lg:order-none bg-white rounded-full">
                                        <img src="/assets/images/paint-3.png" alt="" className="w-10 h-10 lg:w-14 lg:h-14 object-contain" />
                                    </div>
                                    <div className="w-full lg:w-[45%] hidden lg:block" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Work With HCC Section */}
            <section id="why-work-with-hcc" className="relative pt-24 lg:pt-32 bg-[#F8F9FA]">
                <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] relative z-10">
                    <h2 className="text-[32px] lg:text-[40px] font-bold text-[#212236] mb-16 lg:mb-20 font-sans">
                        Why Work With HCC
                    </h2>

                    <div className="relative max-w-[1000px] mx-auto space-y-[20vh] pb-[20vh]">
                        {/* Card 01 - Sticky */}
                        <div className="sticky top-[100px] bg-white border border-gray-100 rounded-[32px] lg:rounded-[48px] p-8 lg:p-12 shadow-xl shadow-gray-200/50 z-10 overflow-hidden transform transition-all duration-500 min-h-[500px]">
                            <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-8 items-start mb-8 lg:mb-12">
                                <span className="text-[64px] lg:text-[80px] font-bold bg-gradient-to-br from-[#234CD6] to-[#8430E1] bg-clip-text text-transparent leading-none font-sans">
                                    01
                                </span>
                                <div className="space-y-6 pt-2">
                                    <h3 className="text-[24px] lg:text-[32px] font-bold text-[#212236] font-sans">
                                        Ethical, fair collaborations
                                    </h3>
                                    <div className="border-l-[3px] border-[#234CD6] pl-6">
                                        <p className="text-[16px] lg:text-[18px] text-[#6D6D73] leading-relaxed max-w-[500px]">
                                            We promote transparent, respectful partnerships that value creators' expertise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden lg:ml-[150px] lg:w-[calc(100%-150px)]">
                                <img src="/assets/images/summit-creators.jpg" alt="Ethical Collaboration" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Card 02 - Sticky */}
                        <div className="sticky top-[300px] bg-white border border-gray-100 rounded-[32px] lg:rounded-[48px] p-8 lg:p-12 shadow-2xl shadow-gray-300/50 z-20 overflow-hidden transform transition-all duration-500 min-h-[500px]">
                            <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-8 items-start mb-8 lg:mb-12">
                                <span className="text-[64px] lg:text-[80px] font-bold bg-gradient-to-br from-[#234CD6] to-[#8430E1] bg-clip-text text-transparent leading-none font-sans">
                                    02
                                </span>
                                <div className="space-y-6 pt-2">
                                    <h3 className="text-[24px] lg:text-[32px] font-bold text-[#212236] font-sans">
                                        Structured, supported projects
                                    </h3>
                                    <div className="border-l-[3px] border-[#234CD6] pl-6">
                                        <p className="text-[16px] lg:text-[18px] text-[#6D6D73] leading-relaxed max-w-[500px]">
                                            Clear expectations, messaging, and deliverables for both sides.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden lg:ml-[150px] lg:w-[calc(100%-150px)]">
                                <img src="/assets/images/hospital.jpg" alt="Supported Projects" className="w-full h-full object-cover" />
                            </div>
                        </div>

                        {/* Card 03 - Sticky */}
                        <div className="sticky top-[500px] bg-white border border-gray-100 rounded-[32px] lg:rounded-[48px] p-8 lg:p-12 shadow-2xl shadow-gray-400/50 z-30 overflow-hidden transform transition-all duration-500 min-h-[500px]">
                            <div className="grid grid-cols-1 lg:grid-cols-[150px_1fr] gap-8 items-start mb-8 lg:mb-12">
                                <span className="text-[64px] lg:text-[80px] font-bold bg-gradient-to-br from-[#234CD6] to-[#8430E1] bg-clip-text text-transparent leading-none font-sans">
                                    03
                                </span>
                                <div className="space-y-6 pt-2">
                                    <h3 className="text-[24px] lg:text-[32px] font-bold text-[#212236] font-sans">
                                        Beyond sponsored posts
                                    </h3>
                                    <div className="border-l-[3px] border-[#234CD6] pl-6">
                                        <p className="text-[16px] lg:text-[18px] text-[#6D6D73] leading-relaxed max-w-[500px]">
                                            Speaking, education, campaigns, and public health initiatives.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Featured Image inside card 03 */}
                            <div className="relative w-full aspect-[21/9] rounded-[24px] overflow-hidden lg:ml-[150px] lg:w-[calc(100%-150px)]">
                                <img
                                    src="/assets/images/summit-audience.jpg"
                                    alt="Collaborative Event"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FoundersSection variant="dark" />

            {/* Join Waitlist Section */}
            <section id="brand-waitlist" className="relative py-24 lg:py-32 bg-[#F8F9FA]">
                <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px]">
                    <div className="max-w-[800px] mx-auto">
                        <h2 className="text-[32px] lg:text-[40px] font-bold text-[#212236] mb-6 font-sans">
                            Join the brand and<br />partner waitlist
                        </h2>
                        <div className="space-y-4 mb-12">
                            <p className="text-[16px] lg:text-[18px] text-[#6D6D73] font-normal font-sans">
                                We are speaking with a small group of brands and organisations during our pilot phase.
                            </p>
                            <p className="text-[16px] lg:text-[18px] text-[#6D6D73] font-normal font-sans">
                                Share a few details and we will be in touch.
                            </p>
                        </div>

                        <form
                            className="space-y-6"
                            onSubmit={async (e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget);
                                const data = Object.fromEntries(formData.entries());

                                try {
                                    const res = await fetch('/api/waitlist', {
                                        method: 'POST',
                                        headers: { 'Content-Type': 'application/json' },
                                        body: JSON.stringify({ type: 'brand', ...data }),
                                    });
                                    if (res.ok) {
                                        alert('Thank you for joining the brand waitlist!');
                                        e.currentTarget.reset();
                                    } else {
                                        alert('Something went wrong. Please try again.');
                                    }
                                } catch (error) {
                                    alert('Something went wrong. Please try again.');
                                }
                            }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#212236] font-sans">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        placeholder="John"
                                        className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#212236] font-sans">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        placeholder="Doe"
                                        className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236] font-sans">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="JohnDoe@gmail.com"
                                    className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236] font-sans">Organisation</label>
                                <input
                                    type="text"
                                    name="organisation"
                                    required
                                    placeholder="American Academy of Dermatology (AAD)"
                                    className="w-full h-[56px] px-4 rounded-[12px] border border-gray-100 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#212236] font-sans">Role</label>
                                    <input
                                        type="text"
                                        name="role"
                                        required
                                        placeholder="Pharmacist"
                                        className="w-full h-[56px] px-4 rounded-[12px] border border-gray-100 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[14px] font-bold text-[#212236] font-sans">Sector</label>
                                    <div className="relative">
                                        <select
                                            name="sector"
                                            required
                                            defaultValue=""
                                            className="w-full h-[56px] px-4 rounded-[12px] border border-gray-100 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236]"
                                        >
                                            <option value="" disabled>Skincare</option>
                                            <option value="Pharmaceuticals">Pharmaceuticals</option>
                                            <option value="Public Health">Public Health</option>
                                            <option value="MedTech">MedTech</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236] font-sans">Would you be interested in early pilot campaigns or research partnerships?</label>
                                <div className="relative">
                                    <select
                                        name="earlyInterest"
                                        required
                                        defaultValue=""
                                        className="w-full h-[56px] px-4 rounded-[12px] border border-gray-100 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236]"
                                    >
                                        <option value="" disabled>Yes</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Maybe later">Maybe later</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full h-[60px] bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[12px] text-[16px] font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-200 mt-4 active:scale-[0.98]"
                            >
                                Join brand waitlist
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
