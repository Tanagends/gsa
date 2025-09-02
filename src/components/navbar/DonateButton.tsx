"use client";

import React, { useState } from 'react';
import { X, Heart } from 'lucide-react';

const DonateForm = ({ closeModal }) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md mx-auto relative text-center">
            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
                <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-main-700 mb-2">Support Our Cause</h2>
            <p className="text-gray-600 mb-6">Your contribution empowers young women and girls across Africa.</p>

            <div className="space-y-6">
                <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="font-bold text-lg text-gray-800">EcoCash</h3>
                    <p className="text-gray-600 mt-1">Send your donation to our EcoCash number:</p>
                    <p className="text-2xl font-mono font-bold text-main-700 mt-2 tracking-widest bg-white py-2 rounded">
                        077 123 4567
                    </p>
                </div>

                <div className="text-gray-500 text-sm">
                    More payment options coming soon.
                </div>
            </div>
            <p className="text-xs text-gray-400 mt-8">GSA Global is a registered non-governmental organization. Thank you for your generosity.</p>
        </div>
    );
};

export const DonateButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <button
                onClick={openModal}
                className="flex items-center gap-2 bg-main2 text-main-700 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
                <Heart size={20} />
                <span>Donate</span>
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 z-[100] flex items-center justify-center p-4" onClick={closeModal}>
                    <div onClick={(e) => e.stopPropagation()}>
                        <DonateForm closeModal={closeModal} />
                    </div>
                </div>
            )}
        </>
    );
};
