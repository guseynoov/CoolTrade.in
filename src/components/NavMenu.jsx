import React from 'react'
import { NavLink } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { AiFillProduct } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";



export const NavMenu = () => {
  return (
	<div className="fixed inset-x-0 bottom-0 bg-black shadow ">
	<div className="max-w-screen-xl mx-auto px-4">
	  <nav className="flex justify-center items-center py-3">
		 <div className="flex space-x-4 sm:space-x-24 md:space-x-20">
			<NavLink to="/Home" className={({ isActive }) => isActive ? "text-white text-2xl" : "text-cyan-700 text-2xl"}><IoHome /></NavLink>
			<NavLink to="/Search" className={({ isActive }) => isActive ? "text-white text-2xl" : "text-cyan-700 text-2xl"}><FaSearch /></NavLink>
			<NavLink to="/Contact" className={({ isActive }) => isActive ? "text-white text-2xl" : "text-cyan-700 text-2xl"}><AiFillMessage /></NavLink>
			<NavLink to="/Products" className={({ isActive }) => isActive ? "text-white text-2xl" : "text-cyan-700 text-2xl"}><AiFillProduct /></NavLink>
			<NavLink to="/Profile" className={({ isActive }) => isActive ? "text-white text-2xl" : "text-cyan-700 text-2xl"}><CgProfile /></NavLink>
		 </div>
	  </nav>
	</div>
 </div>
	) 
}
