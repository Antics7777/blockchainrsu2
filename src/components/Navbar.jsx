
import { useState } from 'react'
import { close, close2, menu2, menu, blc } from '../assets'
import { navLinks } from '../constants'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, settoggle] = useState(false)
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar '>
            <img
                src={blc}
                alt='blc'
                className='w-[60px]'
            />
            <ul className='list-none sm:flex hidden justify-end items-center flex-1 z-10'>
                {navLinks.map((nav, index) => (
                    <li key={nav.id} className={`font-poppins text-[18px] cusor-pointer font-semibold  ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                        <Link to={nav.id} className='text-black hover:text-blue-900  '>
                            {nav.title}
                        </Link>
                    </li>
                ))}

            </ul>


            <div className='sm:hidden flex justify-end items-center'>
                <img src={toggle ? close2 : menu2} alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain'
                    onClick={() => settoggle((prev) => (!prev))}

                />

                <div
                    className={`${toggle ? 'flex ' : 'hidden'} right-0  p-6 bg-[#003399]  mx-4 my-2 min-w-[180px] sidebar absolute top-20 shadow-lg rounded-xl`}
                >
                    <ul className='list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins text-[16px] cusor-pointer font-normal  ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                                <Link to={nav.id} className='text-white hover:text-gray-900  '>
                                    {nav.title}
                                </Link>
                            </li>
                        ))}

                    </ul>


                </div>
            </div>
        </nav>
    )
}

export default Navbar