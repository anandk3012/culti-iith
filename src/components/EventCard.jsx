import React from 'react'

export default function EventCard({ id, event }) {
    console.log(event);
    return (
        <div className=' p-6 bg-[#52524D] text-white shadow-md shadow-black rounded-[3rem]'>
            <div className='ml-5'>
                <p className="font-medium text-2xl text-start">{event.title}</p>
                <p className='text-[#C4C4C4] text-md' >{event.club}</p>
            </div>
        </div>
    )
}
