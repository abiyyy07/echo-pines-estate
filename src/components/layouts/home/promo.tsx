'use client';

import { useState } from 'react';
import Link from 'next/link';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { FaWhatsapp } from 'react-icons/fa';

export default function PromoHome() {
    return (
        <div className="bg-gradient-to-b from-blue-400 to-blue-700 p-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                {/* Bagian Promo */}
                <div className="text-white w-full md:w-1/2 md:p-6 p-2 space-y-4 md:-mt-8">
                    <h2 className="text-3xl font-bold mb-4 flex"><RiDiscountPercentFill className='mr-2' size={40} />Exclusive Housing Promo</h2>
                    <div className="bg-blue-400 p-4 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Luxury Villa</h3>
                        <p className="text-lg mt-2">Get a 10% discount on all Luxury Villas booked this month now!</p>
                    </div>
                    <div className="bg-blue-400 p-4 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold">Modern Cottage</h3>
                        <p className="text-lg mt-2">Enjoy free upgrades to premium finishes for all Modern Cottage bookings!</p>
                    </div>
                    <div className="mt-4s md:w-1/4">
                        <Link href={'https://wa.me/109201920'} className='flex px-2 py-1 text-white border-2 border-white hover:border-green-600 hover:bg-green-600 transform duration-200 rounded-lg font-bold text-center'><FaWhatsapp className='mt-1 mr-2' />Contact us</Link>
                    </div>
                </div>
                

                {/* Bagian Formulir */}
                <div className="bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-lg p-6 w-full md:w-1/2 mt-8 md:mt-0">
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">Interested? Contact Us!</h3>
                    <form className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                            <input type="text" id="name" className="w-full border border-gray-300 p-2 rounded mt-1" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                            <input type="email" id="email" className="w-full border border-gray-300 p-2 rounded mt-1" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-semibold">Phone Number</label>
                            <input type="tel" id="phone" className="w-full border border-gray-300 p-2 rounded mt-1" required />
                        </div>
                        <button type="submit" className="bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600 transition duration-200">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
