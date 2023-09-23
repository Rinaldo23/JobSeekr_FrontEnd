import React from 'react'
import Image from 'next/image';
import SiteImg from '../public/assets/jobseekr.jpg'
import { SocialIcon } from 'react-social-icons';

function SiteDescSetion() {
    return (
        <div>
            <div className='flex flex-col items-center md:mb-8'>
                <Image className='object-fit md:rounded-xl md:w-150 md:h-150  rounded-full mt-2' src={SiteImg} width={150} height={150} alt='aa' />
                <h2 className='mt-2 md:text-xl text-base'>JobSeekr</h2>
                <hr className='h-px bg-gray-200 border-0' />
                <p className='md:mt-2 mt-1 md:text-lg text-sm'>Placement | Internship | Study Material</p>
                <p className='px-6 md:mt-2 mt-1 justify-evenly md:text-lg text-sm md:font-medium font-medium text-center'>We are here with the motive to provide all the placement and internship opportunities.</p>


                <hr className="w-2/3 h-0.5 mx-auto my-4 bg-gray-900 border-0 rounded md:mt-6" />
                <h2 className='md:mt-2 mt-4 md:text-2xl text-lg'>Subscribe & Follow</h2>

                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>

                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.instagram.com" url="www.instagram.com" />
                    </div>



                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.facebook.com" url="www.facebook.com" />
                    </div>


                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.telegram.com" url="www.telegram.com" />
                    </div>


                    <div className='mx-2 rounded-full cursor-pointer hover:scale-105 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                        <SocialIcon href="www.linkedin.com" url="www.linkedin.com" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SiteDescSetion