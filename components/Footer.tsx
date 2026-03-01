export default function Footer() {
    return (
        <footer className="bg-white pt-20 pb-10 border-t border-gray-100 font-sans">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 align-items-center">
                    <div className="space-y-6">
                        <img src="/assets/images/logo.png" alt="Healthcare Creators" className="w-[156px] h-[66px] object-contain mx-auto lg:mx-0" />
                        <p className="text-[#666666] text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px]">
                            All rights reserved &copy; {new Date().getFullYear()} - Healthcare Creators Collective
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/brand"
                                className="w-full sm:w-[227.5px] h-[55px] bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[8px] px-4 py-2 text-[14px] font-normal leading-5 hover:opacity-90 transition-opacity flex items-center justify-center gap-[10px]"
                            >
                                For brands
                            </a>
                            <a
                                href="/creator"
                                className="w-full sm:w-[227.5px] h-[55px] bg-[#F2F2F2] text-[#1D2128] rounded-[8px] px-4 py-2 text-[14px] font-normal leading-5 hover:bg-gray-200 transition-colors flex items-center justify-center gap-[10px]"
                            >
                                Join as creator
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col justify-end text-center md:text-right">
                        <h3 className="font-bold text-[28px] lg:text-[32px] leading-none mb-4">Contact</h3>
                        <p className="text-[#666666] mb-4 text-[16px] lg:text-[18px] font-normal leading-[28px] lg:leading-[32px]">
                            Send us an email: <br className="lg:hidden" />
                            <a href="mailto:hello@healthcarecreators.co.uk" className="hover:underline">hello@healthcarecreators.co.uk</a>
                        </p>
                        <div className="flex items-center md:justify-end gap-4 text-center">
                            <a href="https://www.instagram.com/healthcarecreatorscollective" className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-opacity">
                                <img src="/assets/images/social-logo-intagram.svg" alt="Instagram" className="w-full h-auto" />
                            </a>
                            <a href="https://www.tiktok.com/@healthcarecreatorscollective" className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-opacity">
                                <img src="/assets/images/social-logo-tiktok.svg" alt="TikTok" className="w-full h-auto" />
                            </a>
                            <a href="https://www.linkedin.com/company/healthcarecreatorscollective" className="flex items-center justify-center w-8 h-8 hover:opacity-80 transition-opacity">
                                <img src="/assets/images/social-logo-linkedin.svg" alt="LinkedIn" className="w-full h-auto" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
