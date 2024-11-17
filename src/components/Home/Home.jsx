import React from 'react'
import Banner from '../Banner/Banner'
import { NavLink, useLoaderData } from 'react-router-dom'
import Service from '../Service/Service'
import Feedback from '../Feedback/Feedback'


const Home = () => {
  const services = useLoaderData()

  const {servicesData,feedbackData}  = services 
 
  return (
    <div>
        <Banner></Banner>
       <div className='grid grid-cols-4 gap-3 w-[80%] mx-auto mt-10 max-w-[1000px]'>
        {
            servicesData.slice(0,4).map((service)=><Service key={service.id} service={service}></Service>)
          }
          
       </div>
          <NavLink to='/alltreatments'><button className='btn btn-primary mx-auto block mt-4'>Show More</button></NavLink>

          <div className='grid grid-cols-4 gap-3 w-[80%] mx-auto mt-10 max-w-[1000px]'>
              {
                feedbackData.map((singleFeedback)=><Feedback key={singleFeedback.id} singleFeedback={singleFeedback}></Feedback>)
              }
          </div>
    </div>
  )
}

export default Home
