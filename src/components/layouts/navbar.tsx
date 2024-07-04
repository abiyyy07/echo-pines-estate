'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaPhoneAlt } from 'react-icons/fa';
import { MdRealEstateAgent } from 'react-icons/md';
import { TbBuildingEstate } from 'react-icons/tb';
import { GrGallery } from 'react-icons/gr';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-400 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Link href={'/'}>
                        <Image
                            src="/logo.png"
                            alt="Echo Pines Estate"
                            width={200}
                            height={100}
                            className="mr-3"
                        />
                    </Link>
                </div>
                <div className="hidden md:flex space-x-2 font-semibold">
                    <Link href="/" className='text-white hover:text-gray-100 px-2 py-1'>
                        Home
                    </Link>
                    <Link href="/about" className='text-white hover:text-gray-100 px-2 py-1'>
                        About
                    </Link>
                    <Link href="/properties" className='text-white hover:text-gray-100 px-2 py-1'>
                        Properties
                    </Link>
                    <Link href="/gallery" className='text-white hover:text-gray-100 px-2 py-1'>
                        Gallery
                    </Link>
                    <Link href="/contact" className='flex text-white hover:bg-white hover:text-gray-400 font-semibold transform duration-200 px-2 py-1 border-white border-2'>
                        <FaPhoneAlt className='mt-1 mr-1' />Contact
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`absolute top-16 left-0 w-full py-2 shadow-md transition-transform duration-300 z-40 space-y-2 ${isOpen ? 'translate-x-0 bg-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-lg' : '-translate-x-full' } md:hidden`}>
                <Link href="/" className='flex text-white hover:text-gray-400 mb-2 ml-2'>
                    <FaHome className='mr-2' size={20} />Home
                </Link>
                <Link href="/about" className='flex text-white hover:text-gray-400 mb-2 ml-2'>
                    <MdRealEstateAgent className='mr-2' size={20} />About
                </Link>
                <Link href="/properties" className='flex text-white hover:text-gray-400 mb-2 ml-2'>
                    <TbBuildingEstate className='mr-2' size={20} />Properties
                </Link>
                <Link href="/gallery" className='flex text-white hover:text-gray-400 mb-2 ml-2'>
                    <GrGallery className='mr-2' size={20} />Gallery
                </Link>
                <Link href="/contact" className='flex text-white hover:text-gray-400 mb-2 ml-2'>
                    <FaPhoneAlt className='mr-2' size={20} />Contact
                </Link>
            </div>
        </nav>
    );
}