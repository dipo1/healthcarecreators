import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FoundersSection from '@/components/FoundersSection';

export const metadata: Metadata = {
  title: 'Health Care Creators Collective',
};

export default function Home() {
  return (
    <main className="pt-[90px]">
      <Header />
      {/* Hero Section */}
      <section id="hero" className="relative bg-white pt-4 lg:pt-14 pb-4 lg:pb-12 overflow-hidden">

        <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px]">
          <div className="relative bg-[#F4F4F4] rounded-[20px] lg:rounded-[40px] min-h-[500px] flex items-center mt-0 overflow-visible">
            {/* Logo icon with Shine effect */}
            <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 pointer-events-none overflow-hidden rounded-[20px] lg:rounded-[40px]">
              <div className="absolute inset-0 bg-no-repeat bg-right bg-contain opacity-100 z-0"
                style={{ backgroundImage: 'url(/assets/images/logo-icon-mono.png)' }}
              />
              <div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-y-1/4 animate-shimmer" />
            </div>
            <div className="relative z-10 w-full grid lg:grid-cols-2 gap-12 px-4 lg:px-20">
              <div className="flex flex-col justify-center max-w-[640px] py-10 lg:py-16">
                <h1 className="text-[32px] lg:text-[64px] font-bold leading-[1.2] lg:leading-[1.1] text-[#212236] mb-6 md:mb-8 font-sans">
                  The home for <br />
                  healthcare creators.
                </h1>
                <p className="text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px] text-[#6D6D73] mb-10 md:mb-12 max-w-[540px]">
                  We're building the UK's leading network of healthcare creators. Bringing together healthcare professionals who create content, shape public conversations, and navigate opportunities beyond the clinic.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/brand"
                    className="w-full sm:w-[227.5px] h-[55px] bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[8px] px-4 py-2 text-[14px] font-normal leading-5 hover:opacity-90 transition-opacity flex items-center justify-center gap-[10px]"
                  >
                    <span>I am a brand</span>
                    <img src="/assets/images/icon-arrow-up-right-light.svg" alt="" className="w-3 h-3" />
                  </a>
                  <a
                    href="/creator"
                    className="w-full sm:w-[227.5px] h-[55px] bg-[#D9D9D9] text-[#212236] rounded-[8px] px-4 py-2 text-[14px] font-normal leading-5 hover:bg-gray-300 transition-colors flex items-center justify-center gap-[10px]"
                  >
                    <span>I am a creator</span>
                    <img src="/assets/images/icon-arrow-up-right.svg" alt="" className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="relative self-stretch flex justify-center lg:justify-end items-end">
                {/* Hero Image */}
                <div className="relative z-10 lg:translate-x-12 translate-y-0 lg:scale-140 origin-bottom">
                  <img
                    src="/assets/images/hero-leya-alpha.png"
                    alt="Healthcare Creator"
                    className="max-h-[580px] w-auto object-contain block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Wave */}
      <div className="absolute top-100 right-[calc(50%-840px)] w-[400px] pointer-events-none hidden lg:block z-10">
        <img src="/assets/images/decorative-wave-3.svg" alt="" className="w-full h-full object-contain object-right" />
      </div>

      {/* Who We Are For Section */}
      <section id="who-we-are" className="relative py-12 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px]">
          {/* Section Heading */}
          <div className="relative mb-8 inline-block">
            <h2 className="text-[32px] font-bold text-[#1E1E1E] relative z-10">
              Who We Are For
            </h2>
            <div className="absolute top-0 left-10 h-[60px]">
              <img src="/assets/images/decorative-wave-4.svg" alt="" className="w-full h-full object-contain object-left scale-110" />
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {/* Card 1 */}
            <div className="flex flex-col rounded-[12px] lg:rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#1E1E1E] p-4 lg:p-8 pb-0 h-[450px] flex flex-col relative overflow-hidden">
                <h3 className="text-[16px] lg:text-[20px] font-bold text-white mb-4 leading-tight">
                  Healthcare professionals <br /> getting started
                </h3>
                <p className="text-white text-[14px] leading-[24px] mb-8 leading-tight">
                  Learning how to create content responsibly and confidently.
                </p>
                <div className="mt-auto relative w-full h-full">
                  <img
                    src="/assets/images/hero-leya-alpha.png"
                    alt=""
                    className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-[280px] object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-6 border-x border-b border-gray-100 rounded-b-[24px]">
                <a href="/creator" className="text-[#8430E1] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col rounded-[12px] rounded-[12px] lg:rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#1E1E1E] p-4 lg:p-8 pb-0 h-[450px] flex flex-col relative overflow-hidden">
                <h3 className="text-[16px] lg:text-[20px] font-bold text-white mb-4 leading-tight">
                  Healthcare creators already <br /> building
                </h3>
                <p className="text-white text-[14px] leading-[24px] mb-8 leading-tight">
                  Navigating brands, speaking, policy, and professional risk.
                </p>
                <div className="mt-auto relative w-full h-full">
                  <img
                    src="/assets/images/hero-leya-alpha.png"
                    alt=""
                    className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-[280px] object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-6 border-x border-b border-gray-100 rounded-b-[24px]">
                <a href="/creator" className="text-[#8430E1] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                  Join the Creator List <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col rounded-[12px] lg:rounded-[24px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-[#1E1E1E] p-4 lg:p-8 pb-0 h-[450px] flex flex-col relative overflow-hidden">
                <h3 className="text-[16px] lg:text-[20px] font-bold text-white mb-4 leading-tight">
                  Brands and organisations
                </h3>
                <p className="text-white text-[14px] leading-[24px] mb-8 leading-tight">
                  Looking to work with credible, trusted healthcare voices.
                </p>
                <div className="mt-auto relative w-full h-full">
                  <img
                    src="/assets/images/hero-leya-alpha.png"
                    alt=""
                    className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 w-[280px] object-contain"
                  />
                </div>
              </div>
              <div className="bg-white p-6 border-x border-b border-gray-100 rounded-b-[24px]">
                <a href="/brand" className="text-[#8430E1] font-semibold text-[16px] flex items-center gap-2 hover:gap-3 transition-all">
                  Work With Creators <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Wave */}
      <div className="absolute top-340 right-0 w-[400px] pointer-events-none hidden lg:block z-10">
        <img src="/assets/images/decorative-arrow-curly.svg" alt="" className="w-full h-full object-contain object-right" />
      </div>

      {/* What We Do Section */}
      <section id="what-we-do" className="relative py-12 bg-[#212236] text-white overflow-hidden">
        {/* Yellow Decorative Squiggle at bottom left */}
        <div className="absolute bottom-10 left-[calc(50%-800px)] w-[400px] pointer-events-none z-0">
          <img src="/assets/images/decorative-wave-2.svg" alt="" className="w-full h-auto" />
        </div>

        <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            {/* Left Content */}
            <div className="flex flex-col max-w-[600px]">
              <h2 className="text-[24px] lg:text-[32px] font-semibold leading-none mb-4 lg:mb-8 font-sans">What We Do</h2>
              <p className="text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px] text-[#D1D1D1] mb-8">
                Healthcare professionals are increasingly shaping public conversations about health online. Yet most receive little guidance on how to do this responsibly. HCC exists to provide the structure this space has been missing so creators can be as <span className="font-bold">trusted online as they are offline.</span>
              </p>

              <h4 className="text-[18px] lg:text-[24px] font-semibold leading-tight mb-8">We support healthcare creators through:</h4>

              {/* Features Box */}
              <div className="border border-white/10 rounded-[8px] lg:rounded-[16px] overflow-hidden mb-12 bg-white/[0.02] backdrop-blur-[100px]">
                <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/10">
                  <div className="p-4 lg:p-8 border-r border-white/10">
                    <div className="w-10 h-10 bg-[#DDE3F9] rounded-lg flex items-center justify-center mb-4">
                      <img src="/assets/images/icon-caduceus.svg" alt="" className="w-6 h-6" />
                    </div>
                    <h5 className="text-[14px] font-bold leading-[24px] mb-3">Education</h5>
                    <p className="text-[14px] font-normal leading-[24px] text-white">
                      Expert-led sessions including professional, legal, and commercial aspects of content creation.
                    </p>
                  </div>
                  <div className="p-4 lg:p-8">
                    <div className="w-10 h-10 bg-[#DDE3F9] rounded-lg flex items-center justify-center mb-4">
                      <img src="/assets/images/icon-stethoscope.svg" alt="" className="w-6 h-6" />
                    </div>
                    <h5 className="text-[14px] font-bold leading-[24px] mb-3">Community</h5>
                    <p className="text-[14px] font-normal leading-[24px] text-white">
                      A trusted space to share experiences, learn from each other, and navigate this work together.
                    </p>
                  </div>
                </div>
                <div className="p-4 lg:p-8">
                  <div className="w-10 h-10 bg-[#DDE3F9] rounded-lg flex items-center justify-center mb-4">
                    <img src="/assets/images/icon-certificate.svg" alt="" className="w-6 h-6" />
                  </div>
                  <h5 className="text-[14px] font-bold leading-[24px] mb-3">Opportunities</h5>
                  <p className="text-[14px] font-normal leading-[24px] text-white">
                    Thoughtfully introduced collaborations, speaking roles, and projects, with safeguards and clarity in place.
                  </p>
                </div>
              </div>

              {/* Button */}
              <a
                href="/creator"
                className="w-full h-[55px] bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[8px] px-4 py-2 text-[14px] font-normal leading-5 hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                Join the VIP creator list
              </a>
            </div>

            {/* Right Image */}
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[700px]">
              <img
                src="/assets/images/summit-audience.jpg"
                alt="Healthcare Creators Summit"
                className="w-full h-full object-cover rounded-[8px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="relative py-24 bg-white overflow-hidden" style={{ backgroundImage: 'url(/assets/images/wireframe.svg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="flex flex-col max-w-[640px] mx-auto lg:mx-0">
              <h2 className="text-[28px] lg:text-[32px] font-semibold leading-none mb-4 font-sans">
                Inside the <span className="text-[#FFCC00]">free</span> HCC Community...
              </h2>
              <p className="text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px] text-[#212236] mb-4">
                When you join HCC, you'll be part of an ongoing community of healthcare creators learning and navigating this space together.
              </p>

              <div className="mb-4">
                <h4 className="mb-4 text-[16px] lg:text-[18px]">You'll see:</h4>
                <ul className="space-y-4">
                  {[
                    "regular expert talks announced to the community",
                    "people meeting, collaborating, and supporting each other both online and offline",
                    "early access to opportunities, including brand collaborations",
                    "the chance to help define shared standards for healthcare creators"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px] text-[#212236] mb-0">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#212236] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px] text-[#212236] mb-4">
                By educating healthcare professionals and strengthening peer networks, HCC aims to:
              </p>

              <div className="mb-12">
                <ul className="space-y-4">
                  {[
                    "Improve the quality of health information online",
                    "Protect patients from harm and confusion",
                    "Support clinicians to engage digitally without risking trust or registration"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px] text-[#212236] mb-0">
                      <span className="mt-2 w-1.5 h-1.5 bg-[#212236] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <a
                href="/creator"
                className="w-full h-[55px] bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[8px] px-4 py-2 text-[14px] font-normal leading-5 hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg shadow-purple-200"
              >
                Apply to be a Founding Member
              </a>
            </div>

            {/* Right Content - Polaroid Collage */}
            <div className="relative h-[400px] lg:h-[700px] w-full flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
              <div className="relative w-full max-w-[340px] lg:max-w-[600px] h-full mx-auto lg:mt-40">
                {/* Reusable Frame Component Logic */}
                {[
                  { src: "/assets/images/summit-lunch.jpg", className: "absolute top-0 left-0 w-[160px] lg:w-[250px] -rotate-15 z-10" },
                  { src: "/assets/images/summit-award.jpg", className: "absolute top-[20px] right-0 lg:left-[208px] lg:right-auto w-[160px] lg:w-[250px] rotate-14 z-20" },
                  { src: "/assets/images/summit-creators.jpg", className: "absolute top-[180px] lg:top-[205px] left-0 lg:left-[14px] w-[160px] lg:w-[250px] rotate-16 z-30" },
                  { src: "/assets/images/doctor.jpg", className: "absolute top-[210px] lg:top-[250px] right-0 lg:left-[250px] lg:right-auto w-[160px] lg:w-[250px] -rotate-14 z-40" }
                ].map((item, index) => (
                  <div key={index} className={`${item.className} aspect-[330/365] bg-no-repeat bg-cover bg-center transition-transform hover:z-50 hover:scale-105 duration-300`} style={{ backgroundImage: 'url(/assets/images/picture-frame.svg)' }}>
                    <div className="relative w-full h-full">
                      <img
                        src={item.src}
                        alt=""
                        className="absolute w-[80.4%] h-[68.7%] object-cover top-[6%] left-[9.8%] rounded-t-[4px] lg:rounded-t-[8px]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="relative py-32 bg-[#0A0D12] text-white overflow-hidden min-h-[800px] flex items-center">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />

        {/* Orbital Background Circles */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-white/10 rounded-full" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/10 rounded-full" />
        </div>

        <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] relative z-10 w-full">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 className="text-[28px] lg:text-[32px] md:text-[48px] font-bold mb-8 font-sans leading-tight">
              <span className="text-[#FFC700]">Brands</span> you could <br />
              collaborate with...
            </h2>
            <p className="text-[16px] md:text-[18px] font-normal leading-[32px] text-white/70 max-w-[640px] mx-auto">
              We draw on the experience and relationships the founders have built across healthcare, medical technology, public sector, and consumer brands. HCC helps healthcare creators access credible opportunities, including brand collaborations, speaking engagements, and organisational projects.
            </p>
          </div>

          {/* Logos on Orbits (Desktop Positioning) */}
          <div className="hidden lg:block absolute top-0 left-0 w-full h-full">
            {/* L'Oreal */}
            <div className="absolute bottom-0 left-[16%] z-20 group animate-float" style={{ animationDelay: '0s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-10 group-hover:translate-x-6 group-hover:rotate-6">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white">
                  <img src="/assets/images/brand-logo-loreal.jpg" alt="L'Oreal" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">L'Oreal</span>
                </div>
              </div>
            </div>

            {/* CeraVe */}
            <div className="absolute -bottom-[20%] right-[17%] z-20 group animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-8 group-hover:-translate-x-10 group-hover:-rotate-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white">
                  <img src="/assets/images/brand-logo-cerave.png" alt="CeraVe" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">CeraVe</span>
                </div>
              </div>
            </div>

            {/* TePe */}
            <div className="absolute -bottom-[50%] left-[35%] z-20 group animate-float" style={{ animationDelay: '1.5s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-10 group-hover:translate-x-8 group-hover:rotate-12">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white">
                  <img src="/assets/images/brand-logo-tepe.png" alt="TePe" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">TePe</span>
                </div>
              </div>
            </div>

            {/* Blue Light Card */}
            <div className="absolute -bottom-[50%] right-[32%] z-20 group animate-float" style={{ animationDelay: '2.2s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-12 group-hover:-translate-x-10 group-hover:-rotate-12">
                <div className="w-12 h-12 bg-[#F0F7FF] rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white">
                  <img src="/assets/images/brand-logo-blue-light-card.png" alt="Blue Light Card" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">Blue Light Card</span>
                </div>
              </div>
            </div>

            {/* Nuumad */}
            <div className="absolute -top-[50%] right-[33%] z-20 group animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:translate-x-12 group-hover:rotate-12">
                <div className="w-12 h-12 bg-[#2D2A77] rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white">
                  <img src="/assets/images/brand-logo-nuumad.png" alt="Nuumad" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">Nuumad</span>
                </div>
              </div>
            </div>

            {/* Littmann */}
            <div className="absolute -top-[20%] right-[16%] z-20 group animate-float" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-10 group-hover:translate-x-4 group-hover:-rotate-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white border border-gray-100">
                  <img src="/assets/images/brand-logo-littmann.png" alt="Littmann" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">Littmann</span>
                </div>
              </div>
            </div>

            {/* Sterimar */}
            <div className="absolute top-[40%] right-[10%] z-20 group animate-float" style={{ animationDelay: '1.9s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-12 group-hover:rotate-12">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white border border-[#F0F7FF]">
                  <img src="/assets/images/brand-logo-sterimar.png" alt="Sterimar" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">Sterimar</span>
                </div>
              </div>
            </div>

            {/* Tandem Health */}
            <div className="absolute top-0 left-[12%] z-20 group animate-float" style={{ animationDelay: '2.5s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-12 group-hover:-translate-x-8 group-hover:-rotate-12">
                <div className="w-12 h-12 bg-[#BDFF00] rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white">
                  <img src="/assets/images/brand-logo-tandem-health.png" alt="Tandem Health" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">Tandem Health</span>
                </div>
              </div>
            </div>

            {/* Eolas */}
            <div className="absolute -top-[50%] left-[35%] z-20 group animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-translate-y-14 group-hover:-translate-x-4 group-hover:rotate-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden z-10 ring-4 ring-white border border-[#F0F7FF]">
                  <img src="/assets/images/brand-logo-eolas.png" alt="Eolas" className="w-full h-full object-cover" />
                </div>
                <div className="bg-white py-2 pl-8 pr-5 -ml-5 rounded-r-full shadow-xl">
                  <span className="text-[14px] font-semibold text-[#212236]">Eolas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Grid for Logos */}
          <div className="flex flex-wrap justify-center gap-6 mt-16 lg:hidden max-w-[400px] mx-auto">
            {[
              "brand-logo-loreal.jpg", "brand-logo-cerave.png", "brand-logo-tepe.png",
              "brand-logo-nuumad.png", "brand-logo-littmann.png", "brand-logo-sterimar.png",
              "brand-logo-tandem-health.png", "brand-logo-eolas.png"
            ].map((logo, idx) => (
              <div
                key={idx}
                className="w-[28%] aspect-square bg-white rounded-full flex items-center justify-center overflow-hidden border-px lg:border-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-6 hover:scale-110 active:scale-95 shadow-md animate-float"
                style={{ animationDelay: `${idx * 0.4}s` }}
              >
                <img src={`/assets/images/${logo}`} alt="Brand Logo" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FoundersSection />
      <Footer />
    </main>
  );
}
