import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import './Nav.css'
import { XMarkIcon, Bars4Icon } from '@heroicons/react/24/solid'
const Nav = () => {
    const [nav, setNav] = useState(false)

    return (
        <nav className='md:flex justify-between items-center'>
            <Link to='/'><h2 className='text-2xl font-bold mb-5'>JobHunter</h2> </Link>
            <div className='relative'>

                <div className='mb-5 md:hidden'>

                    {
                        nav ? <XMarkIcon onClick={() => setNav(!nav)} className="h-6 w-6 cursor-pointer text-blue-500" /> : <Bars4Icon onClick={() => setNav(!nav)} className="h-6 w-6 cursor-pointer text-blue-500" />
                    }

                </div>

                <div className={` duration-200 absolute md:static bg-sky-500 md:bg-slate-50 md:text-black p-4 text-white flex flex-col md:flex-row gap-4 mb-5 ${nav ? 'top-8' : '-top-64'}`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "active font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/statistics"
                        className={({ isActive }) => isActive ? "active font-bold" : ""
                        }
                    >
                        Statistics
                    </NavLink>

                    <NavLink
                        to="/applied_jobs"
                        className={({ isActive }) => isActive ? "active font-bold" : ""
                        }
                    >
                        Applied Jobs
                    </NavLink>

                    <NavLink
                        to="/blog"
                        className={({ isActive }) => isActive ? "active font-bold" : ""
                        }
                    >
                        Blog
                    </NavLink>
                </div>

            </div>

            <div>
                <button className=' btn-nav text-white px-5 py-3 rounded-lg'>Star Applying</button>
            </div>
        </nav>
    );
};

export default Nav;