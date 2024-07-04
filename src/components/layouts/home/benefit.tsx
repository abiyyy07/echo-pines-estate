'use client';

import { useEffect } from 'react';

import { FaLeaf, FaHome, FaChild } from 'react-icons/fa';
import { SiGooglestreetview } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiHomeModern } from 'react-icons/hi2';

export default function BenefitHome() {
    useEffect(() => {
        AOS.init();
    }, []);
    
    return (
        <div className='mb-4'>
            <div className="text-center bg-gray-100">
                <div className="py-4">
                    <h1 className="text-4xl font-bold text-gray-600">Why should you choose us?</h1>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-gray-100">
                <div data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-sm h-60 md:w-72">
                    <FaLeaf className="text-green-500 text-4xl mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Green Spaces</h3>
                    <p className="text-gray-600 flex-grow">Enjoy lush green parks and recreational areas perfect for relaxation with child or family and outdoor activity.</p>
                </div>
                <div data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-sm h-60 mt-8 md:mt-0 md:ml-8 md:w-72">
                    <HiHomeModern className="text-blue-500 text-4xl mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Modern Homes</h3>
                    <p className="text-gray-600 flex-grow">Experience the comfort and elegance of modern homes with stylish finishes and amenities.</p>
                </div>
                <div data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-sm h-60 mt-8 md:mt-0 md:ml-8 md:w-72">
                    <FaChild className="text-yellow-500 text-4xl mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Family Friendly</h3>
                    <p className="text-gray-600 flex-grow">A safe and nurturing environment with facilities designed for families and children.</p>
                </div>
                <div data-aos="fade-up" className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center max-w-sm h-60 mt-8 md:mt-0 md:ml-8 md:w-72">
                    <SiGooglestreetview className="text-orange-500 text-4xl mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Easily Accessible</h3>
                    <p className="text-gray-600 flex-grow">Our estate offers convenient access to major roads, public transportation, and essential services.</p>
                </div>
            </div>
        </div>
    );
}
