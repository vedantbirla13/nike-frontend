import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id='services' className='max-container flex justify-center flex-wrap gap-10 max-sm:flex max-sm:flex-col'>
        {services.map((service) => (
          <ServiceCard key={service.label} {...service} imgurl={service.imgURL} label={service.label} subtext={service.subtext} />
        ))}
    </section>
  )
}

export default Services