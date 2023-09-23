import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsToggleOn, BsToggleOff } from 'react-icons/bs';
import NavLogo from '../public/assets/jobseekr.jpg'
import { useRouter } from 'next/router';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [navBg, setNavBg] = useState('#ecf0f3');
    const [linkColor, setLinkColor] = useState('#1f2937');
    const [logo, setLogo] = useState(true);
    const router = useRouter();

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className={`fixed w-full h-16 shadow-xl z-[100] ease-in-out duration-300 bg-[${navBg}]`}>
            <div className='flex justify-between items-center w-full h-full md:px-40 px-4'>
                <Link href='/'>
                    {
                        logo ? <Image
                            src={NavLogo}
                            alt='/'
                            width='65'
                            height='25'
                            className='cursor-pointer mix-blend-darken dark:mix-blend-plus'
                        /> : ""
                    }
                </Link>
                <div>
                    <ul className={`hidden md:flex items-center ${linkColor} dark:text-white`}>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/'>Work From Home</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#about'>Internship</Link>
                        </li>
                        <li className='ml-10 text-sm uppercase hover:border-b'>
                            <Link href='/#skills'>Placement Material</Link>
                        </li>

                    </ul>
                    {/* Hamburger Icon */}
                    <div
                        style={{ color: `${linkColor}` }}
                        onClick={handleNav}
                        className='md:hidden'
                    >
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* Overlay */}
            <div
                className={
                    nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
                }
            >
                {/* Side Drawer Menu */}
                <div
                    className={
                        nav
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }
                >
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <Link href='/'>
                                <Image
                                    src={NavLogo}
                                    width='87'
                                    height='35'
                                    alt='/'
                                    className='mix-blend-color-burn'
                                />
                            </Link>
                            <div
                                onClick={handleNav}
                                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
                            >
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4'>
                                Let&#39;s build something legendary together
                            </p>
                        </div>
                    </div>
                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase border-b border-gray-300'>
                            <Link href='/'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Work From Home
                                </li>
                            </Link>
                            <Link href='/#about'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Internship
                                </li>
                            </Link>
                            <Link href='/#skills'>
                                <li onClick={() => setNav(false)} className='py-4 text-sm'>
                                Placement Material
                                </li>   
                            </Link>
                        </ul>
                        <div className='pt-6 mt-2'>
                            <p className='uppercase tracking-widest text-[#5651e5]'>
                                Let&#39;s Connect
                            </p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/rinaldo-badigar-65a85819b/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedinIn />
                                    </div>
                                </a>
                                <a
                                    href='https://github.com/Rinaldo23'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </a>
                                <Link href='/#contact'>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href='/#resume'>
                                    <div
                                        onClick={() => setNav(!nav)}
                                        className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                                    >
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;