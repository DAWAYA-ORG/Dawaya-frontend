'use client';

import { useState } from 'react';
import { LocationMarkerIcon, SearchIcon } from '@heroicons/react/solid';
import Image from 'next/image';

const HeroSection = () => {
    const [userLocation, setUserLocation] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleLocationChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setUserLocation(event.target.value);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <section className='relative w-full min-h-screen bg-blue-50'>
            <div className='absolute inset-0 z-0'>
                <Image
                    src='/images/HeroSectionBackground.jpeg'
                    alt='Main background'
                    layout='fill'
                    objectFit='cover'
                    className='brightness-95'
                />
                <div className='absolute inset-0 bg-blue-600/10' />
            </div>

            <div className='relative z-10 w-full min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8'>
                <div className='w-full max-w-3xl mx-auto'>
                    <div className='text-center space-y-6 md:space-y-8'>
                        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 px-4'>
                            Find The Nearest Pharmacy
                            <br className='md:hidden' /> With Your Medication.
                        </h1>

                        <p className='text-base md:text-lg text-gray-600 px-4'>
                            Stay assured... find the nearest pharmacy that has
                            the treatment you&apos;re looking for!
                        </p>

                        <div className='space-y-4 w-full max-w-xl mx-auto px-4'>
                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
                                    <LocationMarkerIcon className='w-5 h-5 text-gray-400' />
                                </div>
                                <input
                                    type='text'
                                    placeholder='Select Location'
                                    className='w-full pl-10 pr-4 py-3 md:py-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-black shadow-sm'
                                    value={userLocation}
                                    onChange={handleLocationChange}
                                />
                            </div>

                            <div className='relative w-full'>
                                <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
                                    <SearchIcon className='w-5 h-5 text-gray-400' />
                                </div>
                                <input
                                    type='text'
                                    placeholder='Search For Pharmacy Or Medication...'
                                    className='w-full pl-10 pr-4 py-3 md:py-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 text-black shadow-sm'
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
