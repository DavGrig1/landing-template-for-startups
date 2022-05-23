import React from 'react'
import logoImg from '../assets/logo.svg';
import { 
	FaFacebookF,
	FaTwitter,
	FaInstagram } from 'react-icons/fa';

const Footer = () => {
	
   return (
	   <div className='mb-2'>
			<div className='flex justify-between mb-10'>
				<div className='cursor-pointer'>
					<img src={logoImg} alt='/'/>
				</div>

				<div className='flex items-center'>
					<FaFacebookF className='text-lg ml-8 text-indigo-500 cursor-pointer'/>
					<FaTwitter className='text-lg ml-8 text-indigo-500 cursor-pointer'/>
					<FaInstagram className='text-lg mx-8 text-indigo-500 cursor-pointer'/>
				</div>
	  		</div>

			<div className='flex justify-between'>
				<p className='self-end'>Made by <span className='text-white'>Cruip</span>. All right reserved</p>
				
				<div className='flex flex-col sm:flex-row'>
					<p className='ml-5 my-2 sm:my-0 hover:text-white cursor-pointer'>Contact</p>
					<p className='ml-5 my-2 sm:my-0 hover:text-white cursor-pointer'>About us</p>
					<p className='ml-5 my-2 sm:my-0 hover:text-white cursor-pointer'>FAQ's</p>
					<p className='mx-5 my-2 sm:my-0 hover:text-white cursor-pointer'>Support</p>
				</div>
			</div>
	   </div>
   )
}

export default Footer