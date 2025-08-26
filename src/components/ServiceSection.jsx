import { services } from '../constants/index'
import React from 'react';

const ServiceSection = () => {
  return (
    <div className='relative mt-31 border-b border-neutral-200 min-h-[800px]'>
      <div className="text-center">


        {/* Heading */}
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
            Complete Visa
          <span className='bg-gradient-to-r from-[#4A8CFF] to-[#1546C8] text-transparent bg-clip-text'>
            {' '}Application Assistance
          </span>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 lg:mt-20 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-2 rounded-xl hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="flex h-14 w-14 p-3 rounded-lg bg-white justify-center items-center mb-5 shadow-md">
              {React.cloneElement(service.icon, {
                size: 28,
                className: "text-[#4A8CFF]"
              })}
            </div>

            {/* Text */}
            <h5 className="text-xl font-semibold mb-3">{service.text}</h5>
            <p className="text-md text-neutral-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceSection
