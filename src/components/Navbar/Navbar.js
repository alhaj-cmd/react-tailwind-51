import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes =[
        {id:1, name:'Home', link: '/Home'},
        {id:2, name:'Shop', link: '/Shop'},
        {id:3, name:'Deals', link: '/Deals'},
        {id:4, name:'Coupons', link: '/Coupons'},
        {id:5, name:'Contract', link: '/Contract'},
    ]
    return (
        <nav className='bg-purple-200 w-full'>
            <div onClick={()=>setOpen(!open)} className="h-6 w-6 md:hidden">
           
            {
                open ? < XMarkIcon/> : <Bars3Icon/>
            }
            </div>
            <ul className={`bg-purple-200 md:flex w-full justify-center absolute md:static duration-500 easy-in ${open ? 'top-6' : 'top-[-120px]'}`}>
                {
                    routes.map(route  => <Link
                    key ={route.id}
                    route ={route}
                    ></Link> )
                }
            </ul>
        </nav>
    );
};

export default Navbar;