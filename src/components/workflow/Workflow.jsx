import React from 'react'
import {
	StarIcon,
	DocumentTextIcon,
	GlobeAltIcon,
	MenuAlt2Icon,
	MailOpenIcon,
	PaperClipIcon } from '@heroicons/react/outline'
import RobustWorkflow from './RobustWorkflow'


const Workflow = () => {

	return (
		<div className='container mx-auto text-center'>
			<div data-aos='zoom-in'>
				<h1 className='text-3xl md:text-5xl'>Build up the whole picture</h1>
				<p className='mx-8 md:mx-16 lg:mx-48 px-4 text-xl font-medium my-3 py-4'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.</p>
			</div>

			<div data-aos='zoom-in' className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
				<RobustWorkflow icon={StarIcon}/>
				<RobustWorkflow icon={DocumentTextIcon}/>
				<RobustWorkflow icon={GlobeAltIcon}/>
				<RobustWorkflow icon={MenuAlt2Icon}/>
				<RobustWorkflow icon={MailOpenIcon}/>
				<RobustWorkflow icon={PaperClipIcon}/>
			</div>

			<span className='block border-b-[0.1rem] my-14 border-zinc-800'></span>
		</div>
  )
}

export default Workflow