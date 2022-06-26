import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

type HomePageProps = {}

const Navbar:React.FC<HomePageProps> = () => {
    const [openMenu,setOpenMenu] = useState<boolean>(false);
    const location = useLocation()

    return (
        <div className='sticky top-0 z-50 '>
            <nav className="bg-white border-b-4 border-[#C4C4C4] px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 ">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a href="/" className="items-center">
                        <p className='text-[16px] lg:text-[32px] text-[#E51B23] font-light'>Explore</p>
                        <span className="text-[24px] lg:text-[40px] text-[#E51B23] font-semibold">Rembang</span>
                    </a>
                    <button onClick={() => setOpenMenu(!openMenu)} data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <a href="/place" 
                                className={`${location.pathname.includes('place') && 'border-b-4 border-[#E51B23] pb-[8px]'} text-[25px] text-[#E51B23] font-normal`} 
                                aria-current="page">Wisata Budaya</a>
                            </li>
                            <li>
                                <a href="/map" 
                                className={`${location.pathname.includes('map') && 'border-b-4 border-[#E51B23] pb-[8px]'} text-[25px] text-[#E51B23] font-normal`}
                                aria-current="page">Peta Wisata</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {
                openMenu && 
                <div className='absolute bg-white w-full shadow-lg md:hidden lg:hidden'>
                    <div className='px-[8px] py-[12px]'>
                        <a href="/place" 
                        className={`${location.pathname.includes('place') && 'border-b-4 border-[#E51B23] pb-[8px]'} text-[16px] lg:text-[25px] text-[#E51B23] font-normal`} 
                        aria-current="page">Wisata Budaya
                        </a>
                    </div>
                    <div className='px-[8px] py-[12px]'>
                        <a href="/place" 
                        className={`${location.pathname.includes('map') && 'border-b-4 border-[#E51B23] pb-[8px]'} text-[16px] lg:text-[25px] text-[#E51B23] font-normal`} 
                        aria-current="page">Wisata Budaya
                        </a>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navbar;