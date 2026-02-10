interface HeaderProps {
    variant?: 'default' | 'brand';
}

export default function Header({ variant = 'default' }: HeaderProps) {
    if (variant === 'brand') {
        return (
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
                <a href="/" className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] h-[90px] flex items-center justify-center relative">
                    <img src="/assets/images/logo.png" alt="Healthcare Creators" className="w-[156px] h-[66px] object-contain" />
                </a>
            </header>
        );
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
            <div className="max-w-[1440px] mx-auto px-[20px] lg:px-[100px] h-[90px] flex items-center justify-between gap-12">
                <a href="/" className="flex items-center">
                    <img src="/assets/images/logo.png" alt="Healthcare Creators" className="w-[156px] h-[66px] object-contain" />
                </a>
                <div className="flex items-center gap-4 max-w-[calc(100%-156px)]">
                    <a
                        href="/brand"
                        className="w-[140px] lg:w-[227.5px] h-[45px] lg:h-[55px] bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[8px] px-4 py-2 text-[14px] font-normal leading-5 hover:opacity-90 transition-opacity flex items-center justify-center gap-[10px]"
                    >
                        <span>For brands</span>
                        <img src="/assets/images/icon-arrow-up-right-light.svg" alt="" className="w-3 h-3" />
                    </a>
                </div>
            </div>
        </header>
    );
}
