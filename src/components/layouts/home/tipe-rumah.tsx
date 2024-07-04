'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function TipeRumahHome() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className='mt-8'>
            <div className="text-center font-bold">
                <h1 className='text-4xl text-gray-700'>Available Type</h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center px-8">
                <div data-aos="fade-up" className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/2 m-4">
                    <Image 
                        src="/home/tipe1.jpg" 
                        alt="Luxury Villa" 
                        width={600} 
                        height={200} 
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-600 -mt-2">Luxury Villa</h3>
                </div>
                <div data-aos="fade-up" className="bg-gray-100 shadow-lg rounded-lg p-6 flex flex-col items-center text-center w-full md:w-1/2 m-4">
                    <Image 
                        src="/home/tipe2.jpg" 
                        alt="Modern Cottage" 
                        width={600} 
                        height={200} 
                        className="rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-bold text-gray-600 -mt-2">Modern Cottage</h3>
                </div>
            </div>
        </div>
    );
}
