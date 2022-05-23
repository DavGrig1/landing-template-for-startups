import React, {useState} from 'react'
import videoImg from '../../assets/video-placeholder.jpg'
import bgImg from '../../assets/illustration-01.svg';
import ResponsivePlayer from './ResponsivePlayer';
import { XIcon } from '@heroicons/react/solid';


const Main = () => {
	const [toggleVideoPlayer, setToggleVideoPlayer] = useState(false)

	


	const VideoPlayer = () => {
		if(toggleVideoPlayer === true) {
			return <ResponsivePlayer />
		}
	}

	return (
		<div className='mb-16'>
			<img src={bgImg} alt='/' className='absolute top-2 w-full h-40 z-[-1]'/>

			<div className='container mx-auto text-center mb-16 '>
				<div data-aos='fade-up'>
					<h1 className='text-5xl inline-block'>Landing template for <h3 className='inline'>startups</h3></h1>
					<p className='mx-8 md:mx-16 lg:mx-48 px-4 text-xl font-medium my-3 py-4'>Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
				</div>
				<div data-aos='fade-up' className='flex flex-col items-center sm:block mt-8'>
					<button  
					className='my-2 sm:my-0 bg-indigo-500 hover:bg-indigo-500/80 text-white font-bold rounded-sm py-3 mx-2 px-20 sm:px-8 transition-all'>
						Get started
					</button>
					<button 
					className='my-2 sm:my-0 bg-zinc-800 hover:bg-zinc-700 text-white font-bold rounded-sm py-3 mx-2 px-16 sm:px-8 transition-all'>
						<a href="https://davgrig1.github.io/landing-template-for-startups/" target='_blank' rel='noreferrer'>View on Github</a> 
					</button>
				</div>
			</div>

			<div data-aos='fade-up' className='mt-16 relative'>
				{toggleVideoPlayer ? 
					<VideoPlayer />
					: 
					<img src={videoImg} alt="/" className='cursor-pointer' onClick={() => setToggleVideoPlayer(!toggleVideoPlayer)}/>
				}
				{toggleVideoPlayer ? 
					<XIcon onClick={() => setToggleVideoPlayer(!toggleVideoPlayer)} className='absolute cursor-pointer bottom-[-50px] left-[47%] h-8 sm:h-12 z-[1] hover:bg-indigo-500 rounded-[50%] transition-all'/>
					:
					''
				}
			</div>
		</div>	
  )
}

export default Main