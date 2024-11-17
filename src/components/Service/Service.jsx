import React from 'react'
import { NavLink } from 'react-router-dom'

const Service = ({service}) => {
   const {id,treatment,description,image,cost} = service
  return (
    <div className="card bg-base-100 shadow-xl">
    <figure>
      <img
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {treatment}
        <div className="badge badge-secondary">{cost}</div>
      </h2>
      <p>{description}</p>
      <div className="card-actions justify-end">
        
        <NavLink to={`/details/${id}`}><button className="badge badge-outline bg-primary text-white font-bold">Check Out More</button></NavLink>
      </div>
    </div>
  </div>
  )
}

export default Service
