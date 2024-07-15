import React from 'react'
import { AiFillProduct } from "react-icons/ai";
import { HiShoppingBag } from "react-icons/hi2";
import { FaCartShopping } from "react-icons/fa6";


export const Profile = () => {
  return (
	 <div className='mt-8'>
	<div>
	<div className="flex items-center justify-around space-x-4">
  <div className="w-12 h-12 bg-white border-2 border-gray-400 rounded-full"></div>
  <div className="ml-2">
    <div className="text-gray-400">Hello</div>
    <div className="font-bold text-xl">customer</div>
  </div>
</div>

<div className=' mt-10'>
<div className=' flex justify-around max-w-[calc(100vw-150px)] mx-auto bg-gray-300 pt-4 pb-4 rounded'>
	<div className='flex flex-col justify-center items-center space-y-4'>
	<div className='text-3xl'><AiFillProduct /></div>
		<div className='text-2xl'>10</div>
	</div>

		<div className='flex flex-col items-center justify-center space-y-4'>
		<div className='text-3xl'><HiShoppingBag /></div>
		<div className='text-2xl'>2</div>
		</div>

		<div className='flex flex-col items-center  space-y-4 justify-center'>
		<div className='text-3xl'><FaCartShopping /></div>
		<div className='text-2xl'>4</div>
		</div>
	</div>
</div>
<div className='mt-10' >
<div className="bg-gray-200 text-black min-h-[200px] max-h-[500px] rounded flex items-center justify-center max-w-[calc(100vw-150px)] mx-auto">
  Several other settings and options
</div>
</div>


</div>
	 </div>
  )
}
