import Link from 'next/link';
import React from 'react';
import { IoSearch } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BsHandbag } from "react-icons/bs";
import { Sheet } from './ui/sheet';
const Header = () => {
    return(
        <div className='lg:max-w-[1920px] h-[90px] w-full bg-[#000000]'>
            <div className='lg:max-w-[1320px] w-full h-[32px] justify-around p-8 left-{300} top-{29px} flex flex-col lg:flex-row md:flex-row'>
                <div className='flex'>
                    <h1 className='font-bold text-[24px] text-white'>Food</h1>
                    <span className='font-bold text-[24px] text-[#FF9F0D]'>tuck</span>
                </div>
                <ul className='flex w-[508px] h-[24px] gap-4'>
                    <li className='text-[16px] font-bold text-[#FF9F0D]'><Link href="/">Home</Link></li>
                    <li className='text-[16px] font-bold text-white'><Link href="/menu">Menu</Link></li>
                    <li className='text-[16px] font-bold text-white'><Link href="/blog">Blog</Link></li>
                    <li className='text-[16px] font-bold text-white'><Link href="/chef">Pages</Link></li>
                    <li className='text-[16px] font-bold text-white'><Link href="/about">About</Link></li>
                    <li className='text-[16px] font-bold text-white'><Link href="/shop">Shop</Link></li>
                    <li className='text-[16px] font-bold text-white'><Link href="/contact">Contact</Link></li>
                </ul>
                
                <div className='flex gap-3'>
                    <IoSearch size={24} className='text-white'/>
                    <LuUserRound size={24} className='text-white'/>
                    <BsHandbag size={24} className='text-white' />
                </div>
            </div>
        </div>

    )
}
export default Header