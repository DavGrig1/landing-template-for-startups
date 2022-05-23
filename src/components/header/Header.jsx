import React, {useState} from 'react'
import logoImg from '../../assets/logo.svg'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import './header.css';

const Header = () => {
	const [menuActive, setMenuActive] = useState(false)

	const toggleNav = () => setMenuActive(!menuActive)

	const NavbarBurger = () => {
		return (
			<div className={menuActive ? 'menu active' : 'menu'}>
				<div className='absolute w-full h-40 items-center justify-center flex flex-col sm:hidden bg-black/90'>
					<a target='_blank' rel='noreferrer' href='https://github.com/DavGrig1/cloud-management' className='font-semibold tracking-wide text-white cursor-pointer'>Documentation</a>
					<button className='bg-indigo-500 hover:bg-indigo-500/80 text-white 
					font-bold rounded-sm py-[6px] mt-8 px-20 transition-all'>Sign up</button>
				</div>
			</div>
		)
	}

	return (
		<div data-aos='fade-up' className='mb-20'>
			<div className='h-20 w-full flex justify-between items-center sm:bg-transparent relative '>
				<div className='mx-3'>
					<img src={logoImg} alt='/' className='cursor-pointer'/>
				</div>

				<div onClick={toggleNav} className='flex sm:hidden mx-4 cursor-pointer relative'>
					<XIcon className={menuActive ? 'xIcon active' : 'xIcon'}/>
					<MenuIcon className={!menuActive ? 'burger active' : 'burger'}/>
				</div>
				
				<div className='items-center sm:flex hidden'>
					<a target='_blank' rel='noreferrer' href='https://github.com/DavGrig1/cloud-management'
						className='mr-16 font-semibold hover:text-white cursor-pointer'>Documentation
					</a>
					<button className='bg-indigo-500 hover:bg-indigo-500/80 text-white 
					font-bold rounded-sm py-[6px] mx-3 px-6 transition-all'>Sign up</button>
				</div>
			</div>
			
			<NavbarBurger />
		</div>
   )
}

export default Header