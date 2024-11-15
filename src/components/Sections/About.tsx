import Image from 'next/image';
import { Button } from '../Ui/Button';

export default function Component() {
    return (
        <section className='w-full py-16 px-4 sm:px-8 bg-white'>
            <div className=' flex flex-col md:flex-row items-center gap-6 bg-gray-100 p-6 md:p-8 rounded-lg'>
                <div className=' w-full md:w-1/2 flex justify-center'>
                    <div className='relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96'>
                        <Image
                            alt='Location services illustration'
                            className='rounded-full object-cover'
                            layout='fill'
                            src='/images/about.jpg'
                            priority
                        />
                    </div>
                </div>
                <div className='w-full md:w-1/2 space-y-4 text-center md:text-left'>
                    <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600'>
                        Who we are
                    </h2>
                    <p className='text-gray-500 text-base sm:text-lg lg:text-xl'>
                        We are a platform designed to make it easy for users to
                        find medications and connect with nearby pharmacies. Our
                        aim is to bridge the gap between users and pharmacies,
                        providing a smooth and efficient healthcare experience.
                    </p>
                    <div className='flex justify-center md:justify-start'>
                        <Button className='w-fit' variant='secondary'>
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
