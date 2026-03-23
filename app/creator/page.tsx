'use client';

import React, { useState } from 'react';
import AlertModal from '@/components/AlertModal';
import Spinner from '@/components/Spinner';

export default function CreatorPage() {
    const [reason, setReason] = useState('');
    const [role, setRole] = useState('');
    const [primaryPlatform, setPrimaryPlatform] = useState('');
    const [secondaryPlatform, setSecondaryPlatform] = useState('');
    const [alertConfig, setAlertConfig] = useState({ isOpen: false, title: '', message: '', isError: false });
    const [isLoading, setIsLoading] = useState(false);

    return (
        <main className="flex flex-col lg:flex-row min-h-screen bg-white">
            {/* Left Section - Form */}
            <div className="w-full lg:w-2/3 p-4 md:p-8 lg:px-20 overflow-y-auto">
                {/* Logo & Back Button */}
                <div className="mb-12 flex items-center justify-between gap-12">
                    <a href="/">
                        <img src="/assets/images/logo.png" alt="Healthcare Creators Collective" className="h-16 w-auto" />
                    </a>
                    <a
                        href="/"
                        className="bg-[#D9D9D9] text-[#212236] rounded-[8px] px-4 py-2 text-[14px] whitespace-nowrap font-normal leading-5 hover:opacity-90 transition-opacity flex items-center justify-center gap-[10px]"
                    >
                        <img src="/assets/images/icon-arrow-left.svg" alt="" className="w-6 h-6" />
                        <span className="lg:hidden">Back</span>
                        <span className="hidden lg:block">Go back</span>
                    </a>
                </div>

                <div className="max-w-4xl mx-auto">
                    <form
                        className="space-y-6"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target as HTMLFormElement);
                            const data = Object.fromEntries(formData.entries());
                            data.reason = reason;

                            setIsLoading(true);
                            try {
                                const res = await fetch('/api/waitlist', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify(data),
                                });
                                if (res.ok) {
                                    setAlertConfig({ isOpen: true, title: 'Success!', message: 'Thank you for joining the creator waitlist!', isError: false });
                                    (e.target as HTMLFormElement).reset();
                                    setReason('');
                                    setRole('');
                                    setPrimaryPlatform('');
                                    setSecondaryPlatform('');
                                } else {
                                    setAlertConfig({ isOpen: true, title: 'Error', message: 'Something went wrong. Please try again.', isError: true });
                                }
                            } catch (error) {
                                setAlertConfig({ isOpen: true, title: 'Error', message: 'Something went wrong. Please try again.', isError: true });
                            } finally {
                                setIsLoading(false);
                            }
                        }}
                    >
                        <input type="hidden" name="type" value="creator" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236]">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    placeholder="John"
                                    className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236]">Last Name</label>
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
                            <label className="text-[14px] font-bold text-[#212236]">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="JohnDoe@gmail.com"
                                className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#212236]">Role</label>
                            <div className="relative">
                                <select
                                    name="role"
                                    required
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className={`w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] appearance-none transition-colors ${role === '' ? 'text-gray-400' : 'text-[#212236]'}`}
                                >
                                    <option value="" disabled>Select your role</option>
                                    <option value="Doctor" className="text-[#212236]" style={{ color: '#212236' }}>Doctor</option>
                                    <option value="Pharmacist" className="text-[#212236]" style={{ color: '#212236' }}>Pharmacist</option>
                                    <option value="Nurse" className="text-[#212236]" style={{ color: '#212236' }}>Nurse</option>
                                    <option value="Dentist" className="text-[#212236]" style={{ color: '#212236' }}>Dentist</option>
                                    <option value="Physiotherapist" className="text-[#212236]" style={{ color: '#212236' }}>Physiotherapist</option>
                                    <option value="Midwife" className="text-[#212236]" style={{ color: '#212236' }}>Midwife</option>
                                    <option value="Dietitian" className="text-[#212236]" style={{ color: '#212236' }}>Dietitian</option>
                                    <option value="Optometrist" className="text-[#212236]" style={{ color: '#212236' }}>Optometrist</option>
                                    <option value="Student" className="text-[#212236]" style={{ color: '#212236' }}>Student</option>
                                    <option value="Paramedic" className="text-[#212236]" style={{ color: '#212236' }}>Paramedic</option>
                                    <option value="Psychologist" className="text-[#212236]" style={{ color: '#212236' }}>Psychologist</option>
                                    <option value="Other" className="text-[#212236]" style={{ color: '#212236' }}>Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {role === 'Student' && (
                            <div className="space-y-2 translate-y-[-0.5rem] animate-fade-in-down">
                                <label className="text-[14px] font-bold text-[#212236]">What Qualification are you studying for?</label>
                                <input
                                    type="text"
                                    name="qualification"
                                    required
                                    placeholder="e.g. Medicine (MBBS)"
                                    className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                />
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236]">Primary Platform</label>
                                <div className="relative">
                                    <select
                                        name="primaryPlatform"
                                        required
                                        value={primaryPlatform}
                                        onChange={(e) => setPrimaryPlatform(e.target.value)}
                                        className={`w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] appearance-none transition-colors ${primaryPlatform === '' ? 'text-gray-400' : 'text-[#212236]'}`}
                                    >
                                        <option value="" disabled>eg. TikTok</option>
                                        <option value="TikTok" className="text-[#212236]" style={{ color: '#212236' }}>TikTok</option>
                                        <option value="Instagram" className="text-[#212236]" style={{ color: '#212236' }}>Instagram</option>
                                        <option value="YouTube" className="text-[#212236]" style={{ color: '#212236' }}>YouTube</option>
                                        <option value="LinkedIn" className="text-[#212236]" style={{ color: '#212236' }}>LinkedIn</option>
                                        <option value="X (Twitter)" className="text-[#212236]" style={{ color: '#212236' }}>X (Twitter)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236]">Follower Count on Primary Platform</label>
                                <input
                                    type="text"
                                    name="primaryFollowers"
                                    required
                                    placeholder="1,500"
                                    className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#212236]">Handle/URL of Primary Platform</label>
                            <input
                                type="text"
                                name="primaryHandle"
                                required
                                placeholder="https://handleurl.com/name"
                                className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236]">Secondary Platform</label>
                                <div className="relative">
                                    <select
                                        name="secondaryPlatform"
                                        value={secondaryPlatform}
                                        onChange={(e) => setSecondaryPlatform(e.target.value)}
                                        className={`w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] appearance-none transition-colors ${secondaryPlatform === '' ? 'text-gray-400' : 'text-[#212236]'}`}
                                    >
                                        <option value="" disabled>eg. Instagram</option>
                                        <option value="TikTok" className="text-[#212236]" style={{ color: '#212236' }}>TikTok</option>
                                        <option value="Instagram" className="text-[#212236]" style={{ color: '#212236' }}>Instagram</option>
                                        <option value="YouTube" className="text-[#212236]" style={{ color: '#212236' }}>YouTube</option>
                                        <option value="LinkedIn" className="text-[#212236]" style={{ color: '#212236' }}>LinkedIn</option>
                                        <option value="X (Twitter)" className="text-[#212236]" style={{ color: '#212236' }}>X (Twitter)</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-40">
                                            <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[14px] font-bold text-[#212236]">Follower Count on Secondary Platform</label>
                                <input
                                    type="text"
                                    name="secondaryFollowers"
                                    placeholder="1,500"
                                    className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#212236]">Handle/URL of Secondary Platform</label>
                            <input
                                type="text"
                                name="secondaryHandle"
                                placeholder="https://handleurl.com/name"
                                className="w-full h-[56px] px-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[14px] font-bold text-[#212236]">What is the main reason you would like to join HCC?</label>
                            <div className="relative">
                                <textarea
                                    value={reason}
                                    onChange={(e) => setReason(e.target.value.slice(0, 1000))}
                                    placeholder="Text here"
                                    className="w-full h-[160px] p-4 rounded-[12px] border border-gray-200 bg-white focus:outline-none focus:border-[#8430E1] transition-colors text-[#212236] placeholder:text-gray-300 resize-none"
                                />
                                <div className="absolute bottom-4 right-4 text-[12px] text-gray-400">
                                    {reason.length}/1000
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-[60px] bg-gradient-to-r from-[#234CD6] to-[#8430E1] text-white rounded-[12px] text-[16px] font-semibold hover:opacity-90 transition-all shadow-lg shadow-purple-200 mt-4 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isLoading && <Spinner />}
                            {isLoading ? 'Sending...' : 'Join creator waitlist'}
                        </button>
                    </form>
                </div>
            </div>

            {/* Right Section - Image & Info */}
            <div className="hidden lg:block w-full lg:w-1/3 relative min-h-[400px] lg:min-h-screen bg-gradient-to-r from-[#E0CBF6] to-[#162C7E]">
                <img
                    src="/assets/images/summit-creators.jpg"
                    alt="Healthcare Creators"
                    className="absolute inset-0 w-full h-full object-cover opacity-[.5]"
                />

                <div className="absolute bottom-0 left-0 w-full p-4 lg:p-8 text-white">
                    <div className="max-w-[480px]">
                        <h1 className="text-[24px] lg:text-[28px] font-bold mb-6 leading-tight">
                            Join the creator waitlist
                        </h1>
                        <div className="space-y-4">
                            <p className="text-[16px] lg:text-[18px] font-light opacity-95">
                                We are onboarding a small group of early creators to shape the Healthcare Creators Collective.
                            </p>
                            <p className="text-[16px] lg:text-[18px] font-light opacity-95">
                                Add your details if you would like to be considered for the first cohort.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <AlertModal 
                isOpen={alertConfig.isOpen} 
                onClose={() => setAlertConfig(prev => ({ ...prev, isOpen: false }))} 
                title={alertConfig.title} 
                message={alertConfig.message} 
                isError={alertConfig.isError} 
            />
        </main>
    );
}
