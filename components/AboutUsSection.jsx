import React from 'react'
import Image from 'next/image';
import SiteImg from '../public/assets/skills/jobseekr.jpg'
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';

function AboutUsSection() {
    return (
        <div>
            <div className='flex flex-col items-center mb-8'>
                <Image className='object-fit rounded-xl' src={SiteImg} width={150} height={150} alt='aa' />
                <h2 className='mt-2'>JobSeekr</h2>
                <hr className='h-px my-4 bg-gray-200 border-0' />
                <p className='mt-2'>Placement | Internship | Study Material</p>
                <p className='px-6 mt-2 justify-evenly text-md font-medium'>We are here with the motive to provide all the placement and internship opportunities.</p>


                <h2 className='mt-6'>Subscribe & Follow</h2>

                <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300 dark:bg-white hover:dark:bg-indigo-200'>
                            <FaInstagram />
                        </div>
                    </a>

                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300
                            dark:bg-white hover:dark:bg-indigo-200'>
                            <FaGithub />
                        </div>
                    </a>

                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300
                            dark:bg-white hover:dark:bg-indigo-200'>
                            <FaGithub />
                        </div>
                    </a>

                    <a
                        href=''
                        target='_blank'
                        rel='noreferrer'
                    >
                        <div className='mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:bg-indigo-200 hover:scale-110 ease-in duration-300
                            dark:bg-white hover:dark:bg-indigo-200'>
                            <FaGithub />
                        </div>
                    </a>
                </div>


            </div>
        </div>
    )
}

export default AboutUsSection