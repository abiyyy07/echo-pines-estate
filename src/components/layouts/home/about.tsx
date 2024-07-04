'use client';

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutHome() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="flex flex-col md:flex-row justify-center items-center h-3/5 p-6 md:p-0 mt-4 mb-6">
            <div className="md:w-1/3 mt-8 md:mt-0 md:mr-8 text-center md:text-left">
                <h1 className="md:text-4xl text-2xl font-bold mb-4 text-gray-700 mt-4">About Echo Pines Estate</h1>
                <p className="text-base text-gray-900">
                    Echo Pines Estate is a premier housing development that offers a perfect blend of luxury and nature. Nestled in a serene environment, our estate provides the ideal setting for families to grow and thrive. Our homes are designed with modern amenities and stylish finishes to ensure comfort and elegance.
                </p>
                <p className="text-base mt-4 mb-4 text-gray-900">
                    With a focus on community living, Echo Pines Estate features lush green spaces, recreational areas, and state-of-the-art facilities. Discover your dream home at Echo Pines Estate, where tranquility meets convenience.
                </p>
                <Link href={'/about'} className="px-2 py-1 font-semibold text-gray-700 border-2 border-gray-700 rounded-lg hover:bg-gray-700 hover:text-white transform duration-200">More specific</Link>
            </div>
            <div className="mt-10">
                <Image 
                    src={'/home/header.jpg'} 
                    alt="Echo Pines Estate" 
                    width={500} 
                    height={400} 
                    className="rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
