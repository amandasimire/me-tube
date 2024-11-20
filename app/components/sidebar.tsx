// app/components/Sidebar.tsx'
"use client"; 
import { useState } from 'react';
import { MdOutlineHome, MdOutlineMovie, MdHelpOutline } from 'react-icons/md';
import { HiOutlineRectangleStack } from 'react-icons/hi2';
import { GiMusicSpell } from 'react-icons/gi';
import { FiMusic } from 'react-icons/fi';
import { RiGraduationCapLine, RiHistoryLine } from 'react-icons/ri';
import { IoGameControllerOutline, IoSettingsOutline } from 'react-icons/io5';
import { PiGooglePodcastsLogoBold } from 'react-icons/pi';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } h-screen bg-gray-100 p-5 transition-width duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="mb-6 focus:outline-none text-gray-600"
      >
        {isCollapsed ? <IoIosArrowBack size={24} /> : <IoIosArrowForward size={24} />}
      </button>

      {/* Menu Items */}
      <ul className="space-y-6">
        <li className="flex items-center space-x-3">
          <MdOutlineHome size={24} />
          {!isCollapsed && <span><Link href="/">Home</Link></span>}
        </li>
        <li className="flex items-center space-x-3">
          <HiOutlineRectangleStack size={24} />
          {!isCollapsed && <span>Subscriptions</span>}
        </li>
        <li className="flex items-center space-x-3">
          <GiMusicSpell size={24} />
          {!isCollapsed && <span>MeTube Music</span>}
        </li>
        <li className="flex items-center space-x-3">
          <FiMusic size={24} />
          {!isCollapsed && <span>Music</span>}
        </li>
      </ul>

     {/* Explore Section */}
     <div className={`${isCollapsed ? 'opacity-0 pointer-events-none' : ''} transition-opacity duration-300`}>
      <h2 className="mt-10 mb-4 text-gray-800 font-bold">Explore</h2>
      <ul className="space-y-6">
        <li className="flex items-center space-x-3">
          <RiGraduationCapLine size={24} />
          {!isCollapsed && <span>Learn</span>}
        </li>
        <li className="flex items-center space-x-3">
          <IoGameControllerOutline size={24} />
          {!isCollapsed && <span>Gaming</span>}
        </li>
        <li className="flex items-center space-x-3">
          <PiGooglePodcastsLogoBold size={24} />
          {!isCollapsed && <span>Podcast</span>}
        </li>
        <li className="flex items-center space-x-3">
          <MdOutlineMovie size={24} />
          {!isCollapsed && <span>Movies & TV</span>}
        </li>
      </ul>
    </div>
      

      {!isCollapsed && <h2 className="mt-10 mb-4 text-gray-800 font-bold">Profile</h2>}

      <ul className="space-y-6">
        <li className="flex items-center space-x-3">
          <FaRegUserCircle size={24} />
          {!isCollapsed && <span>You</span>}
        </li>
        <li className="flex items-center space-x-3">
          <RiHistoryLine size={24} />
          {!isCollapsed && <span>History</span>}
        </li>
        <li className="flex items-center space-x-3">
          <IoSettingsOutline size={24} />
          {!isCollapsed && <span>Settings</span>}
        </li>
        <li className="flex items-center space-x-3">
          <MdHelpOutline size={24} />
          {!isCollapsed && <span>Help</span>}
        </li>
      </ul>
    </aside>
  );
}
