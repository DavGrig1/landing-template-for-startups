import React from 'react'

const RobustWorkflow = (props) => {
	const Icon = props.icon

	return (
		<div>
			<Icon className='h-12 p-3 bg-indigo-500 rounded-[50%] mx-auto mb-2'/>
			<h2 className='font-semibold text-xl'>Robust Workflow</h2>
			<p className='mx-8 md:mx-16 lg:mx-20 xl:mx-0 px-4 text-xl font-medium my-3 py-4'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
		</div>
	)
}

export default RobustWorkflow