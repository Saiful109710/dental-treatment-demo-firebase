import React, { useContext, useState } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import auth from '../../firebase/firebase.config';

const Register = () => {
    const {handleRegister,handleLogout,manageProfile} = useContext(AuthContext)
    const [error,setError] = useState(null)
    const handleSubmit = (e)=>{
       
        e.preventDefault()
        
           
            setError(null)
           
            const name = e.target.name.value;
            const email = e.target.email.value;
            const photo = e.target.photo.value;
            const password = e.target.password.value;
            const confirmPassword = e.target.ConfirmPassword.value;
            if(password.length<6){
                return setError("Password should be more than 6 character")
            }
            if(!/[a-z]/.test(password)){
                return setError('Password must have one lowercase')
            }
            if(!/[A-Z]/.test(password)){
                return setError('Password must have one UpperCase')
            }
            if(password !== confirmPassword){
                return setError("password didn't match")
            }

            handleRegister(email,password)
            .then(res=>{
                
                manageProfile(name,photo)
            })
          
            
    }
  return (
    <div>
          <form onSubmit={handleSubmit} action="">
          
            <div>
                <label htmlFor="">Name</label>
                <input
                type="text"
                name='name'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
            <div>
                <label htmlFor="">Photo</label>
                <input
                type="text"
                name='photo'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
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
            <div>
                <label htmlFor="">Confirm Password</label>
                <input
                type="password"
                name='ConfirmPassword'
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
            />
            </div>
            <button className="btn btn-primary" type="submit">Register</button>
           </form>
           {
            error && <p>{error}</p>
           }
    </div>
  )
}

export default Register
