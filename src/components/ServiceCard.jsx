import React from 'react'

const ServiceCard = ({ imgurl, label, subtext }) => {
  return (
    <div className='flex flex-col gap-3 flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-sm shadow-3xl px-10 py-16'>
        <div className='w-11 h-11 justify-center items-center bg-coral-red rounded-full flex'>
            <img src={imgurl} alt={label} width={24} height={24} />
        </div>
        <h3 className='font-palanquin font-bold text-2xl leading-normal'>{label}</h3>
        <p className='text-slate-gray font-montserrat break-words leading-normal'>{subtext}</p>
    </div>
  )
}

export default ServiceCard