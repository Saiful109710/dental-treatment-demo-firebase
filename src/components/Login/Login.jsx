import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

const Login = () => {

    const [error,setError] = useState(null)

    const {handleLogin,handleGoogleLogin} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    

    const handleSubmit=(e)=>{
            e.preventDefault()
            setError(null)

            
            const email = e.target.email.value;
           
            const password = e.target.password.value;

            handleLogin(email,password)
            .then(res=>{
                navigate(location.state.form)
            })
            .catch(err=>{
                    setError(err.message)
            })

           
            }

            const googleLogInHandler=()=>{
                handleGoogleLogin()
                .then(res=>{
                    navigate(location.state.form)
                })

         
            
            
    }
  return (
    <div>
             <form onSubmit={handleSubmit} action="">
          
          
          <div>
              <label htmlFor="">Email</label>
              <input
              type="email"
              name='email'
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
          />
          </div>
           <div>
              <label htmlFor="">Password</label>
              <input
              type="password"
              name='password'
              placeholder="Type here"
              className="input input-bordered input-primary w-full max-w-xs"
          />
          </div>
          
          <button className="btn btn-primary" type="submit">Login</button>
         </form>
         {
            error && <p className='text-red-500'>{error.split('/')[1].slice(0,18)}</p>
         }

         <p>New user? <NavLink to='/register' className='text-red-500'>Create Account</NavLink></p>

         <button className='btn btn-success' onClick={googleLogInHandler}>Google Login</button>
    </div>
  )
}

export default Login
