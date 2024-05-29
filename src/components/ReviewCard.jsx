import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgUrl, customerName, feedback, rating }) => {
  return (
        <div className='flex flex-col justify-center items-center text-center border-2 border-gray-50 p-4 shadow-lg bg-white rounded-lg'>
          <img src={imgUrl} alt=""  className='rounded-full object-cover w-[100px] h-[100px]' />  
          <p className='mt-6 info-text break-words'>{feedback}</p>
          <div className='flex gap-2 text-slate-gray'>
            <img src={star} width={24} height={24} alt="star" /> 
            <p className='text-x1 font-montserrat text-slate-gray'>({rating})</p>
          </div>
          <h3 className='font-montserrat text-slate-700 text-3xl font-bold mt-4'>{customerName}</h3>
        </div>
  )
}

export default ReviewCard