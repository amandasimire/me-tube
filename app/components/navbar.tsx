// app/components/Navbar.tsx
// app/components/Navbar.tsx
"use client"; // Make this a client component

import { useState } from 'react';
import { CiMenuKebab } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Image 
          src="/images/logo.png" 
          alt="YouTube Clone Logo" 
          width={100} 
          height={100} 
          className="mr-2"
        />
      </div>

      {/* Search Bar Section */}
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="border rounded-full p-2 pl-10 w-80 focus:outline-none"
        />
        {/* Search Icon */}
        <IoIosSearch className="absolute left-3 text-gray-500" size={20} />
      </div>

      {/* Menu Icon Section */}
      <div className="relative">
        {/* Menu Icon with Notification Badge */}
        <button onClick={toggleMenu} className="relative focus:outline-none">
          <CiMenuKebab size={28} />
        </button>

        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg">
            <ul>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                <Link href="/create">Create</Link>
              </li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">
                Notification
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

  