import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)

    if(loading){
        return <h1>LOADING....</h1>
    }
    if(!user){
        return <Navigate state={{form:location.pathname}} to='/login'></Navigate>
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default PrivateRoute
