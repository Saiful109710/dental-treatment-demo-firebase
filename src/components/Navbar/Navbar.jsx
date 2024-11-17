import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='min-h-20 bg-blue-900 flex justify-between items-center px-5'>
        <div className='text-xl font-bold text-white'>
            TEETH WIZARD
        </div>
        <div className='space-x-3'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/alltreatments'>All Treatment</NavLink>
            <NavLink to='/myappointment'>My Appointment</NavLink>
            <NavLink to='profile'>Profile</NavLink>
        </div>
        <div>
            <button className='btn btn-success'>Login</button>
        </div>
    </div>
  )
}

export default Navbar
