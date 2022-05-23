import React from 'react'
import features1Img from '../assets/features-01.png';
import features2Img from '../assets/features-02.png';
import features3Img from '../assets/features-03.png';

const Features = () => {

	const Insights = () => {
		return (
				<div  className='sm:col-span-2 xl:col-start-1 xl:col-end-2 mx-4 mb-2'>
					<h3 className='text-sm font-semibold'>LIGHTNING FAST WORKFLOW</h3>
					<h1 className='text-3xl md:text-4xl'>Data-driven insights</h1>
					<p className='text-xl'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
						incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis 
						nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</p>
				</div>
			
		)
	}
	return (
		<div className='container mx-auto'>
			<div data-aos='zoom-in' className='text-center'>
				<h1 className='text-5xl'>Workflow that just works</h1>
				<p className='mx-8 md:mx-16 lg:mx-48 text-xl mt-2'>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa 
					qui officia deserunt mollit anim id est laborum — semper quis 
					lectus nulla at volutpat diam ut venenatis.</p>
			</div>

			<div data-aos='zoom-in' className='grid gap-8 my-8'>
				<div className='grid sm:grid-cols-3 xl:grid-cols-2 items-center h-96 gap-4 mb-36'>
					<Insights/>
					<div className='w-[350px] sm:w-[400px] mx-auto'>
					<img src={features1Img} alt='/' />
					</div>
				</div>

				<div className='grid sm:grid-cols-3 xl:grid-cols-2 items-center h-96 gap-4 mb-36'>
					<Insights/>
					<div className='w-[350px] sm:w-[400px] mx-auto'>
					<img src={features2Img} alt='/' />
					</div>
				</div>

				<div className='grid sm:grid-cols-3 xl:grid-cols-2 items-center h-96 gap-4 mb-36'>
					<Insights/>
					<div className='w-[350px] sm:w-[400px] mx-auto'>
					<img src={features3Img} alt='/' />
					</div>
				</div>
			</div>

			<span className='block border-b-[0.1rem] my-14 sm:mt-[-8rem] border-zinc-800'></span>
		</div>
	)
}

export default Features