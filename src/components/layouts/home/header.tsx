'use client';

import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { useRef } from 'react';

// Components
import AboutHome from "./about";

export default function HeaderHome() {
    const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
    const about = useRef(null);

    return (
        <>
            <div className="relative w-full h-96 md:min-h-screen">
                <Image 
                    src="/home/header.jpg" 
                    alt="Echo Pines Estate" 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h1 className="text-white md:text-6xl text-4xl font-bold text-center">Echo Pines Estate</h1>
                    <p className="text-white text-lg">Find your dream house with family here</p>
                    <button onClick={() => scrollToRef(about)} className="flex items-center px-4 py-2 bg-transparent border-2 border-white text-white font-semibold mt-4 rounded-lg hover:bg-white hover:text-black transition duration-200 group">
                        Explore Here
                        <IoIosArrowForward className="ml-1 transform transition-transform duration-200 group-hover:translate-x-1" size={20} />
                    </button>
                </div>
            </div>

            <div ref={about} className="-mt-3">
                <AboutHome />
            </div>
        </>
    );
}
