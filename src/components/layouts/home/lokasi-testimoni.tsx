'use client';

import Image from 'next/image';
import { FaMapMarkedAlt } from 'react-icons/fa';

export default function LokasiTestimoniHome() {
    return (
        <>
            <div className="bg-gray-100">
                <div className="md:ml-10 font-bold text-gray-700 text-2xl md:text-start text-center mt-10">Location and Testimonial</div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center p-4 bg-gray-100">
                {/* Lokasi */}
                <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 m-4">
                    <h3 className="text-2xl font-bold mb-4 text-gray-700">Our Location <FaMapMarkedAlt className='mt-2 mb-2' size={40} /></h3>
                    <p className="text-gray-600 mb-2 mt-2">Echo Pines Estate is conveniently located near major highways and public transportation, making it easy for residents to travel to and from the estate. With nearby shopping centers, schools, and recreational facilities, everything you need is just a short distance away.</p>
                    <p className="text-gray-600 mt-2 mb-2">Address: 1234 Echo Pines Drive, Greenwood City, CA 56789</p>
                </div>

                {/* Testimoni */}
                <div className="flex flex-col w-full md:w-1/2">
                    <div className="bg-white shadow-lg rounded-lg md:p-5 px-5 flex items-center text-left m-4">
                        <Image 
                            src="/home/testi1.jpg" 
                            alt="Testimonial 1" 
                            width={80} 
                            height={100} 
                            className="rounded-full mr-4"
                        />
                        <div>
                            <p className="text-lg font-semibold mb-2">John Doe</p>
                            <p className="text-gray-600 text-sm">"Living at Echo Pines Estate has been a wonderful experience. The community is friendly, and the amenities are top-notch. Highly recommended!"</p>
                        </div>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg md:p-5 px-5 flex items-center text-left m-4">
                        <Image 
                            src="/home/testi2.jpg" 
                            alt="Testimonial 2" 
                            width={80} 
                            height={100} 
                            className="rounded-full mr-4"
                        />
                        <div>
                            <p className="text-lg font-semibold mb-2">Jane Smith</p>
                            <p className="text-gray-600 text-sm">"Echo Pines Estate is the perfect place for families. The green spaces and playgrounds are great for kids, and the location is very convenient."</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
