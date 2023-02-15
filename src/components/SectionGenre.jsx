import React from 'react'

dates = [
    'Today', 'This week', 'Last 30 days'
]

const SectionGenre = ({background}) => {
  return (
    <section className={`${background} py-10`}>
        <div className='w-[80%] mx-auto flex flex-col'>
            <div className='flex space-x-2 text-xs items-center'>
                <p className='text-primary font-semibold'>Today</p>
                <span className='text-gray-400'>/</span>
                <p className='text-gray-400'>This week</p>
                <span className='text-gray-400'>/</span>
                <p className='text-gray-400'>Last 30 days</p>
            </div>
        </div>
    </section>
  )
}

export default SectionGenre