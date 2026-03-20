'use client';

import React, { useEffect, useState } from 'react';

interface AlertModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    isError?: boolean;
}

export default function AlertModal({ isOpen, onClose, title, message, isError = false }: AlertModalProps) {
    const [show, setShow] = useState(false);
    const [render, setRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setRender(true);
            setTimeout(() => setShow(true), 10);
        } else {
            setShow(false);
            const timer = setTimeout(() => setRender(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!render) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div 
                className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            ></div>
            <div className={`relative w-full max-w-sm bg-white rounded-[24px] shadow-2xl overflow-hidden transform transition-all duration-300 ${show ? 'scale-100 translate-y-0' : 'scale-95 translate-y-8'}`}>
                <div className="p-8">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 shadow-inner ${isError ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'}`}>
                        {isError ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        )}
                    </div>
                    <h3 className="text-[22px] text-center font-bold text-[#212236] mb-3 font-sans leading-tight">{title}</h3>
                    <p className="text-center text-[#6D6D73] font-sans text-[15px] leading-relaxed">{message}</p>
                </div>
                <div className="px-8 pb-8 flex justify-center">
                    <button 
                        onClick={onClose}
                        className={`w-full h-[56px] rounded-[12px] text-white font-semibold text-[16px] transition-all active:scale-[0.98] ${
                            isError 
                                ? 'bg-red-500 hover:bg-red-600 shadow-lg shadow-red-200' 
                                : 'bg-gradient-to-r from-[#234CD6] to-[#8430E1] hover:opacity-90 shadow-lg shadow-purple-200'
                        }`}
                    >
                        Okay
                    </button>
                </div>
            </div>
        </div>
    );
}
