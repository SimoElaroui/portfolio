'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { title: "ABOUT /", path: "#about" },
  { title: "PROJECT /", path: "#project" },
  { title: "CONTACT ", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="relative">
      <div className=' duration-1000 flex flex-wrap items-center drop-shadow-md rounded-r-3xl justify-around max-h-none p-2 bg-gradient-to-r from-transparent to-gray-500 bg-opacity-50 my-6  border-white transition-all hover:bg-sky-300 m-5'>
        
        {/* Logo */}
        <Link href='/'>
          <Image
            src="/image/Logoss.png"
            alt="Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>

        {/* Menu Mobile - Toggle Button */}
        <div className='block md:hidden'>
          <button 
            onClick={() => {
              console.log("Before:", navbarOpen);
              setNavbarOpen(!navbarOpen);
              console.log("After:", !navbarOpen);
            }}
            className="flex items-center px-3 py-2 border rounded border-white text-white hover:text-gray-300 hover:border-gray-300"
          >
            {navbarOpen ? <XMarkIcon className="h-6 w-6 text-white" /> : <Bars3Icon className="h-6 w-6 text-white" />}
          </button>
        </div>

        {/* Navigation - Desktop */}
        <div className=" hidden md:flex items-center gap-8">
          {/* Bouton HIRE ME */}
          <Link href="/contact">
          <svg className="size-6 animate-bounce">
</svg>
          </Link>

          {/* Menu Desktop */}
          <ul className='flex space-x-8'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLinks href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu Mobile - Affichage conditionnel */}
      <div className={`absolute top-16 left-0 w-full bg-gray-700 text-white p-6 rounded-md shadow-md transition-all duration-300 ease-in-out ${navbarOpen ? 'opacity-100 scale-100 block' : 'opacity-0 scale-95 hidden'}`}>
        <ul className="flex flex-col space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLinks href={link.path} title={link.title} onClick={() => setNavbarOpen(false)} />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
