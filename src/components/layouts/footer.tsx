'use client';

import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-blue-700 to-blue-500 text-white py-8">
            <hr className="mb-4 border-gray-400" />
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Bagian Informasi Perusahaan */}
                    <div className="mb-8 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Echo Pines Estate</h3>
                        <p className="text-gray-300">Building the homes of your dreams with the utmost care and quality.</p>
                        <p className="text-gray-300">1234 Housing Blvd, Dream City, Country</p>
                        <p className="text-gray-300">Phone: (123) 456-7890</p>
                        <p className="text-gray-300">Email: info@echopinesestate.com</p>
                    </div>
                    
                    {/* Bagian Link Sosial Media */}
                    <div className="flex space-x-6">
                        <Link href="https://www.instagram.com" aria-label="Instagram">
                            <FaInstagram className="text-white hover:text-gray-300 text-2xl" />
                        </Link>
                        <Link href="https://www.twitter.com" aria-label="Twitter">
                            <FaTwitter className="text-white hover:text-gray-300 text-2xl" />
                        </Link>
                        <Link href="https://www.facebook.com" aria-label="Facebook">
                            <FaFacebook className="text-white hover:text-gray-300 text-2xl" />
                        </Link>
                        <Link href="https://wa.me/" aria-label="LinkedIn">
                            <FaWhatsapp className="text-white hover:text-gray-300 text-2xl" />
                        </Link>
                    </div>
                </div>
                <div className="mt-8 pt-4 text-center border-t border-white">
                    <p className="text-gray-300">&copy; 2024 Echo Pines Estate. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
