import React from 'react'
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

const ContactUs = () => {
	return (
		<div data-aos='zoom-in' className='w-full h-52 bg-indigo-500/90 sm:flex items-center px-2 py-4 mb-16'>
			<h1 className='text-2xl mx-auto sm:text-3xl text-center pt-6 sm:pt-0'>For previewing layouts and visual?</h1>
			<div className='relative mx-auto mt-8 sm:mt-0'>
				<input type="email" placeholder='Your best email' className='p-2 outline-none text-black w-full sm:w-56' />
				<ArrowNarrowRightIcon onClick={() => alert('successfull')} className='h-8 text-indigo-600 absolute right-0 top-1 cursor-pointer'/>
			</div>
		</div>
	)
}

export default ContactUs