import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Service from '../Service/Service';

const AllTreatments = () => {
    const services = useLoaderData();
  return (
    <div className='grid grid-cols-4 gap-3 w-[80%] mx-auto mt-10 max-w-[1000px]'>
        {
            services.map((service)=><Service key={service.id} service={service}></Service>)
          }
          
       </div>
  )
}

export default AllTreatments
