import React from 'react'

const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor, fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 leading-none rounded-full px-7 py-4 border font-montserrat ${fullWidth && "w-full"}  ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` : `bg-coral-red text-white` }`}>
        {label}

        {/* img */}
        { iconUrl && <img src={iconUrl} alt="" 
            className='ml-2 rounded-full w-5 h-5'
        />}
    </button>
  )
}

export default Button