import React from 'react'
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from '../constants'
import { copyrightSign } from '../assets/icons'

const Footer = () => {

  let date = new Date().getFullYear()

  return (
    <section className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} alt="footer" 
              width={150} height={60}
            />
          </a>
          <p className='mt-6 font-montserrat text-slate-gray leading-7 sm:max-w-sm'>
          Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>

          <div className='flex items-center gap-5 mt-8 '>
            {socialMedia.map((icon) => (
              <div key={icon} className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-wrap flex-1 justify-between lg:gap-10 gap-20  '>  
            {footerLinks.map((section) => (
              <div key={section}>
                <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                  <li className='text-white-400 mt-3 font-montserrat text-base hover:text-slate-gray'>
                    <a href="">{link.name}</a>
                  </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

      </div>

      <div className='flex justify-between text-gray-200 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
            <img src={copyrightSign} alt="copyright" width={18} height={18}/>
            <p> {date} All rights reserved</p>
        </div>
        <p className='font-montserrat cursor-pointer'> Terms and conditions</p>
      </div>
    </section>
  )
}

export default Footer